const displayName = (req, res) => {
    const data = 'Ana Cardenas';
    res.status(200).send(data);
};

const displayHello = (req, res) => {
    const hello = 'Hello';
    res.status(200).send(hello);
}


module.exports = {
    displayName,
    displayHello,
}