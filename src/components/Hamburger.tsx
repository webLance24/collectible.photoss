import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from './Context';


function Hamburger() {
  const context = useContext(MyContext);
  const {setPage, page, menu, setMenu}: any = context;
console.log(menu);
  return (
    <>
    <div>
      {menu && (
       <>
     <div className="pl-[8px] pr-[13px] w-[100%] pt-[8px] pb-[36px] flex flex-col fixed mt-[10px] right-0 z-20">
  <div className='bg-[#FFFFFF] rounded-[10px] h-[390px] w-[100%] z-10 pt-[20px]'>
    <Link to={"/"}>
      <div className='pl-[20px]  transition duration-200 ease-in-out hover:bg-[#2CBC85]' onClick={() => (
        setMenu(!menu), setPage("Home")
      )}  style={page === "Home" ? {backgroundColor: "#2CBC85"} : {}}>
      <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 p-[5px]" onClick={() => setPage("Home")} style={page === "Home" ? { color: "black" } : {}}>Home</h1>
      </div>
    </Link>
    <Link to={"/about"}>
    <div className='pl-[20px] transition duration-200 ease-in-out hover:bg-[#2CBC85]' onClick={() => (
      setMenu(!menu)
    )}
    style={page === "About" ? {backgroundColor: "#2CBC85"} : {}}>
      <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 p-[5px]" onClick={() => setPage("About")} style={page === "About" ? { color: "black" } : {}}>About</h1>
    </div>    
    </Link>
    <Link to={"/gallery"}>
    <div className='pl-[20px] transition duration-200 ease-in-out hover:bg-[#2CBC85]'  onClick={() => (
      setMenu(!menu)
    )} 
    style={page === "Gallery" ? {backgroundColor: "#2CBC85"} : {}}>
      <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 p-[5px]" onClick={() => setPage("Gallery")} style={page === "Gallery" ? { color: "black" } : {}}>Gallery</h1>
    </div>
    </Link>
    <Link to={"/services"}>
      <div className='pl-[20px] transition duration-200 ease-in-out hover:bg-[#2CBC85]'  onClick={() => (
      setMenu(!menu)
    )} 
    style={page === "Services" ? {backgroundColor: "#2CBC85"} : {}}>
      <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 p-[5px]" onClick={() => setPage("Services")} style={page === "Services" ? { color: "black" } : {}}>Services</h1>
      </div>
    </Link>
    <Link to={"/contact"}>
    <div className='pl-[20px] transition duration-200 ease-in-out hover:bg-[#2CBC85]'  onClick={() => (
      setMenu(!menu)
    )}
    style={page === "Contact" ? {backgroundColor: "#2CBC85"} : {}}>
      <h1 className="text-[#6e6e6e] hover:text-[#000000] cursor-pointer duration-300 p-[5px]" onClick={() => setPage("Contact")} style={page === "Contact" ? { color: "black" } : {}}>Contact</h1>
      </div>
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
