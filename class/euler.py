from math import gcd
def lcm(a,b):
    return a*b//gcd(a,b)
from functools import reduce
x = reduce(lcm, range(1,10+1))
y = reduce(lcm, range(1,20+1))
