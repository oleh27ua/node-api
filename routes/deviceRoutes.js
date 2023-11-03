const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const path = require("path");


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});
router.get('/devices', deviceController.getAllDevices);
router.get('/device/:id', deviceController.getDeviceById);
router.post('/device', deviceController.createDevice);
router.put('/device/:id', deviceController.updateDevice);
router.delete('/device/:id', deviceController.deleteDevice);

module.exports = router;
