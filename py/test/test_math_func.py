import math_func
import pytest

@pytest.mark.numbers
def test_add():
    assert math_func.add(7, 3) == 10
    assert math_func.add(7) == 9
    assert math_func.add(5) == 7

@pytest.mark.numbers
def test_product():
    assert math_func.product(7, 2) == 14
    assert math_func.product(5) == 10
    assert math_func.product(3) == 6


@pytest.mark.strings
def test_add_strings():
    result = math_func.add("Hello", " World")
    assert result == "Hello World"
    assert "Hello" in result

def test_product_strings():
    assert math_func.product('Hello ', 3) == 'Hello Hello Hello '

    result = math_func.product('Hello ')
    assert result == 'Hello Hello '
    assert type(result) is str
