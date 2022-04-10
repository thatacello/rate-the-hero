import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { Search } from './screens/Search';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detalhes/:id" exact element={<Details />} />
        <Route path="/" exact element={<Search />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
