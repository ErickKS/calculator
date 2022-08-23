const resultCalc = document.getElementById('result')

const popUp = document.getElementById('pop-upLayer');

function insert(int) {
    let number = resultCalc.innerHTML;
    resultCalc.innerHTML = number + int;

    const displayNumbers = resultCalc.innerText;
    if (displayNumbers.length == 9) {
        popUp.classList.add('active');
    }
}

function closePopUp() {
    popUp.classList.remove('active');
}

function c() {
    resultCalc.innerHTML = "";
}

function erase() {
    const newResult = resultCalc.innerHTML;
    resultCalc.innerHTML = newResult.substring(0, newResult.length - 1);
}

function errorAlert() {
    setTimeout(() => {
        const alert = document.getElementById('alert');
        alert.style.opacity = '1';
        if(alert.style.opacity == '1'){
            setTimeout(() => {
                alert.style.opacity = '0';
            },1500)
        }
    })
    clearTimeout();
    c();
}

function calc() {
    const newResult = resultCalc.innerHTML;
    if(newResult.startsWith('x') || newResult.startsWith('/')) {
        errorAlert()
    }else if(newResult.includes('--') || newResult.includes('-+') || newResult.includes('-.') || newResult.includes('-x') || newResult.includes('-/') 
            || newResult.includes('+-') || newResult.includes('++') || newResult.includes('+.') || newResult.includes('+x') || newResult.includes('+/')
            || newResult.includes('x-') || newResult.includes('x+') || newResult.includes('x.') || newResult.includes('xx') || newResult.includes('x/')
            || newResult.includes('/-') || newResult.includes('/+') || newResult.includes('/.') || newResult.includes('/x') || newResult.includes('//')
            || newResult.includes('.-') || newResult.includes('.+') || newResult.includes('..') || newResult.includes('.x') || newResult.includes('./')) {
        errorAlert()
    }else {
        console.log("passou")
        if(newResult.includes('x')) {
            let convertedRes = newResult.replace(/x/g, "*");
            resultCalc.innerHTML = eval(convertedRes);
        }
        resultCalc.innerHTML = eval(newResult);
    }
}

// THEME TOGGLER

const themeToggler = document.querySelector(".theme__toggler input");
const themeTogglerBtn = document.querySelector(".theme__toggler");

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark__theme__variables');

    themeTogglerBtn.classList.toggle('active');
});