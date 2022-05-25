import { useState } from "react";
import axios from "axios"
import './index.scss'

export default function Index() {
    
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');

   async function verificarCorPrimaria() {
        const resp = await axios.get('http://localhost:5000/CorPrimaria/' + cor)
        if (resp.data.Primaria === true) {
            setResposta('SIM!')
        } else {
            setResposta('NÃO!');
        }
    }

    return (
        <main>
            <div className="cor-cont">
            <h1> Cor Primária </h1>
            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
            </div>
            <div>
                <button onClick={verificarCorPrimaria}> Verificar </button>
            </div>
            <div>
                É cor primária? {resposta}
            </div>
            </div>
        </main>
    )
}