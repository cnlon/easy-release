const exec = require('child_process').exec

function release (pkg) {
    const version = 'v' + pkg.version
    const sh = [
        'echo [1/3]: commit',
        'git add package.json',
        `git commit -m "Bump to ${version}"`,
        'git push',
        'echo [2/3]: tag',
        `git tag ${version}`,
        `git push origin ${version}`,
        'echo [3/3]: publish',
        'npm publish',
    ].join(' && ')
    exec(sh, err => {
        if (err) {
            console.error(err.message)
            process.exit(1)
        }
        console.log('success!')
        process.exit(0)
    }).stdout.pipe(process.stdout)
}

module.exports = release
