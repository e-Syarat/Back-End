const db = require('../../models/index.js');
const dictionarynumber = db.dictionarynumber;

const getDictionaryNumber = async (req, res) => {
    try {
     const DictionaryNumber = await dictionarynumber.findAll();
     const result = {
       status: 'ok',
       data: DictionaryNumber.map((item) => ({
           id: item.id,
           image: `${req.protocol}://${req.get('host')}/number/${item.image}`,
           number: item.number,
       })),
     };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getDictionaryNumberById = async (req, res) => {
    try {
        const { id } = req.params;
        const DictionaryNumber = await dictionarynumber.findByPk(id);
        if (!DictionaryNumber) {
            return res.status(404).json({ error: 'Dictionary not found' });
        }
        const result = {
            id: DictionaryNumber.id,
            number: DictionaryNumber.number,
            image: `${req.protocol}://${req.get('host')}/number/${DictionaryNumber.image}`,
        };
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getDictionaryNumber,
    getDictionaryNumberById,
};
