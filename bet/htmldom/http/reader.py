import urllib.request


def read(url):
    """
    Args:
            
        (`str`) url - URL of HTML document to read.
    
    Returns:
            
        (`bytes`) of HTTP response body.
    """
    response = urllib.request.urlopen(url)
    response_charset = response.info().get_content_charset()
    response_bytes = response.read()
    return response_bytes
