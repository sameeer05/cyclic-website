const express = require('express');
const router = express.Router();
const {
    updateUser,
    deleteUser,
    findUser,
    getAllUsers,
    getUserStats,
} = require('../controllers/userController');
const {
    addAddress,
    editAddress,
    deleteAddress
} = require('../controllers/addressController')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../controllers/verifyToken');

// User Routes
router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);
router.get('/find/:id', verifyTokenAndAuthorization, findUser);
router.get('/', verifyTokenAndAdmin, getAllUsers);
router.get('/stats', verifyTokenAndAdmin, getUserStats);

// Routes to Add, Edit and Delete User Address
router.post('/add-address/:id', verifyTokenAndAuthorization, addAddress);
router.delete('/delete-address/:id', verifyTokenAndAuthorization, deleteAddress);
router.put('/edit-address/:id', verifyTokenAndAuthorization, editAddress);

module.exports = router;
