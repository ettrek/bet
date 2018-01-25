import re


class Link:
    """
    Represents a web link that have URL and text.
    """
    def __init__(self, url="", text=""):
        self.url = url
        self.text = text


    @property
    def url(self):
        return self._url


    @url.setter
    def url(self, url_to_set):
        self._url = Link.filter_url(url_to_set)


    @classmethod
    def filter_url(cls, url):
        URL_PATTERN = "^http(s)?:\/\/.+"
        return url if re.match(URL_PATTERN, url) else ""

    
    @classmethod
    def from_htmldom(cls, link):
        """
        Args:

            <bet.htmldom.HtmlDom> link

        Returns:

            <Link> based on given `link` data.
        """
        url = link.attr("href")
        text = link.text
        return cls(url, text)
