import { View, Text, StyleSheet } from "react-native";

export default function Mensagem({ mensagem, recebida }) {
  return (
    <View
      style={[styles.mensagem, recebida ? styles.recebida : styles.enviada]}
    >
      <Text>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mensagem: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    maxWidth: "80%",
  },
  recebida: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },
  enviada: {
    alignSelf: "flex-end",
    backgroundColor: "#bfe7e1",
  },
});
