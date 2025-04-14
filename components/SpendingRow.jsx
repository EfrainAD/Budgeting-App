import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { deleteSpending, editSpending } from '../services/storage.js'
import MoneyInput from './MoneyInput.jsx'

const SpendingRow = ({ spending, setSpendings }) => {
   const { name, value, id } = spending

   const handleChangeInput = (field, newValue) => {
      const updatedSpending = editSpending({
         ...spending,
         [field]: newValue,
      })
      setSpendings(updatedSpending)
   }

   const handleRemoveRow = () => {
      const newSpendings = deleteSpending(id)
      setSpendings(newSpendings)
   }

   return (
      <View
         style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 200,
            marginTop: 10,
         }}
      >
         <TextInput
            style={{ flex: 1 }}
            autoCapitalize="words"
            value={name}
            onChangeText={(text) => handleChangeInput('name', text)}
         />
         <MoneyInput value={value} handleChangeInput={handleChangeInput} />
         <TouchableOpacity
            style={{
               marginLeft: 5,
               borderWidth: 1,
               height: 20,
               width: 20,
               borderRadius: 10,
               alignItems: 'center',
               justifyContent: 'center',
            }}
            onPress={handleRemoveRow}
         >
            <Text>X</Text>
         </TouchableOpacity>
      </View>
   )
}

export default SpendingRow
