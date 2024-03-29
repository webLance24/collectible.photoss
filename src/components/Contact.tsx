import Header from "./Header"
import Gmail from "../../public/assets-2/gmail.png"
import Fb from "../../public/assets-2/fb.png"
import Insta from "../../public/assets-2/insta.png"
import In from "../../public/assets-2/In.png"
import Phone from "../../public/assets-2/phone.png"
import Location from "../../public/assets-2/location.png"
import { useEffect, useRef } from "react"
import emailjs from '@emailjs/browser';
import MobileHeader from "./MobileHeader"



function Contact() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


const categories = [
  { category: "Location", title:"Location", text: "Tbilisi, Georgia", src: Location },
  { category: "Fb", title:"Facebook", text: "Collectible.photoss", src: Fb, href: "https://www.facebook.com/profile.php?id=100094137796067" },
  { category: "Insta", title:"Instagram", text: "Collectible.photoss", src: Insta, href: "https://www.instagram.com/collectible.photoss/"},
  { category: "In", title:"Linked In", text:"Ana Mamulashvili", src: In, href: "https://www.linkedin.com/in/ana-mamulashvili-565745253/" },
  { category: "Phone", title:"Number", text: "995+ 599 177 602", src: Phone },
  { category: "gmail", title:"Gmail", text: "ana.mamulashvili2000@gmail.com", src: Gmail },
]

const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (form.current) {
    emailjs
      .sendForm('service_8gp30s4', 'template_6wb9fg8', form.current, {
        publicKey: '696NEdabLVIEDY9Op',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.currentTarget.reset(); // Reset the form
  } else {
    console.error("Form reference is null.");
  }
};




  return (
  <div>
        <Header/>
        <MobileHeader/>
        <div className="flex justify-center items-center text-center">
        <h1 className="text-slate-50 text-[40px]">CONTACT US</h1>
      </div>
      <div className="flex justify-center items-center text-center">
        <div>
          <p className="text-[#808080] max-w-[600px] px-[15px]">
          Ready to turn your moments into everlasting memories? Look no further! At webLance, we're poised and prepared to bring your vision to life. Whether you're eager to schedule a session, explore our services, or even just share your thoughts, we're here, at your service.
          Contact to arrange shootings  <br /> ♡
          </p>
        </div>
      </div>
<div className="flex justify-center items-center flex-wrap gap-[50px] p-[15px]">
      <div className="flex justify-center ml-[20px] flex-col gap-[35px] mt-[80px]">
      {categories.map((category, index) => {
       return (
        <div key={index} className="flex gap-[10px]">
          <div className="flex justify-center items-center gap-[5px]">
            <img src={category.src} className=""/>
          </div>
          <div>
          <h4 className="text-[white]">{category.title}</h4>
          <a href={category.href} target="_blank">
          <p className="text-[white] cursor-pointer">{category.text}</p>
          </a>
          </div>
          </div>
        );
      })}
</div>
<section>
   <div className="">
     <h2 className="text-center text-[white] text-[25px]">Contact <span className="text-[#2CBC85]">US</span></h2>
      <form ref={form} onSubmit={sendEmail} className=" flex justify-center items-center flex-col gap-[20px]">

    <input type="text" 
    placeholder="Full Name"
    name="user_name" className="bg-[black] border-[1px] border-[#2CBC85] outline-none text-white font-bold py-2 px-4 rounded" required/>

    <input type="email" 
    placeholder="Email"
    name="user_email" className="bg-[black] border-[1px] border-[#2CBC85] outline-none text-white font-bold py-2 px-4 rounded" required/>

    <input type="text" 
    placeholder="Subject"
    name="subject" className="bg-[black] border-[1px] border-[#2CBC85] outline-none text-white font-bold py-2 px-4 rounded" required/>
    <textarea name="message" placeholder="Type your message here..." cols={30} rows={5} className="bg-[black] border-[1px] border-[#2CBC85] outline-none text-white font-bold py-2 px-4 rounded"></textarea>
    <button type="submit" className="text-[#e6e4e4] bg-[#27A776]  outline-none  tracking-wider  hover:bg-[#27a776b7]  hover:text-[#ffffff] duration-300  py-2 px-4 rounded">Send Message</button>
    </form>
   </div>
 </section>
</div>
<div className="flex justify-center items-center py-[20px] text-[20px]">
        <h2 className="text-[white]">Made by <a href="#" className="text-[#2CBC85]">@webLance</a></h2>
      </div>

  </div>
  )
}

export default Contact
