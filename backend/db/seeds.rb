puts 'Creating todos...'

# 適当なTodoを5つ作成
5.times do |i|
  Todo.create(title: "Todo#{i + 1}")
end

puts '...Finished!'
