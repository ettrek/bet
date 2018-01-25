import unittest
import bet.htmldom.http.reader as reader


class read_bytes_Test(unittest.TestCase):
    """ read_bytes()
    """

    def test_read_bytes_returns_tuple_of_bytes_and_charset(self):
        response, charset = reader.read_bytes("http://google.com")
        self.assertIsInstance(response, bytes)
        self.assertGreater(len(response), 0)
        self.assertIsInstance(charset, str)
        self.assertGreater(len(charset), 0)


class read_Test(unittest.TestCase):
    """ read()
    """

    def test_read_returns_str(self):
        response = reader.read("http://google.com")
        self.assertIsInstance(response, str)
        self.assertGreater(len(response), 0)

