import MensagemRepository from "../repositories/MensagemRepository";

class MensagemService {
  constructor() {
    this.repository = new MensagemRepository();
    this.proximoId = Date.now();
  }

  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    if (!texto || !texto.trim()) {
      return null;
    }

    const novaMensagem = {
      id: this.proximoId++,
      contatoId,
      texto: texto.trim(),
      recebida: false,
    };

    this.repository.adicionarMensagem(novaMensagem);

    return novaMensagem;
  }
}

export default new MensagemService();
