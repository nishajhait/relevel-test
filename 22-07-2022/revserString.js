function revseString(string) {
    let value = []
    for(i = string.length - 1; i>=0; i --) value.push(string[i])
    console.log(value)
}

revseString("Nisha")