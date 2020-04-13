import React from 'react';
import ListIndex from '../list/list_index';

class BoardShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateArchive = this.updateArchive.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId)
      .then(board => this.setState({ title: this.props.board.title }));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit() {
    // e.preventDefault();
    const { board } = this.props;
    const { title } = this.state;
    const newBoard = Object.assign({}, { id: board.id, title });
    this.props.updateBoard(newBoard);
  }

  updateArchive() {
    const { board } = this.props;
    const newBoard = { id: board.id, archived: true }
    this.props.updateBoard(newBoard);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.title !== prevState.title) {
      this.handleSubmit();
    }
  }

  render() {
    const { board } = this.props;
    if (!board) return null;

    return (
      <div className="show-background" style={{backgroundColor: board.board_background}}>
        <nav className="board-show-nav">
          <form className="title-box">
            <input type="text" value={this.state.title} onChange={this.update('title')} />
          </form>
          <button className="archive-btn" onClick={this.updateArchive}>Archive</button>
        </nav>
        <div className="boards">
          <ListIndex 
            createList={this.props.createList} 
            updateList={this.props.updateList}
            fetchLists={this.props.fetchLists}
            deleteList={this.props.deleteList}
            lists={this.props.lists}
            board={board}
          />
        </div>
      </div>
    );
  }
}

export default BoardShow;