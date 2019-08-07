let ourWidth = 1;
const a = document.querySelector('.sidenav');
const b = document.querySelector('.toggle');


b.addEventListener('click', function(){
    if(ourWidth === 1){
        a.style.width = '40%';
        ourWidth = 0
    }else{
        a.style.width = '0%';
        ourWidth = 1;
    }
})
