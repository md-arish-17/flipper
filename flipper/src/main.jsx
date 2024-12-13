import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// src/index.js or src/main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For Bootstrap's JavaScript components

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
