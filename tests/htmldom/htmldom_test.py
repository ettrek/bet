import unittest
import bet.htmldom


class TestHtmlDom(unittest.TestCase):

    def test_reader_returns_HtmlDom_instance(self):
        dom = bet.htmldom.read_url("http://google.com")
        self.assertIsInstance(dom, bet.htmldom.HtmlDom)
