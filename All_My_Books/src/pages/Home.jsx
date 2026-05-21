import {Search} from 'lucide-react'
import {searchBooks} from '../services/books'
import {Button} from '../components/ui/button'
import {Input} from '../components/ui/input'
import {useState} from 'react'
import {BookCard} from '../components/BookCard'
import {Link } from 'react-router-dom'
import {Suspense } from 'react'
import { p } from 'framer-motion/client'

const Home = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        const results = await searchBooks(query);
        setBooks(results);
        setLoading(false);
    };

    return (
      <>
        <p className='text-[#F5E6CA] opacity-80 text-lg text-center mt-10'>
          Digite o nome de um livro para encontrá-lo nas prateleiras do tempo.
        </p>

        <form
          onSubmit={handleSearch}
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
          }}
        >
          <Input
            placeholder='Ex: O Hobbit, Alquimia...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" whileHover={{ scale: 1.05 }}>
            <Suspense fallback="Conjurar">
              <Search size={18} />
            </Suspense>
            {loading ? 'Conjurando...' : 'Conjurar'}
          </Button>
        </form>
      </>
    )

}