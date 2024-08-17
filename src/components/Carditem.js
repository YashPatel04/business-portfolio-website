import React from 'react'
import { Link } from 'react-router-dom'

function Carditem(phto) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={phto.path}>
          <figure className='cards__item__pic-wrap' data-category={phto.label}>
            <img
              className='cards__item__img'
              alt='gas station'
              src={phto.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{phto.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default Carditem
