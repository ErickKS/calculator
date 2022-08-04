const resultCalc = document.getElementById('result')

function insert(int) {
    let number = resultCalc.innerHTML
    resultCalc.innerHTML = number + int
}

function ac() {
    resultCalc.innerHTML = ""
}

function erase() {
    const newResult = resultCalc.innerHTML
    resultCalc.innerHTML = newResult.substring(0, newResult.length - 1)
}

function errorAlert() {
    setTimeout(() => {
        const alert = document.getElementById('alert');
        alert.style.opacity = '1'
        if(alert.style.opacity == '1'){
            setTimeout(() => {
                alert.style.opacity = '0';
            },1500)
        }
    })
    clearTimeout();
    ac();
}

function calc() {
    const newResult = resultCalc.innerHTML
    if(newResult.startsWith('x') || newResult.startsWith('/')) {
        console.log("erro")
        errorAlert();
    }else if(newResult.includes('--') || newResult.includes('-+') || newResult.includes('-.') || newResult.includes('-x') || newResult.includes('-/') 
            || newResult.includes('+-') || newResult.includes('++') || newResult.includes('+.') || newResult.includes('+x') || newResult.includes('+/')
            || newResult.includes('x-') || newResult.includes('x+') || newResult.includes('x.') || newResult.includes('xx') || newResult.includes('x/')
            || newResult.includes('/-') || newResult.includes('/+') || newResult.includes('/.') || newResult.includes('/x') || newResult.includes('//')
            || newResult.includes('.-') || newResult.includes('.+') || newResult.includes('..') || newResult.includes('.x') || newResult.includes('./')) {
        console.log("error 2")
        errorAlert()
    }else {
        console.log("passou")
        if(newResult.includes('x')) {
            let convertedRes = newResult.replace(/x/g, "*");
            resultCalc.innerHTML = eval(convertedRes);
            return;
        }
        resultCalc.innerHTML = eval(newResult);
    }
}