import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import View from './Pages/View'
import Wish from './Pages/Wish'
import Cart from './Pages/Cart'
import Header from './Components/Header'
import Footer from './Components/Footer'
import toast, { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wish' element={<Wish/>}/>
      </Routes>
      <Footer/>
      <Toaster />
    </>
  )
}

export default App
