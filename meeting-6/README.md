I STEP. ALL in STACK

I. setTimeout --> STACK | (1)
II. Promise --> STACK | (2)  
III. console.log("3") --> STACK | (3)
IV. logIt2().then(()) --> STACK | (4)  
V. logIt().then(()) --> STACK | (5)  
VI. console.log("6") --> STACK | (6)

---

II STEP.

console.log("3") from STACK --> first result (3)
console.log("6") from STACK --> second result (6)

setTimeout (1) from STACK --> API --> MAKRO reason (setTimeout)
Promise (2) from STACK --> API --> MIKRO reason (Promise)
logIt2().then(()) (4) from STACK --> API --> MAKRO reason (setTimeout)
logIt().then(()) (5) from STACK --> API --> MIKRO reason (Promise)

---

III STEP. Result

I. Sync. func.
console.log("3") --> 3
console.log("6") --> 6

II. MIKRO
Promise (2) --> 2
logIt().then(()) (5) --> 5

III. MAKRO
setTimeout (1) --> 1
logIt2().then(()) (4) --> 4

Result: 3, 6, 2, 5, 1, 4
