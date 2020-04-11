import React from 'react';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      lists: {},
      addListForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showListForm = this.showListForm.bind(this);
    this.closeListForm = this.closeListForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.board.id)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.createList({
      title: this.state.title,
      archived: false,
      board_id: this.props.board.id
    })
  }

  showListForm() {
    this.setState({ addListForm: true })
  }

  closeListForm(e) {
    if (this.state.addListForm && 
      e.currentTarget.className !== "add-list-form-wrapper" && 
      e.target.className !== "add-list" &&
      e.target.className !== "fa-times" &&
      e.target.className !== "list-title-input" &&
      e.target.className !== "list-add-buttons") {
      this.setState({ addListForm: false })
    }
  }

  render() {
    
    return (
      <div>
        <div className="lists-container" onClick={this.closeListForm}>
          <div className="created-lists">
            {this.props.lists
              .filter((list) => list.archived === false)
              .map((list) => (
                <div className="list-column" key={list.id}>
                  <div className="list-content">
                    <div className="list-title">
                      {list.title}
                      <p>
                        <i class="fas fa-trash-alt"></i>
                      </p>
                    </div>
                    <div className="card-container">CARDS!</div>
                    <div>
                      <button>+ Add another card</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="add-list">
            <button className="add-list-button" onClick={this.showListForm}>
              + Add a list
            </button>
            {this.state.addListForm ? (
              <div className="add-list-form-wrapper">
                <form className="add-list-form" onSubmit={this.handleSubmit}>
                  <input
                    className="list-title-input"
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Enter list title..."
                  />
                  <section className="list-add-buttons">
                    <input type="submit" value="Add List" />
                  </section>
                </form>
                <button className="add-list-x" onClick={this.closeListForm}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ListIndex;