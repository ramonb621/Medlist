const router = require("express").Router();
const authRoutes = require('./auth');

const medRoutes = require("./medications");

// Auth routes
router.use('/auth', authRoutes);

// Employee routes
router.use("/medications", medRoutes);

module.exports = router;
