class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.boolean :archived, null: false
      t.integer :board_id, null: false
      t.index :board_id

      t.timestamps
    end
  end
end
