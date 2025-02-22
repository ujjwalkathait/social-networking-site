import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: () => create
    })
}