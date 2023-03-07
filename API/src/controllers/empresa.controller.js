const Empresa = require ("../model/Empresa.js");

const createEmpresa = async (req, res) => {
  const { name, nit, direccion, phone } = req.body;

  try {
    const newEmpresa = new Empresa({
      name,
      nit,
      direccion,
      phone,
      
    });

    const EmpresaSaved = await newEmpresa.save();

    res.status(201).json(EmpresaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getEmpresaById = async (req, res) => {
  const { empresaId } = req.params;

  const product = await Empresa.findById(empresaId);
  res.status(200).json(product);
};

const getEmpresas = async (req, res) => {
  const empresas = await Empresa.find();
  return res.json(empresas);
};

const updateEmpresaById = async (req, res) => {
  const updatedEmpresa = await Empresa.findByIdAndUpdate(
    req.params.empresaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedEmpresa);
};

const deleteEmpresaById = async (req, res) => {
  const { empresaId } = req.params;

  await Empresa.findByIdAndDelete(empresaId);

  // code 200 is ok too
  res.status(204).json();
};
module.exports = {
    getEmpresas,
  createEmpresa,
  updateEmpresaById,
  deleteEmpresaById,
  getEmpresaById,
  };