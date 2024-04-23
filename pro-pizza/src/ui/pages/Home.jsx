import CreateUser from "../../features/user/CreateUser";

const Home = () => {
    return (
        <div className="mb-4 mt-10 text-center">
            <h1 className="text-xl md:text-4xl text-yellow-500 font-semibold">Pro-Pizza</h1>
            <h3 className="text-lg text-center font-bold text-stone-700">Best pizza in town. Always.</h3>
            <div className="mt-2">
                <CreateUser />
            </div>
        </div>
    );
}

export default Home;
