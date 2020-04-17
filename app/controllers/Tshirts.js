const shirt = require('../models/Tshirt');

exports.findAll = (req, res) => {
    shirt.findAll()
        .then(shirts => {
            if(!shirts){
                return res.status(500).json({msg:'failed to find any t-shits'})
            }
            res.status(200).send(shirts);
        })
        .catch(err => console.log(err))
};


exports.create = (req, res) => {
    const name = req.body.name;
    const  color = req.body.color;
    const price = req.body.price;
    const description = req.body.description;
    const  imageUrl = req.body.imageUrl;

    const checkForEmpty = [name, color, price, description, imageUrl];

    if (checkForEmpty.filter(el => el === '').length > 0){
        return res.status(400).json({msg: 'Please fill out all the fields'})
    }

    shirt.create({
        Name: name,
        Color: color,
        Price: price,
        Description: description,
        ImageUrl: imageUrl
    }).then(shirt => res.status(201).json({msg: 't-shirt created successfully'}))
        .catch(err => console.log(err));

}


