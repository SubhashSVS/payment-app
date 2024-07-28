import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-100">
            <div className="flex justify-between p-4 bg-gray-800 text-white items-center">
                <div className="text-3xl font-bold">
                Payments-App
                </div>
                <div>
                <button onClick={()=>{
                    navigate('/signin');
                }} className="bg-blue-600 py-2 px-4 rounded-md font-semibold mr-3 hover:bg-blue-700 transition duration-300">
                    Sign In
                </button>
                </div>
            </div>

            <div className="flex flex-grow justify-center items-center p-6">
                <div className="max-w-3xl bg-white p-12 rounded-lg shadow-lg text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Welcome to Payments-App
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Seamlessly transfer money to other users with Payments-App. Sign up to create an account and start making transactions today.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Search for users and make payments through our convenient, fully authenticated platform. Your data is secured and safe.
                </p>
                <div className="flex justify-center">
                    <button onClick={()=>{
                    navigate('/signup');
                }} className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Create Account
                    </button>
                </div>
                </div>
            </div>

            <div className="bg-gray-800 text-gray-400 text-center py-3">
                &copy; 2024 Payments-App. All rights reserved.
            </div>
        </div>
    );
};

export default HomePage;