import { useState, useEffect } from "react";
import { usePage, Link, router } from "@inertiajs/react"
import { inertia } from "@inertiajs/inertia";

const SignInPage = () => {

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const { errors } = usePage().props;
    const { props } = usePage();

    const user = props.auth.user;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [frontendError, setFrontendError] = useState('');
    const [checkLoading, setCheckLoading] = useState(false);


    useEffect(() => {
        const submitButton = document.querySelector('#submit-button');

        const handleClick = (e) => {
            e.preventDefault();

            if(username === '' || password === ''){
                setFrontendError('*Please fill in all the fields*');
            } else if (username != '' && password != ''){
                setFrontendError('')
                handleSignUp();
            }
        }

        if(submitButton){
            submitButton.addEventListener('click', handleClick)
        }

        return () => {
            if(submitButton){
                submitButton.removeEventListener('click', handleClick)
            }
        }
        
    }, [username, password]);

    useEffect(() => {
        if (user) {
            router.visit('/dashboard');
        }

        console.log(user);
    }, []);

    if (user) {
        router.visit('/dashboard');
    }

    const handleSignUp = () => {
            
        setCheckLoading(true);

        router.post('/user/sign-in', {
            username,
            password,
            _token: csrfToken,
        }, {
            onFinish: () => {
                setCheckLoading(false)
            }
        });
        
    }

    return(
        <>
            <title>flow-tracker - Sign-in</title>
            <div className="h-screen bg-white flex flex-column justify-center w-screen items-center">
                <div className="box-container bg-white w-[550px] h-[60%] flex border border-none rounded-lg p-4 gap-2 shadow-lg shadow-gray-300">
                    <div className="welcome-container w-[45%] border-r-2 border-r-gray-200 flex flex-col items-center justify-center">
                        <h1>Welcome to</h1>
                        <h1 className="font-bold text-xl italic">flow-tracker</h1>
                    </div>
                    <div className="login-container w-[55%] flex justify-center flex-col items-center gap-3">
                        <h1 className="font-bold text-xl">Get Started!</h1>
                        <div>
                            {frontendError && (
                                <div className="alert alert-danger text-red-600">
                                    {frontendError}
                                </div>
                            )}
                            {!frontendError && !checkLoading && errors.error && (
                                <div className="alert alert-danger text-red-600">
                                    {errors.error}
                                </div>
                            )}
                        </div>
                        <form className="flex flex-col items-center gap-3">
                            <input type="hidden" name="_token" value={csrfToken} />
                            <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" name="username" minLength="3" maxLength="18" placeholder="Username" className="px-6 py-2 border rounded-md outline-none focus:border-blue-400 duration-500"></input>
                            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" minLength="3" maxLength="18" placeholder="Password" className="px-6 py-2 border rounded-md outline-none focus:border-blue-400 duration-500"></input>     
                            <button id="submit-button" className="bg-gray-800 text-white font-bold py-2 w-[100%] border-2 border-gray-800 rounded-md hover:bg-white hover:border-gray-800 hover:text-black">Sign-in</button>
                        </form>
                        <h1 className="pt-2">Already have an account? <span className="underline text-blue-400 cursor-pointer"><Link href="/">Login</Link></span></h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInPage;