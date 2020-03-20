class Hashie < Hash
  def method_missing (method, *args, &block)
    return self[method] if responds_to?(method)
    super(method, *args, &block)
  end

  def responds_to? (message)
    key?(message)
  end
end

class OStruct
  def initialize (**kwargs)
    kwargs.each_pair { |k, v| self.singleton_class.define_method(k) { v } }
  end
end

ha = Hashie.new
ha[:number] = 1
puts ha.number

op = OStruct.new(name: 'Daniel', age: 24)
puts op.name