export const calculateTotalIncome = (incomes) =>
   incomes.reduce((total, income) => (total += income.value || 0), 0)

export const formatMoneyInput = (value) => {
   const digitsOnly = value.replace(/\D/g, '')
   return Number(digitsOnly / 100)
}
