from unittest.mock import MagicMock, Mock

# x = ProductionClass()
# x.method = MagicMock(return_value = 3)
# x.method(3, 4, 5, key = 'value')

# mock = Mock(side_effect = KeyError('foo'))
# mock()

class ProductionClass:
    def method(self):
        self.something(1,2,3)
    def something(self, a, b, c):
        pass
    def closer(self, something):
        something.close()

real = ProductionClass()
real.something = MagicMock()
real.method()
real.something.assert_called_once_with(1, 2, 3)

mock = Mock()
real.closer(mock)
mock.close.assert_called_with()

