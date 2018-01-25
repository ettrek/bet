import unittest
import bet.annotation


class read_links_Test(unittest.TestCase):
    """ read_links()
    """

    @classmethod
    def setUpClass(cls):
        cls.links = bet.annotation.read_links()


    def test_annotation_returns_a_non_empty_list(self):
        self.assertIsInstance(self.links, list)
        self.assertGreater(len(self.links), 0)


    def test_annotation_link_have_url(self):
        for link in self.links:
            self.assertRegex(link.url, HTTP_FIRST_PATTERN)


    def test_annotation_link_have_text(self):
        for link in self.links:
            self.assertIsInstance(link.text, str)
            self.assertGreater(len(link.text), 0)


    def test_text_of_annotation_link_matches_the_pattern(self):
        pass

