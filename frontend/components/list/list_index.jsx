import React from 'react';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      lists: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    })
  }

  render() {
    console.log(this.props.lists)
    
    return (
      <div>
        <div className="lists-container">
          <div className="created-lists">
            {this.props.lists.filter(list => list.archived === false).map(list => (
              <div className="list-column" key={list.id}>
                <div className="list-title">{list.title}</div>
                <div className="card-container">
                  CARDS!
                </div>
              </div>
            ))}
          </div>
          <div className="add-list">
            <button className="add-list-button">+ Add a list</button>
            <form className="add-list-form" onSubmit={this.handleSubmit}>
              <input className="list-title-input" type="text" value={this.state.title} onChange={this.update('title')} placeholder="Enter list title..."/>
              <section className="list-add-buttons">
                <input type="submit" value="Add List"/>
                <button><i className="fas fa-times"></i></button>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ListIndex;