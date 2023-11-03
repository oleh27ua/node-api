const Device = require('../models/deviceModel');

const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find({});
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDeviceById = async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findById(id);
    res.status(200).json(device);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDevice = async (req, res) => {
  try {
    const device = await Device.create(req.body)
    res.status(200).json(device);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findByIdAndUpdate(id, req.body);
    if (!device) {
      return res.status(404).json({ message: `cannot find any device with ID ${id}` });
    }
    const updatedDevice = await Device.findById(id);
    res.status(200).json(updatedDevice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findByIdAndDelete(id);
    if (!device) {
      return res.status(404).json({ message: `cannot find any device with ID ${id}` });
    }

    const response = {
      message: `Device with ID ${id} has been deleted`,
      data: device
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice,
};
