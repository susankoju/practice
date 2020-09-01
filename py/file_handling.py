
f = open('test.txt', 'w')
try:
    f.write('Hello')
finally:
    f.close()


with open('test.txt', mode='w') as f:
    print(dir(f))
