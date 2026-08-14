import pandas as pd
import requests
import time

file_path = r'C:\Users\pc\Downloads\YSM Habesha Prospect List.xlsx'
# Read All Prospects. The header is actually on row 4 (index 3 in 0-indexed)
df = pd.read_excel(file_path, sheet_name='All Prospects', header=3)
print(df.columns.tolist())
