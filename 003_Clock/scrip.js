const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

const mode_light = document.querySelector(".mode_light")
const mode_dark = document.querySelector(".mode_dark")

const todo = document.querySelector(".todo")
const conteiner_clock = document.querySelector(".conteiner_clock")
const conteiner_mode = document.querySelector(".conteiner_mode")

f_clock();
function f_clock() {
    const clock = new Date();
    hour.textContent = clock.getHours();
    minute.textContent = clock.getMinutes();
    second.textContent = clock.getSeconds();
    setTimeout("f_clock()", 1000)
}


conteiner_mode.addEventListener("click", () => {
    if (todo.className === "todo") {
        console.log("PasaDDD");
        conteiner_clock.className = "conteiner_clock_dark";
        conteiner_mode.className = "conteiner_mode_dark";
        todo.className = "todo_dark";
        cambio = 0;
    } else {
        console.log("PasaLLL");
        conteiner_clock.className = "conteiner_clock";
        conteiner_mode.className = "conteiner_mode";
        todo.className = "todo";
        z = 1;
    }
    
})