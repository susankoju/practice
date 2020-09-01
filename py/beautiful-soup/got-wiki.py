import requests
from bs4 import BeautifulSoup
import pandas as pd

url = 'https://en.wikipedia.org/wiki/List_of_Game_of_Thrones_episodes'
episodes = []

page = requests.get(url)

soup = BeautifulSoup(page.text, 'html.parser')

episode_tables = soup.find_all('table', class_ = 'wikiepisodetable')

#print(episode_tables)

for table in episode_tables:
    headers = []
    for header in table.find('tr').find_all('th'):
        headers.append(header.get_text())
        
    rows = table.find_all('tr')[1:]
    for row in rows:
        values = []
        for col in row.find_all(['th', 'td']):
            values.append(col.text)

        print(headers)
        print(values)
        '''
        if len(headers) == len(values):
            episode_dict = { header[i]: values[i] for i in range(len(headers)-1)}
            episodes.append(episode_dict)
        
        print(row)
        season_no = row.find_all('td')[0].get_text()
        director = row.find_all('td')[2].get_text()
        print(season_no, director)
        '''

df = pd.DataFrame(episodes)
#print(df.tail())
print(df)
