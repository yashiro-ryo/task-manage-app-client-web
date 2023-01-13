export type TaskGroup = {
  taskGroupId: number;
  taskGroupText: string;
  tasks: Array<any>;
};

export type Task = {
  taskId: number;
  taskText: string;
  taskCreatedAt: string;
  priority: string;
};
