import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { formatMoney } from '../utils/utils.js'

const IncomeRow = ({ income, changeIncome, removeIncome }) => {
   const { name, value } = income

   const handleChangeInput = (field, newValue) => {
      let updatedValue = newValue

      if (field === 'value') {
         updatedValue = formatMoney(newValue)
      }

      changeIncome({ ...income, [field]: updatedValue })
   }

   const handleRemoveIncome = () => removeIncome(income.id)

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
            onPress={handleRemoveIncome}
         >
            <Text>X</Text>
         </TouchableOpacity>
      </View>
   )
}

export default IncomeRow
