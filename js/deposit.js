// step1:add event listner to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
  //step2:get the deposit amount from the deposit input field

    const depositField=document.getElementById('deposit-field');
    const depositAmountString=depositField.value;
    const newDepositAmount=parseFloat(depositAmountString);

    //step:3 get the current deposit amount
    const depositAmountElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositAmountElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    const currentDepositAmount=previousDepositTotal + newDepositAmount;
    depositAmountElement.innerText=currentDepositAmount;

    //step-4:total balance add
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    const currentBalanceTotal=previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;


    //clear deposit field
    depositField.value='';

})