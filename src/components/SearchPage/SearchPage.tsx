import React, { FC, useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { Show, ShowResponse } from '../../models/tv.models'
import { Poster } from '../Poster/Poster'
import { Search } from '../Search/Search'
import { Badge } from '../Badge/Badge'
import { PreferencesContext } from '../../context/PreferencesContext'
import { connect } from 'react-redux'
import { BookmarkAdd } from '../bookmarks/BookmarkAdd'
import { BookmarkRemove } from '../bookmarks/BookmarkRemove'
import { BookmarksList } from '../bookmarks/BookmarksList'

interface State {
  searchCount: number
  shows: Show[]
}

const SearchPage: FC = () => {
  const [searchCount, setSearchCount] = useState<State['searchCount']>(0)
  const [shows, setShows] = useState<State['shows']>([])
  const { initialQuery, resultsPerPage } = useContext(PreferencesContext)

  useEffect(() => {
    search(initialQuery)
  }, [])

  const search = (query: string) => {
    setSearchCount(searchCount + 1)
    const url = `https://api.tvmaze.com/search/shows?q=${query}&perPage=${resultsPerPage}`
    Axios.get<ShowResponse[]>(url).then(({ data }) =>
      setShows(data.map(({ show }) => show)),
    )
  }

  console.log('render SearchPage')
  return (
    <div className="row">
      <section className="col-3">
        <BookmarksList />
      </section>

      <section className="col">
        <h1 className="h4 d-flex justify-content-between">
          Find shows <Badge value={searchCount} />
        </h1>

        <Search onSubmit={search} initialValue={initialQuery} />

        <div className="row">
          {shows.map(show => (
            <div className="col-4" key={show.id}>
              <Poster show={show}>
                <BookmarkAdd item={show} />
                <BookmarkRemove id={show.id} />
              </Poster>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const ConnectedSearchPage = connect()(SearchPage)

export { ConnectedSearchPage as SearchPage }
