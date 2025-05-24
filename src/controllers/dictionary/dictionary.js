const db = require('../../models/index.js');
const dictionary = db.dictionary;

const getDictionary = async (req, res) => {
    try {
     const Dictionary = await dictionary.findAll();
     const result = {
       status: 'ok',
       data: Dictionary.map((item) => ({
           id: item.id,
           image: item.image,
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
        const Dictionary = await dictionary.findByPk(id);
        if (!Dictionary) {
            return res.status(404).json({ error: 'Dictionary not found' });
        }
        return res.status(200).json(Dictionary);
    } catch (error) {

        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getDictionary,
    getDictionaryById,
};
