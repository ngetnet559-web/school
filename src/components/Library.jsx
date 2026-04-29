import React, {useState, useEffect } from 'react'
import assets from '../assets/assets'

const Library = () => {
  const [books, setBooks] = useState([])
  const [visible,setVisible] = useState(4);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=spirituality&limit=20")
    .then((res)=> res.json())
    .then((data)=>{
      // console.log(data);
      // console.log(data.docs);
      setBooks(data.docs);
    })
  }, []);

  const showMoreBooks = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="relative w-full bg-cover  bg-center px-4 py-4"
    >
      <div className='absolute inset-0 bg-[#c0bdb8]/60'></div>
      <div className="relative  z-50 text-center mb-8">
        <h1 className='text-2xl mb-2'>Our Library</h1>
        <p className='text-gray-700'>Knowledge Awaits you </p>

        </div>

       <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-50">
  {books.slice(0, visible).map((book) => (
    <div
      key={book.key}
      className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
    >
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150"
        }
        alt={book.title}
        className="w-full h-56 object-center rounded-lg"
      />

      <h2 className="font-bold mt-3 text-sm line-clamp-2">
        {book.title}
      </h2>

      <p className="text-gray-600 text-sm">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>

      <p className="text-gray-500 text-xs mt-1">
        {book.first_publish_year}
      </p>
    </div>
  ))}
</div>

{visible < books.length && (
  <div className='text-center mt-8'>
    <button className="relative px-6 py-3 bg-[#626060] hover:bg-[#000000] cursor-pointer text-white rounded-full z-40" onClick={showMoreBooks}>Show More</button>
  </div>
    
)}
    </div>
  )
}

export default Library