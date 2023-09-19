import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser, googleLogIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {

        googleLogIn()
            .then(result => {
                const LoggedUser = result.user
                const User = { name: LoggedUser.displayName, email: LoggedUser.email }
                navigate(from, { replace: true });
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(User)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })

                console.log(LoggedUser)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const handleSignUp = event => {

        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        console.log(name, email, password, confirm)
        const User = { name, email }
        form.reset()
        createUser(email, password)
            .then(result => {

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(User)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert('SignUp SuccessFully')
                            navigate(from, { replace: true });
                        }

                    })
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center md:mt-20 lg:text-left">
                    <h1 className="md:text-5xl md:mt-0 mt-20 text-4xl font-bold">SignUp!</h1>
                </div>
                <div className="card  flex-shrink-0 w-full mt-5 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body w-96">

                        <div className="form-control">

                            <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='email' required placeholder="UserName Or Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='password' required placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <input type="text" name='confirm' required placeholder="Confirm Password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-400">Create an account </button>
                        </div>


                        <div className='mx-auto'>

                            <p ><small>Already have an account please
                                <Link to="/login" className='ml-3 font-bold text-orange-400' >Login</Link>
                            </small></p>
                        </div>
                    </form>


                    <div className='mb-10 p-2 mx-10'>
                        <div className='text-center'>
                            <h2>Connect with your Accounts</h2>
                            <div className="divider"></div>
                        </div>
                        <div className='flex justify-center mx-auto gap-5 mt-10'>
                            <Link className=' '>
                                <h1 className='text-2xl'> <FaFacebook /> </h1>
                            </Link>
                            <Link className='  '>
                                <button className='' onClick={handleGoogleLogin} >
                                    <h1 className='text-2xl'> <FaGoogle /> </h1>
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;