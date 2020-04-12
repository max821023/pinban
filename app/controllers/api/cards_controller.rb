class Api::CardsController < ApplicationController
  
  def index
    @cards = List.find(params[:id]).cards
    render :index
  end

  def create
    @card = Card.new(card_params)
    @card.archived = false
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update_attributes(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: 401
    end
  end

  def destroy
    @card = Card.find(params[:id])
    if @card.delete
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :due_date, :archived, :list_id)
  end
end