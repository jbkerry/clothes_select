from django.test import TestCase
from django.urls import resolve
from django.http import HttpRequest

from clothing_selector.models import Clothes
from clothing_selector.views import home_page


class HomePageTest(TestCase):

    def test_root_url_resolves_to_home_page_view(self):
        found = resolve('/')
        self.assertEqual(found.func, home_page)

    def test_home_page_returns_correct_html(self):
        request = HttpRequest()
        response = home_page(request)
        html = response.content.decode('utf8')
        self.assertTrue(html.startswith('<html>'))
        self.assertIn('<title>To-Do lists</title>', html)
        self.assertTrue(html.endswith('</html>'))


class ClothesListTest(TestCase):

    def test_returns_list_of_clothes(self):
        Clothes.objects.create(clothing_type='JU', colour='blue')
        Clothes.objects.create(clothing_type='TS', colour='white')
        response = self.client.get("/api/clothes/", format='json')
        data = response.data
        self.assertEqual(len(data), 2)
        self.assertEqual(data[0]["clothing_type"], "JU")
        self.assertEqual(data[0]["colour"], "blue")
