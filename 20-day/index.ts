import { TaskManager } from "./TaskManager";
import { Task, TaskStatus, Priority } from "./Task";
import { v4 as uuidv4 } from "uuid"; // npm install uuid @types/uuid

const taskManager = new TaskManager();

// Yeni görev oluştur
const yeniGorev: Task = {
  id: uuidv4(),
  title: "TypeScript Projesi Yap",
  description: "Örnek Task Manager uygulamasını geliştir.",
  status: TaskStatus.New,
  priority: Priority.High,
  createdAt: new Date(),
};

taskManager.addTask(yeniGorev);

console.log("Tüm Görevler:", taskManager.getAllTasks());

// Görev durumunu güncelle
taskManager.updateTaskStatus(yeniGorev.id, TaskStatus.InProgress);

console.log("Devam Eden Görevler:", taskManager.getTasksByStatus(TaskStatus.InProgress));
