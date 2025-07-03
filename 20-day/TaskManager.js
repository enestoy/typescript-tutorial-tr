"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    // Yeni görev ekleme
    addTask(task) {
        this.tasks.push(task);
    }
    // ID ile görev bulma
    getTaskById(id) {
        return this.tasks.find(t => t.id === id);
    }
    // Duruma göre filtreleme
    getTasksByStatus(status) {
        return this.tasks.filter(t => t.status === status);
    }
    // Görev durumunu güncelleme
    updateTaskStatus(id, status) {
        const task = this.getTaskById(id);
        if (!task)
            return false;
        task.status = status;
        return true;
    }
    // Tüm görevleri döndür
    getAllTasks() {
        return [...this.tasks];
    }
}
exports.TaskManager = TaskManager;
