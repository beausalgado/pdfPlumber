import json
import ast


with open("python-extractor.json", "r") as f:
    data = f.read()
    print(type(data))
    z = ast.literal_eval(str(data))
    print(z)
    # loads = json.loads(f)
    # print(loads)
