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
    def from_html(cls, html_link):
        """
        Args:

            (`bet.htmldom.HtmlDom`) html_object - that is a link (tag "a").

        Returns:

            (`Link`) based on `html_object` data.
        """
        url = html_link.attr("href")
        text = html_link.text
        return cls(url, text)
