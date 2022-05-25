import axios from "axios";
import { useState } from "react";


export default function Index() {
    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificar () {
        const resp = await axios.get(`http://localhost:5000/FreqCaractere/${texto}/${caractere}`)
        setResposta(resp.data.freq);
    }
    return (
        <main>
            <div className="cont">
            <h1>Frequencia</h1>
            <div>
                Texto: <input type='text' value={texto} onChange= {e => setTexto(e.target.value)} />
            </div>
            <div>
                Caractere: <input type='text' value={caractere} onChange= {e => setCaractere(e.target.value)} />
            </div>
            <div>
                <button onClick={verificar}> Verificar </button>
            </div>
            <div>
                Frequência: {resposta}
            </div>
            </div>
        </main>
    )
}