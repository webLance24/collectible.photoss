import Header from "./Header"
import data from "../../data.json";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";
import { useContext } from "react";
import MobileHeader from "./MobileHeader";


export default function Home() {
  const allImages = data.images;

 const navigate = useNavigate();
 const context = useContext(MyContext);
  const { setPage }: any =
    context;

    


  return (
<>
    <Header/>
    <MobileHeader/>
    <div className="px-[20px]">
        <div className="flex justify-center items-center text-center">
      <h1 className="text-slate-50 text-[40px]">Collectible Photos</h1>
      </div>
      <div className="flex justify-center items-center text-center">
      <div>
      <p className="text-[#808080]">♡ Step into the enchanting world of Collectible Photos, where every click unveils a tale. <br/> I'm Ano, your visual storyteller. Together, let's seize moments, <br/> craft memories, and revel in the splendor of life's wonders. ♡
      </p>
        <button onClick={() => (
            navigate("/contact"), setPage("Contact")
        )} className="text-[#e6e4e4] bg-[#27A776] mt-[20px] px-[40px] py-[12px] rounded-md tracking-wider hover:bg-[#2CBC85] hover:text-[#ffffff] duration-300">AVAILIBLE FOR HIRE</button>
      </div>
      </div>
      <div className="flex justify-center items-center pt-[40px] gap-[20px] flex-wrap">
      {allImages.map((image, index) => (
      <img src={image.src} key={index} alt={image.title} className="w-[300px] h-[250px] rounded-md object-cover hover:scale-105  transition duration-300 cursor-pointer" />
      ))}
      </div>
      <div className="flex justify-center items-center py-[20px] text-[20px]">
        <h2 className="text-[white]">Made by <a href="https://www.weblance.ge/" target="_blank"  className="text-[#2CBC85]">@webLance</a></h2>
      </div>
    </div>
    </>
  )
}
