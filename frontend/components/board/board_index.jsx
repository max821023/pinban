import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


class BoardIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;

    return (
      <div>
        <GreetingContainer />
        <div className="board-index-container">
          <div className="board-index-sidebar">
            <ul>
              <li className="board-li">
                <Link to="/boards">
                  <i className="fab fa-trello"></i>
                  <div className="index-board">Boards</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="all-boards">
            <div className="personal-boards">
              <div className="personal-board-title">
                <i class="far fa-user"></i>
                <span className="board-title">Personal Boards</span>
              </div>
              <ul className="personal-boards-li">
                {boards.map(board => <li>
                  <span>{board.title}</span>
                </li>)}
                <li className="create-new-board" onClick={() => this.props.openModal('create board')}>
                    Create new board
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardIndex;