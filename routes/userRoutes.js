const express = require('express');
const { getProfile , updateProfile } = require('../controllers/userController');
const {verifyToken} = require("../middleware/authMiddleware");
const { updateProfileValidator } = require('../validators/userValidator');
const validateRequest = require('../middleware/validateRequest');

// const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', verifyToken,getProfile);
router.put('/profile', verifyToken,updateProfileValidator, validateRequest ,updateProfile);

module.exports = router;
