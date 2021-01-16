module.exports = app => {
  const ordinateur = require("../controllers/ordinateurController");

  var router = require("express").Router();

  //--- ORDINATEUR

  // Create a new Ordinateur
  router.post("/add", ordinateur.create);

  // Retrieve all Ordinateurs
  router.get("/", ordinateur.findAll);

  router.post("/show", ordinateur.withAttribution);

  // Retrieve a single Ordinateur with id
  router.get("/:id", ordinateur.findOne);




  // Delete an Ordinateur with id
  router.delete("/:id", ordinateur.delete);







  app.use('/api/ordinateurs', router);
};