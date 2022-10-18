from selenium.webdriver import Keys
from seleniumpagefactory.Pagefactory import PageFactory

from python_sample_project.src.pages import XLUtils


class googleHome(PageFactory):
    def __init__(self, driver):
        self.driver = driver

    locators = {
        'search_textbox': ('XPATH', "//input[@name='q']"),
        'search_button': ('XPATH', "(//input[@value='Google Search'])[2]")
    }

    def check_searchbox(self):
        xlpath = "C:/Users/Admin/Documents/Data/googleSearch.xlsx"
        searchitem1 = XLUtils.readData(xlpath, "Sheet1", 2, 1)
        self.search_textbox.send_keys(searchitem1)
        self.search_textbox.send_keys(Keys.TAB)

    def check_searchbut(self):
        self.search_button.click()