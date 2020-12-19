import { Listr } from 'listr2'
import { prompt } from 'enquirer'
import { types } from '../../.cz-config'
import { createTask } from '../utils/create-task'

interface InitPromp {
  type: string
  name: string
  confirm?: boolean
}

prompt<InitPromp>([
  {
    type: 'select',
    name: 'type',
    message: 'Onde sua task melhor se encaixa?',
    initial: 0,
    choices: types.map(({ value, name }) => ({ name: value, message: name })),
  },
  {
    type: 'input',
    name: 'name',
    message: 'Qual o nome da tarefa?',
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'Podemos começar?',
  },
])
  .then(async ({ type, name, confirm }) => {
    if (confirm) {
      const clean = (str: string) => str.replace(/[^A-Z0-9]+/gi, '-')
      const branch = (arr: string[]) =>
        arr.map((it) => it.toLocaleLowerCase()).join('/')
      const params = ['checkout', '-b', branch([type, clean(name)])]
      const tasks = new Listr([createTask('Build', 'git', params)])
      await tasks.run().catch(({ message }) => console.error(message))
    }
  })
  .catch((err) => {
    console.log('Finalizado ', err)
  })
