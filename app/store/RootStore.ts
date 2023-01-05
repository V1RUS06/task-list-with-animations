import {TasksStore} from '@store/modules/TasksStore';

export class RootStore {
  tasksStore: TasksStore;
  constructor() {
    this.tasksStore = new TasksStore();
  }
}
