class Api::ListsController < ApplicationController
  before_action :require_logged_in

  def list_params
    params.require(:list).permit(:title, :archived)
  end
end