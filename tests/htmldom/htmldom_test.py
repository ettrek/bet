import unittest
import bet.htmldom


class ReadUrlTest(unittest.TestCase):

    def test_returns_HtmlDom_instance(self):
        dom = bet.htmldom.read_url("http://google.com")
        self.assertIsInstance(dom, bet.htmldom.HtmlDom)
