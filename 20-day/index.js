"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./TaskManager");
const Task_1 = require("./Task");
const uuid_1 = require("uuid"); // npm install uuid @types/uuid
const taskManager = new TaskManager_1.TaskManager();
// Yeni görev oluştur
const yeniGorev = {
    id: (0, uuid_1.v4)(),
    title: "TypeScript Projesi Yap",
    description: "Örnek Task Manager uygulamasını geliştir.",
    status: Task_1.TaskStatus.New,
    priority: Task_1.Priority.High,
    createdAt: new Date(),
};
taskManager.addTask(yeniGorev);
console.log("Tüm Görevler:", taskManager.getAllTasks());
// Görev durumunu güncelle
taskManager.updateTaskStatus(yeniGorev.id, Task_1.TaskStatus.InProgress);
console.log("Devam Eden Görevler:", taskManager.getTasksByStatus(Task_1.TaskStatus.InProgress));
