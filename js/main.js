const programme = document.querySelectorAll("tbody tr");
programme.forEach((pro)=>{
    pro.addEventListener("mouseover",()=>{
        pro.style.backgroundColor = "blue"
    })
    pro.addEventListener("mouseout",()=>{
        pro.style.backgroundColor = "";
    })
})
