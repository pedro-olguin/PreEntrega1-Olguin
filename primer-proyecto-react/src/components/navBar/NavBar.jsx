import CartWidget from "../carts/CartWidget";
import CategoryList from "../categories/CategoryList";
import './NavBar.css'

function NavBar(){
    return(
        <div className='navegador'>
            <CategoryList />
            <CartWidget />
            
        </div>
    )
}

export default NavBar;