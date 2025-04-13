import { View, Text, TouchableOpacity } from 'react-native'

import IncomeRow from './IncomeRow'
import { addIncome, deleteIncome, editIncome } from '../services/storage.js'

const IncomeSection = ({ incomes, setIncomes }) => {
   const handleAddIncome = () => {
      const updatedIncomes = addIncome()
      setIncomes(updatedIncomes)
   }

   const handleEditIncome = (editedIncome) => {
      const updatedIncomes = editIncome(editedIncome)
      setIncomes(updatedIncomes)
   }

   const handleDeleteIncome = (id) => {
      const updatedIncomes = deleteIncome(id)
      setIncomes(updatedIncomes)
   }

   return (
      <>
         <View style={{ flexDirection: 'row', margin: 10 }}>
            <Text>Income</Text>
            <TouchableOpacity onPress={handleAddIncome}>
               <Text style={{ paddingLeft: 50 }}>+</Text>
            </TouchableOpacity>
         </View>
         {incomes.map((income, index) => (
            <IncomeRow
               key={index}
               income={income}
               changeIncome={handleEditIncome}
               removeIncome={handleDeleteIncome}
            />
         ))}
      </>
   )
}

export default IncomeSection
