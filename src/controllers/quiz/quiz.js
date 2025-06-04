const db = require('../../models/index.js')
const quizzes = db.quizzes;

const getQuiz = async (req, res) => {
    try{
        const quizresult = await quizzes.findAll();
        const result = {
            status: 'ok',
            data: quizresult.map((item) => ({
                id: item.id,
                image:  `${req.protocol}://${req.get('host')}/alfabet/${item.image}`,
                question: item.question,
                opsi1: item.opsi1,
                opsi2: item.opsi2,
                opsi3: item.opsi3,
                opsi4: item.opsi4,
            })),
          };
        res.status(200).json(result);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}



module.exports = {
    getQuiz
}