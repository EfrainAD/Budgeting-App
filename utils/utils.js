export const formatMoney = (value) => {
   const digitsOnly = value.replace(/\D/g, '')
   return Number(digitsOnly / 100)
}
