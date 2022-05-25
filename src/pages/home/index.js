import { Link } from "react-router-dom";


export default function Index() {
    return (
        <main>
            <h1>Home</h1>
            <ul>
                    <li> <Link to='/dobro'> Dobro </Link></li>
                    <li> <Link to='/corPrimaria'> Cor </Link> </li>
                    <li> <Link to='/cinema'> Cinema </Link>  </li>
                    <li> <Link to='/frequencia'> Frequencia Caracter </Link></li>
            </ul>
        </main>
    )
}