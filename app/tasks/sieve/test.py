from judge import testgroup
from solution import sieve

with testgroup("До простых"):
    assert sieve(2) == [2]
    assert sieve(3) == [2, 3]
    assert sieve(5) == [2, 3, 5]


