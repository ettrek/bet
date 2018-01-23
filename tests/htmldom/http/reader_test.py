import unittest
import bet.htmldom.http.reader as reader


class ReaderTest(unittest.TestCase):

	def test_reader_returns_bytes(self):
		response = reader.read("http://google.com")
		self.assertIsInstance(response, bytes)
		self.assertGreater(len(response), 0)

