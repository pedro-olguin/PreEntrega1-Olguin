import CartIcon from "./CartIcon";
import "./CartWidget.css"


function CartWidget(){
    return(
        <div>
            <a className="a--cart" href="#">
        <CartIcon ancho={'30px'} alto={'35px'}/>
        <span className="cart--number">2</span>
        </a>
        </div>
    )
}

export default CartWidget;