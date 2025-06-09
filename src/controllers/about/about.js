const db = require('../../models/index.js');
const abouts = db.about;

const getAbout = async (req, res) => {
  try {
    const aboutData = await abouts.findAll();

    const result = aboutData.map((item) => {
      const team = (typeof item.team === 'string' ? JSON.parse(item.team) : item.team).map((member) => {
        return {
          ...member,
          photo: `${req.protocol}://${req.get('host')}/team/${member.photo}`,
        };
      });

      return {
        id: item.id,
        description: item.description,
        visi: item.visi,
        misi: item.misi,
        team: team,
      };
    });

    res.status(200).json({
      status: 'ok',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAbout,
};
