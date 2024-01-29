const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/EmployeeController');

// Rota para listar todos os funcionários
router.get('/', EmployeeController.getAll);

// Rota para listar um funcionário por ID
router.get('/:id', EmployeeController.getById);

// Rota para criar um novo funcionário
router.post('/', EmployeeController.create);

// Rota para atualizar um funcionário por ID
router.put('/:id', EmployeeController.update);

// Rota para excluir um funcionário por ID
router.delete('/:id', EmployeeController.delete);

module.exports = router;
