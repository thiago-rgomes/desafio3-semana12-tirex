import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Header from './components/Header/Header'
import { CartProvider } from './context/CartContext'
import { AppRoutes } from './pages/app-routes'
import Footer from './components/Footer/Footer'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <CartProvider>
          <main>
            <Header />
            <div className="flex-1 flex flex-col">
              <AppRoutes />
            </div>
            <Footer />
          </main>
        </CartProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
