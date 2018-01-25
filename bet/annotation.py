"""
Here we parse HTML DOM of the page with annotation of football matches. The
URL of it page is stored in `bet.settings.ANNOTATION_URL`.

We need to get the list of all links to pages with football matches details.
"""

import bet.settings
from bet.link import Link
import bet.htmldom


def read_links():
    """
    Reads annotation from `bet.settings.ANNOTATION_URL`.

    Returns:
        
        <list> of <Link> instances
    """

    url = bet.settings.ANNOTATION_URL
    assert type(url) is str
    assert len(url) > 0

    annotation = bet.htmldom.read_url(url)
    assert type(annotation) is bet.htmldom.HtmlDom

    link_selector = bet.settings.ANNOTATION_LINK_SELECTOR
    assert type(link_selector) is str
    assert len(link_selector) > 0

    html_links = annotation.select(link_selector)
    assert type(html_links) is list
    assert len(html_links) > 0
    assert type(html_links[0]) is bet.htmldom.HtmlDom

    return list(map(Link.from_htmldom, html_links))

