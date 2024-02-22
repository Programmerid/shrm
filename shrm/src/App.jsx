import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { CatalogPage } from './pages/CatalogPage';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout';

import '../src/styles/main/main.min.css';


function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='catalog' element={<CatalogPage />} />
                        <Route path='*' element={<Notfoundpage />} />
                </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
