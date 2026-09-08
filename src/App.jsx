import { useState } from "react";

function App() {

    const [usuarios, setUsuarios] = useState([])

    async function buscarTodos() {

        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        setUsuarios(data.users)
    }

    function mostrarInformacoes(usuario) {
        alert("Telefone: " + usuario.phone + "\nEmail: " + usuario.email+"\nMora em: "+ usuario.address.city)
    }

    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados de API DummyJSON</p>

            <ul>
                {
                    usuarios.length == 0 ?
                        <button onClick={buscarTodos}>Carregar Dados</button>
                        :
                        usuarios.map(
                            i => <li> Sr(a) {i.firstName} tem {i.age} anos.
                           < button onClick={() => mostrarInformacoes(i)}>Ver informaçõees</button> </li>
                        )
                }

            </ul>

        </div>
    );
}

export default App;