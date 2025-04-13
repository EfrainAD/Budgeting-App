import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import IncomeSummary from '../components/IncomeSummary.jsx'

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
         <IncomeSummary incomes={incomes} />
         <IncomeSection incomes={incomes} setIncomes={setIncomes} />
      </SafeAreaView>
   )
}
