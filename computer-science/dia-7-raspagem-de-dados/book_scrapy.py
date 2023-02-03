from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1-html"

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        href = selector.css("h3 a::attr(href)").get()
        details_page_url = URL_BASE + href

        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()

        details_reponse = requests.get(details_page_url)
        details_selector = Selector(text=details_reponse.text)

        description = details_selector.css("#product_description ~ p::text").get()
        print(title, price, description)

    next_page_url = selector.css(".next a::attr(href)").get()
