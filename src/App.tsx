import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './componts/Header/Navbar'
import Footer from './componts/footer/Footer'
function App() {

  return (
  <>
  <section className='flex flex-col bg-black h-full w-full absolute top-0 left-0'>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </section>
  </>
  )
}

export default App