function submitChange () {
    let newName = prompt("Please enter your name", "John")
    if (newName != null) {
        document.getElementById("name-place").innerHTML = newName
    }
}