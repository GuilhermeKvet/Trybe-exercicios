from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
details_page_url = URL_BASE + href

details_reponse = requests.get(details_page_url)
details_selector = Selector(text=details_reponse.text)

description = details_selector.css("#product_description ~ p::text").get()
print(description)