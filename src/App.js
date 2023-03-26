import { Routes, Route} from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import './App.css';
import { Header } from './component/Header/Header';
import { Home } from './component/Home/Home';
import { Footer } from './component/Footer/Footer';
import { Login } from './component/Login/Login';
import { Logout } from './component/Logout/Logout';
import { Register } from './component/Register/Register';
import { Catalog } from './component/Catalog/Catalog';
import { Details } from './component/Details/Details';
import { Edit } from './component/Edit/Edit';
import { Create } from './component/Create/Create';

function App() {
  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />
        <Route path='/catalog' element={<Catalog />} />

        <Route path='/catalog/:carId' element={<Details />} />
        <Route path='/catalog/:carId/edit' element={<Edit />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
