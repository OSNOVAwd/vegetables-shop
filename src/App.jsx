
import { Route, Routes } from "react-router-dom"
import { About, Blog, Contact, Footer, HomePage, Navbar, SignUp } from "./components"
import Products from "./components/products/products"

const App = () => {
  return (
    <div className="over-flow hidden">
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<Products/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/vegetables' element={<Products/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
     </Routes>
     <Footer/>
    </div>
    )
}

export default App