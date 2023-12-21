const express = require("express");

// @route api/v1/tasks
const getAllTasks = async (req, res) => {
  res.json({ message: `all tasks` });
};

// @route api/v1/tasks
const createTask = async (req, res) => {
  res.json({ message: `Task Created Successfully.` });
};

// @route api/v1/tasks/:id
const getSingleTask = async (req, res) => {
  res.json({ message: `Particular Task` });
};

// @route api/v1/tasks/:id
const updateTask = async (req, res) => {
  res.json({ message: `Task update Successfully for ${req.params.id} ` });
};

// @route api/v1/tasks/:id
const deleteTask = async (req, res) => {
  res.json({ message: `Task Delete Successfully.` });
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
