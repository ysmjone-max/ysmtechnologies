import pandas as pd
import numpy as np

file_path = r'C:\Users\pc\OneDrive\Documents\YSM\YSM_Habesha_Prospect_List_DeepEvaluated.xlsx'
df = pd.read_excel(file_path, sheet_name='Deep Evaluated')

# Re-evaluate the "Why (digital-opportunity signal)" column based on "Website Status"
def evaluate_signal(row):
    status = str(row.get('Website Status', '')).lower()
    
    if 'no website found' in status:
        return 'Critical Need: No website detected. Immediate opportunity to build a digital presence from scratch.'
    elif 'error' in status or 'down' in status:
        return 'Urgent Need: Existing website is broken or offline. High opportunity to redesign and fix hosting.'
    elif 'alive' in status:
        return 'Modernization Opportunity: Has an active website. Opportunity to pitch a modern, mobile-friendly redesign, better SEO, or advanced features (like online reservations).'
    else:
        return 'Needs digital presence review.'

df['Why (digital-opportunity signal)'] = df.apply(evaluate_signal, axis=1)

# Set Likelihood Score (1-5) and Priority Tier based on the signal
def evaluate_priority(row):
    status = str(row.get('Website Status', '')).lower()
    if 'no website found' in status or 'error' in status or 'down' in status:
        return 'Very High', '5'
    else:
        return 'High', '4'

df[['Priority Tier', 'Likelihood Score (1-5)']] = df.apply(evaluate_priority, axis=1, result_type='expand')

# Save the updated file
out_path = r'C:\Users\pc\OneDrive\Documents\YSM\YSM_Habesha_Prospect_List_Final.xlsx'
with pd.ExcelWriter(out_path, engine='openpyxl') as writer:
    df.to_excel(writer, index=False, sheet_name='Final List')

print("Updated signals successfully and saved to:", out_path)
