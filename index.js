document.addEventListener('DOMContentLoaded', function() {
    console.log("locked and loaded!")
    updateDOM()
})

function updateDOM(){
    let paragraph = document.getElementById('text')
    paragraph.textContent = "This is really cool!"
}