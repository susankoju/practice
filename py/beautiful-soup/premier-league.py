import requests
from bs4 import BeautifulSoup
import pandas as pd

url = 'https://www.skysports.com/premier-league-table/2011'
league_2011 = []
page = requests.get(url)
'''
print(page.status_code)
print(page)
print(page.text)
'''

soup = BeautifulSoup(page.text, 'html.parser')

#print(soup.prettify)

#print(soup.find_all('a'))

league = soup.find('table', class_ = 'standing-table__table')

league_table = league.find_all('tbody')

for league_teams in league_table:
    rows = league_teams.find_all('tr')
    for row in rows:
        team_names = row.find('td', class_ = 'standing-table__cell standing-table__cell--name').text.strip()
        team_points = row.find_all('td', class_ = 'standing-table__cell')[9].text.strip()
        #print(team_names, team_points)
        league_dict = {'name': team_names,
                       'pts': team_points
                       }
        league_2011.append(league_dict)

df = pd.DataFrame(league_2011)
#print(df.head())
print(df)
