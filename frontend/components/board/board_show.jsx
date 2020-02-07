import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId)
      .then(board => this.setState({ title: this.props.board.title }));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    const { board, updateBoard } = this.props;
    if (!board) return null;

    return (
      <div className="show-background">
        <nav className="board-show-nav">
          <input type="text" value={this.state.title} onChange={this.update('title')}/>
        </nav>
        <div className="boards">
          <div className="add-list">
            <input type="text" className="add-list-input" placeholder="+ Add a list" />
          </div>
          <div className="image-div">
            <img src={window.wip} />
          </div>
        </div>
      </div>
    );
  }
}

export default BoardShow;