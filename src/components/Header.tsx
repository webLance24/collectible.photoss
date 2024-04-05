import Logo from "../../public/assets/colll.jpeg"
import Facebook from "../../public/assets-2/Facebook.svg.png"
import Instagram from "../../public/assets-2/Instagram.svg.png"
import Linkedin from "../../public/assets-2/Linkedin.svg.png"
import { useContext } from "react"
import { MyContext } from "./Context"
import { Link } from "react-router-dom"



export default function Header() {
  const context = useContext(MyContext);
  const {setPage, page}: any = context;

  return (
    
    <div className="tavi p-[30px] flex  items-center justify-between  w-[100%]" id="arrow">
      <img src={Logo} className="w-[90px]"/>
      <div className="flex">
        <Link to={"/"}>
        <h1 className="text-[#808080] hover:text-[#FFFFFF] cursor-pointer duration-300 px-[15px]" onClick={() => setPage("Home")} 
        style={page === "Home" ? {color: "white"} : {}}>Home</h1>
        </Link>
        <Link to={"/about"}>
        <h1 className="text-[#808080] hover:text-[#FFFFFF] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("About")} 
        style={page === "About" ? {color: "white"} : {}}>About</h1>
        </Link>
        <Link to={"/gallery"}>
        <h1 className="text-[#808080] hover:text-[#FFFFFF] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("Gallery")} 
        style={page === "Gallery" ? {color: "white"} : {}}>Gallery</h1>
        </Link>
        <Link to={"/services"}>
        <h1 className="text-[#808080] hover:text-[#FFFFFF] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("Services")}
        style={page === "Services" ? {color: "white"} : {}}>Services</h1>
        </Link>
        <Link to={"/contact"}>
        <h1 className="text-[#808080] hover:text-[#FFFFFF] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("Contact")} 
        style={page === "Contact" ? {color: "white"} : {}}>Contact</h1>
        </Link>
        </div>
       <div className="social flex gap-x-[15px] duration-300 ">
          <a href="https://www.facebook.com/people/Collectiblephotoss/100094137796067/?mibextid=LQQJ4d" target="_blank">
            <img src={Facebook} className="w-[20px] cursor-pointer hover:scale-110 transition-transform duration-300"/>
          </a>
          <a href="https://www.instagram.com/collectible.photoss/" target="_blank">
            <img src={Instagram}  className="w-[20px] cursor-pointer hover:scale-110 transition-transform duration-300"/>
          </a>
          <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAD6UbN0BtoUemVN5TOnS5EqaZbNytI6N4TI&keywords=Ana%20Mamulashvili&origin=ENTITY_SEARCH_HOME_HISTORY&sid=lQD" target="_blank">
            <img src={Linkedin} className="w-[20px] cursor-pointer hover:scale-110 transition-transform duration-300"/>
          </a>
        </div>
    </div>
   
    
  )
}
