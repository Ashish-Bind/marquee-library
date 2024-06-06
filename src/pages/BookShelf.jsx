import { useEffect } from 'react'

const BookShelf = ({ shelf }) => {
  return (
    <main className="space-y-4 p-4 max-w-screen-xl mx-auto ">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">My Bookshelf</h1>
      </div>
      <div className="grid md:grid-cols-5 gap-4 border-t pt-4">
        {shelf.length > 0 &&
          shelf.map((i) => (
            <div
              key={i.title}
              className="p-5 border flex flex-col gap-2 justify-between"
            >
              <h1 className="font-bold text-lg">{i.title}</h1>
              <p>Edition Count: {i.edition_count}</p>
              <button
                className="px-5 py-2 bg-violet-500 text-white"
                onClick={() => {}}
              >
                Add to bookshelf
              </button>
            </div>
          ))}
      </div>
    </main>
  )
}

export default BookShelf
