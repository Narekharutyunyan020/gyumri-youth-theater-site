import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Derasanner from './Pages/Derasanner/Actors';
import Home from './Pages/Home/Home';
import Mermasin from './Pages/Mermasin/Mermasin';
import Nerkayacumer from './Pages/Nerkayacumner/Nerkayacumer';
import Kap from './Pages/Kap/Kap';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/Actors' element={<Derasanner />} />
        <Route path='Մերմասին' element={<Mermasin/>}/>
        <Route path='Ներկայացումներ'element={<Nerkayacumer/>}/>
        <Route path='Կապ' element={<Kap/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
