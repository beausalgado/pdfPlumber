import pdfplumber 

# with pdfplumber.open("test2.pdf") as pdf:
#     first_page = pdf.pages[0]
#     for i in range(50):
#      print(first_page.chars[i])

# with pdfplumber.open("test2.pdf") as pdf:
#     page = pdf.pages[16]
#     left_page = page.crop((0, 1, 0.3 * float(page.width), 0.9 * float(page.height)))

#     print(left_page.extract_words(x_tolerance=100, y_tolerance=1, keep_blank_chars=True, horizontal_ltr=True, extra_attrs=['fontname'], split_at_punctuation=False))

with pdfplumber.open("test2.pdf") as pdf:
    page = pdf.pages[0]
    im = page.to_image(resolution=150)
    left_page = page.crop((0, 1, 0.31 * float(page.width), 0.9 * float(page.height)))
    print(left_page.extract_words(x_tolerance=100, y_tolerance=10, extra_attrs=["fontname"]))





# import pdfplumber
# with pdfplumber.open('test2.pdf') as pdf: 
#     text = pdf.pages[0]
#     clean_text = text.filter(lambda obj: obj["object_type"] == "char" and "Bold" in obj["fontname"])