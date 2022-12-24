import pdfplumber 
import pyperclip
import json
from types import SimpleNamespace
# import wand
# from PIL import Image

# with pdfplumber.open("test2.pdf") as pdf:
#     first_page = pdf.pages[0]
#     for i in range(50):
#      print(first_page.chars[i])

# with pdfplumber.open("test2.pdf") as pdf:
#     first_page = pdf.pages[0]
#     print(first_page.chars[1])


# with pdfplumber.open("test2.pdf") as pdf:
#     page = pdf.pages[0]
#     left_page = page.crop((0, 1, 0.3 * float(page.width), 0.9 * float(page.height)))
#     results = left_page.extract_words(x_tolerance=10, y_tolerance=1.5, keep_blank_chars=True, horizontal_ltr=True, extra_attrs=['fontname'], split_at_punctuation=False)
#     pyperclip.copy(str(results))
#     stringthem = (str(results))
#     x = json.loads(stringthem, object_hook=lambda d: SimpleNamespace(d))
#     print(x.text)
#     print(results)

with pdfplumber.open("test2.pdf") as pdf:
    page = pdf.pages[0]
    left_page = page.crop((0, 1, 0.3 * float(page.width), 0.9 * float(page.height)))
    results = left_page.extract_words(x_tolerance=10, y_tolerance=1.5, keep_blank_chars=True, horizontal_ltr=True, extra_attrs=['fontname'], split_at_punctuation=False)
    json = json.dumps(results)
    
    # string = pyperclip.copy(str(results))
    print(json)



# Parse JSON into an object with attributes corresponding to dict keys.


# with pdfplumber.open("test2.pdf") as pdf:
#     page = pdf.pages[0]
#     left_page = page.crop((0, 1, 0.3 * float(page.width), 0.9 * float(page.height)))
#     results = left_page.extract_text(extra_attrs=['fontname'])

#     print(results)

# with pdfplumber.open("test2.pdf") as pdf:
#     page = pdf.pages[0]
#     im = page.to_image(resolution=150)
#     left_page = page.crop((0, 1, 0.31 * float(page.width), 0.9 * float(page.height)))
#     print(left_page.extract_words(x_tolerance=100, y_tolerance=10, extra_attrs=["fontname"]))





# import pdfplumber
# with pdfplumber.open('test2.pdf') as pdf: 
#     text = pdf.pages[0]
#     clean_text = text.filter(lambda obj: obj["object_type"] == "char" and "Bold" in obj["fontname"])