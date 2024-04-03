import Header from "./Header"
import icon from "../../public/assets-2/icons8-camera-50.png"
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";
import { useContext } from "react";
import MobileHeader from "./MobileHeader";



function Services() {

const navigate = useNavigate();
const context = useContext(MyContext);
const {setPage}: any =
context;


  
  return (
    
   
  <div>
       <Header/>
       <MobileHeader/>
    <div className="px-[30px]">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-slate-50 text-[40px]">Services</h1>
        </div>
      <div className="flex justify-center items-center text-center">
        <div>
          <p className="text-[#808080] max-w-[750px]">♡ Our commercial photography services are tailored to help businesses showcase their brand and products effectively. Whether you're launching a new product, updating your website, or building your brand identity, we'll deliver high-quality images that set you apart from the competition. ♡ 
          </p>
          <button  onClick={() => (
            navigate("/contact"), setPage("Contact")
          )} className="text-[#e6e4e4] bg-[#27A776] mt-[20px] px-[40px] py-[12px] rounded-md tracking-wider hover:bg-[#2CBC85] hover:text-[#ffffff] duration-300">AVAILIBLE FOR HIRE</button>
        </div>
      </div>
      {/* Service Card Section */}
      <div className="flex justify-center items-center ">
      <div className="con relative flex justify-center items-center flex-wrap p-[60px 0] gap-[60px]">
        <div className="boxxx1">
          <div className="content">
            <div className="icon"><img src={icon} /></div>
              <div className="text">
                <h3>Food  Photography</h3>
                  <p className="text-[#999999]">♡ Deliciously captured moments that make your dishes irresistible. ♡ </p>
                  <button  onClick={() => (
                    navigate("/contact"), setPage("Contact")
                  )}>Free for hire</button>
              </div>
          </div>
        </div>
        <div className="boxxx2">
          <div className="content">
            <div className="icon"><img src={icon} /></div>
              <div className="text">
                <h3>Interior Photography</h3>
                  <p className="text-[#999999]">♡ Capturing the essence of your space with stunning interior photography. ♡</p>
                  <button onClick={() => (
                    navigate("/contact"), setPage("Contact")
                  )}>Free for hire</button>               
              </div>
          </div>
        </div>
        <div className="boxxx3">
          <div className="content">
            <div className="icon"> <img src={icon} /></div>
              <div className="text">
                <h3>People Photography</h3>
                  <p className="text-[#999999]">♡ Memorable portraits that reflect the beauty and personality of individuals.♡</p>
                  <button onClick={() => (
                    navigate("/contact"), setPage("Contact")
                  )}>Free for hire</button>              
              </div>
          </div>
        </div>
      </div>
      </div>

          {/* Service Card Section */}
        <div className="flex justify-center items-center py-[30px] text-[20px] mt-[10px]">
          <h1 className="text-[white]">Made by <a href="#" className="text-[#2CBC85]">@webLance</a></h1>
        </div>
      
    </div>
  </div>
    
  )
}

export default Services;
