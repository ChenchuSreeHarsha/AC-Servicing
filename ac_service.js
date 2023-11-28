let cleaning = document.getElementById("cleaning");
let repair = document.getElementById("repair");
let gas_refill = document.getElementById("gas_refill");
let relocation = document.getElementById("relocation");
let filter = document.getElementById("filter");
let maintainance = document.getElementById("maintainance");
let submit = document.getElementById("submit");
let final = document.getElementById("final");
let final2 = document.getElementById("final2");
let actype = document.getElementById("actype");

function calculate()
{
    let checkbox = [cleaning,repair,gas_refill,relocation,filter,maintainance];
    amount = 0;
    checkcount = 0;
    event.preventDefault();

    for(i = 0; i < checkbox.length; i++)
    {
        if (checkbox[i].checked) {
            amount = amount + parseInt(checkbox[i].value);
            checkcount = checkcount + 1;
          }  
    }
  if(checkcount>2)
  {
    final2.innerHTML=`The estimated service cost is ${amount=amount-amount*(15/100)}`
  }
  else
  {
    final2.innerHTML = `The estimated service cost is ${amount}`
  }
  if(checkbox[5].checked == true)
  {
    final.innerHTML=`The estimated service cost with maintainance is ${amount}`
  }
  else
  {
    final.innerHTML = `You are not selected yearly maintainance`
  }
  
  let dropdown = [split,window];
  if(dropdown[0].selected == true)
  {
    actype.innerHTML = `Your selected ${dropdown[0].value} type AC service maintainance`
  }
  if(dropdown[1].selected == true)
  {
    actype.innerHTML = `Your selected ${dropdown[1].value}  type AC service maintainance`
  }
}