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
        
        (`list` of `Link`)
    """
    annotation_page = bet.htmldom.read_url(bet.settings.ANNOTATION_URL)
    html_links = annotation_page.select(bet.settings.ANNOTATION_LINK_SELECTOR)
    return list(map(Link.from_html, html_links))

