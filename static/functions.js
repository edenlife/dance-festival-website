export const formatNumber = (number) => {
  return number ? number.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
}

export const currencyFormat = (number) => {
  return number ? number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0
}
