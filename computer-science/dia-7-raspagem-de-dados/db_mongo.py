from pymongo import MongoClient

with MongoClient() as client:
    db = client.catalogue

    documents = [
        {
            "title": "A Light in the Attic",
        },
        {
            "title": "Tipping the Velvet",
        },
        {
            "title": "Soumission",
        },
    ]

    db.books.insert_many(documents)

    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])

client.close()