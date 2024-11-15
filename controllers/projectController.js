// controllers/projectController.js
const Project = require('../models/Project');

// Fetch all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve projects' });
  }
};

// Fetch a single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve project' });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  const { title, slogan, description, location, thumbnail, images, building_area, land_area, units, latitude, longitude, label } = req.body;

  if (!title || !slogan || !description || !location || !thumbnail || !images || !building_area || !land_area || !units || !latitude || !longitude || !label) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create project' });
  }
};

// Update an existing project
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update project' });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (project) {
      res.status(200).json({ message: 'Project deleted successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete project' });
  }
};
