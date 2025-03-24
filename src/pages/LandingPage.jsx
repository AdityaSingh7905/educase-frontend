import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-[400px] flex flex-col justify-end p-6 bg-gray-50 shadow-md rounded-lg border border-gray-300">
        <div className="mt-auto flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-center">Welcome to PopX</h2>
          <p className="text-2xl text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <Link
              to="/signup"
              className="bg-purple-600 hover:bg-purple-700 font-bold text-white py-3 rounded-md text-center"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="bg-purple-300 hover:bg-purple-400 font-bold py-3 rounded-md text-center"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
