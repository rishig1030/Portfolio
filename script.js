const sections = document.querySelectorAll('.section');
// const secBTNs = document.querySelectorAll('controlls');
const  secnBTN = document.querySelectorAll('.control');

const allSections = document.querySelectorAll('.main');

function pageTransistion(){
    // button click active class
    for(let i=0;i<secnBTN.length;i++){
        secnBTN[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
            let iden = this.dataset.id;
            
            let sec = document.getElementById(`${iden}`);
            sec.className += ' active';
            
            let idremove = currentBtn[0].dataset.id;
            let secRemove = document.getElementById(`${idremove}`);
            secRemove.classList.remove("active");
        })
    }
    //section active class
    
    
}

pageTransistion();