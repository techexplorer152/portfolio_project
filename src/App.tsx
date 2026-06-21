import Navbar from './components/navbar/navbar.tsx'
import Footer from './components/footer/footer.tsx'
import Home from './pages/home/home.tsx'
import Projects from './pages/projects/projects.tsx'
import Background_of_me from "./pages/home/professional background/background.tsx";
import Stack from './pages/stack/stack.tsx'
// style={{margin:"180px"}} <Navbar/> <Laptop_3D/> <Footer/>
import Contact from './pages/contact/contact.tsx'
import styles from './App.module.css'


const App=()=>{
  return (
      <div className={styles.container}>
          <Navbar/>

          <Home/>
          <Projects/>
          <Background_of_me/>
          <div></div>
          <Stack/>
          <Contact />
          <Footer/>








      </div>
  )
}
export default App;