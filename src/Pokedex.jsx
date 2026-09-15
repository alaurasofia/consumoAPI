
import { useState } from "react";

function Pokedex() {
    const [pokemons, setPokemons] = useState(null);
    const [pesquisa, setPesquisa] = useState("");

    async function buscarNome(nome) {
        if (!nome.trim()) return;

        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + nome.toLowerCase()
        );

        const data = await response.json();
        setPokemons(data);
    }

    return (
        <div className="pokedex">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

                * {
                    box-sizing: border-box;
                }

                .pokedex {
                    min-height: 100vh;
                    padding: 40px 20px;
                    text-align: center;
                    font-family: "Oswald", sans-serif;
                    color: #172554;
                    background: linear-gradient(135deg, #fff176, #ffd43b);
                    overflow: hidden;
                }

                .titulo {
                    font-size: 55px;
                    margin: 20px 0 5px;
                    color: #0755c9;
                    letter-spacing: 2px;
                    text-shadow: 3px 3px 0 white;
                    animation: aparecer 0.8s ease;
                }

                .titulo span {
                    color: #f5b800;
                }

                .subtitulo {
                    color: #174ea6;
                    font-weight: 400;
                    margin-bottom: 30px;
                }

                .pesquisa {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    flex-wrap: wrap;
                }

                .pesquisa input {
                    width: 270px;
                    padding: 14px 18px;
                    border: 3px solid #0755c9;
                    border-radius: 15px;
                    background: white;
                    outline: none;
                    font-family: "Oswald", sans-serif;
                    font-size: 16px;
                    transition: 0.3s;
                }

                .pesquisa input:focus {
                    box-shadow: 0 0 15px #0755c966;
                    transform: scale(1.03);
                }

                .pesquisa button {
                    padding: 14px 22px;
                    border: none;
                    border-radius: 15px;
                    background: #0755c9;
                    color: white;
                    font-family: "Oswald", sans-serif;
                    font-size: 16px;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .pesquisa button:hover {
                    background: #003b91;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 0 #f5b800;
                }

                .vazio {
                    margin-top: 45px;
                    color: #174ea6;
                    font-size: 18px;
                    animation: aparecer 1s ease;
                }

                .card {
                    width: 320px;
                    max-width: 100%;
                    margin: 40px auto;
                    padding: 25px;
                    border-radius: 25px;
                    background: white;
                    border: 5px solid #0755c9;
                    box-shadow: 0 10px 0 #f5b800,
                                0 15px 30px #174ea655;
                    animation: entrar 0.6s ease;
                }

                .card h2 {
                    font-size: 32px;
                    text-transform: capitalize;
                    color: #0755c9;
                    margin-bottom: 12px;
                }

                .tipo {
                    display: inline-block;
                    padding: 8px 18px;
                    border-radius: 20px;
                    background: #fff176;
                    color: #174ea6;
                    font-size: 16px;
                    text-transform: capitalize;
                }

                .pokemon {
                    width: 190px;
                    margin-top: 15px;
                    filter: drop-shadow(0 8px 5px #174ea633);
                    animation: flutuar 2.5s ease-in-out infinite;
                }

                .rodape {
                    margin-top: 35px;
                    font-size: 14px;
                    color: #174ea6;
                    letter-spacing: 2px;
                }

                @keyframes flutuar {
                    0%, 100% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(-14px);
                    }
                }

                @keyframes entrar {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }

                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes aparecer {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 1;
                    }
                }
            `}</style>

            <h1 className="titulo">
                ⚡ Poké<span>dex</span>
            </h1>

            <h4 className="subtitulo">
                Explore o universo Pokémon
            </h4>

            <div className="pesquisa">
                <input
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            buscarNome(pesquisa);
                        }
                    }}
                    placeholder="Pesquise um Pokémon..."
                />

                <button onClick={() => buscarNome(pesquisa)}>
                    🔍 Buscar
                </button>
            </div>

            {pokemons == null ? (
                <p className="vazio">
                    ✦ Digite um nome para descobrir seu Pokémon
                </p>
            ) : (
                <div className="card">
                    <h2>{pokemons.name}</h2>

                    <span className="tipo">
                        {pokemons.types[0].type.name}
                    </span>

                    <img
                        className="pokemon"
                        src={pokemons.sprites.other.showdown.front_default}
                        alt={pokemons.name}
                    />
                </div>
            )}

            <p className="rodape">
                POKÉDEX • EXPLORE • DESCUBRA
            </p>

        </div>
    );
}

export default Pokedex;