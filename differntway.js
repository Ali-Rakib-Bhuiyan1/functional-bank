
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input')
    const depositAmountText = depositInput.value;
    depositAmount = parseFloat(depositAmountText)
    const depositAmount = getInputVaule()
    
    //get current  deposit
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText
    const previousDepositTotal = parseFloat(depositTotalText)
    depositTotal.innerText = previousDepositTotal+depositAmount;
    
     //update balance
    const balanceTotal =document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanaceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanaceTotal+depositAmount
    
    
    })
    
    //handle withdrw
    document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawAmountText)
    
    
    
    //update balnce 
    const withdrawTotal  = document.getElementById('withdraw-total')
    const previousWithdrawTotalText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText)
    //update balnce after total
    const balanceTotal =document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanaceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousBalanaceTotal+withdrawAmount
    
    
    withdrawTotal.innerText = previousWithdrawTotal+withdrawAmount
     //clear input field 
     withdrawInput.value = ''
    
    })