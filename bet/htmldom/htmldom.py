import lxml.etree
import cssselect
import bet.htmldom.http


class HtmlDom:
    """
    It is an adapter for lxml.etree._
    """
    def __init__(self, html_bytes):
        html = lxml.etree.HTML(html_bytes)
        self.tree = lxml.etree.ElementTree(html)


    def select(self, css_selector):
        # TODO: divide by spaces
        xpath_selector=cssselect.GenericTranslator().css_to_xpath(css_selector)
        # TODO: return HtmlTree instance
        return self.tree.xpath(xpath_selector)


def read_url(url):
    html_bytes = bet.htmldom.http.read(url)
    return HtmlDom(html_bytes)
