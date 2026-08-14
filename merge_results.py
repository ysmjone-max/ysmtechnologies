import pandas as pd
import json
import os
import requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# File paths
json_paths = [
    r'C:\Users\pc\.gemini\antigravity\brain\797121af-13a9-46e1-9ccf-01b9170420f4\scratch\results_chunk_1.json',
    r'C:\Users\pc\.gemini\antigravity\brain\51b4200d-0980-45cf-a33c-a7dbdf2b9e8a\scratch\results_chunk_2.json',
    r'C:\Users\pc\.gemini\antigravity\brain\797121af-13a9-46e1-9ccf-01b9170420f4\scratch\results_chunk_3.json',
    r'C:\Users\pc\.gemini\antigravity\brain\797121af-13a9-46e1-9ccf-01b9170420f4\scratch\results_chunk_4.json',
    r'C:\Users\pc\.gemini\antigravity\brain\797121af-13a9-46e1-9ccf-01b9170420f4\scratch\results_chunk_5.json'
]

file_path = r'C:\Users\pc\OneDrive\Documents\YSM\YSM_Habesha_Prospect_List_Edited.xlsx'
df = pd.read_excel(file_path, sheet_name='All Prospects Evaluated')

# Parse JSONs
city_data = {}
for path in json_paths:
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8-sig') as f:
                data = json.load(f)
                city_data.update(data)
        except Exception as e:
            print("Error loading", path, e)
    else:
        print("Missing file", path)

def check_status(url):
    if not url or url == "Not found":
        return "No Website Found"
    if not str(url).startswith('http'):
        url = 'http://' + str(url)
    try:
        r = requests.get(url, timeout=5, verify=False, headers={'User-Agent': 'Mozilla/5.0'})
        return f"Alive ({r.status_code})"
    except:
        return "Error/Down"

new_rows = []

for index, row in df.iterrows():
    name = row['Business Name']
    city = row['City']
    
    # Check if this city is in our researched data
    if city in city_data:
        existing_list = city_data[city].get('existing', [])
        # Find this restaurant in the existing list
        for item in existing_list:
            if item.get('name') == name:
                new_website = item.get('website')
                if new_website and str(new_website).strip() != "null" and new_website != "Not found":
                    # We found a better website!
                    df.at[index, 'Website'] = new_website
                    df.at[index, 'Website Status'] = check_status(new_website)
                break

# Append new ones
for city, data in city_data.items():
    new_list = data.get('new', [])
    for item in new_list:
        website = item.get('website', '')
        if website == "null" or not website:
            website = "Not found"
        
        status = check_status(website)
        
        new_row = {
            'Rank': 'NEW',
            'Business Name': item.get('name'),
            'Category': 'Restaurant',
            'City': city,
            'Country': '', # Fill in later or leave blank
            'Address': '',
            'Phone': '',
            'Website': website,
            'Google Rating': '',
            '# Reviews': '',
            'Likelihood Score (1-5)': '5',
            'Priority Tier': 'Very High',
            'Why (digital-opportunity signal)': 'Newly Discovered Prospect - Needs Review',
            'Website Status': status
        }
        new_rows.append(new_row)

if new_rows:
    new_df = pd.DataFrame(new_rows)
    df = pd.concat([df, new_df], ignore_index=True)

out_path = r'C:\Users\pc\OneDrive\Documents\YSM\YSM_Habesha_Prospect_List_DeepEvaluated.xlsx'
with pd.ExcelWriter(out_path, engine='openpyxl') as writer:
    df.to_excel(writer, index=False, sheet_name='Deep Evaluated')

print(f"Added {len(new_rows)} new prospects.")
print("Saved to", out_path)
