import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';
import Axios from 'axios';
import { configure } from 'axios-hooks';

const axios = Axios.create({
	baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});
configure({ axios });

export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/detalhes/:id" exact element={<Details />} />
          <Route path="/welcome" exact element={<Search />} />
          <Route path="*">Página não encontrada</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
