function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seating = 'standard') {
  let price = quantity * basePrice;

  if (seating === 'premium') {
    price *= 1.50;
  }

  return Math.floor(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };