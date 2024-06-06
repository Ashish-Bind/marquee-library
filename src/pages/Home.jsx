import axios from 'axios'

const URL = 'https://openlibrary.org/search.json?limit=10&page=1'

const Home = ({ search, setSearch, books, setBooks, setShelf, shelf }) => {
  const handleSubmit = async () => {
    if (!search) return
    const res = await axios.get(`${URL}&q=${search}`)
    setBooks(res.data.docs)
  }

  const addToShelf = (book) => {
    setShelf((prev) => {
      const updatedShelf = [...prev, book]
      localStorage.setItem('shelf', JSON.stringify(updatedShelf)) // Save to localStorage
      return updatedShelf
    })
  }

  return (
    <main className="space-y-2 p-4 max-w-screen-xl mx-auto ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for a book..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 outline-none box-border"
          />
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-violet-500 text-white font-bold "
          >
            Search
          </button>
        </div>
        <div>
          <button className="px-5 py-2 bg-violet-500 text-white font-bold">
            <a href="/book-shelf">Bookshelf</a>
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold border-t ">Books</h1>
        <div className="grid md:grid-cols-5 gap-4">
          {books.map((i) => (
            <div
              key={i.title}
              className="p-5 border flex flex-col gap-2 justify-between"
            >
              <h1 className="font-bold text-lg">{i.title}</h1>
              <p>Edition Count: {i.edition_count}</p>
              {shelf.some((book) => book.key === i.key) ? (
                <div className="italic underline">Already in shelf</div>
              ) : (
                <button
                  className="px-5 py-2 bg-violet-500 text-white"
                  onClick={() => {
                    addToShelf(i)
                  }}
                >
                  Add to bookshelf
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
