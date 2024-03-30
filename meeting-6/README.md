I STEP. ALL in STACK

 setTimeout --> STACK | (1)  <br>
 Promise --> STACK | (2)  <br>
 console.log("3") --> STACK | (3)   <br>
 logIt2().then(()) --> STACK | (4)  <br>
 logIt().then(()) --> STACK | (5)  <br>
 console.log("6") --> STACK | (6)

---

II STEP.

console.log("3") from STACK --> first result (3)  <br>
console.log("6") from STACK --> second result (6)  <br>
<br>

setTimeout (1) from STACK --> API --> MAKRO reason (setTimeout)  <br>
Promise (2) from STACK --> API --> MIKRO reason (Promise)  <br>
logIt2().then(()) (4) from STACK --> API --> MAKRO reason (setTimeout)  <br>
logIt().then(()) (5) from STACK --> API --> MIKRO reason (Promise)  <br>

---

III STEP. Result  <br>

I. Sync. func.
console.log("3") --> 3  <br>
console.log("6") --> 6  <br>

II. MIKRO   <br>
Promise (2) --> 2  <br>
logIt().then(()) (5) --> 5  <br>

III. MAKRO  <br>
setTimeout (1) --> 1  <br>
logIt2().then(()) (4) --> 4  <br>


Result: 3, 6, 2, 5, 1, 4


Result: 3, 6, 2, 5, 1, 4
