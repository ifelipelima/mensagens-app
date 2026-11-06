import { View, Text } from "react-native";

export default function ChatScreen({ route }) {
  const { contatoId, nome } = route.params;

  return (
    <View>
      <Text>Conversa com {nome}</Text>
    </View>
  );
}
