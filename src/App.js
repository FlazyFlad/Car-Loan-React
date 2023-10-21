import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { DefaultContext } from './Context';

// import NotFoundPage from './Components/NotFoundPage';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import AboutUs from './components/AboutUs/AboutUs';
import LoanCalculator from './components/LoanCalculator/LoanCalculator';



function App() {
  return (
    <>
    <Header />

    <DefaultContext.Provider>
            <Routes>
                <Route path="/" element={<HeroSection />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/about-us" element={<AboutUs />}/>
                <Route path="/loan-calculator" element={<LoanCalculator />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
    </DefaultContext.Provider>

    <Footer />
    </>
  );
}

export default App;
