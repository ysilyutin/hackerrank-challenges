# There are N integers in an array A. All but one integer occur in pairs. Your task is to find the number that occurs only once.

b = [1, 2, 1, 2, 3, 3, 6]

# If you have an element repeated twice, then xor = 0, lonely element remains as it is.

def foo(a):
    result = 0
    for n in a:
        result = result ^ n
    return result

print foo(b)


# or result = reduce((lambda x, y: x^y), b)
