import { Heart } from 'lucide-react';
import { Button } from './Button';

export function BookCard({ book }) {
  const title = book.volumeInfo?.title || 'Título desconhecido';
  const authors = book.volumeInfo?.authors?.join(', ') || 'Autor desconhecido';
  const publishedDate = book.volumeInfo?.publishedDate || 'N/A';
  const thumbnail = book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/150';

  return (
    <div
      style={{
        background: '#1B1B1B',
        borderRadius: '20px',
        overflow: 'hidden',
        padding: '16px',
        position: 'relative',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        color: '#F5E6CA',
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
      />

      <Button style={{ position: 'absolute', top: 12, right: 12, padding: '8px 10px' }}>
        <Heart size={18} fill='none' color='#F5E6CA' />
      </Button>

      <div style={{ marginTop: '16px' }}>
        <h3 style={{ margin: '0 0 8px', fontSize: '1rem' }}>{title}</h3>
        <p style={{ margin: '0 0 8px', fontSize: '0.9rem', opacity: 0.8 }}>{authors}</p>
        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.75 }}>
          <strong>Publicação:</strong> {publishedDate}
        </p>
      </div>
    </div>
  )
}

export default BookCard;
