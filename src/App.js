import logo from './assets/logo.png'
import AppHome from './assets/AppHome.png'
import AppReg from './assets/AppReg.png'
import AppChallenge from './assets/AppChallenge.png'
import people from './assets/people.jpg'
import './App.css';
import BetaForm from './components/BetaForm';
import Carousel from './components/Carousel';
import AboutCards from './components/AboutCards'

function App() {
  const images = [AppHome, AppReg, AppChallenge]

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-tulip-tree-600 ">
      

      <div className="flex  ">
        <div className="w-full relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#22222280] z-40"/>
          <div className="absolute top-0 bottom-0 overflow-hidden">
              <img className="z-10 " src={people} alt=""/>
          </div>

          <div className="md:flex  items-center justify-center w-full space-x-10 lg:space-x-24 xl:space-x-40 bg-tulip-tree-600">
            <div className="flex flex-col">
              <div className="w-full flex justify-center md:pt-20 pt-5 pb-10 z-50 ">
                <img className="rounded-lg shadow-lg " src={logo} alt="" width={150} height={150}/>
              </div>
              
              <div className="text-center z-50 text-white">
                <h1 className="text-4xl font-bold ">Fluthered App</h1>
              </div>
              
              <div className="w-full flex justify-center mb-20 z-50">
                <BetaForm/>
              </div>
            </div>

            <div className="">
              <Carousel images={images}/>
            </div>
          
          </div>
          
        
        </div>
        
        
        
          
        
      </div>
      <AboutCards/>
      
      


      
    </div>
  );
}

export default App;
