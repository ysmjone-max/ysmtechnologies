import pandas as pd

excel_file = 'YSM_Habesha_Restaurant_WW_List_By_Country.xlsx'
xls = pd.ExcelFile(excel_file)
print("Sheets:", xls.sheet_names)

for sheet in xls.sheet_names:
    print(f"\n--- Sheet: {sheet} ---")
    df = pd.read_excel(excel_file, sheet_name=sheet)
    print("Columns:", df.columns.tolist())
    print(df.head(5))
