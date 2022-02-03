# TODO
# * ABC225 A - Distinct Strings

str = str(input())
# print(str)

if str[0] == str[1] == str[2]:
    print(1)
elif str[0] == str[1] or str[1] == str[2] or str[0] == str[2]:
    print(3)
else:
    print(6)
