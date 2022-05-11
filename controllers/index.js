const mongodb = require('../db/connect');

const displayName = (req, res) => {
    const data = 'Ana Cardenas';
    res.status(200).send(data);
};

const displayHello = (req, res) => {
    const hello = 'Hello';
    res.status(200).send(hello);
}

const getUser = async (req, res, next) => {
    const result = await mongodb.getDb().db('test').collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {    
    displayName,
    displayHello,
    getUser,
}