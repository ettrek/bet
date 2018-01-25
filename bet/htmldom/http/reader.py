import urllib.request


def read_bytes(url):
    """
    Args:
            
        <str> url - HTML document to read
    
    Returns:
            
        <bytes> HTTP response body
    """
    response = urllib.request.urlopen(url)
    response_charset = response.info().get_content_charset()
    response_bytes = response.read()
    return response_bytes


def read(url):
    """
    Args:

        <str> url - HTML document to read

    Returns:

        <str> HTTP response body
    """
    return str(read_bytes(url))
