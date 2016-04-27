module.exports = function(server) {
  var router = server.loopback.Router();
  router.get('/externe/api/SIGExterns/health', function(req, res) {
    res.status(200).send({status:'OK'});
  });
  server.use(router);
};
