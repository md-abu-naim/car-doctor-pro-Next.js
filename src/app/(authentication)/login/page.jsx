import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Normal Login Form */}
        <LoginForm />

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-lg hover:bg-black transition"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
            Continue with GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
