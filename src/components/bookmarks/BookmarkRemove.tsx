import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Bookmark, BookmarkId } from '../../models/bookmarks.models'
import { removeBookmark } from '../../store/actions/bookmarks.actions'
import { RootState } from '../../store/reducers'

interface OwnProps {
  id: BookmarkId
}

interface StateProps {
  items: Bookmark[]
}

interface DispatchProps {
  remove: (id: BookmarkId) => void
}

type Props = OwnProps & StateProps & DispatchProps

const BookmarkRemove: FC<Props> = ({ id, items, remove }) => (
  <button
    disabled={items.some(item => id !== item.id)}
    className="btn btn-danger btn-sm"
    onClick={() => remove(id)}
  >
    remove
  </button>
)

const mapStateToProps = ({ bookmarks: { items } }: RootState) => ({
  items,
})

const mapDispatchToProps = dispatch => ({
  remove: (id: BookmarkId) => dispatch(removeBookmark({ id })),
})

const ConnectedBookmarkRemove = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookmarkRemove)

export { ConnectedBookmarkRemove as BookmarkRemove }
