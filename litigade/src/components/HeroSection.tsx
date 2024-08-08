// src/HeroSection.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Header from './Header';
import { bookAppointment } from '../services/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IFormInput {
  name: string;
  email: string;
  department: string;
  time: string;
}

const HeroSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const result = await bookAppointment(data);
      console.log(result);
      if(result.status === 200) {
        toast.success(result.msg);
        reset();
      } else {
        toast.error(result.msg);
        console.log(result.data);
      }
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.error('Error al enviar información:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <section
      className="bg-cover bg-center min-h-screen py-20 relative"
      style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4719/6499/b7c887b760cd65685a6f0ca9b9efbc72?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTlRNdSEiKo42j8xQrvgpRs9DaFkjNuaBSq97egprnhpasd5pg6GOnvAs75I4dt3Ic-ioLmbSa6S4~4t3GKjl4UVgRGS0W6EcPclc805zfOh961a-8c-GHlVk-W2l4i9SYQEo-uujFm-aoEGgM2QP5hKwwshwVlmOLYmCtdy~WgU7cDCz9Q9~BDvA5ywEIw94eB00W7pIIrpvScxBuwr-2jmNTZHJRcEXdNogxZNtirRXu6q1USJYQDiMEnW2JVAwSM-tG0EtgjmnLjrkB7g0rC8WdxKr-Hh5g3DiiaooqzAJHEfagYWamv3hpgbz3QRvZtrVYiA-f~KuIaKMBONBw__')` }}
    >
      <Header />
      <div className="container mx-auto flex flex-wrap justify-between items-center text-white mt-16 px-9">
        <div className="w-full md:w-1/2 lg:w-3/4 mb-10 md:mb-0 text-center md:text-left md:px-28">
          <h1 className="md:text-6xl text-4xl font-bold text-text-color mb-4">
            Help to reclaim your life and freedom
          </h1>
          <div className='md:pr-32'>
            <p className="text-lg text-second-text-color tracking-wide my-9">
              We know how large objects will act, but things on a small scale.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <button className="bg-brown text-white font-bold px-9 py-3 rounded-full">Get Quote Now</button>
            <button className="border border-brown text-brown font-bold px-9 py-3 rounded-full">Learn More</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 bg-white p-9 shadow-md rounded-lg mt-16 md:mt-0">
          <h2 className="text-xl font-bold text-text-color mb-8 text-center">Book Appointment</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-text-color text-sm font-bold mb-2" htmlFor="name">
                Name*
              </label>
              <input
                {...register('name', { required: 'Este campo es requerido.' })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-text-color text-sm leading-tight focus:outline-none focus:shadow-outline bg-input-color mt-1 ${errors.name ? 'border-red-500' : ''}`}
                id="name"
                type="text"
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-text-color text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                {...register('email', { required: 'Este campo es requerido.', pattern: { value: /^\S+@\S+$/i, message: 'Dirección inválida.' } })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-text-color text-sm leading-tight focus:outline-none focus:shadow-outline bg-input-color mt-1 ${errors.email ? 'border-red-500' : ''}`}
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-text-color text-sm font-bold mb-2" htmlFor="department">
                Department *
              </label>
              <select
                {...register('department', { required: 'Este campo es requerido.' })}
                className={`shadow border rounded w-full py-2 px-3 text-text-color text-sm leading-tight focus:outline-none focus:shadow-outline bg-input-color mt-1 ${errors.department ? 'border-red-500' : ''}`}
                id="department"
              >
                <option value="">Please Select</option>
                <option value="sales">Ventas</option>
                <option value="support">Soporte</option>
                <option value="marketing">Marketing</option>
              </select>
              {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-text-color text-sm font-bold mb-2" htmlFor="time">
                Time *
              </label>
              <select
                {...register('time', { required: 'Este campo es requerido.' })}
                className={`shadow border rounded w-full py-2 px-3 text-text-color text-sm leading-tight focus:outline-none focus:shadow-outline bg-input-color mt-1 ${errors.time ? 'border-red-500' : ''}`}
                id="time"
              >
                <option value="">Please Select</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
            </div>
            <div className="flex items-center justify-between mt-10">
              <button
                className="bg-custom-blue hover:bg-blue-700 text-white text-sm font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                <span>Book Appointment</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default HeroSection;
