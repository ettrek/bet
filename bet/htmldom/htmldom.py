import lxml.etree
import cssselect
import bet.htmldom.http


class HtmlDom:
    """
    It is an adapter for <lxml.etree._ElementTree>
    """
    def __init__(self, html):
        """
        Args:

            <lxml.etree._Element> html
        """

        if type(html) is bytes:
            html_element = lxml.etree.HTML(html)

        elif type(html) is lxml.etree._Element:
            html_element = html

        else:
            raise TypeError("need <bytes> or <lxml.etree._Element>")

        self._dom = lxml.etree.ElementTree(html_element)


    def select(self, css_selector):
        """
        Args:

            <str> css_selector
        """
        css_translator = cssselect.GenericTranslator()
        xpath_selector = css_translator.css_to_xpath(css_selector)
        elements = self._dom.xpath(xpath_selector)
        return list(map(HtmlDom, elements))


    def attr(self, attribute):
        """
        Args:

            <str> attribute

        Returns:

            <str> value of given `attribute` for current DOM root element.

        Raises:

            <AttributeError>
        """
        # TODO: use _Element.get()
        element = self._dom.getroot()
        attributes = element.attrib
        try:
            return attributes[attribute]

        except KeyError:
            raise AttributeError("HTML element have not the given attribute")


    @property
    def text(self):

        element = self._dom.getroot()

        """
        See about the `text` property on:
        http://lxml.de/api/lxml.etree._Element-class.html

        This variable will be either <str> - the text before the first
        subelement or `None`.
        """
        text = element.text
        return text.strip() if text else None


    @property
    def tag(self):
        element = self._dom.getroot()
        return element.tag


def read_url(url):
    html_bytes = bet.htmldom.http.read(url)
    return HtmlDom(html_bytes)
