@cards.each do |card|
  json.set! card.id do 
    json.extract! card, :id, :title, :description, :due_date, :archived, :list_id
  end
end