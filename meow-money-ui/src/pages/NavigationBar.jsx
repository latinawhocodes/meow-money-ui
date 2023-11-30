import { Form, NavLink } from "react-router-dom"
import PlantCat1 from "../assets/PlantCat1.png";
import BobaCat2 from "../assets/BobaCat1.png";

const NavigationBar = ({userName}) => { 
    return (
        <nav>
            <NavLink to="/" aria-label="Go to homepage">
                <img src={BobaCat2} alt="cat wearing a witch hat" height={40} />
                <span>Meow Money</span>
            </NavLink>
        </nav>
    )
}

export default NavigationBar;
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import PlantCat1 from '../assets/PlantCat1.png';

// function NavigationBar() {
//   return (
//     <Nav justify variant="tabs" defaultActiveKey="/" className="text-center">
//       <Nav.Item>
//         <Navbar.Brand href="#home"><img src={PlantCat1} height="50px" width="50px"/></Navbar.Brand>
//         <Navbar.Brand href="#home">Meow Money</Navbar.Brand>
//       </Nav.Item>
//       <Nav.Item className="navbar-style">
//         <Nav.Link href="/">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default NavigationBar;