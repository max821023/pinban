class Api::BoardsController < ApplicationController
  before_action :require_logged_in

  def index
    @boards = current_user.boards
    render :index
  end

  def show
    @board = Board.find(params[:id])
  end

  def create
    @board = Board.new(board_params)
    @board.creator_id = current_user.id
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    if @board.update_attributes(board_params)
      render :show
    else
      render json: @board.errors.full_messages, status: 401
    end
  end

  def destroy

  end

  private

  def board_params
    params.require(:board).permit(:title, :board_background, :description, :archived)
  end
end
