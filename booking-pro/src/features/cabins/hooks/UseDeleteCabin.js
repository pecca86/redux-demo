import { toast } from "react-hot-toast";
import { deleteCabin } from '../../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query'


export const useDeleteCabin = () => {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: removeCabin } = useMutation(
        {
            mutationKey: ['deleteCabin'],
            mutationFn: (id) => deleteCabin(id),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['cabins']
                });
                toast.success('Cabin deleted');
            },
            onError: (err) => toast.error(err.message)
        }
    )



    return { isDeleting, removeCabin };
}
