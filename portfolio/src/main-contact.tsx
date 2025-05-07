import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactPage from './ContactPage'

createRoot(document.getElementById('ContactRoot')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)
