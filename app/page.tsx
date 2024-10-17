'use client';
import Image from "next/image";
import hero from './Assets/iphone-mockup.png'
import { FormEvent } from "react";
export default function Home() {
  const FormAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')
    const password = formData.get('password')
    const terms = formData.get('terms')
    console.log(formData);
    // Your form submission logic here
  };
  return (

    <div className="h-screen w-screen  flex items-center justify-center">
      <div className="w-4/6 h-4/5 bg-white flex flex-row-reverse  ">

        <div className="flex-grow flex flex-col items-center  text-bblue p-5 gap-y-3">
          <p className="text-2xl font-bold w-4/5">Login</p>
          <form onSubmit={FormAction} className="flex flex-col gap-y-3 items-start w-4/5 self-center">
            <div className="flex flex-col gap-y-2">

        <label htmlFor="" className="text-xl ">Email</label>
        <input placeholder="johm@example.com" type="email" name="email" id="email" className="p-2 focus:outline-none border-2 border-background rounded-md focus:border-2 focus:border-bblue " />
            </div>
        <div className="flex flex-col gap-y-2">
        <label htmlFor="" className="text-xl ">Password</label>
              
        <input placeholder="at least 8 charcters " type="password" name="password" id="password" className="p-2 focus:outline-none border-2 border-background rounded-md focus:border-2 focus:border-bblue " />
            </div>
            <div className="flex gap-x-1 justify-center  p-2">
              <input type="checkbox" name="terms" id="terms" />
              <p className="text-xs font-bold">      By creating an account, you agree to the <a href="#terms-of-service" className=" underline text-blue-400" target="_blank">Terms of service</a>.
              </p>

            </div>
            <button className="w-4/5 bg-bblue p-3 rounded-md text-white self-center">Create an account</button>
          </form>
      </div>
      <div className=" w-1/2 flex flex-col items-center justify-between bg-bblue h-full  text-white" >
          <div className=" flex-grow  w-full flex flex-col items-center justify-center" >
            <p className="text-2xl font-bold ">Gradie</p>
            <p className="">Beautiful Gradients in seconds   </p>
    </div>
      <Image className="h-3/4 w-4/5"  src={hero} alt="hero picture"  />
      </div>
      </div>
    </div>
  );
}
