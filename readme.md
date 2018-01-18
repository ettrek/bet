# Bet

Python package for specific football betting.

# Technical task

Source: https://www.fl.ru/projects/3527541/parser-dannyih-ili-skript-oddsportalcom-pinnacle.html

Description: `docs/tech-task.pdf`

# Tests

`run_tests.sh`

# Documentation

## Module `bet.links_of_matches`

Reads the list of football matches on annotation page.

Simple usage:

```python
import bet.links_of_matches


links = bet.links_of_matches.read()
for link in links:
	print(links.title, "---", link.url)
```

Result:

```
Ecuador U20 W - Paraguay U20 W --- http://oddsportal.com/soccer/south-america/south-american-championship-women-u20/ecuador-paraguay-Em0D5Gw7/
Flamengo Arcoverde - Sport Recife --- http://oddsportal.com/soccer/brazil/campeonato-pernambucano/flamengo-arcoverde-sport-recife-Cnp1Vsbo/
...
```

The URL of annotation page have specified in `bet.links_of_matches.LIST_OF_MATCHES_URL ` constant. Presently it is http://www.oddsportal.com/matches/soccer.
