import { formatMoneyInput } from '@/utils/utils'
import { TextInput } from 'react-native'

const MoneyInput = ({ value, handleChangeInput }) => {
   console.log('value', value)

   const handleChangeText = (text) => {
      const formatedValue = formatMoneyInput(text)
      handleChangeInput('value', formatedValue)
   }
   return (
      <TextInput
         style={{
            textAlign: 'right',
            width: 80,
            borderWidth: 1,
            padding: 1,
         }}
         value={value.toFixed(2)}
         onChangeText={handleChangeText}
         keyboardType="numeric"
      />
   )
}

export default MoneyInput
/*

*/
