//Task 1 : Customer Discounts 
let purchaseAmount = 101;
let discount = purchaseAmount;
if (purchaseAmount > 100)
    {
    let discount = 10;
    finalAmount = purchaseAmount - discount;
    }
console.log(`Final amount after discount: $${finalAmount}`);

//Task 2 : Sales Report
let sales = [120, 85, 200, 150, 90]; //declaring arrray sales with five figures
let totalSales = 0; 
for(let i = 0; i < sales.length; i++) //using a for loop to calculate the total sales
    {
        totalSales += sales[i]; //this essentially adds a sales figure to the total everytime it loops
    }
    console.log(`Total Sales: $${totalSales}`); 

//Task 3 : Inventory Depletion 
let stock = 10; //declaring a variable with value of 10
while (stock > 0)
    {
        console.log(`Stock Remaining: ${stock}`);
        stock --; //this will decrease the stock by one in each loop
    };

//Task 4 : Customer Survey
let responses = 0; //declaring a variable with the value of 0
do 
    {
       responses++;
       console.log(`Responses: ${responses}`); 
    } while (responses < 3); //will log the responses up until 3
console.log("Survey Completed");

//Task 5 : Employee Information
let employee = 
    {
        name: "Alice",
        position: "Manager",
        salary: 75000
    };
for (let key in employee)
    {
        console.log(`${key}: ${employee[key]}`);
    }

//Task 6 : Product Listings
let products = ["Laptop", "Mouse", "Keyboard"];
for(let product of products)
    {
        console.log(`Product: ${product}`);
    };

//Task 7 : Order Processing 
let orders = [101, 102, 103];
orders.forEach(order => {console.log(`Order ID: ${order}`)}); 

//Task 8 : Tax Calculation
function calculateTax (amount, taxRate)
    {
        return amount * taxRate;
    }
    let taxRate = calculateTax(110, 0.3);
    console.log(`Calculated Tax: $${tax}`);

//Task 9 : Discount Application
const price = 1500; 
const discountPercentage = 0.4;
const applyDiscount = function (price, discountPercentage)
    {   
        const discountAmount = price * (discountPercentage);
        const discountedPrice = price - discountAmount
        return discountedPrice;
    };
    const finalPrice = applyDiscount(price, discountPercentage);
    console.log(`Price after ${discountPercentage}% discount:  $${finalPrice.toFixed(2)}`);
    