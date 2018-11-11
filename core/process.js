

function getValue(flag) {
    const index = process.argv.indexOf(flag)
    if(index !== -1) {
        return process.argv[index + 1]
    }
    return null
}

console.log(getValue('-m'), getValue('-n'))
