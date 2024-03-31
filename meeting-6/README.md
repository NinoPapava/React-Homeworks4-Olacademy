I STEP. ALL in STACK

 setTimeout------------->STACK | (1)  <br>
 Promise---------------->STACK | (2)  <br>
 console.log("3")------->STACK | (3)   <br>
 logIt2().then(())------>STACK | (4)  <br>
 logIt().then(())------->STACK | (5)  <br>
 console.log("6")------->STACK | (6)  <br>

---

II STEP.  <br>

console.log("3")--------> first result (3)  <br>
console.log("6")--------> second result (6)  <br>
<br>

setTimeout (1)---------->API--> MAKRO reason (setTimeout)  <br>
Promise (2)------------->API--> MIKRO reason (Promise)  <br>
logIt2().then(()) (4)--->API--> MIKRO reason (Promise(setTimeout))---->STACK--->API--->MAKRO  <br>
logIt().then(()) (5)---->API--> MIKRO reason (Promise)  <br>

---

III STEP. Result  <br>

I. Sync. func. <br>
console.log("3")---------> 3  <br>
console.log("6")---------> 6  <br>

II. MIKRO   <br>
Promise (2)--------------> 2  <br>
logIt().then(()) (5)-----> 5  <br>

III. MAKRO  <br>
setTimeout (1)-----------> 1  <br>
logIt2().then(()) (4)----> 4  <br>


Result: 3, 6, 2, 5, 1, 4
