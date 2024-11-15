// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Get all projects
router.get('/', projectController.getAllProjects);

// Get a project by ID
router.get('/:id', projectController.getProjectById);

// Create a new project
router.post('/', projectController.createProject);

// Update a project by ID
router.put('/:id', projectController.updateProject);

// Delete a project by ID
router.delete('/:id', projectController.deleteProject);

module.exports = router;
