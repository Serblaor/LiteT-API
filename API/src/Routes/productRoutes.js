const Router = require("express") ;
const {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
} = require("../controllers/product.controller");


const router = Router();

router.get("/", getProducts);

router.get("/:productId", getProductById);

router.post("/", createProduct);

router.put("/:productId", updateProductById);

router.delete("/:productId", deleteProductById);

module.exports = router;
