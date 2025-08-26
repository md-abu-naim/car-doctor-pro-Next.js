import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <RegisterForm />

                <p className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}
