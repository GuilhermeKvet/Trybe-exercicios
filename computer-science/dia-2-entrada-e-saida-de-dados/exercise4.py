# import json
# import csv

# # Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a
# # porcentagem de livros em cada categoria em relação ao número total de livros.
# # O resultado deve ser escrito em um arquivo no formato CSV como o exemplo
# # abaixo.

# with open("exercise4.json") as file:
#     allBooks = json.load(file)
#     total_books = len(allBooks)
#     for book in allBooks:
#         all_categories = []
#         if book["categories"] not in all_categories:
#             all_categories.append(book["categories"])
#         print(all_categories)


import json
import csv


def retrieve_books(file):
    return json.load(file)



def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
