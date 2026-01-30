import { update } from "@/src/api/queries";
import Book from "@/src/interfaces/Books";
import { getCookie } from "@/src/session/cookieActions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useBooksMutations(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (request: { type: string, name?: string, bookId?: string, book?: Book }) => {
            const userid = await getCookie('id');
            
            if(userid){
                switch(request.type){
                    case 'add':
                        if(request.book != undefined){
                            const res = await update<Book>(`user/${userid}/add/book`, request.book);
                            return res;
                        }else{
                            throw new Error('o livro não foi possível ser criado');
                        }
                    case 'remove':
                        if(request.bookId != undefined){
                            return await update<{ bookId: string }>(`user/${userid}/remove/book`, { 
                                bookId: request.bookId,
                            });
                        }else{
                            throw new Error('não foi possível retornar o id do livro')
                        }
                    case 'edit':
                        if(request.bookId != undefined && request.book != undefined){
                            return await update<{ bookId: string, title: string }>(`user/${userid}/edit/book`, { 
                                bookId: request.bookId,
                                title: request.book.title!,
                            });
                        }else{
                            throw new Error('não foi possível retornar o id do livro')
                        }
                    default:
                        return null;
                }
            }else{
                throw new Error('não foi possível retornar o id do usuário');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
    });
}