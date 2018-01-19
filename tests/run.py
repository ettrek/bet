import unittest


if __name__ == '__main__':
	loader = unittest.TestLoader()
	suite = loader.discover(start_dir="", pattern="*_test.py")
	runner = unittest.TextTestRunner(verbosity=3)
	runner.run(suite)

