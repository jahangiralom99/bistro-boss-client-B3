import { useForm } from "react-hook-form";
import useAxiosSe from "../../../Hooks/useAxiosSe";
import useAxiosSecret from "../../../Hooks/useAxiosSecret";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";



const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const {name, recipe, category, price, _id,} = useLoaderData();

    const { register, handleSubmit , reset } = useForm();
    const axios = useAxiosSe();
    const privetAxios = useAxiosSecret();

  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
      const res = await axios.post(image_hosting_api, imageFile, {
          headers: { 'content-type': 'multipart/form-data' },
      });
      if (res.data.success) {
          const addItem = {
              name: data.name,
              category: data.category,
              price: parseFloat(data.price),
              recipe: data.recipe,
              image: res.data.data.display_url
          };
          const menuItem = await privetAxios.patch(`/${_id}`, addItem);
          if (menuItem.data.insertedId) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
          }
        //   console.log(menuItem);
      }
    //   console.log(res.data);
      
    //   console.log(data);
  };


    return (
        <section className="mt-8">
      <SectionTitle
        className="text-center mt-8"
        heading="---update?---"
        subHeading="UPDATE ITEM"
      ></SectionTitle>
      <div className="p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name" defaultValue={name}
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price" defaultValue={price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" defaultValue={recipe} placeholder="details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div className="text-center">
                    <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                        Update Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                    </div>
                </form>
            </div>
    </section>
    );
};

export default UpdateItem;