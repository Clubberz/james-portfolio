import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'

import App from './App'
import ProjectDetail from './pages/ProjectDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<App />} /> {/* fallback to home */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
