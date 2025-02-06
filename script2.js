let hour=document.querySelector("#hrs");
let minute=document.querySelector("#min");
let second=document.querySelector("#sec");


setInterval(() => {
    let myDate= new Date();
    hour.innerHTML= (myDate.getHours()<10 ? "0":"" )+ myDate.getHours();
    minute.innerHTML=(myDate.getMinutes()<10 ? "0":"" )+ myDate.getMinutes();
    second.innerHTML=(myDate.getSeconds()<10 ? "0":"" )+ myDate.getSeconds();

}, 1000);



