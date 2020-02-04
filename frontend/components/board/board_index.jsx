import React from 'react';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    
  }
}

export default BoardIndex;