const db = require('../../models/index.js');
const abouts = db.abouts;

const getAbout = async (req, res) => {
    try {
      const about = await abouts.findAll();
      const result = {
        status: 'ok',
        data: about,
      };
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  module.exports = {
    getAbout
  };