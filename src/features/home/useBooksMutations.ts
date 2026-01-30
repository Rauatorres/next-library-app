import { create, update } from "@/src/api/queries";
import Book from "@/src/interfaces/Books";
import { getCookie } from "@/src/session/cookieActions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useBooksMutations(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (request: { type: string, name?: string, bookId?: string }) => {
            const userid = await getCookie('id');
            
            if(userid){
                switch(request.type){
                    case 'add':
                        if(request.name != undefined){
                            const newBook = await create<Book>('book', { name: request.name, categories: [] })
                            return await update<{ userId: string, bookId: string }>('user/add/book', { 
                                userId: userid,
                                bookId: newBook.data._id
                             });
                        }else{
                            throw new Error('não foi possível retornar o nome do usuário')
                        }
                    case 'remove':
                        if(request.bookId != undefined){
                            return await update<{ userId: string, bookId: string }>('user/remove/book', { 
                                userId: userid,
                                bookId: request.bookId,
                            });
                        }else{
                            throw new Error('não foi possível retornar o id do livro')
                        }
                    case 'edit':
                        if(request.bookId != undefined && request.name != undefined){
                            return await update<{ userId: string, bookId: string, name: string }>(`user/edit/book/`, { 
                                userId: userid,
                                bookId: request.bookId,
                                name: request.name!,
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