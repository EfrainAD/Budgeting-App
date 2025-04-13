export const calculateTotalIncome = (incomes) =>
   incomes.reduce((total, income) => (total += income.value), 0)

export const formatMoney = (value) => {
   const digitsOnly = value.replace(/\D/g, '')
   return Number(digitsOnly / 100)
}
