let incomes = [
   { id: 1, name: 'e 10', value: 10 },
   { id: 2, name: '10.0', value: 10.0 },
   { id: 3, name: '10.23', value: 10.23 },
   { id: 4, name: '0.1', value: 0.1 },
   { id: 5, name: '0.13', value: 0.13 },
   { id: 6, name: '1.0', value: 1.0 },
   { id: 7, name: '1.03', value: 1.03 },
]

export const getIncomes = () => incomes

export const addIncome = () => {
   incomes.push({
      id: Date.now(),
      name: ``,
      value: 0,
   })
   return [...incomes]
}

export const editIncome = (editedIncome) => {
   incomes = incomes.map((income) =>
      income.id === editedIncome.id ? editedIncome : income
   )
   return incomes
}

export const deleteIncome = (id) => {
   incomes = incomes.filter((income) => income.id !== id)
   return incomes
}
