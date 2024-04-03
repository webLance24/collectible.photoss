import circle from "../../public/assets-2/icons8-up-arrow-64.png"
import  { useContext, useEffect, useState } from "react";
import Header from "./Header";
// import MobileHeader from "./MobileHeader";
import data from "../../data1.json";
import { Link } from "react-scroll";
import { MyContext } from "./Context";
import { useNavigate } from "react-router-dom";
import MobileHeader from "./MobileHeader";



const Gallery = () => {

 
    

  const categories = [
    { title: "Food", category: "food" },
    { title: "Interior", category: "interior" },
    { title: "All", category: "" }, // Empty string for all categories
    { title: "People", category: "people" },
    { title: "Nature", category: "nature" },
  ];
  const [filterCategory, setFilterCategory] = useState<string>("");

  
  // Filter images based on selected category
  const filteredImages = filterCategory
    ? data.photos.find((category) => category.category === filterCategory)?.images || []
    : data.photos.flatMap((category) => category.images);


    const context = useContext(MyContext);
    const {setScrolled, scrolled, setPage}: any = context;
    const navigate = useNavigate();


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true); // Set scrolled to true when scrolled down
        } else {
          setScrolled(false); // Set scrolled to false when scrolled up
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div>
      <Header />
      <MobileHeader/>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-slate-50 text-[40px]">Gallery</h1>
      </div>
      <div className="flex justify-center items-center text-center">
        <div>
          <p className="text-[#808080] px-[10px]">
            Welcome to my photography gallery, where every click narrates a story <br /> ♡
          </p>
          <button onClick={() => {
            navigate("/contact");
            setPage("Contact");
            }} className="text-[#e6e4e4] bg-[#27A776] mt-[20px] px-[40px] py-[12px] rounded-md tracking-wider hover:bg-[#2CBC85] hover:text-[#ffffff] duration-300">
            AVAILABLE FOR HIRE
          </button>
        </div>
      </div>
      {/* Category selection */}

      <div className="rame flex justify-center items-center pt-[40px] pb-[30px] px-[20px] gap-[30px] flex-wrap">
        {categories.map((category, index) => (
          // filter for desktop
          <div className="center" key={index}>
            <div className="container" onClick={() => setFilterCategory(category.category)}>
            <img src={`../assets-3/${category.title}.png`} className="h-[100px] cursor-pointer" alt={category.title} />
              <h2>{category.title}</h2>            
            </div>
            {/* filter for Mobile version */}
            <div className="mobile-filter flex justify-center items-center">
              <button className="text-[white] text-[14px] font-normal px-[15px] pt-[3px] pb-[3px] rounded-[5px] hover:bg-[#2CBC85] duration-300 ease-in-out cursor-pointer" onClick={() => setFilterCategory(category.category)} style={
                  category.category === filterCategory
                  ? {backgroundColor: "#2CBC85"}
                  :{}
              }>{category.title}</button>
            </div>
          </div>
        ))}
      </div>
      {/* Image filtered based on selected category */}
      <div className="grid-wrapper p-[20px] ">
        {filteredImages.map((image, index) => (
          <div className="" key={index}>
            <img
              className="Img  hover:scale-105 transition-all duration-300 cursor-pointer"
              src={`../${image.src}`}
              alt=""
              />
          </div>
        
        ))}
      </div>
      <div className="flex items-center justify-center py-[20px] text-[20px]">
        <h2 className="text-[white]">Made by <a href="#" className="text-[#2CBC85]">@webLance</a></h2>
      </div>
       {/* for desktop scroll up arrow */}
       <div className="link-1">
    <Link 
      to={"arrow"}
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} 
  
    >
    <div className={`fixed right-0 bottom-0 circle cursor-pointer rounded-[50px] w-[60px] h-[60px] bg-[${scrolled ? "#27A776" : "transparent"}] flex justify-center items-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
      <img src={circle} className="hover:scale-105 transition-all duration-300 w-[50px] h-[50px]" alt="Scroll Up" />
    </div>
   
      </Link>
      </div>
          {/* for mobile scroll up arrow */}
          <div className="link-2">
    <Link 
      to={"mobarrow"}
      spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} 
  
    >
    <div className={`fixed right-0 bottom-0 circle cursor-pointer rounded-[50px] w-[60px] h-[60px] bg-[${scrolled ? "#27A776" : "transparent"}] flex justify-center items-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
      <img src={circle} className="hover:scale-105 transition-all duration-300 w-[50px] h-[50px]" alt="Scroll Up" />
    </div>
      </Link>
      </div>
    </div>
  );
};

export default Gallery;

