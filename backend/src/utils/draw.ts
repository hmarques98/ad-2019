export const draw = (array: [] | any) => {
  let result = [];
  let allUsers = array.slice();
  //array para enviar o email com os dados com o amigo secreto
  let lengthUsers = array.length;
  // quantidade de participantes
  for (let pos = 0; pos < lengthUsers; pos++) {
    let friendSender = array[pos];
    //index do amigo remetente
    let secretFriendIndex = Math.floor(Math.random() * allUsers.length);
    //index do amigo secreto
    while (array[secretFriendIndex] == friendSender) {
      //evitando amigo secreto ser o remetente, no caso a mesma pessoa
      //e fazendo outro random
      secretFriendIndex = Math.floor(Math.random() * allUsers.length);
    }

    let secretFriendDrawn = allUsers.splice(secretFriendIndex, 1)[0];
    // pegando o amigo secreto e exluindo ele
    result.push({
      friendSender,
      secretFriendDrawn,
    });
    // inserindo no array o amigo remetente + seu amigo secreto
  }
  return result;
  // retorna a lista
};
