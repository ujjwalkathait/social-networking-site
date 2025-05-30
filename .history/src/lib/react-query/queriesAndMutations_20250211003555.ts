import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUSerAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUSerAccount(user)
    })
}
export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUSerAccount(user)
    })
}