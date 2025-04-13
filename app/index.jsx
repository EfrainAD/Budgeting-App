import { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import IncomeRow from '../components/IncomeRow.jsx'
import { calculateTotalIncome } from '../utils/utils.js'
import {
   addIncome,
   deleteIncome,
   editIncome,
   getIncomes,
} from '../services/storage.js'

export default function Index() {
   const [incomes, setIncomes] = useState([
      { id: 1, name: 'e 10', value: 10 },
      { id: 2, name: '10.0', value: 10.0 },
      { id: 3, name: '10.23', value: 10.23 },
      { id: 4, name: '0.1', value: 0.1 },
      { id: 5, name: '0.13', value: 0.13 },
      { id: 6, name: '1.0', value: 1.0 },
      { id: 7, name: '1.03', value: 1.03 },
   ])

   useEffect(() => {
      const x = getIncomes()
      setIncomes(x)
   })

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
      <SafeAreaView
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <View style={{ flexDirection: 'row', margin: 10 }}>
            <Text>Total: ${calculateTotalIncome(incomes).toFixed(2)}</Text>
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
      </SafeAreaView>
   )
}
