let myTime;

function clock(){

    let currentTime = new Date();

    let hour = document.getElementById('hr');
    let minute = document.getElementById('min');
    let second = document.getElementById('sec');
    let day = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    hru = currentTime.getHours();
    minu = currentTime.getMinutes();
    secu = currentTime.getSeconds();
    dayu = currentTime.getDate();
    monthu = currentTime.getMonth() + 1;
    yearu = currentTime.getFullYear();

    hour.innerText = hru;
    minute.innerText = minu;
    second.innerText = secu;
    day.innerText = dayu;
    month.innerText = monthu;
    year.innerText = yearu;

    ampm = document.getElementById('ampm');

    if (hru > 12) {
        ampm.innerText = 'PM';
    }
    else{
        ampm.innerText = 'AM';
    }
}

function start(){
    myTime = setInterval(clock, 1000);
    theme.style.setProperty('--animation-name', 'secondBox')
}

function stop(){
    clearInterval(myTime);
    theme.style.setProperty('--animation-name', 'none')
}

let theme = document.documentElement;


let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        let classList = e.currentTarget.classList;
        if(classList.contains('yellow')){
            theme.style.setProperty('--default-screen', '#004b2d')
            theme.style.setProperty('--default-color', '#f1ff2f' )
            theme.style.setProperty('--default-date', '#a2e832')
            theme.style.setProperty('--default-ampm', '#49cf40')

            theme.style.setProperty('--yellow-border' , '1px solid #000000')
            theme.style.removeProperty('--blue-border')
            theme.style.removeProperty('--red-border')

            theme.style.setProperty('--shadow-color', '#b1bb23')
        }
        else if(classList.contains('blue')){
            theme.style.setProperty('--default-screen', '#53587e')
            theme.style.setProperty('--default-color', '#87cefa' )
            theme.style.setProperty('--default-date', '#57dffb')
            theme.style.setProperty('--default-ampm', '#9779bb')

            theme.style.setProperty('--blue-border' , '1px solid #000000')
            theme.style.removeProperty('--yellow-border')
            theme.style.removeProperty('--red-border')

            theme.style.setProperty('--shadow-color', '#68a0c4')
        }
        else if(classList.contains('red')){
            theme.style.setProperty('--default-screen', '#971a46')
            theme.style.setProperty('--default-color', '#ff4444' )
            theme.style.setProperty('--default-date', '#e13878')
            theme.style.setProperty('--default-ampm', '#aa4996')

            theme.style.setProperty('--red-border' , '1px solid #000000')
            theme.style.removeProperty('--yellow-border')
            theme.style.removeProperty('--blue-border')

            theme.style.setProperty('--shadow-color', '#c03333')
        }

        

    })
})