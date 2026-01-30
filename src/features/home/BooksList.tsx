import BookType from "@/src/interfaces/Books";
import { useBooksMutations } from "./useBooksMutations";
import Book from "./Book";

type BooksListProps = {
    books: BookType[];
}

const BooksList = ({ books }: BooksListProps) => {
    const booksMutations = useBooksMutations();

    return (
        books ? 
        books.map((book, index) => {
            return (
                <li key={index}>
                    <Book name={book.name} removeFunction={() => booksMutations.mutate({
                        type: 'remove',
                        bookId: book._id,
                    })} editFunction={(name) => booksMutations.mutate({
                        type: 'edit',
                        bookId: book._id,
                        name: name,
                    })} />
                </li>
            )
        }) :
        null
    );
};

export default BooksList