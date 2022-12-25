const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
// const { createProduct, updateProduct, deleteProduct } = require("../controllers/user.controller")
// const { products, getProductById } = require("../controllers/customer.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

//   app.post("/api/v1/product", createProduct)
//   app.put("/api/v1/product/:id", updateProduct)
//   app.get("/api/v1/products", products);
//   app.get("/api/v1/products/:id", getProductById);
//   app.delete("/api/v1/products/:id", deleteProduct);
};