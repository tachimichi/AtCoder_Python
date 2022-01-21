
# TODO
# * ABC234 A - Weird Function

t = int(input())
# print(t, type(t))

def func(x):
    return x ** 2 + 2 * x + 3

print(func(func(func(t) + t) + func(func(t))))