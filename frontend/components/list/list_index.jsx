import React from 'react';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      lists: {},
      addListForm: false,
      listTitleInput: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showListForm = this.showListForm.bind(this);
    this.closeListForm = this.closeListForm.bind(this);
    this.showListTitleChange = this.showListTitleChange.bind(this);
    this.closeListTitleChange = this.closeListTitleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.board.id)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList({
      title: this.state.title,
      archived: false,
      board_id: this.props.board.id
    }).then(() => {
      this.setState({ addListForm: false, title: "" })
      document.removeEventListener("click", this.closeListForm);
    })
  }

  showListForm() {
    this.setState({ addListForm: true })
    document.addEventListener('click', this.closeListForm)
  }

  closeListForm(e) {
    if (this.state.addListForm && 
      e.currentTarget.className !== "add-list-form-wrapper" && 
      e.target.className !== "add-list" &&
      e.target.className !== "fa-times" &&
      e.target.className !== "list-title-input" &&
      e.target.className !== "list-add-buttons" &&
      e.target.className !== "add-list-submit") {
      this.setState({ addListForm: false })
      document.removeEventListener('click', this.closeListForm)
    }
  }

  showListTitleChange(e, list) {
    this.setState({ title: list.title })
    document.getElementById(list.id).firstElementChild.style.display = "block"
    document.addEventListener("click", this.closeListTitleChange(e, list.id), { once: true });
  }

  closeListTitleChange(e, listId) {
    return (e) => {
      if (e.target.className !== "list-title-change-input") {
        this.props.updateList({
          id: listId,
          title: this.state.title
        }).then(() => {
          this.setState({ title: "" })
          document.getElementById(listId).firstElementChild.style.display = "none"
          // document.removeEventListener("click", this.closeListTitleChange(e, listId))
        })
      }
    }
  }

  render() {
    
    return (
      <div>
        <div className="lists-container">
          <div className="created-lists">
            {this.props.lists
              .filter((list) => list.archived === false)
              .map((list) => (
                <div className="list-column" key={list.id}>
                  <div className="list-content">
                    <div className="list-title">
                      <p className="list-title-button" id={list.id} onClick={(e) => this.showListTitleChange(e, list)}>
                        {list.title}
                        {this.state.listTitleInput ? (
                          <input className="list-title-change-input" type="text" value={this.state.title} onChange={this.update('title')}/>
                        ) : (
                          null
                        )}
                      </p>
                      <p>
                        <i
                          className="fas fa-trash-alt"
                          onClick={() => this.props.deleteList(list.id)}
                        ></i>
                      </p>
                    </div>
                    <div className="card-container">CARDS!</div>
                    <div className="add-card">
                      <button className="add-card-button">
                        + Add another card
                      </button>
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
                    <input
                      className="add-list-submit"
                      type="submit"
                      value="Add List"
                    />
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