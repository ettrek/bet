# Bet

Python package for specific football betting.

# Technical task

Source: https://www.fl.ru/projects/3527541/parser-dannyih-ili-skript-oddsportalcom-pinnacle.html

Description: `docs/tech-task.pdf`

# Tests

`run_tests.sh`

# Settings

Stored in `bet/settings.py` file.

* `CONTENTS_URL`
* `CONTENTS_LINK_SELECTOR`

# Documentation

## Module `bet.contents`

Reads the list of football matches from a page, that contains the betting line.

Simple usage:

```python
import bet.contents


links = bet.contents.read_links()
for link in links:
	print(link.text, "---", link.url)
```

Result:

```
Ecuador U20 W - Paraguay U20 W --- http://oddsportal.com/soccer/south-america/south-american-championship-women-u20/ecuador-paraguay-Em0D5Gw7/
Flamengo Arcoverde - Sport Recife --- http://oddsportal.com/soccer/brazil/campeonato-pernambucano/flamengo-arcoverde-sport-recife-Cnp1Vsbo/
...
```

