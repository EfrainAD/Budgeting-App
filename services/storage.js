import {
   createDefaultIncome,
   createDefaultSpending,
   createDefaultSection,
} from '../constants/defaults.js'
import {
   fakeIncomes,
   fakeSections,
   fakeSpending,
} from '../constants/fakeData.js'

let incomes = fakeIncomes
let sections = fakeSections
let spendings = fakeSpending

// INCOME
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

// SECTION
export const getSections = () => sections

export const addSection = () => {
   sections.push(createDefaultSection())
   return [...sections]
}

export const editSection = (editedSection) => {
   sections = sections.map((section) =>
      section.id === editedSection.id ? editedSection : section
   )
   return sections
}

export const deleteSection = (id) => {
   sections = sections.filter((section) => section.id !== id)
   return sections
}

///// Spending
export const getSpendings = () => spendings

export const addSpending = (section_id) => {
   spendings.push(createDefaultSpending(section_id))
   return [...spendings]
}

export const editSpending = (editedSpending) => {
   spendings = spendings.map((spending) =>
      spending.id === editedSpending.id ? editedSpending : spending
   )
   return spendings
}

export const deleteSpending = (id) => {
   spendings = spendings.filter((spending) => spending.id !== id)
   return spendings
}
