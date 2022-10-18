import allure
from allure_commons.types import AttachmentType
from selenium import webdriver
from python_sample_project.src.baseClass.BaseClass import Base_Class
from python_sample_project.src.pages.googleHomePage import googleHome

class Test_GoogleSearch(Base_Class):

    def test_browserInit(self):
        baseclass = Base_Class
        global driver
        driver = webdriver.Chrome(executable_path=baseclass.getPath(self))
        driver.get(baseclass.url(self))
        driver.maximize_window()

    def test_search(self):
        googlehome = googleHome(driver)
        googlehome.check_searchbox()
        googlehome.check_searchbut()
        allure.attach(driver.get_screenshot_as_png(), name="screenshotname", attachment_type=AttachmentType.PNG)
        driver.quit()