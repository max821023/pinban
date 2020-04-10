class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :due_date
      t.boolean :archived, null: false
      t.integer :list_id, null: false
      t.index :list_id

      t.timestamps
    end
  end
end
