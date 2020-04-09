class RemoveArchiveNullConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :archived
    add_column :boards, :archived, :boolean, default: false
  end

end
