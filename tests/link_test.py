import unittest
import bet.link


class Link_Test(unittest.TestCase):

    def test_init_empty_link(self):
        empty_link = bet.link.Link()
        self.assertEqual(empty_link.url, "")
        self.assertEqual(empty_link.text, "")


    def test_normal_init(self):

        link = bet.link.Link(url="http://google.com", text="Web link title")
        self.assertEqual(link.url, "http://google.com")
        self.assertEqual(link.text, "Web link title")

        # Yet another check
        link = bet.link.Link("https://ya.ru", "This is a some URL")
        self.assertEqual(link.url, "https://ya.ru")
        self.assertEqual(link.text, "This is a some URL")


    def test_init_with_url_only(self):

        link = bet.link.Link(url="")
        self.assertEqual(link.url, "")
        self.assertEqual(link.text, "")

        link = bet.link.Link(url="http://google.com")
        self.assertEqual(link.url, "http://google.com")
        self.assertEqual(link.text, "")

        link = bet.link.Link("https://ya.ru")
        self.assertEqual(link.url, "https://ya.ru")
        self.assertEqual(link.text, "")

    
    def test_init_with_text_only(self):
        link = bet.link.Link(text="Text of a link")
        self.assertEqual(link.text, "Text of a link")
        self.assertEqual(link.url, "")


    def test_setting_valid_url_after_init(self):

        # Init with empty URL
        link = bet.link.Link()
        self.assertEqual(link.url, "")

        link.url = "http://google.com"
        self.assertEqual(link.url, "http://google.com")

        link.url = "https://ya.ru"
        self.assertEqual(link.url, "https://ya.ru")

        link.url = ""
        self.assertEqual(link.url, "")

    
    def test_setting_invalid_url_makes_it_empty(self):

        # Init with valid URL
        link = bet.link.Link("http://google.com")
        self.assertEqual(link.url, "http://google.com")
        # Set invalid URL
        link.url = "google.com"
        self.assertEqual(link.url, "")

        # Set valid URL
        link.url = "https://ya.ru"
        self.assertEqual(link.url, "https://ya.ru")
        # Set invalid URL
        link.url = "http://"
        self.assertEqual(link.url, "")


    def test_setting_text_after_init(self):

        # Init with empty text
        link = bet.link.Link()
        self.assertEqual(link.text, "")

        link.text = "Some text for link"
        self.assertEqual(link.text, "Some text for link")


    def test_construct_on_valid_html(self):
        html_link_mock = HtmlLinkMock("http://google.com", "Text")
        link = bet.link.Link.from_htmldom(html_link_mock)
        self.assertIsInstance(link, bet.link.Link)
        self.assertEqual(link.url, "http://google.com")
        self.assertEqual(link.text, "Text")

    
    def test_construck_on_invalid_html(self):
        empty_object = object()
        with self.assertRaises(Exception):
            link = bet.link.Link.from_htmldom(empty_object)


class HtmlLinkMock:

    def __init__(self, url, text):
        self.url = url
        self.text = text


    def attr(self, _):
        return self.url
