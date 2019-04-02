
const friendsData = require("../data/friendsData");


module.exports = (app) => {

  app.get("/api/friends", (req, res) => {
    res.json(friendsData);
  });


  app.post("/api/friends", (req, res) => {
        friendsData.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    freindsData.length = 0;
    surveyData.length = 0;

    res.json({ ok: true });
  });
}