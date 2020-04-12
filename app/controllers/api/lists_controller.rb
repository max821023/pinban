class Api::ListsController < ApplicationController

  def index
    @lists = Board.find(params[:id]).lists
    render :index
  end

  def create
    @list = List.new(list_params)
    @list.archived = false
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])
    if @list.update_attributes(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 401
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.delete 
      render :show
    else 
      render json: @list.errors.full_messages, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :archived, :board_id)
  end
end