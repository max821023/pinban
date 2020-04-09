@boards.each do |board|
  json.set! board.id do 
    json.extract! board, :id, :title, :description, :board_background, :archived, :creator_id
  end
end