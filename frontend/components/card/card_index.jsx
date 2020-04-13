import React from 'react';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      addCardForm: false,
    };
    this.showCardForm = this.showCardForm.bind(this);
    this.closeCardForm = this.closeCardForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.title !== prevState.title) {
  //     this.props.fetchCards(this.props.cards[0].list_id);
  //   }
  // }

  // componentDidMount() {
  //   this.props.fetchCards(this.props.cards[0].list_id)
  // }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  showCardForm() {
    this.setState({ addCardForm: true });
    document.addEventListener('click', this.closeCardForm)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCard({
      title: this.state.title,
      archived: false,
      list_id: this.props.listId,
    })
    .then(() => {
      this.setState({ addCardForm: false, title: "" });
      document.removeEventListener("click", this.closeCardForm);
      this.props.fetchLists(this.props.boardId);
    });
  }

  closeCardForm(e) {
    if (this.state.addCardForm && 
      e.currentTarget.className !== "add-card-form-wrapper" && 
      e.target.className !== "add-card" &&
      e.target.className !== "fa-times" &&
      e.target.className !== "card-title-input" &&
      e.target.className !== "card-add-buttons" &&
      e.target.className !== "add-card-submit") {
      this.setState({ addCardForm: false })
      document.removeEventListener('click', this.closeCardForm)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="card-container">
        <div className="card-list">
          {this.props.cards.map((card) => (
            <div className="individual-card" key={card.id}>
              <p>{card.title}</p>
              <p className="card-trash">
                <i
                  className="fas fa-trash-alt"
                  onClick={() => {
                    this.props.deleteCard(card.id);
                    this.props.fetchLists(this.props.boardId);
                  }}
                ></i>
              </p>
            </div>
          ))}
        </div>
        <div className="add-card">
          {this.state.addCardForm ? (
            <div className="add-card-form-wrapper">
              <form className="add-card-form" onSubmit={this.handleSubmit}>
                <input
                  className="card-title-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Enter a title for this card..."
                />
                <section className="card-add-buttons">
                  <input
                    className="add-card-submit"
                    type="submit"
                    value="Add Card"
                  />
                </section>
              </form>
              <button className="add-card-x" onClick={this.closeCardForm}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          ) : (
            <button className="add-card-button" onClick={this.showCardForm}>
              + Add a card
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default CardIndex;