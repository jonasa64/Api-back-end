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


exports.findById = (req, res) => {
    const id = req.params.id;
    shirt.findById(id)
        .then(shirt => {
            if(!shirt){
                return res.status(500).json({msg: 'failed to find a t-shit with the give id'});
            }

            res.status(200).send(shirt);
        })
        .catch(err => console.log(err));
}

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

exports.update = (res, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const  color = req.body.color;
    const price = req.body.price;
    const description = req.body.description;
    const  imageUrl = req.body.imageUrl;

    const checkForEmpty = [name, color, price, description, imageUrl];

    if (checkForEmpty.filter(el => el === '').length > 0){
        return res.status(400).json({msg: 'Please fill out all the fields'})
    }

    shirt.findById(id).then(shirt => {
        shirt.Name = name;
        shirt.Color = color;
        shirt.Price = price;
        shirt.Description = description;
        shirt.ImageUrl = imageUrl;
        return shirt.save();
    }).then(result => res.status(200).json({msg: 't-shirt is updated'}))
        .catch(err => console.log(err));
}

exports.delete = (req, res) => {
    const id = req.params.id;
    shirt.findById(id)
        .then(shirt => {
            if(!shirt){
                return res.status(500).json({msg : 'failed to find a t-shit with the give id'});
            }
            return shirt.destroy();
        }).then(restult => res.status(200).json({msg: 't-shirt is deleted '}))
        .catch(err => console.log(err));
}


