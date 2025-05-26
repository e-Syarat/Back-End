const db = require('../../models/index.js');
const dictionary = db.dictionary;

const getDictionary = async (req, res) => {
    try {
     const Dictionary = await dictionary.findAll();
     const result = {
       status: 'ok',
       data: Dictionary.map((item) => ({
           id: item.id,
           image:  `${req.protocol}://${req.get('host')}/alfabet/${item.image}`,
           alfabet: item.alfabet,
       })),
     };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getDictionaryById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await dictionary.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Dictionary not found' });
    }

    const result = {
      id: item.id,
      alfabet: item.alfabet,
      image: `${req.protocol}://${req.get('host')}/alfabet/${item.image}`,
    };

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    getDictionary,
    getDictionaryById,
};
