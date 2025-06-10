import './App.css'
import logo from './assets/logo-white.png'
import logoMedium from './assets/logo-medium.png'
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import Post from "./pages/post/Post.jsx";
import ErrorPage from "./pages/errorpage/ErrorPage.jsx";
import Overview from "./pages/overview/Overview.jsx";
import DetailPage from "./pages/detailpage/DetailPage.jsx";

function App() {

    const navigate = useNavigate();

    return (
        <>
            <header>
                <nav className="main-navigation outer-content-container">
                    <div className="inner-container">
                        <button className="" onClick={() => navigate('/') }></button>
                        <img src={logoMedium} alt="Logo van bedrijf" />
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/overview">Alle posts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/post">Nieuwe post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/post" element={<Post/>} />
                    <Route path="/error" element={<ErrorPage/>} />
                    <Route path="/overview" element={<Overview/>} />
                    <Route path="/detail/:id" element={<DetailPage/>} />
                </Routes>
            </main>
        </>
    )
}

export default App
