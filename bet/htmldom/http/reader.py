import urllib.request


def read_bytes(url):
    """
    Args:
            
        <str> url - HTML document to read
    
    Returns:
            
        <bytes> HTTP response body, <str> charset
    """
    response = urllib.request.urlopen(url)
    response_charset = response.info().get_content_charset()
    response_bytes = response.read()
    return response_bytes, response_charset


def read(url):
    """
    Args:

        <str> url - HTML document to read

    Returns:

        <str> HTTP response body
    """
    html_bytes, charset = read_bytes(url)
    return html_bytes.decode(charset)

