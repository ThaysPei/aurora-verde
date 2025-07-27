import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Nav from './components/Nav'
import HeroSection from './components/HeroSection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav />
     <HeroSection />
  </StrictMode>,
)

