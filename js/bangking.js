// bangking part
document.getElementById('depo-submit').addEventListener('click',function(){
    // console.log('deposite')
    const depositeInput = document.getElementById('user-deposite');
    
    const newDepositAmount = depositeInput.value;
    // console.log(deposite);
    

    const depositTotal = document.getElementById('taka-depo');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal =  parseFloat(previousDepositAmount)  + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // balance add total
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const totalBalance = parseFloat(balanceText) + parseFloat(newDepositTotal) - parseFloat(previousDepositAmount);
    console.log(typeof(totalBalance) )
    balance.innerText = totalBalance;

    // clear input deposite 
    depositeInput.value = '';
})

