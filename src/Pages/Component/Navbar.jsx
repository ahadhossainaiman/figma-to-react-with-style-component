import { Container } from "../../Styles/Common.styled";
import { Navigation } from "../../Styles/Navbar.styled";
import logo from "../../assets/image/codeabc.png";

const Navbar = () => {
  return (
    <Container>
      <Navigation>
        <div>
          <img src={logo} />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Teams</li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Navbar;
