const { spawn } = require('child_process')

const lsCommand = spawn('ls', ['../'])

lsCommand.stdout.on('data', output => {
    console.log(`DATA FROM CHILD PROCESS: \n${output}`)
})