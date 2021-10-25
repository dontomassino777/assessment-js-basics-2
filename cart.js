///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce((acc, curr) => {
//     return acc + curr
// })

const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price
}, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return ((cartTotal * tax) + cartTotal) - couponValue
}

console.log(calcFinalPrice(20, 5, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The customer object on the cart page should include the following properties/data types:
    First name: 'string'
    Last name: 'string'
    Phone number: number
    Street Address: 'string'
    Zip Code: number
    So that we'd have the correct name of the customer, how to reach them if we have questions about
    their order/delivery, and the correct street address for delivery.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class Customer {
    constructor(firstName, lastName, phone, address, zip){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.zip = zip;
    }
}

let newCx = new Customer('Tomas', 'Fisher', 3852082003, '234 S 1680 W', 84601)
console.log(newCx)
