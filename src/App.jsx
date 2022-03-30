import React from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'

import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'

export default function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}
