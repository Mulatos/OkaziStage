import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

interface NavBarProps {
  home: string;
  navItem1: string;
  navItem2: string;
  navItem3: string;
  navItem4: string;
  navItem5: string;
  rightCorner: string;
}

function Navbar({
  home,
  navItem1,
  navItem2,
  navItem3,
  navItem4,
  navItem5,
  rightCorner,
}: NavBarProps) {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand href="/">{home}</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/measurements">{navItem1}</Nav.Link>
            <Nav.Link href="/categories">{navItem2}</Nav.Link>
            <Nav.Link href="/subcategories">{navItem3}</Nav.Link>
            <Nav.Link href="/locations">{navItem4}</Nav.Link>
            <Nav.Link href="/overview">{navItem5}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/users">{rightCorner}</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
