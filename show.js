function disple(){
    let time =new Date()
console.log(time)
document.getElementById('time').innerHTML=time;
}
setInterval(disple,1000);