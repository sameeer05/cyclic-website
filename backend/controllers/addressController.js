const User = require('../models/User');

const addAddress = async (req, res) => {
    const userId = req.params.id;
    const { address, pinCode, city } = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add the new address to the user's addresses array
        user.addresses.push({ address, pinCode, city });

        // Save the updated user document
        const updatedUser = await user.save();
        
        const accessToken = req.headers.token.split(" ")[1];
        // Return the updated user document without sensitive information
        const { password, ...others } = updatedUser._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
};

const editAddress = async (req, res) => {
    const userId = req.params.id;
    const addressIndex = req.body.addressIndex;
    const { address, pinCode, city } = req.body.updatedAddress;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the addressIndex is valid
        if (addressIndex < 0 || addressIndex >= user.addresses.length) {
            return res.status(400).json({ message: `Invalid address index : ${addressIndex}` });
        }

        // Update the address at the specified index
        user.addresses[addressIndex] = { address, pinCode, city };

        // Save the updated user document
        const updatedUser = await user.save();

        const accessToken = req.headers.token.split(" ")[1];
        // Return the updated user document without sensitive information
        const { password, ...others } = updatedUser._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteAddress = async (req, res) => {
    const userId = req.params.id;
    const addressIndex = req.body.addressIndex;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the addressIndex is valid
        if (addressIndex < 0 || addressIndex >= user.addresses.length) {
            return res.status(400).json({ message: "Invalid address index" });
        }

        // Remove the address at the specified index
        user.addresses.splice(addressIndex, 1);

        // Save the updated user document
        const updatedUser = await user.save();

        const accessToken = req.headers.token.split(" ")[1];
        // Return the updated user document without sensitive information
        const { password, ...others } = updatedUser._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    addAddress,
    editAddress,
    deleteAddress,
}