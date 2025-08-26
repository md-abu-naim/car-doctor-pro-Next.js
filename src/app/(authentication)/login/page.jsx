import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <LoginForm />

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
    );
};

export default Login;