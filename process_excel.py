import pandas as pd
import requests
import time
import urllib3
from googlesearch import search

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

file_path = r'C:\Users\pc\Downloads\YSM Habesha Prospect List.xlsx'
df = pd.read_excel(file_path, sheet_name='All Prospects', header=3)

# Define bad domains to ignore when searching
bad_domains = ['facebook.com', 'instagram.com', 'yelp', 'tripadvisor', 'google.com', 'foursquare', 'ubereats', 'deliveroo', 'wolt', 'thuisbezorgd', 'just-eat', 'doordash', 'opentable', 'thefork', 'yellowpages', 'restaurantguru', 'happycow', 'sluurpy']

def is_valid_website(url):
    url = url.lower()
    for bd in bad_domains:
        if bd in url:
            return False
    return True

def search_website(name, city):
    query = f'"{name}" {city} restaurant website'
    try:
        results = search(query, num_results=5)
        for r in results:
            if is_valid_website(r):
                return r
    except Exception as e:
        pass
    return "Not found"

def check_status(url):
    if not url or url == "Not found" or "Not found" in str(url):
        return "No Website Found"
    
    if not str(url).startswith('http'):
        url = 'http://' + str(url)
        
    try:
        r = requests.get(url, timeout=5, verify=False, headers={'User-Agent': 'Mozilla/5.0'})
        return f"Alive ({r.status_code})"
    except requests.exceptions.Timeout:
        return "Timeout"
    except requests.exceptions.ConnectionError:
        return "Connection Error"
    except Exception as e:
        return "Error"

statuses = []
updated_websites = []

print("Processing prospects...")
for index, row in df.iterrows():
    name = row['Business Name']
    city = row['City']
    website = str(row['Website']).strip()
    
    if website == 'nan' or "not found" in website.lower():
        website = search_website(name, city)
        time.sleep(1.5) # Google rate limits can be strict
    
    status = check_status(website)
    
    updated_websites.append(website)
    statuses.append(status)
    print(f"{index + 1}/{len(df)}: {name} -> {website} -> {status}")

df['Website'] = updated_websites
df['Website Status'] = statuses

out_path = r'C:\Users\pc\OneDrive\Documents\YSM\YSM_Habesha_Prospect_List_Edited.xlsx'

with pd.ExcelWriter(out_path, engine='openpyxl') as writer:
    df.to_excel(writer, index=False, sheet_name='All Prospects Evaluated')

print("Saved to", out_path)
