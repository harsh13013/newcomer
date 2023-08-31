document.getElementById('btnCalculate').addEventListener('click', function () {
    // Get user inputs
  //const otc = parseInt(document.getElementById('otc').value);
    const targetRenewal = parseInt(document.getElementById('targetRenewal').value);
    const salesRenewal = parseInt(document.getElementById('salesRenewal').value);
   /* const targetUpsell = parseInt(document.getElementById('targetUpsell').value);
    const salesUpsell = parseInt(document.getElementById('salesUpsell').value);*/
    
    // Commission calculation logic
    // const renewal = Math.floor(otc * 0.6);
    // const upsell = Math.floor(otc * 0.4);
   
    let com;
    let holdback;
    
    // let com1 = 0;
    // let total1 = 0;
    // let percentage = 0;
    // let percentage1 = 0;
    // let total = 0;
    // let total2 = 0;
    
    // Renewal Sales Calculation
    let result = Math.min(salesRenewal, targetRenewal * 0.5);
    com = 0;
   // console.log("From 0% to 50%: " + result);

    if (salesRenewal >= targetRenewal * 0.5) {
        result = Math.min(salesRenewal - targetRenewal * 0.5, targetRenewal * 0.8 - targetRenewal * 0.5);
        com = salesRenewal * 0.1;
    }
  //  console.log("From 50% to 80%: " + result);

    if (salesRenewal >= targetRenewal * 0.8) {
        result = Math.min(salesRenewal - targetRenewal * 0.8, targetRenewal - targetRenewal * 0.8);
        com = salesRenewal * 0.15;
    }
    
    holdback = com*0.20;

    document.getElementById('result').textContent = "Commission: " + com;
    document.getElementById('-20%').textContent = "Monthly Holdback: " + holdback;
    document.getElementById('total commission').textContent = "Total Commission: " + (com-holdback);
    //console.log("From 80% to 100%: " + result);

    // if (salesRenewal >= targetRenewal * 0.95) {
    //     result = Math.min(salesRenewal - targetRenewal * 0.95, targetRenewal - targetRenewal * 0.95);
    //     com = salesRenewal * 0.15;
    // }
    //console.log("From 95% to 100%: " + result);

//     percentage = (salesRenewal/targetRenewal) * 100;
//     console.log("Target percentage: " + percentage + "%");
  
//      console.log("% of Renewal otc: " + (com/renewal)*100 + "%");
//     // Upsell Sales
//     // Upsell Sales Calculation
//     console.log();
    
//     result = Math.min(salesUpsell, targetUpsell * 0.7);
//   //  console.log("From 0% to 70%: " + result);

//     if (salesUpsell > targetUpsell * 0.7) {
//         result = Math.min(salesUpsell - targetUpsell * 0.7, targetUpsell * 0.9 - targetUpsell * 0.7);
//         com1 = (result / targetUpsell) * upsell;
//     }
//    // console.log("From 70% to 90%: " + result);

//     if (salesUpsell >= targetUpsell * 0.9) {
//         result = Math.min(salesUpsell - targetUpsell * 0.9, targetUpsell * 0.95 - targetUpsell * 0.9);
//         com1 += (result / targetUpsell) * upsell * 8;
//     }
//    // console.log("From 90% to 95%: " + result);

//     if (salesUpsell >= targetUpsell * 0.95) {
//         result = Math.min(salesUpsell - targetUpsell * 0.95, targetUpsell - targetUpsell * 0.95);
//         com1 += (result / targetUpsell) * upsell * 8;
//     }
//   //console.log("From 95% to 100%: " + result);
//     percentage1 = (salesUpsell/targetUpsell) * 100;
//     console.log(percentage1);
//     console.log("Renewal commission: " + com);
//     console.log("Upsell Commission: " + com1);
//     console.log("Upsell percentage: " + percentage1 + "%");
//     //console.log("Total percentage: " + ((salesRenewal+salesUpsell)/(targetRenewal+targetUpsell))*100 + "%");
//     console.log("Total % of otc: " + ((com+com1)/otc)*100 + "%");

//     total1 = com + com1;
//     console.log("Total Commission: " + total1);

//     // Formatting
    
//     let number2 = com.toFixed(0); //Renewal Commission
//     let number4 = percentage.toFixed(0); //Renewal Target percentage
//     let num = (com/renewal)*100;
//     let number1 = num.toFixed(0); //% of renewal otc
//     let number3 = com1.toFixed(0); //Upsell Commission
//     let number5 = percentage1.toFixed(0); //Upsell  Target Percentage 
//     let up = (com1/upsell)*100;
//     let up1 = up.toFixed(0);// % of upsell otc
//     let tot = total1.toFixed(0); // total com
//     total2 = ((salesRenewal+salesUpsell)/(targetRenewal+targetUpsell))*100;
//     let number = total2.toFixed(0); // % of total target
//     total = ((com+com1)/otc)*100;
//     let formattedNumber = total.toFixed(0); // % of total otc

//     // Display the calculated commission on the web page

//     document.getElementById('Renewal Commission').textContent = number2; // Renewal Commission
//     document.getElementById('% targetren').textContent = number4 + '%'; // % to target renewal
//     document.getElementById('% otcren').textContent = number1 + '%'; // % of otc renewal
//     document.getElementById('Upsell Commission').textContent = number3; // Upsell commission
//     document.getElementById('% targetup').textContent = number5 + '%'; // % of target upsell
//     document.getElementById('% otcup').textContent = up1 + '%'; // % of otc upsell
//     document.getElementById('Total Commission').textContent = tot; // total commission
//     document.getElementById('% totalren').textContent =  number + "%"; // % of total target
//     document.getElementById('% totalup').textContent = formattedNumber + '%'; // % of total otc

});