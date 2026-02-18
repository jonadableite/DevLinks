// garante que a função esteja disponível globalmente para o onclick="toggleMode()"
function toggleMode() {
  // pegar o checkbox
  const checkbox = document.getElementById("input");
  // se não encontrar o checkbox, não faz nada
  if (!checkbox) return;
  // inverte o estado do checkbox (simula o clique)
  checkbox.checked = !checkbox.checked;
  // mapeamento invertido: checkbox.checked === true -> tema escuro
  document.documentElement.classList.toggle("light", !checkbox.checked);

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // subistituir a imagem
  if (checkbox.checked) {
    // se tiver sem light mode, manter a imagem noraml
    img.src = "./assets/Avatar.png";
  } else {
    // se tiver light mode, adicionar a imagem light
    img.src = "./assets/avatar-light.png";
  }
}

// sincroniza estado inicial e adiciona listener mais robusto
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("input");
  if (!checkbox) return;

  // aplica tema inicial: checkbox marcado -> tema escuro
  document.documentElement.classList.toggle("light", !checkbox.checked);

  // ao mudar o checkbox, aplica/remover a classe (inverso)
  checkbox.addEventListener("change", () => {
    document.documentElement.classList.toggle("light", !checkbox.checked);
  });
});
