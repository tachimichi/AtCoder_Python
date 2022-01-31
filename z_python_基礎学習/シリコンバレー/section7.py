# coding=utf-8

print('**************************************')
#  =================================
# クラスの定義
#
'''
s = 'gdfgdf'
print(s.capitalize)
'''
'''
# class Person(object):
class Person():
    def say_something(self):
        print('Hello')

person = Person()
person.say_something()
'''
print('**************************************')
#  =================================
# クラスの初期化とクラス変数
#
'''
# class Person(object):
class Person():
    def __init__(self, name):
        self.name = name
        print('First')
        
    def say_something(self):
        print('I am {}. Hello' .format(self.name))

person = Person('Mike')
person.say_something()
'''
print('**************************************')
#  =================================
# コンストラクタとデストラクタ
#
'''
# class Person(object):
class Person():
    def __init__(self, name):
        self.name = name
        print('First')
        
    def say_something(self):
        print('I am {}. Hello' .format(self.name))
        self.run(10)
    
    def run(self, num):
        print('run' * num)
    
    # 最後に実行される
    def __del__(self):
        print('good bye')


person = Person('Mike')
person.say_something()
# 明示的なデストラクタ
del person
'''
print('**************************************')
#  =================================
# クラスの継承
#
'''
class Car(object):
    def run(self):
        print('run')
        
# Carクラスの継承
class ToyotaCar(Car):
    pass
# Carクラスの継承
class TeslaCar(Car):
    def auto_run(self):
        print('auto run')
        
car = Car()
car.run()

toyota = ToyotaCar()
toyota.run()
tesla = TeslaCar()
tesla.auto_run()
tesla.run()
'''
print('**************************************')
#  =================================
# メソッドのオーバーライドとsuperによる親のメソッドの呼び出し
#
'''
class Car(object):
    def __init__(self, model=None):
        self.model = model
    def run(self):
        print('run')
        
# Carクラスの継承
class ToyotaCar(Car):
    def run(self):
        print('fast')
        
# Carクラスの継承
class TeslaCar(Car):
    def __init__(self, model='Model S', enable_auto_run=False):
        # self.model = model
        super().__init__(model)
        enable_auto_run = enable_auto_run

    def run(self):
        print('super fast')
    def auto_run(self):
        print('auto run')
        
car = Car()
car.run()
print('===========')
toyota = ToyotaCar('Lexus')
print(toyota.model)
toyota.run()
print('===========')
tesla = TeslaCar('Model S')
print(tesla.model)
tesla.auto_run()
tesla.run()
'''
print('**************************************')
#  =================================
# プロパティを使用した属性の設定
#
'''
class Car(object):
    def __init__(self, model=None):
        self.model = model
    def run(self):
        print('run')
        
# Carクラスの継承
class ToyotaCar(Car):
    def run(self):
        print('fast')
        
# Carクラスの継承
class TeslaCar(Car):
    def __init__(self, model='Model S',
                    enable_auto_run=False,
                    passwd = '123'):
        # self.model = model
        super().__init__(model)
        # アンダースコア
        self._enable_auto_run = enable_auto_run
        self.passwd = passwd

    # TODO 何でプロパティ（setter）を使用する必要があるのか
    # 外部から変更する場合は、条件付で変更したい
    # read権限になる
    @property
    def enable_auto_run(self):
        return self._enable_auto_run
    
    # setter
    @enable_auto_run.setter
    def enable_auto_run(self, is_enable):
        if self.passwd == '456':
            self._enable_auto_run = is_enable
        else:
            raise ValueError

    def run(self):
        print('super fast')
    def auto_run(self):
        print('auto run')
        

tesla = TeslaCar('Model S', passwd='456')
print(tesla.enable_auto_run)
tesla.enable_auto_run = True
print(tesla.enable_auto_run)
'''
print('**************************************')
#  =================================
# クラスを構造体として使用する際の注意点
#
'''
'''
print('**************************************')
#  =================================
# ダックタイピング
#
'''
class Person(object):
    def __init__(self, age=1):
        self.age = age
    
    def drive(self):
        if self.age >= 18:
            print('ok')
        else:
            raise Exception('No drive')

class Baby(Person):
    def __init__(self, age=1):
        if age < 18:
            super().__init__(age)
        else:
            raise ValueError

class Adult(Person):
    def __init__(self, age=18):
        if age >= 18:
            super().__init__(age)
        else:
            raise ValueError

baby = Baby()
adult = Adult()

class Car(object):
    def __init__(self, model=None):
        self.model = model
    def run(self):
        print('run')
    def ride(self, person):
        person.drive()

car = Car()
car.ride(adult)
car.ride(baby)
        
# Carクラスの継承
class ToyotaCar(Car):
    def run(self):
        print('fast')
        
# Carクラスの継承
class TeslaCar(Car):
    def __init__(self, model='Model S',
                    enable_auto_run=False,
                    passwd = '123'):
        # self.model = model
        super().__init__(model)
        # アンダースコア
        self._enable_auto_run = enable_auto_run
        self.passwd = passwd

    # TODO 何でプロパティ（setter）を使用する必要があるのか
    # 外部から変更する場合は、条件付で変更したい
    # read権限になる
    @property
    def enable_auto_run(self):
        return self._enable_auto_run
    
    # setter
    @enable_auto_run.setter
    def enable_auto_run(self, is_enable):
        if self.passwd == '456':
            self._enable_auto_run = is_enable
        else:
            raise ValueError

    def run(self):
        print('super fast')
    def auto_run(self):
        print('auto run')
        

tesla = TeslaCar('Model S', passwd='456')
print(tesla.enable_auto_run)
tesla.enable_auto_run = True
print(tesla.enable_auto_run)
'''
print('**************************************')
#  =================================
# 抽象クラス
#
'''
import abc

class Person(metaclass=abc.ABCMeta):
    def __init__(self, age=1):
        self.age = age
    
    # 抽象メソッド
    @abc.abstractmethod
    def drive(self):
        pass
    
class Baby(Person):
    def __init__(self, age=1):
        if age < 18:
            super().__init__(age)
        else:
            raise ValueError

    def drive(self):
        raise Exception('No drive')

class Adult(Person):
    def __init__(self, age=18):
        if age >= 18:
            super().__init__(age)
        else:
            raise ValueError
    
    def drive(self):
        print('OK')
        
baby = Baby()
adult = Adult()

class Car(object):
    def __init__(self, model=None):
        self.model = model
    def run(self):
        print('run')
    def ride(self, person):
        person.drive()

car = Car()
# car.ride(adult)
# car.ride(baby)
        
# Carクラスの継承
class ToyotaCar(Car):
    def run(self):
        print('fast')
        
# Carクラスの継承
class TeslaCar(Car):
    def __init__(self, model='Model S',
                    enable_auto_run=False,
                    passwd = '123'):
        # self.model = model
        super().__init__(model)
        # アンダースコア
        self._enable_auto_run = enable_auto_run
        self.passwd = passwd

    # TODO 何でプロパティ（setter）を使用する必要があるのか
    # 外部から変更する場合は、条件付で変更したい
    # read権限になる
    @property
    def enable_auto_run(self):
        return self._enable_auto_run
    
    # setter
    @enable_auto_run.setter
    def enable_auto_run(self, is_enable):
        if self.passwd == '456':
            self._enable_auto_run = is_enable
        else:
            raise ValueError

    def run(self):
        print('super fast')
    def auto_run(self):
        print('auto run')
        

tesla = TeslaCar('Model S', passwd='456')
print(tesla.enable_auto_run)
tesla.enable_auto_run = True
print(tesla.enable_auto_run)
'''
print('**************************************')
#  =================================
# 多重継承
#
'''
class Person(object):
    def talk(self):
        print('talk')

    def run(self):
        print('person run')

class Car(object):
    def run(self):
        print('run')

class PersonCarRobot(Person, Car):
    def fly(self):
        print('fly')

person_car_robot = PersonCarRobot()
person_car_robot.talk()
# 同じメソッドがある場合、先に引数に入れているものから優先される
person_car_robot.run()
person_car_robot.fly()
'''
print('**************************************')
#  =================================
# クラス変数
#
'''
class Person(object):
    # 異なるオブジェクトでも共有される
    kind = 'human'

    def __init__(self, name):
        # self.kind = 'human'
        self.name = name
    
    def who_are_you(self):
        print(self.name, self.kind)

a = Person('Alice')
a.who_are_you()
b = Person('Bob')
b.who_are_you()
'''
print('**************************************')
#  =================================
# クラスメソッドとスタティックメソッド
#
'''
class Person(object):
    # 異なるオブジェクトでも共有される
    kind = 'human'
    
    def __init__(self,):
        self.x = 100
    
    # インスタンス生成していなくても、アクセスできる
    # クラスメソッド
    @classmethod
    def what_is_your_kind(cls):
        return cls.kind
    
    @staticmethod
    def about(year):
        print('about human {}'.format(year))
        
    
a = Person()
print(a.what_is_your_kind())
# aは()があるため、インスタンス生成している
# bはクラスを代入しているだけ
b = Person
print(b.what_is_your_kind())

Person.about(1999)
'''
print('**************************************')
#  =================================
# 特殊メソッド
#
'''
class Word(object):
    def __init__(self, text):
        self.text = text

    def __str__(self):
        return 'Word!##$'
    
    def __len__(self):
        return len(self.text)
    
    def __add__(self, word):
        return self.text.lower() + word.text.lower()

    def __eq__(self, word):
        return self.text.lower() == word.text.lower()
        

w = Word('test')
w2 = Word('revolve')
print(w)
print(len(w))
print(w + w2)
print(w == w2)
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
print('**************************************')
#  =================================
#
#
'''
'''
