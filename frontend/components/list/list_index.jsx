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
      .then(lists => {
        this.setState({
          lists
        })
      })
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
    console.log(this.state)
    return (
      <div>
        <div className="lists-container">
          <div className="created-lists">
          </div>
          <div className="add-list">
            <button className="add-list-button">+ Add a list</button>
            <form className="add-list-form" onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.title} onChange={this.update('title')} placeholder="Enter list title..."/>
              <section>
                <input type="submit"/>
                <span>X</span>
              </section>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ListIndex;