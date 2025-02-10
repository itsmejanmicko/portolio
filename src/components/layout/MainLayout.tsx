import React from "react"
import Header from "../common/Navbar/Header"
import Footer from "../common/Footer/Footer"




const MainLayout:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <React.Fragment>
       <nav>
          <Header />
       </nav>

            <main className="font-custom">
              {children}
            </main>

         <footer>
            <Footer />
         </footer>
    </React.Fragment>
  )
}

export default MainLayout
