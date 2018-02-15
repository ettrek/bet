import bet.settings
from bet.link import Link
import bet.htmldom


def read_links():
    """
    Reads annotation from `bet.settings.ANNOTATION_URL`.

    Returns:
        
        <list> of <bet.link.Link> instances
    """
    url = bet.settings.ANNOTATION_URL
    annotation = bet.htmldom.read_url(url)
    link_selector = bet.settings.ANNOTATION_LINK_SELECTOR
    html_links = annotation.select(link_selector)
    return list(map(Link.from_htmldom, html_links))

