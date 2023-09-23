document.getElementById("button_add").onclick = function () {
  let text_input = document.getElementById("input_tarefa").value;
  let new_task =
    '<div id="tarefas"><span>' +
    text_input +
    '</span> <button id="deletar">Del</button></div>';

  if (text_input.length == 0) {
    alert("Digite alguma tarefa");
  } else {
    document.getElementById("novas_tarefas").innerHTML += new_task;
  }

  let numero_de_tarefas = document.querySelectorAll("#deletar");

  for (let index = 0; index < numero_de_tarefas.length; index++) {
    numero_de_tarefas[index].onclick = function () {
      this.parentNode.remove();
    };
  }
};
