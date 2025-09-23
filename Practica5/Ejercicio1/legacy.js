
// legacy.js
console.log("Starting calculation...");

var productName = "Espresso Machine";
var prices = [120, 30, 15]; // base price, shipping, handling
function calculateSubtotal() {
return prices[0] + prices[1] + prices[2];
}
console.log("Subtotal after assignment:", calculateSubtotal()); // C

console.log("Product:", productName);
console.log("Subtotal:", calculateSubtotal());
var discountRate = getDefaultDiscount(); // D

function getDefaultDiscount() {
return discountValue; // discountValue isn’t declared yet!
}
console.log("Discount rate:", discountRate); // E
var discountValue = 0.1;
console.log("Discount rate after assignment:", getDefaultDiscount()); // F
var applyDiscount = function(amount) {
return amount - amount * discountValue;
};
console.log("Total after discount:", applyDiscount(calculateSubtotal())); // G
console.log("Taxed total (incl. 8%):", addTax(applyDiscount(calculateSubtotal()))); // H
var addTax = (function() {

var rate = 0.08;
return function(amount) {
return amount + amount * rate;
};
})();
productName = "Deluxe Espresso Machine";
console.log("Final product name:", productName);