import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Bookmark } from '../../models/bookmarks.models'
import { addBookmark } from '../../store/actions/bookmarks.actions'
import { RootState } from '../../store/reducers'

interface OwnProps {
  item: Bookmark
}

interface StateProps {
  items: Bookmark[]
}

interface DispatchProps {
  save: (item: Bookmark) => void
}

type Props = OwnProps & StateProps & DispatchProps

const BookmarkAdd: FC<Props> = ({ item, items, save, children = 'save' }) => (
  <button
    disabled={items.some(({ id }) => id === item.id)}
    className="btn btn-primary btn-sm"
    onClick={() => save(item)}
  >
    {children}
  </button>
)

const mapStateToProps = ({ bookmarks: { items } }: RootState) => ({
  items,
})

const mapDispatchToProps = dispatch => ({
  save: (item: Bookmark) => dispatch(addBookmark({ item })),
})

const ConnectedBookmarkAdd = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookmarkAdd)

export { ConnectedBookmarkAdd as BookmarkAdd }
