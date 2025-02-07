import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { CartProvider } from './context/CartContext'
import { AppRoutes } from './pages/app-routes'
import Footer from './components/Footer/Footer'
import Section1 from './pages/homePage/Section1/Section1'
import Section2 from './pages/homePage/Section2/Section2'
import Section4 from './pages/homePage/Section4/Section4'
import Section5 from './pages/homePage/Section5/Section5'
import Section3 from './pages/homePage/Section3/Section3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <main>
        <Header></Header>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        {/* <div className="flex-1 flex flex-col">
        <AppRoutes></AppRoutes>
        </div>        */}
        <Footer></Footer>

        </main>
      </CartProvider>
    </BrowserRouter>  
  </StrictMode>,
)
