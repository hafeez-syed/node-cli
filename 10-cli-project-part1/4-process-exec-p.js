const { exec } = require('child_process')
const { stdout, stderr } = require('process')

const directories = process.argv[2]
const cb = (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`)
        return
    }

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
}

exec(`mkdir -p ${directories}`, cb)
