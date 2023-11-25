"use client";
import useUploadForm from "@/app/hooks/useUploadForm";
import ProtectedRoute from "@/app/protected/ProtectedRoute";
import { Input } from "antd";
import React from "react";

function page() {
  const { errors, handleImage, handleSubmit, register, handleUploadForm,pictures,loading,getValues } = useUploadForm();
 
  return (
    
      <div>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <h2 class="font-semibold text-xl text-gray-600">
                Responsive Form
              </h2>
              <p class="text-gray-500 mb-6">
                Form is mobile responsive. Give it a try.
              </p>

              <form
                onSubmit={handleSubmit(handleUploadForm)}
                class="bg-white h-full rounded shadow-lg p-4 px-4 md:p-8 mb-6"
              >
                <div class="grid gap-4  gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600 h-full w-full">
                    {getValues().numberOfPicture && <small>You can upload maximum {getValues().numberOfPicture}</small>}
                    <label htmlFor="images" className="flex h-full items-center justify-center border-dashed border-2 w-">
                    <svg id="Line" enable-background="new 0 0 32 32" height="42" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m30 24v4c0 1.103-.897 2-2 2h-24c-1.103 0-2-.897-2-2v-4c0-.552.447-1 1-1s1 .448 1 1v4h24v-4c0-.552.447-1 1-1s1 .448 1 1z"/><path d="m8.293 10.707c-.391-.391-.391-1.023 0-1.414l6.999-6.999c.391-.392 1.03-.387 1.416 0l6.999 6.999c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-5.293-5.293v17.586c0 .552-.447 1-1 1s-1-.448-1-1v-17.586l-5.293 5.293c-.391.391-1.023.391-1.414 0z"/></svg>
                    </label>
                    <input type="file" id="images" multiple onChange={(e)=>handleImage(e)} className="hidden" />
                    
                  </div>

                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label for="full_name">Car Model</label>
                        <input

                          type="text"
                          name="Car modal"
                          id="Car Modal"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register('carModal')}
                        />
                        {errors?.carModal && <small>{errors.carModal.message}</small>}
                      </div>

                      <div class="md:col-span-5">
                        <label for="email">Price</label>
                        <input
                          type="text"
                          name="Price"
                          id="Price"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          
                          placeholder="2000000"
                          {...register('price')}
                        />
                        {errors?.price && <small>{errors.price.message}</small>}
                      </div>

                      <div class="md:col-span-3">
                        <label for="address">Phone Number</label>
                        <input
                          type="text"
                          name="Phone Number"
                          id="Phone Number"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          {...register('phone')}
                        />
                        {errors?.phone && <small>{errors.phone.message}</small>}
                      </div>


                      <div class="md:col-span-2">
                        <label for="soda">Number of Picture</label>
                        <div className="h-10">
                        <input
                          
                        //   onChange={handleChange}
                          type="number"
                          placeholder="Input a number"
                          max={10}
                          {...register('numberOfPicture')}
                         
                          class="h-full border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                     </div>
                        {errors?.numberOfPicture && <small>{errors.numberOfPicture.message}</small>}
                      </div>

                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={loading}>
                            {loading ? "Submitting..." :"Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex flex-col gap-y-2">
                         {pictures?.map((item,index)=>(
                            <div className="flex p-2 border-[1px] border-slate-300" key={index}>
                               <img src={URL.createObjectURL(item)} className=" w-10 h-10 border rounded" />
                             </div>
                         ))}    
                     </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default page;
