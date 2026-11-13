class MensagemRepository {
  constructor() {
    this.mensagens = [
      {
        id: 1,
        contatoId: 1,
        texto: "Olá! Tudo bem?",
        recebida: true,
      },
      {
        id: 2,
        contatoId: 1,
        texto: "Tudo sim, e você?",
        recebida: false,
      },
      {
        id: 3,
        contatoId: 1,
        texto: "Tudo ótimo!",
        recebida: true,
      },
      {
        id: 4,
        contatoId: 2,
        texto: "Bom dia!",
        recebida: true,
      },
    ];
  }

  getMensagens(contatoId) {
    return this.mensagens.filter(
      (mensagem) => mensagem.contatoId === contatoId,
    );
  }

  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}

export default MensagemRepository;
