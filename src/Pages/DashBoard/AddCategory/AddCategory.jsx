import { useContext } from "react";
import { AuthContext } from "../../../LoginInfo/AuthProvider/AuthProvider";
import { useForm } from 'react-hook-form';
import axios from "axios";


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddCategory = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.img[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url
                    const { name, category, price } = data
                    const newItem = { name, img: imgURL, category, price }
                    console.log(newItem)
                    axios.post('http://localhost:5000/furniture', newItem)
                        .then(data => {
                            alert('Data inserted successfully')
                            console.log('after post new menu item', data.data)
                        })

                }

            })
        console.log(data)
    };

    console.log(errors);

    console.log(img_hosting_token)
    return (
        <div>
            <div className='uppercase text-center font-semibold text-2xl mt-10' ><h2>Add Category</h2></div>
            <div className="divider"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-gray-300 p-10 rounded font-semibold mt-10">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product name*</span>
                    </label>
                    <input type="text" placeholder="Product name"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <input type="file"
                        {...register("img", { required: true, maxLength: 80 })}
                        className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category name*</span>
                    </label>
                    <input type="text" placeholder="Category name"
                        {...register("category", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input type="number" placeholder="Price"
                        {...register("price", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <input className="btn btn-active btn-neutral btn-sm" type="submit" value="Add Category" />
            </form>

        </div>
    );
};


export default AddCategory;