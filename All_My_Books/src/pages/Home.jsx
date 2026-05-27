import { Search } from 'lucide-react'
import { searchBooks } from '../api/api'
import { Button } from '../components/Button'
import { useState, Suspense } from 'react'
import { BookCard } from '../components/bookCard'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input'

const Home = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    const results = await searchBooks(query)
    setBooks(results.items || [])
    setLoading(false)
  }

  return (
    <>
      <header className='flex flex-col items-center justify-center mt-20 bg-[#1A1A1A] p-10 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-[#F5E6CA]'>Bem-vindo à Biblioteca do Tempo</h1>
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
            placeholder="Ex: O Hobbit, Alquimia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}>
 
          </Input>
          
          <Button type='submit' whileHover={{ scale: 1.05 }}>
            <Suspense fallback='Conjurar'>
              <Search size={18} />
            </Suspense>
            {loading ? 'Conjurando...' : 'Conjurar'}
          </Button>
        </form>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '30px',
          marginTop: '40px',
          padding: '0 20px',
        }}
      >
        {loading && <p style={{ color: '#F5E6CA' }}>Conjurando livros...</p>}
        {!loading && books.length === 0 && (
          <p style={{ color: '#F5E6CA', textAlign: 'center', width: '100%' }}>
            Pesquise um livro para ver os resultados aqui.
          </p>
        )}

        {books.map((book) => (
          <BookCard
            to={`/book/${book.id}`}
            key={book.id}
            style={{ textDecoration: 'none' }}
          >
            <div className='book-cover' >
              <img src={book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} />
            </div>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
            <p><strong>{book.volumeInfo.publishedDate}</strong></p>

            <button className='width: 100% , fontSize : 0'></button>
          </BookCard>
        ))}
      </div>
    </>
  )
}

export default Home
