window.addEventListener('load',()=>{
    const loader=document.querySelector('.div-loader')
    loader.style.opacity=0
    loader.style.visibility='hidden'
})

window.addEventListener('scroll', ()=>{
    let height = (document.documentElement.clientHeight)
    let menu = document.querySelector('.nav')

    if(window.scrollY > height - 40){
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
})

let menu = document.querySelector('.nav-col')
let items = document.querySelector('.menu')
menu.addEventListener('click', (e)=>{
    if(e.target.classList.contains('colapse')){
        items.classList.toggle('active-items')
    }
})