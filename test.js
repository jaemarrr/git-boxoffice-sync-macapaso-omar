const tickets = require('./tickets');

let failures = 0;
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(tickets.isValidQuantity(4), true, 'a normal order quantity is valid');
assertEqual(tickets.isValidQuantity(0), false, 'a zero quantity is invalid');
assertEqual(tickets.isValidQuantity(25), false, 'an order over 20 tickets is invalid');

const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 47, 'price for 3 tickets at $15.50 each');

const groupPrice = tickets.calculateTicketPrice(5, 15.5);
assertEqual(groupPrice, 70, '5 tickets at $15.50 with 10% group discount and rounding');

const vipPrice = tickets.calculateTicketPrice(2, 100, 'premium');
assertEqual(vipPrice, 300, '2 premium tickets with 50% VIP surcharge');

process.exitCode = failures > 0 ? 1 : 0;
