'use client'

import { useGetProductsQuery } from '@/state/api'
import { PlusCircleIcon, SearchIcon } from 'lucide-react'
import { useState } from 'react'
import Header from '@/app/(components)/Header'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModelOpen, setIsModelOpen] = useState(false)

  const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm)
  if (isLoading) {
    return <div className='m-5'>Loading...</div>
  }

  if (isError) {
    return <div className='m-5'>Error to fetch products</div>
  }
  return (
    <div className='mx-auto pb-5 w-full'>
      {/* SEARCH BAR */}
      <div className='mb-6'>
        <div className='flex items-center border-2 border-gray-200 rounded'>
          <SearchIcon className='w-5 h-5 text-gray-500  m-2' />
          <input
            className='w-full py-2 px-4 rounded-xl bg-white'
            placeholder='Search products...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* HEADER BAR */}
      <div className='flex  justify-between items-center mb-6'>
        <Header name='Products' />
        <button
          className='flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold p-2 rounded-md'
          onClick={() => setIsModelOpen(true)}
        >
          <PlusCircleIcon className='w-5 h-5 mr-2 !text-gray-200' /> Create
          Product
        </button>
      </div>
      {/* BODY PRODUCTS LIST */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg-grid-col-3 gap-10 justify-between'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          products?.map((product) => (
            <div
              key={product.productId}
              className='border border-gray-200 shadow rounded-md p-4 max-w-full w-full mx-auto'
            >
              <div className='flex flex-col items-center'>
                img
                <h3 className='text-lg text-gray-900 font-semibold'>
                  {product.name}
                </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
export default Products
