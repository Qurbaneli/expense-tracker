let form=document.querySelector("#form")
let text=document.querySelector("#text")
let amount=document.querySelector("#amount")
let income=document.querySelector("#money-plus")
let expense=document.querySelector("#money-minus")
let balance=document.querySelector("#balance")
let list=document.querySelector("#list")

form.addEventListener("submit",function(e){
    e.preventDefault()

    if(amount.value.trim().length >0 && text.value.trim().length >0)
    {
        if(amount.value!=0)
        {
            
            if(amount.value>0)
            {
                list.innerHTML+=`<li class="plus">
                ${text.value} <span>+$ ${amount.value}</span><button class="delete-btn">x</button>
            </li>`
            let incomeAmount=+income.innerHTML.split(" ")[0]
            income.innerHTML= incomeAmount + +amount.value+" $"
            }
            else
            {
                list.innerHTML+=`<li class="minus">
                ${text.value}  <span>-$ ${amount.value}</span><button class="delete-btn">x</button>
            </li>`
            let expenseAmount=+expense.innerHTML.split(" ")[0]
            expense.innerHTML= expenseAmount+ +amount.value+" $"
            }

            balance.innerHTML= +income.innerHTML.split(" ")[0] + +expense.innerHTML.split(" ")[0] +" $"
            amount.value=""
            text.value=""
        }
        else
        {
            alert("The amount should not equal to zero")
        }

    }

    else
    {
        alert("You should add the fields")
    }

})

list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-btn"))
    {
        let deletedAmount=+e.target.previousElementSibling.innerHTML.split(" ")[1];
        
        if(deletedAmount>0)
        {
            let incomeAmount=+income.innerHTML.split(" ")[0]
            income.innerHTML= incomeAmount- +deletedAmount + " $"
        }
        else
        {
            let expenseAmount=+expense.innerHTML.split(" ")[0]
            expense.innerHTML= expenseAmount - +deletedAmount + " $"
        }
       
        balance.innerHTML= +income.innerHTML.split(" ")[0] + +expense.innerHTML.split(" ")[0] +" $"
        e.target.parentElement.remove()
    }
})