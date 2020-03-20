def memo
  map = {}
  ->(arg) {
    return map[arg] if map.key?(arg)
    map[arg] = yield(arg) 
  }
end

memos = memo { |val|  val * val }
puts memos.call(100000)
