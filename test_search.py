import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from duckduckgo_search import DDGS
except ImportError:
    install('duckduckgo-search')
    from duckduckgo_search import DDGS

import time

def search_website(query):
    try:
        results = DDGS().text(query, max_results=3)
        for r in results:
            print(r['title'], r['href'])
    except Exception as e:
        print("Error:", e)

search_website("Semai Restaurant & Lounge Amsterdam")
