import xml.etree.ElementTree as ET
import os


with open("inventory.xml") as file:
    if os.path.splitext(file) != '.csv':
        raise ValueError

    tree = ET.parse(file)
    root = tree.getroot()

    products = []

    for record in root.findall("record"):

        print(record)
        record_dict = {}

        for item in record:
            record_dict.update({item.tag: item.text})

        products.append(record_dict)


print(products)
