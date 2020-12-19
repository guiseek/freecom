import { exec } from 'child_process'

export const proxec = (command: string, params: string[] = []) => {
  return new Promise((resolve, reject) => {
    exec(command + ' ' + params.join(' '), (error, stdout) => {
      if (error) {
        reject(error)
      }
      resolve(stdout)
    })
  })
}
