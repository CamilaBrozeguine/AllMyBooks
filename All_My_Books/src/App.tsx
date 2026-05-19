
import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FavoritesProvider } from './context/FavoritesContext';
import { useQuery } from './hooks/useQuery';

import Home from '.';
import Favorites from './pages/favorites';
import Navbar from './components/Navbar';


function App() {
  return (
      <FavoritesProvider>
        <Router>
          <Navbar />
          {/* AnimatePresence permite animações na saída de componentes */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favorites />} />
              {/* <Route path="/estante" element={<Library />} /> */}
              {/* <Route path="/livro/:id" element={<BookDetails />} /> */}
            </Routes>
          </AnimatePresence>
        </Router>
      </FavoritesProvider>
  );
}

export default App;
