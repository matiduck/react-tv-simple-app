import { createStandardAction } from 'typesafe-actions'
import { Bookmark, BookmarkId } from '../../models/bookmarks.models'
import Axios from 'axios'

const apiUrl = 'http://localhost:3344/bookmarks'

export const fetchBookmarks = createStandardAction('bookmarks: fetch').map<{
  payload: Promise<any>
}>(() => ({ payload: Axios.get(apiUrl).then(({ data }) => data) }))

export const fetchBookmarksSuccess = createStandardAction(
  'bookmarks: fetch_FULFILLED',
)<Bookmark[]>()

export const addBookmark = createStandardAction('bookmarks: add').map<
  { payload: Promise<any> },
  { item: Bookmark }
>(({ item }) => ({
  payload: Axios.post(apiUrl, item).then(({ data }) => data),
}))

export const addBookmarkSuccess = createStandardAction(
  'bookmarks: add_FULFILLED',
)<Bookmark>()

export const removeBookmark = createStandardAction('bookmarks: remove')<{
  id: BookmarkId
}>()

export const clearBookmarks = createStandardAction('bookmarks: clear')<void>()
