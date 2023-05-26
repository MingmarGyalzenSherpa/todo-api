const express = require("express");
const router = express.Router();
// GET/ todo -> get all todos
//POST/ todo -> add new todo (FORM URL / JSON)
// PATCH -> to update todo
//DELETE -> remove particular todo on given id
//GET/todo/:id -> return only todo which id matches

router.get("/", (req, res) => {
  res.status(200).json([
    {
      firstName: "Mingmar",
      lastName: "Sherpa",
    },
  ]);
});

module.exports = router;
