import {Heart} from 'lucide-react';
import { useContext } from 'react';
import { Button } from './Button';


export function BookCard({ book }) {
    const {addFavorite , removeFavorite, isFavorite} = useContext(FavoritesContext);
    const favorited = isFavorite(book.id);

    const haneleFavoriteClick = (e) => {
        e.preventDeFault();
        if (favorited) {
            removeFavorite(book.id);    
        } else {
            addFavorite(book);
        }
    };

    return(
        <G.MagicCard 
      whileHover={{ y: -10, scale: 1.02 }}
      >
        <div className='position relative , marginBotoon: 10px '>
            <img src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'} alt={book.volumeInfo?.title} className='width : 100% , height : auto, borderRadius: 20px ' />
        </div>
       <Button onClick={haneleFavoriteClick} style={{ position: 'absolute', top: 10, right: 10 }}>
        
          <Heart size={20}
          fill={favorited ? 'currentColor' : 'none'}
          color={favorited ? 'currentColor' : 'none'} />
        </Button>
        <div>
            <h3 className='margin: 10px 0px 5px , fontSize: 0.8rem'>{book.volumeInfo?.title}</h3>
            <p className='margin: 5px 0px , fontSize: 0.8rem ${props => props.theme.colors.text}' >{book.volumeInfo?.authors?.join(', ')}</p>
            <p className='margin: 5px 0px , fontSize: 0.8rem'><strong>puplicação</strong> {book.volumeInfo?.publishedDate || 'N/A'}</p>
        </div>

      </G.MagicCard>
    );
}

export default BookCard;