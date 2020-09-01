import scrapy
from scrapy.cmdline import execute

class StackOverflowSpider(scrapy.Spider):
    name = "stackoverflow"

    def start_request(self):
        urls = [
            'https://stackoverflow.com/questions/tagged/python'
            ]

        print(urls)
        for url in urls:
            yield scrapy.Request(url = url, callback = self.parse)

    def parse(self, response):
        file = "test.html"

        with open(filename, "w") as f:
            questions = response.xpath('//body').get()
            f.write(response.body)



try:
    execute(
        [
            'scrapy',
            #'crawl',
            'stackoverflow'        
        ]
    )

except SystemExit:
    pass
