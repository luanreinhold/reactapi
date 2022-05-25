import axios from "axios";
import { useState } from "react";
import './index.scss'

export default function Index() {
    const [qtdInteiras, setqtdInteiras] = useState(0);
    const [qtdMeias, setQtdMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setnacionalidade] = useState('');
    const [total, setTotal ] = useState(0);
   async function calcular() {
        const resp = await axios.post('http://localhost:5000/ingressoCinema', {
            qtdInteiras: qtdInteiras,
            qtdMeias: qtdMeias,
            diaSemana: diaSemana,
            nacionalidade: nacionalidade
        })
        setTotal(resp.data.tota)
    }

    return (
        <main>
            <div className="cinema-cont">
            <h1>Ingresso</h1>
            <div>
                Qtd. Inteiras: <input type='text' value={qtdInteiras} onChange={e => setqtdInteiras(Number(e.target.value))} />
            </div>
            <div>
                Qtd. Meias: <input type='text' value={qtdMeias} onChange={e => setQtdMeias(Number(e.target.value))} />
            </div>
            <div>
                Dia Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div>
                Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setnacionalidade(e.target.value)} />
            </div>
            <div>
                <button onClick={calcular}>calcular</button>
            </div>
            <div>
                <p>O total é R$</p> {total}
            </div>
            </div>
        </main>
    )

}

