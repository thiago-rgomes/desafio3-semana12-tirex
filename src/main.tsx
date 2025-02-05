import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { CartProvider } from './context/CartContext'
import { AppRoutes } from './pages/app-routes'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <main>
        <Header></Header>
        {/* <div className="flex-1 flex flex-col">
        <AppRoutes></AppRoutes>
        </div>        */}
        <Footer></Footer>

        </main>
      </CartProvider>
    </BrowserRouter>  
  </StrictMode>,
)
