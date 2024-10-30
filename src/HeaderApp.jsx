import { Link } from "react-router-dom";

export default function HeaderApp(){

    return(<>
    <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link">Counter Component</Link>
                </li>
                {/* anchor tag kills the purpose of single page application
                as it reload page from the server - 
                instead we use "link tag" */}
                <li className="nav-item">
                    <Link to="/ecom-list" className="nav-link">E-commerce Component</Link>
                </li>
                <li className="nav-item">
                <Link to="/todo" className="nav-link">TODO Component</Link>
                </li>
                <li className="nav-item">
                    <a href="/todo" className="nav-link">TODO  but with a tag</a>
                </li>
                <li className="nav-item"></li>
            </ul>
        </div>
    </nav>
    </>);
}