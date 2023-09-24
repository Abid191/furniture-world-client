import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../LoginInfo/AuthProvider/AuthProvider';
import UseCart from '../../Hook/UseCarts/UseCart';


const OrderPage = () => {

    const order = useLoaderData()
    const { user } = useContext(AuthContext)
    const [cart, refetch] = UseCart()
    const navigate = useNavigate()
    const { name, img, price, _id } = order

    const handleAddToCart = (order) => {
        console.log(order)
        if (user && user.email) {
            const orderItem = { name, img, price, itemId: _id, email: user.email }
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        alert('Order Confirm')
                    }
                    else {
                        alert('Please Login to order now')
                        navigate('/login')
                    }
                })
        }
    }

    return (
        <div>
            <div className='md:flex justify-evenly md:mx-auto mt-10 md:w-9/12'>
                <section className=''>
                    <div className="card space-y-2 text-center">
                        <img src={img} alt="" className="h-80 md:px-0 p-8" />
                        <h2 className='mb-5 text-2xl'>{name}</h2>
                        <p>{price}</p>
                        <button className="btn">
                            <FaShoppingCart />
                            <div className="badge badge-secondary">+{cart?.length || 0} </div>
                        </button>
                    </div>
                    <div className='divider'></div>
                    <div className=" text-center mt-6">
                        <button onClick={() => handleAddToCart(order)} className="btn bg-orange-400">Add To Cart</button>
                    </div>
                </section>

                <section className='mt-8'>
                    <div>
                        <div className="form-control  md:w-6/6 w-52 md:ml-0 ml-6 ">
                            <label className="label cursor-pointer">
                                <input type="radio" name="radio-10" className="radio checked:bg-pink-500  " checked />
                                <img className=' md:ml-5 w-8' src="/src/assets/icons/BKash.png" alt="" />
                                <h2>Bkash</h2>
                                <h2> 017xxxxxxxxx</h2>
                            </label>
                        </div>
                        <div className="form-control md:w-6/6 w-52 md:ml-0 ml-6">
                            <label className="label cursor-pointer">
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                <img className=' md:ml-5 w-20' src="/src/assets/icons/Nagad.png" alt="" />
                                <h2> 017xxxxxxxxx</h2>
                            </label>
                        </div>
                        <div className="form-control md:w-6/6 w-52 md:ml-0 ml-6 ">
                            <label className="label cursor-pointer">
                                <input type="radio" name="radio-10" className="radio checked:bg-lime-600" checked />
                                <img className=' w-12' src="/src/assets/icons/cash1.jpg" alt="" />
                                <h2> Cash On Delivery</h2>
                            </label>
                        </div>
                        <div className='divider'></div>

                    </div>
                    <form>
                        <div className='md:w-72 w-80 md:ml-0 ml-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">your Name</span>
                                </label>
                                <input type="text" name='person' required placeholder="text your name" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Payment Name</span>
                                </label>
                                <input type="text" name='payment' required placeholder="payment name" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="text" name='mobile' required placeholder="Give your mobile Number" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name='address' required placeholder=" Write your address" className="input input-bordered" />

                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-400">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </section>
            </div>

        </div>
    );
};

export default OrderPage;