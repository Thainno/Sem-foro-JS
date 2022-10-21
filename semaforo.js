const img = document.querySelector("#img")
const buttons = document.querySelector("#buttons")

const trafficLight = (event) => {
    turnOn[event.target.id]()
}

const turnOn = {
    'red':      () => img.src = "./imagens/vermelho.png",
    'yellow':   () => img.src = "./imagens/amarelo.png",
    'green':    () => img.src = "./imagens/verde.png"
}

buttons.addEventListener("click", trafficLight)
