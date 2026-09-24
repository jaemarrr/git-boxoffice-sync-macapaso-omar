function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seating = 'standard') {
  let price = quantity * basePrice;

  if (quantity >= 5) {
    price *= 0.90;
  }

  if (seating === 'premium') {
    price *= 1.50;
  }

  return Math.round(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };