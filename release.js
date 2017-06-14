const exec = require('child_process').exec

function release (pkg) {
    const version = 'v' + pkg.version
    const sh = [
        'git checkout master',
        'npm publish',
        'echo [1/3]: npm publish',
        'git add -A',
        `git commit -m "Bump to ${version}"`,
        'git push',
        'echo [2/3]: git commit',
        `git tag ${version}`,
        `git push origin ${version}`,
        'echo [3/3]: git tag'
    ].join(' && ')
    exec(sh, err => {
        if (err) {
            console.error(err.message)
            process.exit(1)
        }
        console.log('success!\n')
        process.exit(0)
    })
}

module.exports = release
