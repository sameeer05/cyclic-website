const User = require('../models/User');
const bcrypt = require('bcrypt');

const updateUser = async (req, res) => {
    if (req.body.password) {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        const accessToken = req.headers.token.split(' ')[1]
        const {password, ...others} = updatedUser._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
};



const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
};

const findUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUsers = async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    updateUser,
    deleteUser,
    findUser,
    getAllUsers,
    getUserStats,
};
