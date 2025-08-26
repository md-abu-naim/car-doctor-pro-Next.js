"use client"
import { signIn} from "next-auth/react"

export default function LoginForm() {

    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = {email, password}
        await signIn('credentials', {email, password})
        console.log(user);
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <input name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
                Login
            </button>
        </form>
    );
}
