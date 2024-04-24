import Button from "../../ui/elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateName } from "./userSlice";

const CreateUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            userName: name,
            email: email,
            password: password
        }
        dispatch(updateName(user));
        setName('');
        setEmail('');
        setPassword('');
    }

    if (user.userName) {
        return (
            <div>
                <h2>Welcome, {user.userName}</h2>
            </div>
        )
    }

    return (
        <div className="space-x-4 space-y-4 sm:space-y-4">
            <h2 className="text-center">Create User</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="flex flex-col">
                    <input onChange={e => setName(e.target.value)}value={name} type="text" placeholder="Name" className="input w-72 text-center" />
                    <input onChange={e => setEmail(e.target.value)}value={email} type="email" placeholder="Email" className="input w-72 text-center" />
                    <input onChange={e => setPassword(e.target.value)}value={password} type="password" placeholder="Password" className="input w-72 text-center" />
                    <Button>Create</Button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
