import { Text, TouchableOpacity, View } from 'react-native'
import SpendingRow from './SpendingRow'
import { addSpending } from '../services/storage.js'

const SpendingSection = ({ section, setSection, spendings, setSpendings }) => {
   const { title, id: section_id } = section

   const handleAddSpending = () => {
      const updatedSpendings = addSpending(section_id)
      setSpendings(updatedSpendings)
   }

   ////// Not implemented yet. //////
   // const handleEditSection = (editedSection) => {
   //    // const updatedSections = editSection(editedSection)
   //    // setSections(updatedSections)
   // }

   ////// Not implemented yet. //////
   // const handleDeleteSection = (id) => {
   //    // const updatedSection = deleteSection(id)
   //    // setSection(updatedSection)
   // }

   return (
      <>
         <View style={{ flexDirection: 'row', margin: 10 }}>
            <Text>{title}</Text>
            <TouchableOpacity onPress={handleAddSpending}>
               <Text style={{ paddingLeft: 50 }}>+</Text>
            </TouchableOpacity>
         </View>
         {spendings &&
            spendings.map((spending, index) => (
               <SpendingRow
                  key={index}
                  spending={spending}
                  setSpendings={setSpendings}
               />
            ))}
      </>
   )
}

export default SpendingSection
