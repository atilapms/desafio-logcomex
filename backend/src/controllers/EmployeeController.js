const knex = require('knex');
const knexConfig = require('../../db/knexfile');
const db = knex(knexConfig.development);

const EmployeeController = {
  async getAll(req, res) {
    try {
      const employees = await db.select().from('employees');
      return res.json(employees);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getById(req, res) {
    const id = req.params.id;
    try {
      const employee = await db.select().from('employees').where({ id }).first();
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      return res.json(employee);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async create(req, res) {
    const { name, description, position } = req.body;
  
    if (!name || !description || !position) {
      return res.status(400).json({ message: 'Todos os campos (name, description, position) são obrigatórios' });
    }
  
    try {
      const [id] = await db('employees').insert({ name, description, position }, ['id']);
      return res.status(201).json({ id, name, description, position });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async update(req, res) {
    const id = req.params.id;
    const { name, description, position } = req.body;
    try {
      const updated = await db('employees').where({ id }).update({ name, description, position });
      if (updated === 0) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      return res.json({ id, name, description, position });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    try {
      const deleted = await db('employees').where({ id }).del();
      if (deleted === 0) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      return res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = EmployeeController;
