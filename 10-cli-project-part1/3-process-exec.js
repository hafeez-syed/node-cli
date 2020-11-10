const { exec } = require('child_process')

const directoryName = process.argv[2]
exec(`mkdir ${directoryName}`)
