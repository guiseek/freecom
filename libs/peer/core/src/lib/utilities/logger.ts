export class Logger {
  info(...msg: any) {
    console.log(`%c Info ${new Date()}`, 'color: #448AFF')
    console.log(msg)
    console.log('---------------------------------------')
  }
  log(...msg: any) {
    console.log(`%c Log ${new Date()}`, 'color: #448AFF')
    console.log(msg)
    console.log('---------------------------------------')
  }
  error(...msg: any) {
    console.log(`%c Error ${new Date()}`, 'color: #F2FA8C')
    console.log(msg)
    console.log('---------------------------------------')
  }
  warn(...msg: any) {
    console.log(`%c Warn ${new Date()}`, 'color: #E66B6E')
    console.log(msg)
    console.log('---------------------------------------')
  }
}
