let btn = document.querySelector(".add");
let ul = document.querySelector("ul");
let inp = document.querySelector(".task");

btn.addEventListener("click",()=>{
    if(inp.value!=""){
        let li = document.createElement("li");
        let del = document.createElement("button");
        del.innerText = "completed";
        del.classList.add("delete");
        li.innerText = inp.value;
        ul.appendChild(li);
        li.appendChild(del);
        inp.value="";
    }
    else{
        console.log("there is no task to add");
    }
})

// this is done using the event delgation 
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par = event.target.parentElement;
        par.remove();
        console.log("deleted");
    }
})




