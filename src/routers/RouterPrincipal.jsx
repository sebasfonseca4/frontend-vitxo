import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { Home } from '../pages/Home/Home'
import { CreateAccount } from "../pages/CreateAccount/CreateAccount"
import { ScrollTop } from '../Utils/ScrollTop/ScrollTop'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter >
      {/* Header */}
      <Header/>
      <ScrollTop />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create-account" element={ <CreateAccount/> } />
          <Route path="*" element={ <>Error 404</> } />
      </Routes>      
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}
