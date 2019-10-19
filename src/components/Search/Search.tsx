import React, { FC, useState } from 'react'
import styles from './Search.module.scss'
import cn from 'classnames'

interface Props {
  initialValue?: string
  onChange?: (value: string) => void
  onSubmit: (value: string) => void
}

export const Search: FC<Props> = ({ onSubmit, initialValue }) => {
  const [query, setQuery] = useState(initialValue)

  return (
    <form className={cn('input-group', 'mb-3', styles.search)}>
      <input
        value={query}
        type="search"
        className="form-control"
        onChange={event => setQuery(event.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          onClick={event => {
            event.preventDefault()
            onSubmit(query)
          }}
        >
          search
        </button>
      </div>
    </form>
  )
}
