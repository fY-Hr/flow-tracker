import { useState, useEffect } from "react";
import { usePage, Link, useForm, router } from "@inertiajs/react";




const LoginPage = () => {

    const { errors } = usePage().props;
    const { props } = usePage();

    const user = props.auth.user;
    const csrfToken = props.csrf_token;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [frontendError, setFrontendError] = useState('');
    const [checkLoading, setCheckLoading] = useState(false);

    useEffect(() => {
        if (user) {
            router.visit('/dashboard', {replace: true});
        } else {
            router.reload();
        }

        console.log(user);
    }, [user]);

    if (user) {
        router.visit('/dashboard', {replace: true});
        return null;
    }
    
    const handleClick = (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            setFrontendError('*Please fill in all the fields*');
        } else if (username != '' && password != '') {
            setFrontendError('');
            handleLogin();
        }
    };

    const handleLogin = () => {
        console.log(checkLoading)
        setCheckLoading(true);
        console.log(checkLoading)

        router.post('/user/login', {
            username,
            password,
            _token: csrfToken
        }, {
            onFinish: () => {
                setCheckLoading(false);
            },
        });
    };

    return (
        <>
            <title>flow-tracker - Login</title>
            <div className="h-screen bg-white flex flex-column justify-center w-screen items-center">
                <div className="box-container bg-white w-[550px] h-[60%] flex border border-none rounded-lg p-4 gap-2 shadow-lg shadow-gray-300">
                    <div className="welcome-container w-[45%] border-r-2 border-r-gray-200 flex flex-col items-center justify-center">
                        <h1>Welcome to</h1>
                        <h1 className="font-bold text-xl italic">flow-tracker</h1>
                    </div>
                    <div className="login-container w-[55%] flex justify-center flex-col items-center gap-3">
                        <h1 className="font-bold text-xl">Welcome Back!</h1>
                        <div id='error-container'>
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
                        <form className=" flex flex-col items-center gap-3" onSubmit={handleClick}>
                            <input type="hidden" name="_token" value={csrfToken} />
                            <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} minLength="3" maxLength="18" placeholder="Username" className="px-6 py-2 border rounded-md outline-none focus:border-blue-400 duration-500"></input>
                            <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} minLength="3" maxLength="18" placeholder="Password" className="px-6 py-2 border rounded-md outline-none focus:border-blue-400 duration-500"></input>
                            <button id="submit-button" className="bg-gray-800 text-white font-bold py-2 w-[100%] border-2 border-gray-800 rounded-md hover:bg-white hover:border-gray-800 hover:text-black">Login</button>
                        </form>
                        <h1 className="pt-2">Don't have an account? <span className="underline text-blue-400 cursor-pointer"><Link href="/sign-up">Sign-up</Link></span></h1>
                    </div>
                </div>
            </div>
        </>
    );
}



export default LoginPage;