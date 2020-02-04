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
            <Link to="/boards">
              <i className="fab fa-trello"></i>
              <div className="index-board">Boards</div> 
            </Link>
          </div>
          <div className="all-boards">
            <div className="personal-boards">
              <i class="far fa-user">Personal Boards</i>
              <ul>
                {boards.map(board => <li>{board.title}</li>)}
                <li>Create new board</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardIndex;