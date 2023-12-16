import "./Header.css";

const Header = () => {
  return (
    <>
      <h1>Family Wellness</h1>
      <small className="smallText">MASSAGE THERAPY</small>
      <div className="navBar">
        <ul>
          <li className="active">HOME</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>FAQ</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </>
  );
};
export default Header;
