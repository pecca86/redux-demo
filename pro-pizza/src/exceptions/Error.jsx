
import { useRouteError } from 'react-router-dom';
import LinkButton from '../ui/elements/LinkButton';

const Error = () => {

    
    const error = useRouteError();

    return (
        <div className='w-full m-auto px-2'>
            <h2 className='text-2xl mb-4'>Oh no, something went wrong!</h2>
            <p>{error.data || error.message}</p>
            <LinkButton navigateBack={true} >Go back to the previous page</LinkButton>
        </div>
    );
}

export default Error;
