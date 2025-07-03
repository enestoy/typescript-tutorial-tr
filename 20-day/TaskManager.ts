import { Task, TaskStatus } from "./Task";

export class TaskManager {
    private tasks: Task[] = [];

    // Yeni görev ekleme
    addTask(task: Task): void {
        this.tasks.push(task);
    }

    // ID ile görev bulma
    getTaskById(id: string): Task | undefined {
        return this.tasks.find(t => t.id === id);
    }

    // Duruma göre filtreleme
    getTasksByStatus(status: TaskStatus): Task[] {
        return this.tasks.filter(t => t.status === status);
    }

    // Görev durumunu güncelleme
    updateTaskStatus(id: string, status: TaskStatus): boolean {
        const task = this.getTaskById(id);
        if (!task) return false;
        task.status = status;
        return true;
    }

    // Tüm görevleri döndür
    getAllTasks(): Task[] {
        return [...this.tasks];
    }
}
