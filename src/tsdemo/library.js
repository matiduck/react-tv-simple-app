var myName = 'Tomek';
function logId(id) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    return id.toFixed(2);
}
var Category;
(function (Category) {
    Category[Category["It"] = 0] = "It";
    Category[Category["History"] = 1] = "History";
    Category[Category["Fantasy"] = 2] = "Fantasy";
})(Category || (Category = {}));
var LibraryBook = /** @class */ (function () {
    function LibraryBook(title) {
        this.title = title;
    }
    return LibraryBook;
}());
var book1 = { id: 1, title: 'JS Basics' };
var book2 = {
    id: 1,
    title: 'TypeScript in Action',
    category: Category.Fantasy,
};
var book3 = new LibraryBook('React Components');
var bookShelf = [book1, book2, book3];
