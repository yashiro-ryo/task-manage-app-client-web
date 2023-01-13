export type TaskGroup = {
  taskGroupId: number;
  taskGroupText: string;
  tasks: Array<any>;
};

// NOTE: 重複を避けるためにTaskTypeとしている
export type TaskType = {
  taskId: number;
  taskText: string;
  taskCreatedAt: string;
  priority: string;
};
