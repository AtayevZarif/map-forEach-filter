let numbers = [34, 67, 49, 20, 23, 46, 90, 1000, 78, 54, 50]

let body = document.querySelector("body")

body.style.height = "100vh"
body.style.flexDirection = "column"
body.style.justifyContent = "space-between"

numbers.map(number => {
    let h1 = document.createElement("h1")
    body.appendChild(h1)
    h1.innerText = number

    h1.style.textAlign = "center"
    h1.style.color = "white"

    if (number > 50){
        h1.style.background = "green"
    }
    else {
        h1.style.background = "red"
    }
})