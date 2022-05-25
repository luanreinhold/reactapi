/* import axios from "axios"
import { useState } from "react"

export default function Index() {
    const [dobro, setDobro] = useState(0);
    const [resposta, SetResposta] = useState(0);

    async function verificarDobro() {
       const resp = await axios.get('http://localhost:5000/dobro/' + dobro)
    }
    

    SetResposta(resp.data.dobro);

    return (
        <main>
            <h1>Maior Numero</h1>
            <div>
            <p>Dobro</p> <input type='text' value={dobro} onChange={e => setDobro(e.target.value)} />
                <div>
                    <button onClick={verificarDobro}>Verificar</button> 
                </div>
                <div>
                    <p>É cor primaria?</p> {resposta}
                </div>
               
            </div>



        </main>
    )

}
*/