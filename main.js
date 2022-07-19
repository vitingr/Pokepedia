// FETCH - COMANDO DE PESQUISA QUE RETORNA OS VALORES DE PESQUISA

// BOTÃO DE ENVIAR

document.querySelectorAll(".text-input").forEach((Element) => {
    Element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled");
        } else {
            event.target.nextElementSibling.classList.remove("filled")
        }
    })
})

// PESQUISA DE POKEMON

let formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e) {

    // Bloqueia o refresh da página
    e.preventDefault()

    // URL da pesquisa na API
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    // Valor do input 
    let nome = document.querySelector('#pesquisa').value

    // Gerar URL + nome/id do Pokemon
    urlForm = urlForm + nome

    // Tranforma a URL em minuscula 
    urlForm = urlForm.toLocaleLowerCase()

    // Variáveis Content
    let resposta = document.querySelector('#content')
    let imagem = document.querySelector('#imgPokemon')

    // Resposta em HTML

    let html = ''

    // FETCH - Pesquisa na URL e retorna os valores em json e após isso utilizamos para pegar os dados do Array
    fetch(urlForm)
        .then(resposta => resposta.json()) // then funciona como o try do python
        .then(function(data) {
            console.log(data)
            // Encontrar o Nome do pokemon pelo ID e o uppercase e substring para retornar com a primeira letra maiuscula 
            html = 'Nome: ' + data.name[0].toUpperCase() + data.name.substring(1) + '<br>'
            html = html + 'ID: ' + data.id + '<br>'
            html = html + 'Tipo: ' + data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.substring(1) + '<br>' 
            html = html + 'Overall: ' + ((Number(data.stats[0].base_stat) + Number(data.stats[1].base_stat) + Number(data.stats[2].base_stat) + Number(data.stats[4].base_stat)) / 4).toFixed(0) + '<br>' + '<br>'
            // Atributos
            html = html + 'Vida: ' + data.stats[0].base_stat + '<br>'
            html = html + 'Ataque: ' + data.stats[1].base_stat + '<br>'
            html = html + 'Defesa: ' + data.stats[2].base_stat + '<br>'
            html = html + 'Velocidade: ' + data.stats[4].base_stat + '<br>'
            resposta.innerHTML = html + '<br>'

            // Imagens dos Pokemons
            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'> <img src='" + data.sprites.back_default + "'>"             // o data sempre irá retornar a url, pois o .then está dentro do fetch que está usando a url, por causa disso o ele usa o data(Url) + o caminho da Array que eu quero que retorne os dados.

            // Alterar imagem do fundo dos detalhes do Pokemon
            let background = document.querySelector('#content')
            let elemento = data.types[0].type.name
            console.log(elemento)
            if (elemento == 'fire') {
                background.style.backgroundColor = '#FF6426'
                background.style.border = '1px solid #731702'
                background.style.color = 'white'
            } else {
                if (elemento == 'grass') {
                    background.style.backgroundColor = '#358067'
                    background.style.border = '1px solid #87B58E'
                    background.style.color = 'white'
                } else {
                    if (elemento == 'water') {
                        background.style.backgroundColor = '#4874C7'
                        background.style.border = '1px solid #363E96'
                        background.style.color = 'white'
                    } else {
                        if (elemento == 'bug') {
                            background.style.backgroundColor = '#727F00'
                            background.style.border = '1px solid #A8B820'
                            background.style.color = 'white'
                        } else {
                            if (elemento == 'normal') {
                                background.style.backgroundColor = 'white'
                                background.style.border = '1px solid #717171'
                                background.style.color = '#333'
                            } else {
                                if (elemento == 'poison') {
                                    background.style.backgroundColor = '#8A0FCC'
                                    background.style.border = '1px solid #FC46FF'
                                    background.style.color = 'white'
                                } else {
                                    if (elemento == 'electric') {
                                        background.style.backgroundColor = '#E1CA00'
                                        background.style.border = '1px solid #000D33'
                                        background.style.color = '#000D33'
                                    } else {
                                        if (elemento == 'ground') {
                                            background.style.backgroundColor = '#33251D'
                                            background.style.border = '1px solid #8C6954'
                                            background.style.color = 'white'
                                        } else {
                                            if (elemento == 'fighting') {
                                                background.style.backgroundColor = '#C29A77'
                                                background.style.border = '1px solid #000000'
                                                background.style.color = 'white'
                                            } else {
                                                if (elemento == 'psychic') {
                                                    background.style.backgroundColor = '#FF296A'
                                                    background.style.border = '1px solid #7F1535'
                                                    background.style.color = 'white'
                                                } else {
                                                    if (elemento == 'rock') {
                                                        background.style.backgroundColor = '#A89D6F'
                                                        background.style.border = '1px solid #F2D0A7'
                                                        background.style.color = '#333'
                                                    } else {
                                                        if (elemento == 'flying') {
                                                            background.style.backgroundColor = '#D8E8E8'
                                                            background.style.border = '1px solid #666666'
                                                            background.style.color = '#333'
                                                        } else {
                                                            if (elemento == 'ghost') {
                                                                background.style.backgroundColor = '#DFE2FF'
                                                                background.style.border = '1px solid #843BBC'
                                                                background.style.color = '#843BBC'
                                                            } else {
                                                                if (elemento == 'ice') {
                                                                    background.style.backgroundColor = '#A8C9DA'
                                                                    background.style.border = '1px solid #49738C'
                                                                    background.style.color = '#061324'
                                                                } else {
                                                                    if (elemento == 'dragon') {
                                                                        background.style.backgroundColor = '#35346D'
                                                                        background.style.border = '1px solid #6B1A71'
                                                                        background.style.color = 'white'
                                                                    } else {
                                                                        if (elemento == 'steel') {
                                                                            background.style.backgroundColor = '#D9D9D9'
                                                                            background.style.border = '1px solid #737272'
                                                                            background.style.color = '#262625'
                                                                        } else {
                                                                            if (elemento == 'dark') {
                                                                                background.style.backgroundColor = '#1C1F26'
                                                                                background.style.border = '1px solid #010712'
                                                                                background.style.color = 'white'
                                                                            } else {
                                                                                if (elemento == 'fairy') {
                                                                                    background.style.backgroundColor = '#D6A0ED'
                                                                                    background.style.border = '1px solid #D6A0ED'
                                                                                    background.style.color = 'white'
                                                                                } else {
                                                                                    background.style.backgroundColor = '#FFCC01'
                                                                                    background.style.border = '1px solid #c8a102'
                                                                                    background.style.color = '#333'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        // Em caso de erro exibir o erro no console
        .catch(function(erro) { // functiona como except do python
            if (erro == 'SyntaxError: Unexpected token N in JSON at position 0') {
                html = `O Pokémon com ID/Nome "${nome}" não existe. Tente novamente!`
            } else {
                html = `Erro desconhecido! Tente Novamente` + '<br>'
                html = html + `Erro: ${erro}`
            }
            resposta.innerHTML = html
            console.log(erro)
        }) 
})

// PARA DEIXAR AS LETRAS MAISCULAS PODERIA TER FEITO ISSO TB

function maiuscula(valor) {
    // No caso irá selecionar o caractere 0 (a primeira string) e o subtring(1), que seria para adicionar a uppercase a um outro texto que começa a partir da segunda string do texto original. 
    return valor[0].toUpperCase() + valor.substring(1)
} 
