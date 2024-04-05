import Logo from "../../public/assets/colll.jpeg"
import { useContext, useEffect, useRef } from "react"
import { MyContext } from "./Context"
import Hamburger from "./Hamburger"

interface ComponentsProps {
    hidden: boolean;
    setHidden: (hidden: boolean) => void;
    menu: boolean;
    setMenu: (menu: boolean) => void;
    className: any;
  }

const StyledBurger = ({
    hidden,
    setHidden,
    menu,
    setMenu,
    className,
    ...props
  }: ComponentsProps) => (
    <button
      className={`flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none mb-[7px] ${className}`}
      onClick={() => {
        setHidden(!hidden);
        setMenu(!menu);
      }}
      {...props}
    >
      <div
        className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out mt-[7px] ${
          hidden ? "transform rotate-45 translate-y-2" : "transform rotate-0"
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out ${
          hidden ? "opacity-0" : "opacity-1"
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out ${
          hidden ? "transform -rotate-45 -translate-y-2" : "transform rotate-0"
        }`}
      ></div>
    </button>
  );

export default function MobileHeader() {
    const context = useContext(MyContext);
    const { setMenu, menu, hidden, setHidden }: any = context;
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setMenu]);

    

    return (
        <div>
            <div className="mob p-[30px] flex items-center justify-between w-[100%]" id="mobarrow">
                <img src={Logo} className="w-[90px]" />
                <StyledBurger
            hidden={hidden}
            setHidden={setHidden}
            menu={menu}
            setMenu={setMenu}
            className={undefined}
          />
            </div>
            {menu && (
                <div ref={menuRef}>
                    <Hamburger />
                </div>
            )}
            <div>
            
            </div>
        </div>
    )
}
