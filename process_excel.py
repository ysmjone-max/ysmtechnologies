import pandas as pd
import requests
import time
from duckduckgo_search import DDGS
import urllib.parse
import re

excel_file = 'YSM_Habesha_Restaurant_WW_List_By_Country.xlsx'
output_file = 'YSM_Habesha_Prospect_List_Final.xlsx'

def check_url(url):
    if not url or pd.isna(url):
        return False, "No URL"
    if not url.startswith('http'):
        url = 'http://' + url
    try:
        response = requests.get(url, timeout=5, headers={'User-Agent': 'Mozilla/5.0'})
        if response.status_code == 200:
            return True, "Active"
        else:
            return False, f"Status {response.status_code}"
    except Exception as e:
        return False, "Error/Down"

def find_website(name, city):
    if pd.isna(name) or pd.isna(city): return None
    query = f"{name} {city} restaurant website"
    try:
        results = DDGS().text(query, max_results=2)
        for r in results:
            url = r['href']
            # Ignore directories
            ignored = ['yelp.', 'tripadvisor.', 'facebook.', 'grubhub.', 'doordash.', 'ubereats.', 'seamless.', 'postmates.', 'yellowpages.']
            if not any(ig in url.lower() for ig in ignored):
                return url
    except Exception:
        pass
    return None

def analyze_prospect(row):
    if pd.isna(row.get('Business Name')) or pd.isna(row.get('Phone')):
        return ""
    
    website = str(row.get('Website', ''))
    name = row.get('Business Name', '')
    city = row.get('City', '')
    reviews = row.get('# Reviews', 0)
    try:
        reviews = float(reviews)
    except:
        reviews = 0

    if 'est.' in website.lower() or website.lower() == 'not found' or website.lower() == 'nan':
        if 'likely has site' in website.lower() or reviews > 100:
            time.sleep(1) # rate limit
            found_url = find_website(name, city)
            if found_url:
                is_active, msg = check_url(found_url)
                if is_active:
                    return f"Website found ({found_url}) - Active. Pitch Digital Audit."
                else:
                    return f"Website found ({found_url}) but {msg}. Pitch Fix/Rebuild."
            else:
                return "Prime prospect: High reviews but no website found. Pitch New Website."
        else:
            return "No website found. Pitch New Website."
    else:
        is_active, msg = check_url(website)
        if is_active:
            return f"Active website ({website}). Pitch Digital Audit."
        else:
            return f"Website ({website}) is down ({msg}). Urgent Pitch: Fix/Rebuild."

print("Loading excel file...")
xls = pd.ExcelFile(excel_file)
all_dfs = []

print("Processing USA...")
df_usa = pd.read_excel(excel_file, sheet_name='USA', header=3)
df_usa['Country'] = 'USA'
df_usa = df_usa.dropna(how='all')

analyses = []
total = len(df_usa)
for idx, row in df_usa.iterrows():
    if idx % 10 == 0:
        print(f"USA Progress: {idx}/{total}")
    analyses.append(analyze_prospect(row))

df_usa['Analysis'] = analyses
all_dfs.append(df_usa)

print("Processing other countries...")
for sheet in xls.sheet_names:
    if sheet in ['Summary', 'USA']: continue
    print(f"Reading {sheet}...")
    df_other = pd.read_excel(excel_file, sheet_name=sheet, header=3)
    df_other['Country'] = sheet
    df_other = df_other.dropna(how='all')
    
    if 'Opportunity Notes' in df_other.columns:
        df_other['Analysis'] = df_other['Opportunity Notes']
    else:
        df_other['Analysis'] = 'Pending Analysis'
    all_dfs.append(df_other)

print("Concatenating all data...")
final_df = pd.concat(all_dfs, ignore_index=True)
cols = [c for c in final_df.columns if not str(c).startswith('Unnamed:')]
if 'Country' in cols:
    cols.insert(0, cols.pop(cols.index('Country')))
if 'Analysis' in cols:
    cols.append(cols.pop(cols.index('Analysis')))

final_df = final_df[cols]
print("Saving to Excel...")
final_df.to_excel(output_file, index=False)
print(f"Done! Saved comprehensive dataset to {output_file}")
