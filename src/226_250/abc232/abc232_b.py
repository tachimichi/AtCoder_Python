# TODO
# * ABC232 B - Caesar Cipher

s = input()
t = input()

alphabet = list('abcdefghijklmnopqrstuvwxyz')

# print(s, t, alphabet)

count = alphabet.index(t[0]) - alphabet.index(s[0])
if count < 0:
    count += 26

# print('count', count)

isSame = True
for i in range(len(s)):
    s_index = alphabet.index(s[i])
    t_index = alphabet.index(t[i])

    kyori = 0
    if s_index > t_index:
        kyori = t_index + 26 - s_index
    else:
        kyori = t_index - s_index
    
    # print('kyori', kyori)
        
    if not count == kyori:
        isSame = False

print('Yes' if isSame else 'No')



