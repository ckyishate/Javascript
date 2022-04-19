
def frac(n):
    n = float(n)
    return 4/(n*(n+1)*(n+2)) 



def derivepi(num):
    sum = 0
    sum  = float(sum)

    
    for i in range(num):
        if i%2 == 0:
            sum += frac((i+1)*2)
        else:
            sum -= frac((i+1)*2)
        print(3+sum)
    return 3+sum



print(derivepi(4))