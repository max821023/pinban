import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
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

  render() {
    const { board } = this.props;
    if (!board) return null;

    return (
      <div className="show-background">
        <nav className="board-show-nav">
          <form onSubmit={this.handleSubmit} className="title-box">
            <input type="text" value={this.state.title} onChange={this.update('title')} />
          </form>
          <button className="archive-btn" onClick={this.updateArchive}>Archive</button>
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