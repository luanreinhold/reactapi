import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import Dobro from './pages/dobro'
import Cor from './pages/corPrimaria'
import Cinema from './pages/cinema'
import Frequencia from './pages/frequencia'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dobro' element={<Dobro />} />
                <Route path='/corPrimaria' element={<Cor />} />
                <Route path='/cinema' element={<Cinema />} />
                <Route path='/frequencia' element={<Frequencia />} />
            </Routes>
        </BrowserRouter>
    )
}