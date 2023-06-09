let box = document.querySelector('input');
let btn = document.querySelector('button');
let hText = document.querySelector('h1');
let progress = document.querySelector('.charit span')
let progressORJN = document.querySelector('.charit')

function ta7lil(){
    hText.innerText = "ta7lil."
    setTimeout( function() {
        hText.innerText = "tafkir.."
    },3000)
    setTimeout( function() {
        hText.innerText = "mo3alaja..."
    },5000)
    setTimeout( function() {
        hText.innerText = `Ra9m li da5alti howa : ${box.value} 🙂`
        progress.style.backgroundColor = "rgb(0, 255, 0)"
        progress.style.transition = "0.2s ease"
    },20000)
}

btn.addEventListener('click', () => {
    if(box.value){
        box.style.display = "none"
        btn.style.display = "none"
        hText.style.display = "block"
        progressORJN.style = "border: 1px solid black; height:30px"
        progress.style.width = "100%"
        ta7lil()
    }else{
        alert('da5al ra9m')
    }
})