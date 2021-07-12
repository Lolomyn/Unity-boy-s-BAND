    if (!localStorage.theme) localStorage.theme ="light"
    document.body.className=localStorage.theme
    
    toggleBtn. onclick = () =>{
        document.body.classList.toggle("dark")
        localStorage.theme = document.body.className || "light"
    }
