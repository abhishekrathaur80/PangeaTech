import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = (props)=>{
    return (
        <Navbar  bg="primary" variant="dark" expand="lg">
    <Container>
     <Navbar.Brand href="#home">Line Bar</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="me-auto">
          <NavDropdown title={props.currentRevenue} id="basic-nav-dropdown">
            <NavDropdown.Item name={"All"} onClick={(e)=>props.filterHandle(e)}>All Revenue</NavDropdown.Item>
            {props.isLoading && props.revenueType.map((item,index)=>{
                return <NavDropdown.Item name={item} key={index} onClick={(e)=>props.filterHandler(e)}>{item}</NavDropdown.Item>
            }) }
            
           </NavDropdown>

        </Nav>


     </Navbar.Collapse>

    </Container>
    </Navbar>
    )
}

export default Header;