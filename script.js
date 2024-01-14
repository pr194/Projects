const bdy=document.querySelector('body');
const btn=document.querySelectorAll("#btn");

function setBtn(){
    btn.forEach((Butn,ind)=>{
        Butn.addEventListener("click",(event)=>{
          bdy.style.backgroundColor=event.target.className
        })
    })
}
setBtn()