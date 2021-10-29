const Actor = require('../models/actor')

exports.get_actor_list = async (req, res) =>{
    // get all actor list 
    // return promise array of task list (use async~await function to get the data)
    try {
        const actor = await Actor.findAll();
        res.send(actor);
    } catch (error) {
        console.log(error.message);
    }
}
