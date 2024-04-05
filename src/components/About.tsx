import Header from "./Header"
import Anom from "../../public/assets-2/anom.jpeg"
import Arrow from "../../public/assets-2/angle-right (1).png"
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";
import { useContext } from "react";
import MobileHeader from "./MobileHeader";



function About() {

const navigate = useNavigate();
const context = useContext(MyContext);
  const { setPage, }: any =
    context;

    
  return (
    <div>
        <Header/>
        <MobileHeader/>
        
        <div className="flex justify-center items-center text-center " id="about">
      <h1 className="text-slate-50 text-[40px]">About</h1>
      </div>
      <div className="flex justify-center items-center text-center">
      <div>
      <p className="text-[#808080] px-[15px]">♡ I'm Ano, your passionate photographer based in the heart of Tbilisi. <br/> With a keen eye for detail and a love for preserving moments, I specialize in creating <br/>   collectible photos that capture the essence of every occasion. ♡
      </p>
        <button onClick={() =>(
          navigate("/contact"), setPage("Contact")
          
        )} className="text-[#e6e4e4] bg-[#27A776] mt-[20px] px-[40px] py-[12px] rounded-md tracking-wider hover:bg-[#2CBC85] hover:text-[#ffffff] duration-300">AVAILIBLE FOR HIRE</button>
      </div>
     </div>
    
    <div className="flex justify-center items-center gap-[30px] pt-[30px] flex-wrap px-[10px]">
        <img src={Anom} className="Anno"/>
        <div>
        <h1 className="text-[30px] text-[#27A776]">Professional Photographer from Georgia</h1>
        <p className="pt-[15px] text-[white]">
        ♡ Capture the essence of your business, restaurants, food, and moments <br/>
        with Collectible Photos by Ano!
        Order your session here and let's create <br/>
         stunning visuals together. ♡
        </p>
        <div className="flex gap-[30px] flex-wrap">
        <div className="pt-[25px] grid gap-[25px]">
        <div className="flex">
        <img src={Arrow} />
        <h3 className="text-[white]"> <strong>Birthday :</strong> 12 Jan 2000</h3>
        </div>
        <div className="flex">
        <img src={Arrow} />
        <h3 className="text-[white]"> <strong>City :</strong> Tbilisi, Georgia</h3>
        </div>
        <div className="flex">
        <img src={Arrow} />
        <h3 className="text-[white]"> <strong>number :</strong> +995 599 177 612</h3>
        </div>
        </div>
        <div className="pt-[25px] grid gap-[25px]">
        <div className="flex">
        <img src={Arrow} />
        <h3 className="text-[white]"> <strong>Age :</strong> 24</h3>
        </div>
        <div className="flex">
        <img src={Arrow} />
        <h3 className="text-[white]"> <strong>Email :</strong> ana.mamulashvili2000@gmail.com</h3>
        </div>
        <div className="flex">
        <img src={Arrow} />
        <h3 className="text-[white]"> <strong>Degree :</strong> Master</h3>
        </div>
        </div>
        </div>
        <div className="pt-[30px] text-[white]"><p>♡ Want stunning photos for your business, restaurants, food, or memorable <br/> moments with people and places? Look no further!
          At Collectible Photos by Ano,<br/> we specialize in capturing the essence of your business and the beauty of your <br/>offerings. From mouthwatering dishes to vibrant atmospheres, we'll bring your <br/>vision to life through our lens.
          Order your photo session directly through our website <br/>and let us showcase the best of what you have to offer. Elevate your visual presence <br/> and leavea lasting impression on your audience.
          Ready to showcase your business <br/>in the best light possible? Click below to book your session now! ♡
        </p></div>
        <div className="pt-[40px] text-[white]"><p>♡ Based in the heart of Tbilisi, but our lenses are ready to capture the beauty of<br/> Batumi too!  While we call Tbilisi home, we're more than happy to pack our gear<br/>
        and head to Batumi for your photo session.  Just let us know your preferred location, <br/>and we'll take care of the rest. Your memories, no matter where they're made, are our<br/> priority. Reach out today to schedule your session in Tbilisi or Batumi.
        Let's turn your <br/>vision into stunning photographs, wherever it may lead us! Book your photo session <br/>with us and let's immortalize the magic of Tbilisi and Batumi together.♡
         
        </p></div>
        </div>
    </div>
        {/* footer */}
            <div className="flex justify-center items-center py-[20px] text-[20px]">
              <h2 className="text-[white]">Made by <a href="#" className="text-[#2CBC85]">@webLance</a></h2>
            </div>
        {/* footer */}
    </div>
  )
}

export default About
