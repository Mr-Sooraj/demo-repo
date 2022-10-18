from selenium.webdriver.chrome import webdriver
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.wait import WebDriverWait
from seleniumpagefactory.Pagefactory import PageFactory

class Base_Class:
    pass

    def url(self):
        baseUrl="https://www.google.com/"
        return baseUrl

    def getPath(self):
        path = 'C:/Users/Admin/PycharmProjects/firstSeleniumTest/drivers/chromedriver.exe'
        return path