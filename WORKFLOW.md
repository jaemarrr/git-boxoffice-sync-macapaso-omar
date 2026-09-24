# Box Office Sync: Reconciling 3-Way Divergent Work on the Event Ticket

## Task Screenshots

### Task 1

![Task 1 Screenshot](TASK%201.PNG)

### Task 2

![Task 2 Screenshot](TASK%202.PNG)

### Task 3

![Task 3 Screenshot](TASK%203.PNG)

### Task 4

![Task 4 Screenshot](TASK%204.PNG)

### Task 5

![Task 5 Screenshot](TASK%205.PNG)

### Task 6

![Task 6 Screenshot](TASK%206.PNG)

### Task 7

![Task 7 Screenshot](TASK%207.PNG)

---

1. Walk through the final `calculateTicketPrice` and identify the contributor/change responsible for each part.

The final `calculateTicketPrice` combines the changes made by all contributors.

First, the original calculation multiplies the quantity by the base price. This was part of the original ticket pricing logic.

The 10% group discount for orders of 5 or more tickets came from Task 1 in Clone A. The condition checks if the quantity is at least 5 and reduces the price by 10%.

The price rounding using `Math.round() came from Task 2 in Clone B. This replaced the original truncation using Math.floor()

The 50% VIP surcharge for premium seating came from Task 4 in Clone C. If the seating is premium, the price is multiplied by 1.50.

Finally, the flat $10 discount came from Task 6 in Clone A. The price is reduced by $10 before the final rounding.

The final calculation therefore combines the original calculation, group discount, VIP surcharge, flat $10 discount, and rounding into one function.

---

2. Compare the Task 3 two-way conflict to the Task 5 three-way conflict. What got harder with the third line of work?

The Task 3 conflict was a two-way conflict between the group discount from Clone A and the rounding change from Clone B. Both contributors changed the same part of `tickets.js`, so the changes had to be combined manually.

Task 5 was harder because Clone C introduced a third line of work with the VIP surcharge. At this point, the final code needed to keep the group discount, rounding, and VIP surcharge at the same time. The test file also contained changes from the earlier work.

With three different lines of work, there were more changes to compare and more possibilities of accidentally removing another contributor's work. The merge required more careful checking and testing to make sure all three behaviors were preserved.

---

3. Task 6: The flat $10 discount changes the expected results of unrelated group/VIP tests. Why, and what does it tell about “isolated” changes in shared code?

The flat $10 discount changes the results of the group and VIP tests because all of these calculations use the same `calculateTicketPrice` function. The $10 discount is applied to the final price regardless of whether the order has a group discount or premium seating.

For example, the group price and VIP price both become lower after the flat discount is added. This shows that a change may seem isolated when it is being developed, but it can still affect other features when they share the same function or code.

This is why testing is important after resolving conflicts. The tests helped confirm that the group discount, VIP surcharge, rounding, and flat discount were all working together correctly.

---

4. If this were a real team of three, what one process change would prevent all three rejected pushes?

One process change would be to require each developer to synchronize with the latest remote branch before pushing their work. For example, each developer could fetch the latest changes and rebase their branch before pushing.

This would reduce the chance of pushing an outdated branch because the developer would first integrate the latest work from the other team members. It would also make conflicts easier to handle earlier instead of waiting until the push is rejected.
