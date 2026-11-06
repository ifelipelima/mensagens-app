import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Contatos</Text>

      <Button
        title="Abrir conversa"
        onPress={() =>
          navigation.navigate("Chat", {
            contatoId: 1,
            nome: "João",
          })
        }
      />
    </View>
  );
}
