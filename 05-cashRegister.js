function checkCashRegister(price, cash, cid) {
  let changeCash = (cash * 100) - (price * 100); // 9674;
  let totalCashInDrawer = cid.reduce((sum, val) => sum + val[1] * 100, 0); // 33541;

  if( changeCash > totalCashInDrawer) {
    return {status: "INSUFFICIENT_FUNDS", change: []}; // for INSUFFICIENT_FUNDS;
  } else if (changeCash === totalCashInDrawer) {
    return {status: "CLOSED", change: cid}; // for Closed;
  } else { // open (or) insufficient;
    const dValueLookup = { // => denom
      "PENNY": 1,
      "NICKEL": 5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000,
    };

    const descOrdCid = cid.slice() // here it will sort the cid by dValueLookup value by decsending.
    .sort((a,b) => dValueLookup[b[0]] - dValueLookup[a[0]]);

    let returnCid = [];
    for(let c of descOrdCid) { // here c = "ONE HUNDRED", 100
      let denom = dValueLookup[c[0]]; // 10000
      let cashInDenom = c[1] * 100; // 10000
      let amtToTakeFromDenom = Math.min(denom * Math.floor(changeCash / denom), cashInDenom);
        
      if(amtToTakeFromDenom === 0){
        continue; // it stops here and continues the loop, so 0 will not be pushed.
      }

      changeCash -= amtToTakeFromDenom;
      returnCid.push([c[0], amtToTakeFromDenom / 100]);

      if(changeCash === 0){
        break;// it will break and come out of the loop.
      };
    };

    if (changeCash !== 0) {  // for insufficient, if cash from drawer cannot be break.
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change: returnCid}; // for open;
  }
   
};
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

/* Answer = {
  status: 'OPEN',
  change: [
    [ 'TWENTY', 60 ],
    [ 'TEN', 20 ],
    [ 'FIVE', 15 ],
    [ 'ONE', 1 ],
    [ 'QUARTER', 0.5 ],
    [ 'DIME', 0.2 ],
    [ 'PENNY', 0.04 ]
  ]
}
*/

// 96.74
// min(amt / denomination, amountInDenom)
// ["TWENTY", 60]
// 36.74
// ["TEN", 20]
// 16.74
//  ["FIVE", 15]
//  1.74
//  ["ONE", 1]
//  0.74
// ["QUARTER", 0.5]
// 0.24
// ["DIME", 0.2]
// 0.04
// ["PENNY", 0.04]
