import { Bookmark } from '../../models/bookmarks.models'
import * as bookmarkActions from '../actions/bookmarks.actions'
import { ActionType, getType } from 'typesafe-actions'
import produce from 'immer'

type BookmarkActions = ActionType<typeof bookmarkActions>

interface State {
  items: Bookmark[]
}

const initialState: State = {
  items: [],
}

export const bookmarks = (
  state = initialState,
  action: BookmarkActions,
): State => {
  switch (action.type) {
    case getType(bookmarkActions.fetchBookmarksSuccess):
      return { ...state, items: action.payload }

    case getType(bookmarkActions.addBookmarkSuccess):
      return produce(state, draft => {
        draft.items.push(action.payload)
      })

    case getType(bookmarkActions.removeBookmark):
      return produce(state, draft => {
        // const idx = draft.items.findIndex(({ id }) => id === action.payload.id)
        // if (idx >= 0) {
        //   draft.items.splice(idx, 1)
        // }
        draft.items = draft.items.filter(({ id }) => id !== action.payload.id)
      })

    case getType(bookmarkActions.clearBookmarks):
      return { ...state, items: [] }

    default:
      return state
  }
}
