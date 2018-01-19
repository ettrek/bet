import unittest
import bet.links_of_matches


class TestLinksOfMatches(unittest.TestCase):

    def setUp(self):
        self.links = bet.links_of_matches.read()


    def test_links_of_matches_is_a_list(self):
        self.assertIsInstance(self.links, list)
        self.assertGreater(len(self.links), 0)


    def test_link_is_a_Link_instance(self):
        for link in self.links:
            self.assertIsInstance(link, bet.links_of_matches.Link)


    def test_link_have_url(self):
        HTTP_FIRST_PATTERN = "^http(s)?:\/\/"
        for link in self.links:
            self.assertRegex(link.url, HTTP_FIRST_PATTERN)


    def test_link_have_title(self):
        for link in self.links:
            self.assertIsInstance(link.title, str)
            self.assertGreater(len(link.title), 0)
