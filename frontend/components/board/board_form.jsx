import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      backgroundColor: '#127bbd',
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, { 
      title: this.state.title,
      board_background: this.state.backgroundColor
    });
    this.props.createBoard(board).then(board => {
      this.props.history.push(`/boards/${board.id}`)
      this.props.closeModal()
    }); 
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div className="create-board-modal">
        <div className="create-board-modal-top">
          <div className="board-modal-title default-background-1" style={{backgroundColor: this.state.backgroundColor}}>
            <input type="text" className="board-title-input" placeholder="Add board title" value={this.state.title} onChange={this.update('title')}/>
            <button>x</button>
          </div>
          <div>
            <ul className="background-grid">
              <li className="default-background-1" onClick={() => this.setState({ backgroundColor: '#127bbd' })}></li>
              <li className="default-background-2" onClick={() => this.setState({ backgroundColor: '#d1903e' })}></li>
              <li className="default-background-3" onClick={() => this.setState({ backgroundColor: '#54973f' })}></li>
              <li className="default-background-4" onClick={() => this.setState({ backgroundColor: '#ae4736' })}></li>
              <li className="default-background-5" onClick={() => this.setState({ backgroundColor: '#8a12bd' })}></li>
              <li className="default-background-6" onClick={() => this.setState({ backgroundColor: '#bd12a0' })}></li>
              <li className="default-background-7" onClick={() => this.setState({ backgroundColor: '#12bdba' })}></li>
              <li className="default-background-8" onClick={() => this.setState({ backgroundColor: '#a6bd12' })}></li>
              <li className="default-background-9">...</li>
            </ul>
          </div>
        </div>
        <div className="create-board-modal-bottom">
          <button className="create-board-btn" onClick={this.handleSubmit}>
            Create Board
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(BoardForm);