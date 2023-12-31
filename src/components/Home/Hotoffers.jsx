import React from 'react';
import product1 from '../../assets/images/product-1.jpg'

import Penirun from '../../assets/images/hotoffers/penirun.png';
import Bigboss from '../../assets/images/hotoffers/bigboss.png';
import mottoketo from '../../assets/images/hotoffers/mottoketo.png';
import aveda from '../../assets/images/hotoffers/aveda.png';
import longnights from '../../assets/images/hotoffers/longnights.png';
import fat2fit from '../../assets/images/hotoffers/fat2fit.png';
import diafix from '../../assets/images/hotoffers/diafix.png';
import sexup from '../../assets/images/hotoffers/sexup.png';


const products = [


    {
      id: 1,
      name: 'Penirun',
      href: '#',
      imageSrc: Penirun,
      imageAlt: "Penirun",
      price: '2699',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Big Boss',
      href: '#',
      imageSrc: Bigboss,
      imageAlt: "Big Boss",
      price: '2699',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Motto Keto',
      href: '#',
      imageSrc: mottoketo,
      imageAlt: "Motto Keto",
      price: '2499',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Aveda',
      href: '#',
      imageSrc: aveda,
      imageAlt: "Aveda",
      price: '2499',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Long Nights',
      href: '#',
      imageSrc: longnights,
      imageAlt: "Long Nights",
      price: '2699',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Fat2fit',
      href: '#',
      imageSrc: fat2fit,
      imageAlt: "Fat2fit",
      price: '2499',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Diafix',
      href: '#',
      imageSrc: diafix,
      imageAlt: "Diafix",
      price: '2499',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Sex Up',
      href: '#',
      imageSrc: sexup,
      imageAlt: "Sex UP",
      price: '15990 ARS',
      color: 'Black',
    },
    // More products...
  ]

export default function Hotoffers() {
  return (
   <>
   <div className="bg-white" id="hotoffers">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <h1 className='text-center text-5xl font-bold font-gotham  py-4'>Hot Offers</h1>
      <h2 className="text-xl font-semibold  text-center mt-4 text-gray-500 font-gotham">Available 300+ offers in 5 countries.</h2>


        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  )
}
