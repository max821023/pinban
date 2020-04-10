class List < ApplicationRecord
  validates :title, presence: true

  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board

  has_many :cards,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :Card
end