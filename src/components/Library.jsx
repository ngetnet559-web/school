import React from 'react'
import assets from '../assets/assets'

const Library = () => {
  return (
    <div className="relative w-full bg-cover  bg-center px-4 py-4"
    >
      <div className='absolute inset-0 bg-[#c0bdb8]/60'></div>
      <div className="relative  z-50 text-center mb-4">
        <h1>Our Library</h1>
        <p>Knowledge Awaits you </p>

        </div>

        <div className="relative grid grid-cols-2 gap-4 ml-10 z-50">
  <div className="w-32 rounded-2xl p-4 bg-white shadow-md">
  <img
    className="w-20 h-20 object-cover rounded-xl mx-auto"
    src={assets.b1}
    alt=""
  />

  <h3 className="mt-3 font-semibold text-center">The Great Gatsby</h3>

  <p className="text-sm text-gray-700 mt-1 text-center">A classic novel</p>
</div>
<div className="w-32 rounded-2xl p-4 bg-white shadow-md">
  <img
    className="w-20 h-20 object-cover rounded-xl mx-auto"
    src={assets.b1}
    alt=""
  />

  <h3 className="mt-3 font-semibold text-center">The Great Gatsby</h3>

  <p className="text-sm text-gray-700 mt-1 text-center">A classic novel</p>
</div>
<div className="w-32 rounded-2xl p-4 bg-white shadow-md">
  <img
    className="w-20 h-20 object-cover rounded-xl mx-auto"
    src={assets.b1}
    alt=""
  />

  <h3 className="mt-3 font-semibold text-center">The Great Gatsby</h3>

  <p className="text-sm text-gray-700 mt-1 text-center">A classic novel</p>
</div>
<div className="w-32 rounded-2xl p-4 bg-white shadow-md">
  <img
    className="w-20 h-20 object-cover rounded-xl mx-auto"
    src={assets.b1}
    alt=""
  />

  <h3 className="mt-3 font-semibold text-center">The Great Gatsby</h3>

  <p className="text-sm text-gray-700 mt-1 text-center">A classic novel</p>
</div>
<div className="w-32 rounded-2xl p-4 bg-white shadow-md">
  <img
    className="w-20 h-20 object-cover rounded-xl mx-auto"
    src={assets.b1}
    alt=""
  />

  <h3 className="mt-3 font-semibold text-center">The Great Gatsby</h3>

  <p className="text-sm text-gray-700 mt-1 text-center">A classic novel</p>
</div>
</div>
    </div>
  )
}

export default Library