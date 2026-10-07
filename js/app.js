const userInfo = []
function addCustomerOnAction(){
    let txtName = document.getElementById("txtName").value
    let txtAddress = document.getElementById("txtAddress").value
    let txtAge = document.getElementById("txtAge").value
    let txtEmail = document.getElementById("txtEmail").value
    let txtSalary = document.getElementById("txtSalary").value

    let Person = {
        name : txtName,
        address : txtAddress,
        age : txtAge,
        email : txtEmail,
        salary : txtSalary
    }
    userInfo.push(Person)
    console.log(userInfo)
}

function loadTableOnAction(){
    let tblCustomer = document.getElementById("tblCustomer")
    let body = "";
    for(let i = 0; i < userInfo.length; i++){
    body += `
        <tr>
            <td>${userInfo[i].name}</td>
            <td>${userInfo[i].address}</td>
            <td>${userInfo[i].age}</td>
            <td>${userInfo[i].email}</td>
            <td>${userInfo[i].salary}</td>
        </tr>
    `
    }
    tblCustomer.innerHTML = body
}
/*
//STARTED FROM HERE TODAY LET VAR CONST
{
   let name = "John"; //the reason why we use let is because it is block scoped, meaning it is only accessible within the block it is defined in. If we used var, it would be function scoped and accessible outside of the block.
    var age = 30;

    console.log(age);
}
console.log(name);  //the reason w
console.log(age);
*/
let age = 30;
console.log(age);

age = 25;
console.log(age);

const number = 1;
console.log(number);  //by setting const it avoids 'number' from being reassigned, it is a constant value. If we try to reassign it, it will throw an error.

number = 2;
console.log(number);