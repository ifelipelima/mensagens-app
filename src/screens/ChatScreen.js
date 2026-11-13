import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import Mensagem from "../components/Mensagem";
import { useState } from "react";
import MensagemService from "../services/MensagemService";

export default function ChatScreen({ route }) {
  const { contatoId, nome } = route.params;
  const headerHeight = useHeaderHeight();

  const [mensagens, setMensagens] = useState(() =>
    MensagemService.getMensagens(contatoId),
  );

  const [texto, setTexto] = useState("");

  function enviarMensagem() {
    const novaMensagem = MensagemService.enviarMensagem(contatoId, texto);

    if (!novaMensagem) return;

    setMensagens((anteriores) => [...anteriores, novaMensagem]);
    setTexto("");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={headerHeight}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>{nome}</Text>

        <FlatList
          data={mensagens}
          keyExtractor={(item) => item.id.toString()}
          style={styles.listaMensagens}
          renderItem={({ item }) => (
            <Mensagem mensagem={item.texto} recebida={item.recebida} />
          )}
        />

        <View style={styles.areaEnvio}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem..."
            value={texto}
            onChangeText={setTexto}
          />
          <TouchableOpacity style={styles.botao} onPress={enviarMensagem}>
            <Text style={styles.textoBotao}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listaMensagens: {
    flex: 1,
  },
  areaEnvio: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },
  botao: {
    backgroundColor: "#25bfd3",
    padding: 12,
    borderRadius: 12,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
