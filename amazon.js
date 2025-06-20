const basketballPrice = 2095; 
const tshirtPrice = 799; 
const toasterPrice = 1899; 
const shipping =499; 
const productTotal = basketballPrice + tshirtPrice + toasterPrice;
const totalBeforeTax = productTotal +shipping;
const tax = Math.round(totalBeforeTax/10);
const ordertotal = totalBeforeTax+tax;
console.log("Product Total: ",productTotal);
console.log("Total Before Tax: ",totalBeforeTax);
console.log("Tax (10%): ",tax);
console.log("Order Total: ",ordertotal);


