import { View, Text } from 'react-native'
import { calculateTotalIncome } from '../utils/utils.js'

const IncomeSummary = ({ incomes }) => {
   const totalIncome = calculateTotalIncome(incomes).toFixed(2)

   return (
      <View style={{ flexDirection: 'row', margin: 10 }}>
         <Text>Total: ${totalIncome}</Text>
      </View>
   )
}

export default IncomeSummary
