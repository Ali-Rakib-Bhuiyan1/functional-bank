function getInputVaule(inputId){

    const InputField = document.getElementById(inputId)
    const inputAmountText = InputField.value;
    amountValue= parseFloat(inputAmountText)

    //clear input field 
 InputField.value = ''
 return amountValue
    
}


function updateTotalField( totalFieldId, amountValue) {
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal+amountValue;


}

function getCurrentBalnce(){
    const balanceTotal =document.getElementById('balance-total');
    const totalText = balanceTotal.innerText;
    const previousBalanaceTotal = parseFloat(totalText);
    return previousBalanaceTotal;

}


function updateBalnce(amountValue, isAdd){
    const balanceTotal =document.getElementById('balance-total');
    // const totalText = balanceTotal.innerText
    // const previousBalanaceTotal = parseFloat(totalText)
    const previousBalanaceTotal = getCurrentBalnce();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanaceTotal+amountValue
  } else {
      
    balanceTotal.innerText = previousBalanaceTotal-amountValue
  }
}


//handle diposit
document.getElementById('deposit-button').addEventListener('click',function(){

const depositAmount = getInputVaule('deposit-input')
if (depositAmount> 0) {
    
    updateTotalField( 'deposit-total', amountValue)

 updateBalnce(amountValue, true)

}




})

//handle withdrw
document.getElementById('withdraw-button').addEventListener('click', function(){

const  withdrawAmount = getInputVaule('withdraw-input')
const currentBalance = getCurrentBalnce()

if (withdrawAmount > 0 && withdrawAmount<currentBalance) {
    updateTotalField( 'withdraw-total', amountValue)

updateBalnce(amountValue ,false)
    
}
    
  if (withdrawAmount <currentBalance) {
      console.log(plese )
      
  }  






})
