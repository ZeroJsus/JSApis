# 创建所有基础类 并为基础类增加继承和默认参数
class Number < Struct.new(:value)
end

class Add < Struct.new(:left, :right)
end

class Multiply < Struct.new(:left, :right)
end

# 此处是reopen一个类
=begin 
    to_s 是定义该对象做字符串替换的时候显示的数据
    inspect 是ruby在控制台中输出的时候展示的样式
    reduce 对象进行计算并且返回其值
=end
class Number
    def to_s
        value.to_s
    end

    def inspect
        "<#{self}>"
    end   
end

class Add
    def to_s
        "#{left} + #{right}"
    end

    def inspect
        "<#{self}>"
    end
end

class Multiply
    def to_s
        "#{left} * #{right}"
    end

    def inspect
        "<#{self}>"
    end
end

# reopen定义方法是否能进行规约
class Number
    def reducible?
        false
    end
end

class Add
    def reducible?
        true
    end
end

class Multiply
    def reducible?
        true
    end
end

# 定义一个Boolean类型
class Boolean < Struct.new(:value)
    def to_s
        value.to_s
    end

    def inspect
        "<#{self}>"
    end

    def reducible?
        false
    end
end

# 定义一个变量
class Variable < Struct.new(:name)
    def to_s
        name.to_s
    end

    def inspect
        "<#{self}>"
    end

    def reducible?
        true
    end

    def reduce(environment)
        environment[name]
    end
end

#reopen 对类增加reduce的方法
class Add
    def reduce(environment)
        if left.reducible?
            Add.new(left.reduce(environment), right)
        elsif right.reducible?
            Add.new(left, right.reduce(environment))
        else
            Number.new(left.value + right.value)
        end
    end
end

class Multiply
    def reduce(environment)
        if left.reducible?
            Multiply.new(left.reduce(environment), right)
        elsif right.reducible?
            Multiply.new(left, right.reduce(environment))
        else
            Number.new(left.value * right.value)
        end
    end
end

class LessThan < Struct.new(:left, :right)
    def to_s
        "#{left} < #{right}"
    end

    def inspect
        "<#{self}>"
    end

    def reducible?
        true
    end

    def reduce(environment)
        if left.reducible?
            LessThan.new(left.reduce(environment), right)
        elsif right.reducible?
            LessThan.new(left, right.reduce(environment))
        else
            Boolean.new(left.value < right.value)
        end
    end
end

# 创建一个实例化的机器用来反复调用reduce直到得到一个结果
class Machine < Struct.new(:statement, :environment)
    def step
        self.statement, self.environment = statement.reduce(environment)
    end

    def run
        while statement.reducible?
            puts "#{statement}, #{environment}"
            step
        end

        puts "#{statement}, #{environment}"
    end
end

# 进行语句的约束
class DoNothing
    def to_s
        "do-nothing"
    end

    def inspect
        "<#{self}>"
    end

    def ==(other_statement)
        other_statement.instance_of?(DoNothing)
    end

    def reducible?
        false
    end
end

class Assign < Struct.new(:name, :expression)
    def to_s
        "#{name} = #{expression}"
    end

    def inspect
        "<#{self}>"
    end

    def reducible?
        true
    end

    def reduce(environment)
        if expression.reducible?
            [Assign.new(name, expression.reduce(environment)), environment]
        else
            [DoNothing.new, environment.merge({ name => expression })]
        end
    end
end

# Machine.new(
#     Add.new(
#         Multiply.new(Number.new(1), Number.new(2)),
#         Multiply.new(Number.new(3), Number.new(1))
#     )
# ).run

# Machine.new(
#     LessThan.new(Number.new(5), Add.new(Number.new(2), Number.new(2)))
# ).run

# Machine.new(
#     Add.new(Variable.new(:x), Variable.new(:y)),
#     { x: Number.new(3), y: Number.new(4) }
# ).run

# statement = Assign.new(:x, Add.new(Variable.new(:x), Number.new(1)))

# environment = { x: Number.new(2) }

# statement.reducible?

# statement, environment = statement.reduce(environment)

# statement, environment = statement.reduce(environment)

# statement, environment = statement.reduce(environment)

Machine.new(
    Assign.new(:x, Add.new(Variable.new(:x), Number.new(1))),
    { x: Number.new(2) }
).run