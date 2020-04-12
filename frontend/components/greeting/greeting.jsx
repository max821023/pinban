import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showDropDown: false }
    this.renderDropdown = this.renderDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  renderDropdown() {
    this.setState({ showDropDown: true })
    document.addEventListener('click', this.closeDropdown)
  }

  closeDropdown(e) {
    if (this.state.showDropDown && 
      e.target.className !== "dropdown" &&
      e.target.className !== "dropdownName" &&
      e.target.className !== "dropdownName-wrapper") {
      this.setState({ showDropDown: false });
      document.removeEventListener('click', this.closeDropdown)
    }
  }

  render() {
    const { currentUser, logout } = this.props
    return (
    <div className="header-group">
      <div className="navbar">
        <div className="left-side">
          <i className="material-icons">
            <Link to="/boards">home</Link>
          </i>
        </div>
        <div className="center">
          <i className="fab fa-trello"></i>
          <span className="icon">
            <Link to="/boards">Pinban</Link>
          </span>
        </div>
        <div className="right-side">
          <p className="initials" onClick={this.renderDropdown}>{currentUser.username[0].toUpperCase()}</p>
          {this.state.showDropDown && <div className="dropdown">
            <div className="dropdownName-wrapper"><p className="dropdownName">{currentUser.username}</p></div>
            <p className="x"><i className="fas fa-times"></i></p>
            <ul className="dropdownUl">
              <li className="line"><hr /></li>
              <li className="logout-button"><button onClick={logout}>Log Out</button></li>
            </ul>
          </div>}
        </div>
      </div>
    </div >
    );
  }
};

export default Greeting;