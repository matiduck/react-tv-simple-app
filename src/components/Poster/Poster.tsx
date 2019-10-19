import React, { FC } from 'react'
import { Show } from '../../models/tv.models'

interface Props {
  show: Show
}

export const Poster: FC<Props> = ({ show, children }) => {
  const imgSrc = show.image
    ? show.image.medium
    : 'https://source.unsplash.com/210x295/?television'

  return (
    <figure>
      <img className="img-fluid" src={imgSrc} alt={show.name} />
      {children}
      <figcaption>{show.name}</figcaption>
    </figure>
  )
}
