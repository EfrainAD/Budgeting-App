import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import IncomeSection from '../components/IncomeSection.jsx'
import { getIncomes } from '../services/storage.js'

export default function Index() {
   const [incomes, setIncomes] = useState([])

   useEffect(() => {
      const x = getIncomes()
      setIncomes(x)
   })

   return (
      <SafeAreaView
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <IncomeSection incomes={incomes} setIncomes={setIncomes} />
      </SafeAreaView>
   )
}
