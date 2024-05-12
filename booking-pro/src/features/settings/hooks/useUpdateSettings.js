import { updateSetting } from "../../../services/apiSettings"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const useUpdateSettings = (newSetting) => {
    const queryClient = useQueryClient();

    const { isLoading: isUpdating, mutate: updateSettings, error } = useMutation(
        {
            mutationKey: ['settings'],
            mutationFn: (newSetting) => updateSetting(newSetting),
            onSuccess: () => {
                toast.success('Settings updated');
                queryClient.invalidateQueries({
                    queryKey: ['settings']
                });
            },
            onError: (err) => toast(err)
        }
    );

    return {
        isUpdating,
        updateSettings,
        error,
    };
}