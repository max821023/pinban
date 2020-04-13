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
  }

  update(field) {
    console.log(this.props)
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  showCardForm() {
    this.setState({ addCardForm: true });
    document.addEventListener('click', this.closeCardForm)
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createCard({
  //     title: this.state.title,
  //     archived: false,
  //     list_id: this.props.board.id,
  //   })
  //   .then(() => {
  //     this.setState({ addCardForm: false, title: "" });
  //     document.removeEventListener("click", this.closeCardForm);
  //   });
  // }

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
    return (
      <div className="card-container">
        <div className="card-list">
          {this.props.cards.map((card) => (
            <div className="individual-card" key={card.id}>
              {card.title}
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
              + Add another card
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default CardIndex;