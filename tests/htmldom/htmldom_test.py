import unittest
import bet.htmldom
import lxml.etree


class HtmlDom_init_Test(unittest.TestCase):
    """ HtmlDom.__init__()
    """

    def test_init_with_bytes_gives_no_errors(self):
        """
        This are examples of normal init.

        There are no assertion methods need.
        """
        html_bytes = bytes("<html></html>", encoding="utf-8")
        bet.htmldom.HtmlDom(html_bytes)

        # Yet another valid init
        bet.htmldom.HtmlDom(bytes(
            '''
            <!DOCTYPE html>
            <html>
                <body>
                    <p>Some content here</p>
                </body>
            </html>
            ''',
            encoding="utf-8"
        ))


    def test_init_with_html_Element_gives_no_errors(self):
        """
        This test needs for internal work with `lxml.etree` elements.

        For extarnal work with `HtmlDom` class use init with bytes.

        There are no assertion methods need.
        """
        html_bytes = bytes("<html></html>", encoding="utf-8")
        html_element = lxml.etree.HTML(html_bytes)
        bet.htmldom.HtmlDom(html_element)


    def test_init_with_invalid_type_gives_TypeError(self):

        with self.assertRaises(TypeError):
            bet.htmldom.HtmlDom("<html></html>")

        # Yet another check
        with self.assertRaises(TypeError):
            bet.htmldom.HtmlDom(0)

        # Yet another check
        with self.assertRaises(TypeError):
            bet.htmldom.HtmlDom(object())


class HtmlDom_select_Test(unittest.TestCase):
    """ HtmlDom.select()
    """

    def test_select_existent_element_returns_HtmlDom_list(self):

        dom = bet.htmldom.HtmlDom(bytes("<html></html>", encoding="utf-8"))

        elements = dom.select("html")
        self.assertIsInstance(elements, list)
        self.assertEqual(len(elements), 1)

        html_tag = elements[0]
        self.assertIsInstance(html_tag, bet.htmldom.HtmlDom)


    def test_walking_on_DOM_with_select(self):
            
        dom = bet.htmldom.HtmlDom(bytes(
            '''
            <html>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            </html>
            ''',
            encoding="utf-8"
        ))

        uls = dom.select("ul")
        self.assertIsInstance(uls, list)
        self.assertEqual(len(uls), 1)

        ul = uls[0]
        self.assertIsInstance(ul, bet.htmldom.HtmlDom)

        lis = ul.select("li")
        self.assertIsInstance(lis, list)
        self.assertEqual(len(lis), 3)
        
        for li in lis:
            self.assertIsInstance(li, bet.htmldom.HtmlDom)


    def test_select_nonexistent_element_returns_empty_list(self):

        dom = bet.htmldom.HtmlDom(bytes("<html></html>", encoding="utf-8"))

        elements = dom.select("body")
        self.assertIsInstance(elements, list)
        self.assertEqual(len(elements), 0)


class HtmlDom_attr_Test(unittest.TestCase):
    """ HtmlDom.attr()
    """

    def test_reading_HTML_tags_attributes(self):

        dom = bet.htmldom.HtmlDom(bytes(
            '''
            <html lang="en">
            <body>
                <a href="http://google.com" class="link for-test">
            </body>
            </html>
            ''',
            encoding="utf-8"
        ))

        lang = dom.attr("lang")
        self.assertEqual(lang, "en")

        a = dom.select("a")[0]

        href = a.attr("href")
        self.assertEqual(href, "http://google.com")

        clas = a.attr("class")
        self.assertEqual(clas, "link for-test")


    def test_reading_unexistent_attributes_gives_AttributeError(self):

        a = bet.htmldom.HtmlDom(bytes('<a href="#"></a>', encoding="utf-8"))

        with self.assertRaises(AttributeError):
            a.attr("class")

        with self.assertRaises(AttributeError):
            a.attr("text")


class HtmlDom_text_Test(unittest.TestCase):
    """ HtmlDom.text
    """

    def test_reading_the_text_of_empty_tag_gives_None(self):

        p = bet.htmldom.HtmlDom(bytes(

            '<p class="empty-paragraph"></p>',

            encoding="utf-8"
        ))

        self.assertIsNone(p.text)

        # Yet another check

        p = bet.htmldom.HtmlDom(bytes(
            '''
            <p class="empty-paragraph">

            </p>
            ''',
            encoding="utf-8"
        ))

        self.assertIsNone(p.text)


    def test_reading_the_pure_text_of_tags(self):

        p = bet.htmldom.HtmlDom(bytes('<p>paragraph</p>', encoding="utf-8"))
        self.assertEqual(p.text, "paragraph")

        # Yet another check

        dom = bet.htmldom.HtmlDom(bytes(
            '''
            <!DOCTYPE html>
            <html>
                <body>
                    <p>This is a paragraph with a <a href="#">link</a></p>
                </body>
            </html>
            ''',
            encoding="utf-8"
        ))

        a = dom.select("a")[0]
        self.assertEqual(a.text, "link")


    def test_reading_the_stripped_text_before_subtags(self):
        """
        Reading of the inner text of current tag element, that also contains
        another sub elements, gives only the stripped text before first sub
        element.
        """

        dom = bet.htmldom.HtmlDom(bytes(
            '''
            <!DOCTYPE html>
            <html>
                <body>
                    <p id="p1">This is a text with a <a href="#">link</a></p>
                    <p id="p2">
                        Image after the text <img src="#"> and text continue
                    </p>
                </body>
            </html>
            ''',
            encoding="utf-8"
        ))

        p1 = dom.select("#p1")[0]
        self.assertEqual(p1.text, "This is a text with a")

        p2 = dom.select("#p2")[0]
        self.assertEqual(p2.text, "Image after the text")


class HtmlDom_tag_Test(unittest.TestCase):
    """ HtmlDom.tag
    """

    def test_reading_the_tag_name_of_elements(self):

        dom = bet.htmldom.HtmlDom(bytes(
            '''
            <!DOCTYPE html>
            <html>
                <body>
                    <p id="p1">This is a text with a <a href="#">link</a></p>
                    <p id="p2">
                        Image after the text <img src="#"> and text continue
                    </p>
                </body>
            </html>
            ''',
            encoding="utf-8"
        ))

        self.assertEqual(dom.tag, "html")

        # Yet another check
        img = dom.select("img")[0]
        self.assertEqual(img.tag, "img")

        # Yet another check
        p = dom.select("#p2")[0]
        self.assertEqual(p.tag, "p")

        # Yet another check
        h1 = bet.htmldom.HtmlDom(bytes('<h1>Title</h1>', encoding="utf-8"))
        self.assertEqual(h1.tag, "h1")


class read_url_Test(unittest.TestCase):
    """ read_url()
    """

    def test_returns_HtmlDom_instance_from_valid_url(self):
        dom = bet.htmldom.read_url("http://google.com")
        self.assertIsInstance(dom, bet.htmldom.HtmlDom)


    def test_raises_ValueError_from_invalid_url(self):
        with self.assertRaises(ValueError):
            bet.htmldom.read_url("This is not an URL")

