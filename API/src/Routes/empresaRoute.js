const Router = require("express") ;
const {
  getEmpresas,
  createEmpresa,
  updateEmpresaById,
  deleteEmpresaById,
  getEmpresaById,
} = require("../controllers/empresa.controller");


const router = Router();

router.get("/", getEmpresas);

router.get("/:empresaId", getEmpresaById);

router.post("/", createEmpresa);

router.put("/:empresaId", updateEmpresaById);

router.delete("/empresaId", deleteEmpresaById);

module.exports = router;