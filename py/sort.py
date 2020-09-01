ls = [{'name': 'Sagar Chalise', 'score':10}, {'name': 'Hari', 'score':14}]

print(sorted(ls, key=lambda x: x['score']))

def mysort(value):
    return value['score']

ls.sort(key=mysort)
print(ls)
