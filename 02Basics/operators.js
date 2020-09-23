var sellingPrice = 99;
var costPrice = 200;
var discountpercent = ((costPrice - sellingPrice)/ costPrice) * 100;
console.log("dDiscount percentage is: " + discountpercent);
displaydiscountpercent = Math.round(discountpercent);
console.log(displaydiscountpercent);