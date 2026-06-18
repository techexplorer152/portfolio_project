import Navbar from './components/navbar/navbar.tsx'
import Footer from './components/footer/footer.tsx'
import Laptop_3D from './pages/home/hero/hero.tsx'
// style={{margin:"180px"}}


const App=()=>{
  return (
      <div>
          <Navbar/>
          <div></div>
          <Laptop_3D/>

          <Footer/>
      </div>
  )
}
export default App;