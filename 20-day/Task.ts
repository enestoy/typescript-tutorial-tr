// Görev durumları enum ile tanımlandı
export enum TaskStatus {
  New = "Yeni",
  InProgress = "Devam Ediyor",
  Completed = "Tamamlandı",
}

// Öncelik derecesi enum
export enum Priority {
  Low = "Düşük",
  Medium = "Orta",
  High = "Yüksek",
}

// Görev interface
export interface Task {
  id: string;              // Benzersiz id (string uuid)
  title: string;
  description?: string;    // isteğe bağlı açıklama
  status: TaskStatus;
  priority: Priority;
  createdAt: Date;
}
