import { createDefaultIncome } from '../constants/defaults.js'
import { fakeIncomes } from '../constants/fakeData.js'

let incomes = fakeIncomes

export const getIncomes = () => incomes

export const addIncome = () => {
   incomes.push(createDefaultIncome())
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
