const { promisify } = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')
const open = require('open')

const spawn = async (...args) => {
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  clear()
  const data = await figlet('KKB WelCome')
  log(data)

  log(`创建项目: ${name}`)
  await clone('github:su37josephxia/vue-sample', name)

  log('安装依赖')
  await spawn('npm', ['install'], {
    cwd: `./${name}`
  })
  log(`
  ------------------------
  cd ${name}
  npm run serve
  ------------------------
  `)

  await spawn('npm', ['run', 'serve'], {
    cwd: `./${name}`
  })
  open(`http://localhost:8080`)
}
