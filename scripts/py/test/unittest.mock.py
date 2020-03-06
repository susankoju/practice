from unittest.mock import MagicMock, Mock as mock
# thing = ProductionClass()
# thing.method = MagicMock(return_value=3)
# thing.method(3, 4, name="value")



values = {'a': 1, 'b': 3}
def side_effect(arg):
    return values[arg]

mock.side_effect = side_effect
mock('a'), mock('m')

mock.side_effect = [5, 4, 3, 2, 1]
mock(), mock(), mock()
