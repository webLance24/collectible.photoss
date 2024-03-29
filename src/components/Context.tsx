import { createContext, useContext } from "react";

interface ComponentsProps {
 page: string;
 setPage: (page: string) => void;
 categorie: string;
 setCategorie: (categorie: string) => void;
 scrolled: boolean;
 setScrolled: (scrolled: boolean) => void;
 menu: boolean;
 setMenu: (menu: boolean) => void;
 hidden: boolean;
 setHidden: (hidden: boolean) => void;
}


export const MyContext = createContext<ComponentsProps | null>(null);


export function Context() {
  const context = useContext(MyContext);
  return context;
}
