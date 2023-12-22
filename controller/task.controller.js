const express = require("express");
const taskModel = require("../models/tasks.model.js");
const asyncHandler = require("express-async-handler");

// GET || GET ALL TASKS
// @route api/v1/tasks
const getAllTasks = asyncHandler(async (req, res) => {
  const findAllTask = await taskModel.find();
  res.status(200).json(findAllTask);
});

// POST || CREATE NEW TASK
// @route api/v1/tasks
const createTask = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    throw new Error("Title is Mandatory!");
    res.status(400);
  }
  const postTask = await taskModel.create({
    title,
  });
  res.status(201).json(postTask);
});

// GET || GET A TASK
// @route api/v1/tasks/:id
const getSingleTask = asyncHandler(async (req, res) => {
  const findTask = await taskModel.findById(req.params.id);
  if (!findTask) {
    throw new Error("Task NOT FOUND!!");
  }
  return res.status(200).json(findTask);
});

// PUT || UPDATE AN EXISTING TASK
// @route api/v1/tasks/:id
const updateTask = asyncHandler(async (req, res) => {
  const { title, completed } = req.body;
  const findTask = await taskModel.findById(req.params.id);
  if (!findTask) {
    res.status(404).json({ Message: `Task Not Found` });
    throw new Error("Task NOT FOUND!!");
  }
  const updateATask = await taskModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body
  );

  res.status(200).json(updateATask);
});

// DELETE || REMOVE A TASK FROM DB
// @route api/v1/tasks/:id
const deleteTask = asyncHandler(async (req, res) => {
  const findTask = await taskModel.findById(req.params.id);
  if (!findTask) {
    throw new Error("Task NOT FOUND!!");
  }
  await taskModel.findOneAndDelete({ _id: req.params.id });

  res.status(200).json(findTask);
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
