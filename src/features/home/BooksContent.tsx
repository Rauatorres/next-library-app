'use client'

import { create, getOneById, update } from "@/src/api/queries";
import { getCookie } from "@/src/session/cookieActions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import BooksList from "./BooksList";
import Book from "@/src/interfaces/Books";
import AddBookForm from "../forms/AddBookForm";

const BooksContent = () => {
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const userid = await getCookie('id');
            return await getOneById<{ name: string, books: Book[] }>('user', userid!);
        }
    });

    const addBookMutation = useMutation({
        mutationFn: async () => {
            const userid = await getCookie('id');
            if(userid){
                const newBook = await create<Book>('book', { name: 'teste2', categories: [] })
                return await update<{ userId: string, bookId: string }>('user/add/book', { 
                    userId: userid,
                    bookId: newBook.data._id
                 });
            }else{
                throw new Error('não foi possível retornar o id do usuário');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
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
                <AddBookForm addFunction={() => addBookMutation.mutate()}/>
            </div>
        </div>
    );
};

export default BooksContent