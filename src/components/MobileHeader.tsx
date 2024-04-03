import Logo from "../../public/assets/logo2.jpeg"
import { useContext, useEffect, useRef } from "react"
import { MyContext } from "./Context"
import Hamburger from "./Hamburger"

export default function MobileHeader() {
    const context = useContext(MyContext);
    const { setMenu, menu }: any = context;
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
                <button className="bg-[#27A776] hover:bg-[#2CBC85] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                    setMenu(!menu);
                }}>click</button>
            </div>
            {menu && (
                <div ref={menuRef}>
                    <Hamburger />
                </div>
            )}
        </div>
    )
}
