const Router = require("koa-better-router");

const router = Router({ prefix: "/hosts" }).loadMethods();

const HostController = require('../controllers/HostsController');

router.get("/list", (ctx, next) => {
  return HostController.list(ctx);
});

router.get("/set", (ctx, next) => {
  return HostController.set(ctx);
});

router.get("/remove", (ctx, next) => {
  return HostController.remove(ctx);
});

module.exports = router;
