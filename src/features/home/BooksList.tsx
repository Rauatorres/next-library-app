import Book from "@/src/interfaces/Books";

type BooksListProps = {
    books: Book[];
}

const BooksList = ({ books }: BooksListProps) => {
    return (
        books.map((book, index) => {
            return (
                <li key={index}>{book.name}</li>
            )
        })
    );
};

export default BooksList