import { readFileSync } from 'fs'

export const getVersion = (path: string) => {
  let pack = readFileSync(path, { encoding: 'utf-8' })
  const { version } = JSON.parse(pack)
  return version.split('.').map((part: string) => {
    try {
      return parseInt(part, 10)
    } catch {
      return 0
    }
  })
}
