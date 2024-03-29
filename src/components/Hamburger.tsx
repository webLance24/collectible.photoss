import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './Context';


function Hamburger() {
  const context = useContext(MyContext);
  const {setPage, page, menu }: any = context;
console.log(menu);
  return (
    <>
    <div className='bg-[white] right-[0] fixed h-[150px] w-[100%] flex justify-center text-start flex-col'>
      {menu && (
       <>
      <div>
         <div>
          <Link to={"/"}>
          <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 px-[15px]" onClick={() => setPage("Home")} 
          style={page === "Home" ? {color: "black"} : {}}>Home</h1>
          </Link>
          <Link to={"/about"}>
          <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("About")} 
          style={page === "About" ? {color: "black"} : {}}>About</h1>
          </Link>
          <Link to={"/gallery"}>
          <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("Gallery")} 
          style={page === "Gallery" ? {color: "black"} : {}}>Gallery</h1>
          </Link>
          <Link to={"/services"}>
          <h1 className="text-[#6e6e6e] hover:text-[##000000] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("Services")}
          style={page === "Services" ? {color: "black"} : {}}>Services</h1>
          </Link>
          <Link to={"/contact"}>
          <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 px-[15px]"  onClick={() => setPage("Contact")} 
          style={page === "Contact" ? {color: "black"} : {}}>Contact</h1>
          </Link>
          </div>
          </div>
          </>
          )}
    </div>
    </>
  );
}

export default Hamburger;
