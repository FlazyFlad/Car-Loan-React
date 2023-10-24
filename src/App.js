import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import LoanCalculator from "./components/LoanCalculator/LoanCalculator";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="app-spacer">
            <Routes>
                <Route path="/" element={<HeroSection />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/about-us" element={<AboutUs />}/>
                <Route path="/loan-calculator" element={<LoanCalculator />}/>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
            </div>
        </div>
    );
};

export default App;
