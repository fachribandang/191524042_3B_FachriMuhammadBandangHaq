const Language = require('../models/language')

exports.get_language_list = async (req, res) =>{
    // get all language list 
    // return promise array of language list (use async~await function to get the data)
    try {
        const language = await Language.findAll();
        res.send(language);
    } catch (error) {
        console.log(error.message);
    }
}

exports.get_language_by_id = async (req, res) =>{
    // get language use id as an argument
    // return promise of language (use async~await function to get the data)
    try {
        const language = await Language.findAll({
            where: {
                language_id : req.params.id
            }
        });
        res.send (language);
    } catch (error) {
        console.log(error.message);
    }
}

exports.get_language_by_name = async (req, res) =>{
    // get language use langguage name as an argument
    // return promise of language (use async~await function to get the data)
    try {
        const language = await Language.findAll({
            where: {
                name : req.params.name
            }
        });
        res.send (language);
    } catch (error) {
        console.log(error.message);
    }
}

exports.update_language = async (req, res) =>{
    // update language, language is object of language (need to parsed)
    // change value of language element in the database to the new one
    try {
        let language = {
            language_id: req.body.language_id,
            name: req.body.name,
            last_update: req.body.last_update
        }
            
            Language.update(language, {
                where: {
                    language_id : req.params.id
                }
            })
            .then(data =>{
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while updating the Stopwatch."
                });
              });
    } catch (error) {
        console.log(error)
    }
}

exports.delete_language = async (req,res) => {
    try {
        await Language.destroy({
            where: {
                language_id: req.params.id
            }
        });
        res.json({
            "message" : "Language Deleted"
        });
    } catch (error) {
        console.log(error)
    }
}

exports.create_language = async (req, res) =>{
    // post language, need all off the element from language 
    // add new language to the database
    try{
        console.log (req.body);
        let language = {
            language_id: req.body.language_id,
            name: req.body.name,
            last_update: req.body.last_update
        };
        Language.create(language)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Stopwatch."
            });
          });
    } 
    catch (error) {
        console.log(error)
    }
}