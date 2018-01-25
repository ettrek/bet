import unittest
import bet.htmldom
import lxml.html


class HtmlDom_init_Test(unittest.TestCase):
    """ HtmlDom.__init__()
    """

    def test_init_with_valid_str_gives_no_errors(self):
        """
        This are examples of default init, that can be used in external 
        modules.
        """
        try:
            bet.htmldom.HtmlDom('<html></html>')
        except:
            self.fail("An error occurred during HtmlDom init!")

        # Yet another valid init
        try:
            bet.htmldom.HtmlDom(
                '''
                <!DOCTYPE html>
                <html>
                    <body>
                        <p>Some content here</p>
                    </body>
                </html>
                '''
            )
        except:
            self.fail("An error occurred during HtmlDom init!")

    
    def test_init_with_empty_str_gives_error(self):
        with self.assertRaises(Exception):
            bet.htmldom.HtmlDom('')


    def test_init_with_HtmlElement_gives_no_errors(self):
        """
        This test need for check internal work with `lxml.html` module inside
        the `htmldom` package.

        For external <HtmlDom> class init use init with <str>.
        """
        html_element = lxml.html.fromstring('<html></html>')

        try:
            bet.htmldom.HtmlDom(html_element)
        except:
            self.fail("An error occurred during HtmlDom init!")


    def test_init_with_invalid_type_gives_TypeError(self):

        with self.assertRaises(TypeError):
            bet.htmldom.HtmlDom(bytes('<html></html>', encoding="utf-8"))

        # Yet another check
        with self.assertRaises(TypeError):
            bet.htmldom.HtmlDom(0)

        # Yet another check
        with self.assertRaises(TypeError):
            bet.htmldom.HtmlDom(object())


class HtmlDom_select_Test(unittest.TestCase):
    """ HtmlDom.select()
    """

    def test_selecting_existing_elements_gives_HtmlDom_list(self):

        dom = bet.htmldom.HtmlDom(
            '''
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            '''
        )

        elements = dom.select("ul")
        self.assertIsInstance(elements, list)
        self.assertEqual(len(elements), 1)

        ul = elements[0]
        self.assertIsInstance(ul, bet.htmldom.HtmlDom)

        # Yet another check

        elements = dom.select("li")
        self.assertIsInstance(elements, list)
        self.assertEqual(len(elements), 3)

        for li in elements:
            self.assertIsInstance(li, bet.htmldom.HtmlDom)


    def test_walking_on_DOM_with_select(self):
            
        dom = bet.htmldom.HtmlDom(
            '''
            <body>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            </body>
            '''
        )

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

        dom = bet.htmldom.HtmlDom('<html></html>')

        elements = dom.select("body")
        self.assertIsInstance(elements, list)
        self.assertEqual(len(elements), 0)


class HtmlDom_attr_Test(unittest.TestCase):
    """ HtmlDom.attr()
    """

    def test_reading_HTML_tags_attributes(self):

        dom = bet.htmldom.HtmlDom(
            '''
            <html lang="en">
            <body>
                <a href="http://google.com" class="link for-test">
            </body>
            </html>
            '''
        )

        lang = dom.attr("lang")
        self.assertEqual(lang, "en")

        a = dom.select("a")[0]

        href = a.attr("href")
        self.assertEqual(href, "http://google.com")

        classes = a.attr("class")
        self.assertEqual(classes, "link for-test")


    def test_reading_unexistent_attributes_gives_AttributeError(self):

        a = bet.htmldom.HtmlDom('<a href="#"></a>')

        with self.assertRaises(AttributeError):
            a.attr("class")

        with self.assertRaises(AttributeError):
            a.attr("text")


class HtmlDom_text_Test(unittest.TestCase):
    """ HtmlDom.text
    """

    def test_reading_the_text_of_empty_tag_gives_None(self):

        p_empty = bet.htmldom.HtmlDom('<p class="empty-paragraph"></p>')
        self.assertIsNone(p_empty.text)

        # Yet another check
        img = bet.htmldom.HtmlDom('<img src="image.png">')
        self.assertIsNone(img.text)

        # Yet another check
        a_empty = bet.htmldom.HtmlDom('<a href="#"></a>')
        self.assertIsNone(a_empty.text)

        # Yet another check
        a_container = bet.htmldom.HtmlDom('<a href="#"><img src="_"></a>')
        self.assertIsNone(a_container.text)


    def test_reading_the_non_visible_text_gives_empty_str(self):

        p_with_space = bet.htmldom.HtmlDom('<p> </p>')
        self.assertEqual(p_with_space.text, "")

        # Yet another check
        p_with_EOLS_and_spaces = bet.htmldom.HtmlDom(
            '''
            <p class="empty-paragraph">

            </p>
            '''
        )
        self.assertEqual(p_with_EOLS_and_spaces.text, "")

        # Yet another check
        a_container = bet.htmldom.HtmlDom('<a href="#"> <img src="_"> </a>')
        self.assertEqual(a_container.text, "")


    def test_reading_the_pure_text_in_tags(self):

        p = bet.htmldom.HtmlDom('<p>paragraph</p>')
        self.assertEqual(p.text, "paragraph")

        # Yet another check
        dom = bet.htmldom.HtmlDom(
            '''
            <!DOCTYPE html>
            <html>
                <body>
                    <p>This is a paragraph with a <a href="#">link</a></p>
                </body>
            </html>
            '''
        )
        a = dom.select("a")[0]
        self.assertEqual(a.text, "link")


    def test_reading_the_stripped_text_before_subtags(self):
        """
        Reading of the inner text of current tag element, that also contains
        another sub elements, gives only the stripped text before first sub
        element.
        """

        dom = bet.htmldom.HtmlDom(
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
            '''
        )

        p1 = dom.select("#p1")[0]
        self.assertEqual(p1.text, "This is a text with a")

        p2 = dom.select("#p2")[0]
        self.assertEqual(p2.text, "Image after the text")


class HtmlDom_tag_Test(unittest.TestCase):
    """ HtmlDom.tag
    """

    def test_reading_the_tag_name_of_elements(self):

        dom = bet.htmldom.HtmlDom(
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
            '''
        )
        self.assertEqual(dom.tag, "html")

        # Yet another check
        img = dom.select("img")[0]
        self.assertEqual(img.tag, "img")

        # Yet another check
        p = dom.select("#p2")[0]
        self.assertEqual(p.tag, "p")

        # Yet another check
        h1 = bet.htmldom.HtmlDom('<h1>Title</h1>')
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

