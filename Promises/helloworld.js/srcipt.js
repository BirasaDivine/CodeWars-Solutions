let container=document.getElementById("container")
function generateParagraph(){
    setInterval(()=>{
        const p=document.createElement("p")
        p.textContent="Hello World"
        container.appendChild(p)
    },5000)
}
generateParagraph()