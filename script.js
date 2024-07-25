var originalPrice = document.getElementById('originalPrice')
var discount = document.getElementById('discount')
var saveAmount = document.getElementById('saveAmount')
var finalPrice = document.getElementById('finalPrice')
var symbol = document.getElementById('symbol')
var resetBtn = document.getElementById('reset')


originalPrice.addEventListener('input', calculate)

discount.addEventListener('input', calculate)
discount.addEventListener('input', percentSymbol)



function calculate(){
    let originalVal = originalPrice.value
    let discountValue = discount.value

    let savedVal = originalVal*discountValue/100
    let finalVal = originalVal - savedVal

    saveAmount.value = savedVal.toLocaleString("en-US")
    finalPrice.value = finalVal.toLocaleString("en-US")
}


function percentSymbol(e){
    if(e.target.value.trim() != 0){
        symbol.style.display = "block"
    }

    else{
        symbol.style.display = "none"
    }


    if(e.target.value < 10){
        symbol.style.right = "99.5px"
    }
    if(e.target.value > 9){
        symbol.style.right = "95.5px"
    }
    if(e.target.value == 100){
        symbol.style.right = "91px"
    }


    if(parseInt(e.target.value) > 100){
        e.target.value = 100
        calculate()
        symbol.style.right = "91px"
    }

    if(parseInt(e.target.value) < 1){
        e.target.value = 1
        calculate()
        symbol.style.right = "95.5px"
    }
}

resetBtn.addEventListener('click', ()=>{
    symbol.style.display = "none"
})