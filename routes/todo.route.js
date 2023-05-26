const express = require("express");
const router = express.Router();

//GET TODOS
router.get("/", (req, res) => {
  const query = "SELECT * FROM TODO";
  req.conn.query(query, (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    res.status(200).json(result.rows);
  });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const query = "SELECT * FROM todo WHERE id = $1";
  req.conn.query(query, [id], (error, result) => {
    if (error) {
      res.status(500).json({ message: `Error getting data of id = ${id}` });
    }
    res.status(200).json(result.rows);
  });
});

//POST TODOS
router.post("/", (req, res) => {
  const query = "INSERT INTO todo (title, isComplete) values ($1,false)";
  req.conn.query(query, [req.body.title], (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    res.status(200).json({ message: "Inserted Successfully" });
  });
});

//UPDATE
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const query = "UPDATE todo SET title = $1, iscomplete = $2 where id = $3";
  req.conn.query(
    query,
    [req.body.title, req.body.iscomplete || false, id],
    (error, result) => {
      if (error) {
        res
          .status(500)
          .json({ message: `Error updating data at id = ${id}`, error: error });
      }
      res.status(200).json({ message: "Updated successfulyy" });
    }
  );
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const query = "DELETE FROM todo WHERE id = $1";
  req.conn.query(query, [id], (error, result) => {
    if (error) {
      res
        .status(500)
        .json({ message: `Error deleting data at id = ${id}`, error: error });
    }
    res.status(200).json({ message: "Deleted successfully" });
  });
});
module.exports = router;
