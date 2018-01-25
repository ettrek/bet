import lxml.html
import cssselect
import bet.htmldom.http


CSS_TRANSLATOR = cssselect.GenericTranslator()


def css_to_xpath(css_selector):
    """
    Args:

        <str> css_selector

    Returns:

        <str> xpath selector
    """
    return CSS_TRANSLATOR.css_to_xpath(css_selector)


class HtmlDom:
    """
    This is an adapter for <lxml.html.HtmlElement>
    """

    def __init__(self, html):
        """
        Builds HTML DOM object from given HTML text.

        Args:

            <str> html
        """
        if type(html) is lxml.html.HtmlElement:
            self._dom = html
        elif type(html) is str:
            self._dom = lxml.html.fromstring(html)
        else:
            raise TypeError("need <str> or <lxml.html.HtmlElement>")


    def select(self, css_selector):
        """
        Args:

            <str> css_selector

        Returns:

            <list> of <HtmlDom> instances
        """

        """
        See about `lxml.html.HtmlElement.xpath()` method on:
        http://lxml.de/api/lxml.html.HtmlElement-class.html
        """
        xpath_selector = css_to_xpath(css_selector)
        elements = self._dom.xpath(xpath_selector)
        return list(map(HtmlDom, elements))


    def attr(self, attribute):
        """
        Args:

            <str> attribute

        Returns:

            <str> value of given `attribute` name for current DOM root element

        Raises:

            <AttributeError>
        """

        attribute_value = self._dom.get(attribute)

        if attribute_value != None:
            return attribute_value
        else:
            raise AttributeError("HTML element have not the given attribute")


    @property
    def text(self):
        """
        Represents `lxml.html.HtmlElement.text` property. This property will
        be either <str> the text before the first subelement or `None`.

        See about `text` on: http://lxml.de/api/lxml.etree._Element-class.html

        Returns:

            <str> or `None` text, that contained in current HTML DOM root 
        """
        text = self._dom.text
        return text.strip() if text else None


    @property
    def tag(self):
        return self._dom.tag


def read_url(url):
    """
    Reads HTML text from given `url` and returns <HtmlDom> instance.

    Args:

        <str> url

    Returns:

        <HtmlDom>
    """
    html_text = bet.htmldom.http.read(url)
    return HtmlDom(html_text)
