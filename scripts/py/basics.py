if not 1:
    print("Not true")

else:
    print ("true")


message = "True" if True else "False"


for x in message:
    print(x)

for x in ['a', 'b']:
    print(x)
for x in range(5,10, 2):
    print(x)

print(type(range(2,5)))

names = ["John", "Mary"]

for name in names:
    if name.startswith("Ja"):
        print("Found")
        break
else:
    print ("Not found")

a=int(input("Hello?"))
print(a)
