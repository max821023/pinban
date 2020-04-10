class Api::CardsController < ApplicationController
  before_action :require_logged_in

  def create

  end

  def update

  end

  def list_params
    params.require(:card).permit(:title, :description, :due_date, :archived)
  end
end