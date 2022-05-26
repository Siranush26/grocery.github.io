let grocery=document.getElementsByClassName(".grocery")[0];
let pencil=document.getElementById("pencil");
let all=document.getElementById("all");
let for_i=document.getElementById("for_input");


pencil.addEventListener("click",function(){
    all.innerHTML="";
    })

for_i.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    addItem()
})


function addItem(){
    let h2=document.createElement("h2");
    h2.innerHTML=localStorage.setItem("h2","_ "+for_i.value)
    h2.innerHTML=localStorage.getItem("h2","_ "+for_i.value)
    //h2.innerHTML="_ "+for_i.value
    //localStorage.setItem("h2",h2.innerHTML)
    //localStorage.getItem("h2",h2.innerHTML)


    
h2.addEventListener("click",function(){
    h2.style.textDecoration="line-through"
})
all.insertAdjacentElement("beforeend",h2)
//grocery.appendChild(h2);
//for_i.value = "";
}


let values=[];

if (localStorage.getItem("h2","_ "+for_i.value)) {
   let save=[(localStorage.getItem("h2","_ "+for_i.value))];
   save.forEach(val=>values.push(val))
    
  
   console.log(values.push("_ "+for_i.value))
}

