//Passo 1 - precisamos criar um variável no JS pra trabalhar com as listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
//Passo 2 - identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
    //Passo - 3 remover a classe aberto só do cartão que está aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");
    //Passo 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" +  idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        
        cartaoPokedevParaAbrir.classList.add("aberto");

    //Passo 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");
        
    //Passo 6 - adicionar a classe aativo no pokedev selecionado na listagem
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoNaListagem.classList.add("ativo");
    });
});
