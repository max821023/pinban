import React from 'react';

class BoardShow extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    if (!this.props.board) return null;
    
    return (
      <div>
        {this.props.board.title}
      </div>
    );
  }
}

export default BoardShow;