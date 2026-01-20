let body=document.getElementById('background')
let img=['./img0.jpg','./img1.jpg','./img2.jpg','./img3.jpg','./img4.jpg','./img5.jpg','./img6.jpg','./img7.jpg','./img8.jpg','./img9.jpg']
setInterval(loop,1000)
function loop(){
    let i=0
    body.style.background=img[i]
    i++
}
