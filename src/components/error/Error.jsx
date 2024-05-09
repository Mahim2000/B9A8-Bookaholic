import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
    <img src="/rickroll.gif" alt="" />
    <h1 className="text-red-600 font-bold text-4xl m-2">Error 404!</h1>
    <h3>The Page You want to visit doesnt exist 😢</h3>
    <h3>While you think about returning to homepage, enjoy being Rick Rolled! 🕺</h3>
    <Link to="/" className="text-blue-500 hover:text-blue-700 text-3xl">Go Back to Home</Link>
</div>

    );
};
export default Error;