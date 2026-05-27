import { createContext, useContext, useState} from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    function addFavorite(book){
        setFavorites(prev => {
            if(prev.find(b => b.id ==book.id)) return prev
            return [...prev, book]
        })
    }

    function removeFavorites(bookId){
        setFavorites(prev => prev.filter(b => b.id !== bookId))
    }

    function isFavorite(bookId){
        return favorites.some(b => b.id === bookId)
    }

    return (
        <FavoritesContext.Provider value ={{favorites, addFavorite, removeFavorites, isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

//hook customizado 

export function useFavorites(){
    const context = useContext(FavoritesContext)
    if(!context) throw new Error('useFavorites deve ser usado dentro de FavoritesProvider :) ')
    return context
}