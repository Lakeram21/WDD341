displayMeme = (req, res) => {
    const data = 'MEME';
    res.status(200).send(data);
}

displayHello = (req, res) => {
    const data = 'Hello';
    res.status(200).send(data);
}


module.exports = {
    displayMeme,
    displayHello,
}