"use client"

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SocialLogin = () => {
    const router = useRouter()
    const {data:session} = useSession()

    const handleSocialLogin = (providerName) => {
        signIn(providerName)

    }

    useEffect(() => {
        if(session?.user){
            router.push('/')
        }
    }, [session?.user])
    return (
        <div className="space-y-3">
            <button onClick={() => handleSocialLogin('google')}
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

            <button onClick={() => handleSocialLogin('github')}
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
    );
};

export default SocialLogin;