class Board < ApplicationRecord
  validates :title, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
end
