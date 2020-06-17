const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");
const routes = express.Router();

//DEV
routes.post("/dev", DevController.store);
routes.get("/devs", DevController.index);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);

routes.get("/", (req, res) => {
  return res.json({
    message: "hello",
  });
});

module.exports = routes;
