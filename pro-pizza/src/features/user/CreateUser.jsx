import Button from "../../ui/elements/Button";

const CreateUser = () => {
    return (
        <div className="space-x-4 space-y-4 sm:space-y-4">
            <h2 className="text-center">Create User</h2>
            <form >
                <div className="flex flex-col">
                    <input type="text" placeholder="Name" className="input w-72" />
                    <input type="text" placeholder="Email" className="input w-72" />
                    <input type="password" placeholder="Password" className="input w-72" />
                    <Button>Create</Button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
