"use client"

const RegisterForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const singUp = {email, name, password}
        console.log(singUp);
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" 
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <input name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <input name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Register
            </button>
        </form>
    );
};

export default RegisterForm;