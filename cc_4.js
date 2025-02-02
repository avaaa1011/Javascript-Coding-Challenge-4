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



