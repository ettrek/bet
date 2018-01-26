import unittest
import bet.settings
from bet.link import Link


class Annotation_Test(unittest.TestCase):

    def test_getting_the_annotation_links_of_football_matches(self):

        # First we need the annotation page URL
        url = bet.settings.ANNOTATION_URL
        self.assertNotEqual(Link.filter_url(url), "")

        # Let's try to read this page
        response_bytes, charset = bet.htmldom.http.reader.read_bytes(url)
        self.assertGreater(len(response_bytes), 0)
        self.assertEqual(charset, "utf-8")

        # Convert HTTP response into text
        annotation_html_text = response_bytes.decode(charset)
        # First ~2000 characters are constant for each page load
        const_html_part = annotation_html_text[:2000]
        # This text must be equal to
        readed_annotation_html_text = bet.htmldom.http.reader.read(url)
        const_readed_part = readed_annotation_html_text[:2000]
        self.assertEqual(const_html_part, const_readed_part)
        
        # Create <HtmlDom> instance based on readed annotation HTML text
        dom = bet.htmldom.HtmlDom(readed_annotation_html_text)
        self.assertIsInstance(dom, bet.htmldom.HtmlDom)
        self.assertEqual(dom.tag, "html")

        # Try to select some HTML element in DOM
        div_main = dom.select("#mother-main")[0]
        self.assertIsInstance(div_main, bet.htmldom.HtmlDom)
        self.assertEqual(div_main.tag, "div")
        self.assertEqual(div_main.attr("id"), "mother-main")

        # Now we have <HtmlDom> annotation and can to select HTML elements...

        # Let's check that we have valid CSS selector for annotation links
        link_css_selector = bet.settings.ANNOTATION_LINK_SELECTOR
        self.assertIsInstance(link_css_selector, str)
        self.assertGreater(len(link_css_selector), 0)

        # Let's select all annotation football links
        links = dom.select(link_css_selector)
        self.assertGreater(len(links), 0)
		# Oops! This test fails. The problem is that page does not contains
		# the needed links. The links will be loaded later through WebSocket
		# from wss://oppush.livesport.eu/WebSocketConnection-Secure

