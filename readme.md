# Bet

Python package for specific football betting.

# Technical task

Source: https://www.fl.ru/projects/3527541/parser-dannyih-ili-skript-oddsportalcom-pinnacle.html

Description: `docs/tech-task.pdf`

# Tests

`run_tests.sh`

`tests/js/`
Commit **b6263f3** has a problem description about Websocket. JS tests was
added for researching the work with Websocket. When the mechanism of pulling
the information about betting be clear and it will be realized on Python, this
tests will be removed.


# Options

It are constants, stored in `bet/settings.py` file.

* `ANNOTATION_URL`
* `ANNOTATION_LINK_SELECTOR`

# Documentation

## Module `bet.annotation`

**Warning**: this functionality does not work yet!

Reads the list of football matches on annotation page.

Simple usage:

```python
import bet.annotation


links = bet.annotation.read_links()
for link in links:
	print(link.text, "---", link.url)
```

Result:

```
Ecuador U20 W - Paraguay U20 W --- http://oddsportal.com/soccer/south-america/south-american-championship-women-u20/ecuador-paraguay-Em0D5Gw7/
Flamengo Arcoverde - Sport Recife --- http://oddsportal.com/soccer/brazil/campeonato-pernambucano/flamengo-arcoverde-sport-recife-Cnp1Vsbo/
...
```

