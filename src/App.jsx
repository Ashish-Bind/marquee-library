import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookShelf from './pages/BookShelf'
import { useEffect, useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const [shelf, setShelf] = useState(() => {
    return JSON.parse(localStorage.getItem('shelf')) || []
  })

  useEffect(() => {
    localStorage.setItem('shelf', JSON.stringify(shelf))
  }, [shelf])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            books={books}
            search={search}
            setBooks={setBooks}
            setSearch={setSearch}
            setShelf={setShelf}
            shelf={shelf}
          />
        }
      />
      <Route path="/book-shelf" element={<BookShelf shelf={shelf} />} />
    </Routes>
  )
}

export default App
