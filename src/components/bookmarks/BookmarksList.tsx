import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Bookmark } from '../../models/bookmarks.models'
import { clearBookmarks } from '../../store/actions/bookmarks.actions'
import { Poster } from '../Poster/Poster'
import { Show } from '../../models/tv.models'
import { BookmarkRemove } from './BookmarkRemove'
import { RootState } from '../../store/reducers'

interface StateProps {
  items: Bookmark[]
}

interface DispatchProps {
  clear: () => void
}

const BookmarksList: FC<StateProps & DispatchProps> = ({ items, clear }) => (
  <>
    <h2 className="h4">Bookmarks ({items.length})</h2>
    {items.length > 0 && (
      <button className="btn btn-danger btn-sm mb-2" onClick={clear}>
        remove all
      </button>
    )}
    <div className="row">
      {items.map(show => (
        <div className="col-6" key={show.id}>
          <Poster show={show as Show} />
          <BookmarkRemove id={show.id} />
        </div>
      ))}
    </div>
  </>
)

const mapStateToProps = (state: RootState): StateProps => ({
  items: state.bookmarks.items,
})

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearBookmarks()),
})

const ConnectedBookmarksList = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(BookmarksList)

export { ConnectedBookmarksList as BookmarksList }
