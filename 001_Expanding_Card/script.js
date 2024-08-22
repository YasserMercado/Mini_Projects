const paneles = document.querySelectorAll(".panel")

paneles.forEach(panel => {
    panel.addEventListener("click", () => {
        desactivarPanel();
        panel.className = "panel_a"
    })
})

function desactivarPanel(){
    paneles.forEach(panel => {
        panel.className = "panel";
    })
}