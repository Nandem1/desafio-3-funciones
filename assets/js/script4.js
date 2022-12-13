document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        document.querySelector(".rosado").style.backgroundColor = "purple"
        document.querySelector(".azul").style.backgroundColor = "purple"
        document.querySelector(".rojo").style.backgroundColor = "purple"
        document.querySelector(".negro").style.backgroundColor = "purple"
    } else if (event.key === 's') {
        document.querySelector(".rosado").style.backgroundColor = "green"
        document.querySelector(".azul").style.backgroundColor = "green"
        document.querySelector(".rojo").style.backgroundColor = "green"
        document.querySelector(".negro").style.backgroundColor = "green"
    }
    else if (event.key === 'd') {
        document.querySelector(".rosado").style.backgroundColor = "brown"
        document.querySelector(".azul").style.backgroundColor = "brown"
        document.querySelector(".rojo").style.backgroundColor = "brown"
        document.querySelector(".negro").style.backgroundColor = "brown"
    }
})

document.querySelectorAll(".div").forEach(item => {
    item.addEventListener('click', event => {
        item.style.backgroundColor = "grey"
    })
})
