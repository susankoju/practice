import scrapy
from scrapy.utils.response import open_in_browser

class MangaSpider(scrapy.Spider):
    name = "manga"

    start_urls = [
        'https://manganelo.com/manga/apotheosis',
    ]

    def parse(self, response):

        lastDate = response.css('span.chapter-time::text').get();
        if("day" in lastDate):
            yield scrapy.Request(response.urljoin(response.css('a.chapter-name::attr(href)').get()), callback=self.parseInBrowser)
               
    def parseInBrowser(self, response):
        open_in_browser(response)
