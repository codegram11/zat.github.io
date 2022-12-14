let progressbar = document.querySelector('.progressbar');


function scrollProgressBar(){
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let windowHeight = scrollHeight - clientHeight;

    let porcentaje = scrollTop/windowHeight *100;
    progressbar.style.width = porcentaje +'%';

    let arrow=document.querySelector('.indicador');

    if(porcentaje != 0){
        arrow.innerHTML='<i class="fa-solid fa-arrow-up" ></i>'
    }else {
        arrow.innerHTML='<i class="fa-solid fa-arrow-right" ></i>'
    }
}

window.addEventListener('scroll', scrollProgressBar);


