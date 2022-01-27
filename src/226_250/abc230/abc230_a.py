# TODO
# * ABC230 A - AtCoder Quiz 3

n = int(input())
if n >= 42:
    print('AGC0' + str(n+1))
elif n >= 10:
    print('AGC0' + str(n))
else:
    print('AGC00' + str(n))