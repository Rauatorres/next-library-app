'use client'

import { getOneById } from "@/src/api/queries";
import { getCookie } from "@/src/session/cookieActions";
import { useQuery } from "@tanstack/react-query";
import BooksList from "./BooksList";
import Book from "@/src/interfaces/Books";
import AddBookForm from "../forms/AddBookForm";
import { useBooksMutations } from "./useBooksMutations";

const BooksContent = () => {
    const booksMutations = useBooksMutations();

    const { data } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const userid = await getCookie('id');
            return await getOneById<{ name: string, books: Book[] }>('user', userid!);
        },
    });

    return (
        <div>
            <h1>Lista de Livros</h1>
            <div>
                {data ? data.name : ''}
            </div>
            <ul>
                {<BooksList books={data ? data.books : []} />}
            </ul>
            <div>
                <AddBookForm addFunction={ (requestObject) => booksMutations.mutate(requestObject) }/>
            </div>
        </div>
    );
};

export default BooksContent