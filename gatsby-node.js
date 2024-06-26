const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')

const apexDomain = 'm3m3f1.xyz'
const buildPath = path.join(__dirname, 'docs')

exports.onPreInit = () => {
    if (process.argv[2] === 'build') {
        if (fs.existsSync(buildPath)) {
            fs.rmSync(buildPath, { recursive: true })
        }
    }
}

exports.onPostBuild = () => {
    fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'))
    exec(`echo '${apexDomain}' > ${buildPath}/CNAME`)
}
