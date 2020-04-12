import React from 'react';

class CardIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCards(this.props.list.id)
  }

  render() {
    return (
      <div className="card-container">
        <h1>CARDSss!</h1>
      </div>
    );
  }
}

export default CardIndex;