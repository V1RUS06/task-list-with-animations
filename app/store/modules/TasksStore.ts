import {makeAutoObservable} from 'mobx';
import uuid from 'react-native-uuid';

export interface ITask {
  id: string | number[];
  text: string;
}

export class TasksStore {
  tasks: ITask[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTask(value: string) {
    const newTask: ITask = {
      id: uuid.v4(),
      text: value,
    };
    this.tasks = [...this.tasks, newTask];
  }

  removeTask(id: number[] | string) {
    this.tasks.filter(elem => elem.id !== id);
  }
}
