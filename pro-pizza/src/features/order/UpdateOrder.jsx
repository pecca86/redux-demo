
/* eslint react/prop-types: 0 */
import Button from '../../ui/elements/Button'
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = ({ order }) => {
    const fetcher = useFetcher();
    console.log(order);
    return (
        <fetcher.Form method='PATCH'>
            <Button type={'primary'} size='medium'>Make prio</Button>
        </fetcher.Form>
    );
}

export default UpdateOrder;

export const action = async ({request, params}) => {
    console.log(request);
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null;
}

