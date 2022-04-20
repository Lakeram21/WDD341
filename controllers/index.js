displayName = (req, res) => {
    const data = 'Ana Cardenas';
    res.status(200).send(data);
}

displayHello = (req, res) => {
    const data = 'Hello';
    res.status(200).send(data);
}


module.exports = {
    displayName,
    displayHello,
}