import { useState } from "react";
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity } from "react-native";

export default function Index() {
  const [total, setTotal] = useState(0)
  const [showTotal, setShowTotal] = useState(false)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: 'row' }} >
        <Text>Total: ${total}</Text>

        <TouchableOpacity onPress={() => { setShowTotal(!showTotal) }}><Text style={{ paddingLeft: 50 }}>{showTotal ? "Done" : "Change Total"}</Text></TouchableOpacity>
      </View>
      {
        showTotal &&
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          }}
          value={total.toString()}
          onChangeText={(e) => setTotal(Number(e))}
          keyboardType="numeric"
        />
      }
    </SafeAreaView>
  );
}
