import RemoveButton from "@/src/components/atoms/RemoveButton";
import Book from "@/src/interfaces/Books";
import { useBooksMutations } from "./useBooksMutations";

type BooksListProps = {
    books: Book[];
}

const BooksList = ({ books }: BooksListProps) => {
    const booksMutations = useBooksMutations();

    return (
        books.map((book, index) => {
            return (
                <li key={index}>{book.name} <RemoveButton onClick={() => booksMutations.mutate({ type: 'remove', bookId: book._id })} /></li>
            )
        })
    );
};

export default BooksList