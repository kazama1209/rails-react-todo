class Todo < ApplicationRecord
  validates :title, presence: true, length: { maximum: 140 }   
end
