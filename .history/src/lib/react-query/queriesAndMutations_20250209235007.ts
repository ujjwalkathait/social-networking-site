import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUSerAccount } from '../appwrite/api'

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: () => createUSerAccount(user)
    })
}