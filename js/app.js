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
/*
let age = 30;
console.log(age);

age = 25;
console.log(age);

const number = 1;
console.log(number);  //by setting const it avoids 'number' from being reassigned, it is a constant value. If we try to reassign it, it will throw an error.

//number = 2;
//console.log(number);
*/
let customerList = ["Ichigo", "Rukia", "Renji", "Byakuya"];
console.log(customerList);

customerList = "Aizen";
console.log(customerList);

const customerList2 = ["Ichigo", "Rukia", "Renji", "Byakuya"];
console.log(customerList2);

customerList2.push("Aizen");
console.log(customerList2);

customerList2.pop("Ichigo");
console.log(customerList2);

const numberList = [];
numberList.push(1);
numberList.push(2);
numberList.push("Wassup");
console.log(numberList);

numberList.reverse();
console.log(numberList);


numberList.reverse();
console.log(numberList);

const productList = [
    {name:"bun", inStock:true, price : 100},
    {name:"milk", inStock:true, price : 200},
    {name:"bread", inStock:false, price : 300},
    {name:"eggs", inStock:true, price : 450},
];

console.log(productList);




//3rd stwp is a bit more complex its made using arrow functions
let inStockProducts = productList.filter(product => product.inStock == true);

   // function(product){
    //    return ;  //we pass the objects line by line using the filter method, and we check if the inStock property is true. If it is, we return the product object to the new array inStockProducts.
    

    
//function productFilter(product){
 //   return product.inStock == true;
//}

console.log(inStockProducts);
console.log("BREAK");

//STEP 1
function addNumber(num1,num2){
    return num1 + num2;
}
console.log(addNumber(10,5));

//STEP 2
let getSum = function(num1, num2){
    return num1 + num2;
}
console.log(getSum(10,12));

//STEP 3
let getTotal = (num1, num2) => {
    return num1 + num2;
}
console.log(getTotal(2,10));

//STEP 4 - anonymi=ous arrow function
(num1, num2) => {
    return num1 + num2;
}

//Arrow function with single parameter
let txtValue = txtValue => {
    return txtValue;
}
console.log(txtValue("Hello World"));

//Arrow function with single parameter and single line of code
let sample = txtValue1 => txtValue1;
console.log(sample("Hello World 2"));


