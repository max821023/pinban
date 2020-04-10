import React from 'react';

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="lists-container">
          <div className="created-lists">

          </div>
          <div className="add-list-button">
            <form>
              <input type="text" value={this.state.title} onChange={this.update('title')}/>
            </form>
            <button>+ Add a list</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListIndex;