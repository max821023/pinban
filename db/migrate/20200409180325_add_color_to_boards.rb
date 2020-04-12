class AddColorToBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :board_background, :string
  end
end
