import { Task } from '../models/Task.js';
import { sendMessage } from '../utils/send-message.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    sendMessage(res, 500, error.message);
  }
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      where: { id },
      attributes: ['name', 'done', 'projectId'],
    });

    if (!task) {
      return sendMessage(res, 400, 'Project does not exists');
    }

    res.json(task);
  } catch (error) {
    sendMessage(res, 500, error.message);
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    sendMessage(res, 500, error.message);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  try {
    const task = await Task.findByPk(id);
    task.set(req.body);
    // task.name = name;
    // task.done = done;
    // task.projectId = projectId;
    await task.save();

    res.json(task);
  } catch (error) {
    sendMessage(res, 500, error.message);
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    sendMessage(res, 500, error.message);
  }
};
