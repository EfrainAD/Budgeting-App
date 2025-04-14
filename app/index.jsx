import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import IncomeSummary from '../components/IncomeSummary.jsx'
import IncomeSection from '../components/IncomeSection.jsx'
import SpendingSection from '../components/SpendingSection.jsx'

import { getIncomes, getSections, getSpendings } from '../services/storage.js'

export default function Index() {
   const [incomes, setIncomes] = useState([])
   const [sections, setSections] = useState([])
   const [spendings, setSpendings] = useState([])

   useEffect(() => {
      const fetchedIncomes = getIncomes()
      setIncomes(fetchedIncomes)

      const fetchedSections = getSections()
      setSections(fetchedSections)

      const fetchedSpendings = getSpendings()
      setSpendings(fetchedSpendings)
   }, [])

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
         {sections.map((section, index) => {
            return (
               <SpendingSection
                  key={index}
                  section={section}
                  setSections={setSections}
                  spendings={spendings.filter(
                     (spend) => spend.section_id === section.id
                  )}
                  setSpendings={setSpendings}
               />
            )
         })}
      </SafeAreaView>
   )
}
