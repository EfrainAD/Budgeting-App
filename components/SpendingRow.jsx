import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { formatMoney } from '../utils/utils.js'
import { deleteSpending, editSpending } from '../services/storage.js'

const SpendingRow = ({ spending, setSpendings }) => {
   const { name, value, id } = spending

   const handleChangeInput = (field, newValue) => {
      let updatedValue = newValue

      if (field === 'value') {
         updatedValue = formatMoney(newValue)
      }

      const updatedSpending = editSpending({
         ...spending,
         [field]: updatedValue,
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
         <TextInput
            style={{
               textAlign: 'right',
               width: 80,
               borderWidth: 1,
               padding: 1,
            }}
            value={value.toFixed(2)}
            onChangeText={(text) => handleChangeInput('value', text)}
            keyboardType="numeric"
         />
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
