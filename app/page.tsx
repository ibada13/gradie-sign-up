'use client';
import Image from "next/image";
import hero from './Assets/iphone-mockup.png'
import { MdErrorOutline } from "react-icons/md";
import { FormEvent, useState } from "react";
import { validateEmail , validatePassword } from "./lib/function";
export default function Home() {
  const [passworderror, Setpassworderror] = useState<boolean>(false);
  const [emailerror, Setemailerror] = useState<boolean>(false);
  const [termserror, Settermserror] = useState<boolean>(false);
  const FormAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    console.log(email)
    const password = formData.get('password') as string;
    const terms = formData.get('terms');
    Setemailerror(!validateEmail(email))
Setpassworderror(!validatePassword(password))
 Settermserror(terms===null)
  };
  return (

    <div className="h-screen w-screen  flex  items-center justify-center">
      <div className="w-5/6 sm:w-4/6 h-4/5 flex  flex-col-reverse md:flex-row-reverse  ">

        <div className="flex-grow flex flex-col items-center bg-white text-bblue p-5 gap-y-3">
          <p className="text-2xl font-bold w-4/5">Login</p>
          <form onSubmit={FormAction} className="flex flex-col gap-y-3 items-start w-full self-center">
            <div className="flex flex-col gap-y-2 w-full">

        <label htmlFor="" className={`text-xl ${emailerror?"text-[#f00]":""}`}>Email</label>
              <div className="w-4/5 flex justify-between items-center ">
                
        <input placeholder="johm@example.com" type="email" name="email" id="email" className={`p-2 focus:outline-none border-2 border-background rounded-md focus:border-2 focus:border-bblue  w-4/5 ${emailerror?"border-[#f00]":""}`} />
                {emailerror&& 

        <MdErrorOutline  size={35} color="#f00"/>
                }
        </div>

            </div>
            
        <div className="flex flex-col gap-y-2 w-full">
        <label htmlFor="" className={`text-xl ${passworderror?"text-[#f00]":""}`} >Password</label>
              <div className="w-4/5 flex justify-between items-center">

        <input placeholder="at least 8 charcters " type="password" name="password" id="password" className={`p-2 focus:outline-none border-2 border-background rounded-md focus:border-2 focus:border-bblue w-4/5 ${passworderror?"border-[#f00]":""}`} />
        {passworderror&& 

<MdErrorOutline  size={35} color="#ff0000"/>
        }
              </div>
            </div>
            <div className="flex gap-x-1 justify-center  p-2">
              <input type="checkbox" name="terms" id="terms" className={ `${termserror?"border-[#f00]":""}`} />
              <p className={`text-xs font-bold ${termserror?"text-[#f00]":""}`}>      By creating an account, you agree to the <a href="#terms-of-service" className=" underline text-blue-400" target="_blank">Terms of service</a>.
              </p>

            </div>
            <button className="w-4/5 bg-bblue p-3 rounded-md text-white self-center">Create an account</button>
          </form>
      </div>
      <div className=" w-full md:w-1/2 flex flex-col items-center justify-between bg-bblue h-1/2 md:h-full  text-white" >
          <div className=" flex-grow  w-full flex flex-col items-center justify-center" >
            <p className="text-2xl font-bold ">Gradie</p>
            <p className="">Beautiful Gradients in seconds   </p>
    </div>
      <Image className="h-1/2 md:h-3/4 w-4/5"  src={hero} alt="hero picture"  />
      </div>
      </div>
    </div>
  );
}
