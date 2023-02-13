var btn = document.querySelector('.nav_lines')
var links = document.querySelector('.underLinks')
var bar1 = document.getElementById('line1')
var bar2 = document.getElementById('line2')
var bar3 = document.getElementById('line3')

btn.onclick = function(){
    links.classList.toggle('active')
    bar1.classList.toggle('active')
    bar2.classList.toggle('active')
    bar3.classList.toggle('active')
}
links.onclick = function(){
    links.classList.remove('active')
    bar1.classList.remove('active')
    bar2.classList.remove('active')
    bar3.classList.remove('active')
}

let time = document.getElementById('time')
let date = document.getElementById('date')
var calender = document.getElementById('dt')


setInterval(()=>{
    let d = new Date()
    time.innerHTML = d.toLocaleTimeString()
    date.innerHTML = d.toLocaleDateString()
},1000)

// function showDt(){
//     calender.innerHTML = Date()
// }
