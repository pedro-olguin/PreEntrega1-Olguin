import "./CategoryList.css"


function CategoryList(){
    return(
        <nav>
        <ul className="category--list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cartas</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Obsequios</a></li>
        </ul>
        </nav>
    )
}

export default CategoryList