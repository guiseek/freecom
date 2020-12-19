import { Listr, ListrOptions, ListrTask } from 'listr2'
import { proxec } from './proxec'

export const createTask = (
  title: string,
  command: string,
  params?: string[]
) => {
  return {
    title,
    task: async () => await proxec(command, params),
  }
}

export const createTasks = (
  title: string,
  tasks: ListrTask[],
  options: ListrOptions = { concurrent: false }
) => {
  return {
    title,
    task: () => {
      return new Listr(tasks, options)
    },
  }
}
