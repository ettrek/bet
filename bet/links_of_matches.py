class Link:

    def __init__(self, url="", title=""):
        self.url = url
        self.title = title


def read():
    return [Link("http://", "Fake title")]
