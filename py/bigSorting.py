#!/bin/python3


# Complete the bigSorting function below.
def bigSorting(unsorted):
    sorted = []
    while unsorted:
        smallest = "99999999999999999999999999999999999999999"
        for a in unsorted:
            if int(smallest) > int(a):
                print(a,"<",smallest)
                smallest = a
        unsorted.remove(smallest)
        print("Smallest:",smallest)
        sorted.append(smallest)
        
    return sorted

if __name__ == '__main__':

    unsorted = ["6","31415926535897932384626433832795","1","3","10","3","5"]

    result = bigSorting(unsorted)
    for a in result:
        print(a)
