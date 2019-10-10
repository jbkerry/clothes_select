from django.http import HttpResponse


def home_page(request):  # pylint: disable=unused-argument
    return HttpResponse("<html><title>To-Do lists</title></html>")
