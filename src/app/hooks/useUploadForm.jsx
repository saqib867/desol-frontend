import React, { useState } from 'react'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import { app,storage } from '../firebase'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';

function useUploadForm() {
    const schema = yup.object().shape({
        carModal: yup.string().min(3).required("Car modal is required"),
        price: yup.string().min(1).max(32).required("Price field is required"),
        numberOfPicture: yup.number().min(1).max(10).default(1).required('Number of picture must be less than 10'),
        phone: yup.string().matches(/^\d{11}$/, "Phone number must be 11 digits").required("phone number must be a valid number"),
      });

      const { register, handleSubmit, formState: { errors }, reset,getValues } = useForm({
        resolver: yupResolver(schema),
      });

   
   
    const [pictures,setPictures] = useState([])
    const [loading, setLoading] = useState(false)
    const handleImage =(e)=>{
            
           const images = Array.from(e.target.files)
           setPictures(images)

}

const handleUploadForm = (data) => {
    setLoading(true)
    if(pictures.length < getValues().numberOfPicture){
        const imagePromises = pictures.map((item) => {
            return new Promise((resolve, reject) => {
              const storageRef = ref(storage, `images/${item.name}-${new Date()}`);
              const uploadTask = uploadBytesResumable(storageRef, item);
        
              uploadTask.on(
                'state_changed',
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(`Upload progress: ${progress}%`);
                },
                (error) => {
                  console.error('Error uploading file:', error);
                  reject(error);
                  setLoading(false)
                },
                async () => {
                  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                  console.log('File uploaded successfully, download URL:', downloadURL);
                  resolve(downloadURL);
                }
              );
            });
          });
        
          Promise.all(imagePromises)
            .then((imageUrls) => {
              // Now you have an array of image URLs, you can use them along with other data
              const formData = { ...data, pictures:imageUrls };
        
              axios.post('https://desol-backend-two.vercel.app/api/car', formData)
                .then((res) => {
                  console.log('Form added successfully');
                  alert("Form added successfully.")
                  reset()
                  setPictures([])
                  setLoading(false)
                })
                .catch((err) => {
                  console.log('Form submitting error', err);
                  alert(err)
                  setLoading(false)
                });
            })
            .catch((error) => {
              console.log('Error uploading one or more images:', error);
              alert(error?.response?.data?.message)
              setLoading(false)
            });
    }
    else{
         alert(`you can upload maximum ${getValues().numberOfPicture} picture`)
    }
    
  };
  
return {register,errors,handleSubmit,handleImage,handleUploadForm,pictures,loading,getValues}
}

export default useUploadForm
