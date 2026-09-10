import { useEffect, useState } from "react";

function App() {

    const [usuarios, setUsuarios] = useState([])
    const [pesquisa, setPesquisa] = useState("")

    async function buscarTodos() {

        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        setUsuarios(data.users)
    }

    async function buscarNome(nome){
        const response = await fetch("https://dummyjson.com/users/search?q="+nome)
        const data = await response.json()
        console.log(data)
        setUsuarios(data.users)
    }

    function mostrarInformacoes(usuario) {
        alert("Telefone: " + usuario.phone + "\nEmail: " + usuario.email + "\nMora em: " + usuario.address.city)
    }

    useEffect(() => {
        buscarTodos()
    }, [])

    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados de API DummyJSON</p>

            <hr />
            <input onChange={ e => setPesquisa(e.target.value) }  placeholder="Digite um nome..." />
            <button onClick={ ()=> buscarNome(pesquisa) }> 🔎Pesquisar</button> 

            <ul>
                {
                    usuarios.length == 0 ?
                        <p>lista vazia</p>
                        :
                        usuarios.map(
                            i => <li>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${i.firstName}&color=636b2f &rounded=true &background=88e788`}
                                    alt="{i.firstName}"

                                />

                                {i.gender === "male" ? "O senhor " : "A senhora "}
                                {i.firstName} tem {i.age} anos.
                                <button onClick={() => mostrarInformacoes(i)}>Ver informaçõees</button>
                            </li>
                        )
                }

            </ul>

        </div>
    );
}

export default App;