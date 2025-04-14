import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import MoneyInput from './MoneyInput.jsx'

const IncomeRow = ({ income, changeIncome, removeIncome }) => {
   const { name, value } = income

   const handleChangeInput = (field, newValue) => {
      changeIncome({ ...income, [field]: newValue })
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
            onPress={handleRemoveIncome}
         >
            <Text>X</Text>
         </TouchableOpacity>
      </View>
   )
}

export default IncomeRow
