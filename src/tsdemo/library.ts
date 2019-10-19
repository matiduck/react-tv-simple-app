let myName = 'Tomek'

type BookId = string | number

function logId(id: BookId): string {
  if (typeof id === 'string') {
    return id.toUpperCase()
  }
  return id.toFixed(2)
}

enum Category {
  It,
  History,
  Fantasy,
}

interface Book {
  id: BookId
  title: string
  category?: Category
}

export class LibraryBook implements Book {
  id: BookId

  constructor(public title: string) {}
}

const book1 = { id: 1, title: 'JS Basics' }
const book2: Book = {
  id: 1,
  title: 'TypeScript in Action',
  category: Category.Fantasy,
}
const book3 = new LibraryBook('React Components')

let bookShelf: LibraryBook[] = [book1, book2, book3]
