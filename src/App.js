import './App.scss';
// import Nav from './nav/Nav';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './contact/Contact';
import Register from './register/Register';
import Profile from './profile/Profile';
import Login from './login/Login';
function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
