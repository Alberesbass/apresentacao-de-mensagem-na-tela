function saudacaoUsuario() {
  let nomeUsuario = window.prompt('Nome do usuário:');
  if (nomeUsuario) {
    window.alert('Seja bem vindo(a), ' + nomeUsuario + '!');
  } else {
    window.alert('Usuário Inválido');
  }
}

saudacaoUsuario();
