import { useState } from "react"
import { MyContext } from "./components/Context"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Services from "./components/Services"
import Contact from "./components/Contact"


function App() {
  const [page, setPage] = useState<string>("Home")
  const [categorie, setCategorie] = useState<string>("gallery");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  

  console.log(categorie);
  
const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/contact",
    element: <Contact />
  }, 
])

  

  return (

 <>
   
<div>
 <MyContext.Provider value={{page, setPage, categorie, setCategorie, scrolled, setScrolled, menu, setMenu, hidden, setHidden}}>
   <RouterProvider router={router}/>
 </MyContext.Provider>
 </div>

 </>
  )
}

export default App
