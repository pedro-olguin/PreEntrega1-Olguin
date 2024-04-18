
import Brand from './components/brand/Brand'
import NavBar from './components/navBar/NavBar'
import './App.css'
import ItemListContainer from './components/itemListContainer/ItemListContainer'


function App() {
 

  return (
    <>
    <div className='header--style'>
      <Brand ancho={'180px'} alto={'100px'}/>
      <NavBar/>
      </div>
      <div className='main--style'>
      <ItemListContainer contenido={'Este es el Contenido de la pagina'}/>
      </div>
    </>
  )
}

export default App
