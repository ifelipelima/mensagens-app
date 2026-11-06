import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const contatos = [
  { id: 1, nome: "Bino" },
  { id: 2, nome: "Mateus" },
  { id: 3, nome: "Gabriel" },
  { id: 4, nome: "Levi Matheus" },
];

export default function HomeScreen({ navigation }) {
  function abrirConversa(contato) {
    navigation.navigate("Chat", {
      contatoId: contato.id,
      nome: contato.nome,
    });
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contato}
            onPress={() => abrirConversa(item)}
          >
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contato: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  nome: {
    fontSize: 18,
  },
});
