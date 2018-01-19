"""
Here we parse HTML tree, that represents the page with annotation of football
matches. The URL of it page is stored in `bet.options.MATCHES_ANNOTATION_URL`.

We need to get the list of all links to pages with football matches details.

This module have one public method `read()` that returns a `list` of `Link`
instances.
"""


class Link:
    """
    Represents a link to a football match details page.
    """
    def __init__(self, url="", title=""):
        self.url = url
        self.title = title


def read():
    return [Link("http://", "Fake title")]
