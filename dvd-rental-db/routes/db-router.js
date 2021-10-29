const express = require("express");
const languageController = require("../controller/language")
const actorController = require("../controller/actor")
const filmController = require("../controller/film")


const router = express.Router();

//------------//------------ CRUD ------------//------------//
//------------ language ------------//
// get
router.get('/languages', languageController.get_language_list)
router.get('/language/id/:id', languageController.get_language_by_id)
router.get('/language/name/:name', languageController.get_language_by_name)
// put / update
router.put('/language/:id', languageController.update_language)
// post / create
router.post('/language', languageController.create_language)
// delete
router.delete('/language/:id', languageController.delete_language)


//------------ actor ------------//
router.get('/read_actor', actorController.get_actor_list)

//------------ film ------------//
router.get('/read_film', filmController.get_film_list)

module.exports = router