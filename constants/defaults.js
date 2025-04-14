export const createDefaultIncome = () => ({
   id: Date.now(),
   name: '',
   value: 0,
})

export const createDefaultSection = () => ({
   id: Date.now(),
   name: '',
})

export const createDefaultSpending = (section_id) => ({
   id: Date.now(),
   section_id,
   name: '',
   value: 0,
})
