const Film = require('../models/film')

exports.get_film_list = async (req, res) =>{
    // get all language list 
    // return promise array of task list (use async~await function to get the data)
    try {
        const film = await Film.findAll();
        res.send(film);
    } catch (error) {
        console.log(error.message);
    }
}