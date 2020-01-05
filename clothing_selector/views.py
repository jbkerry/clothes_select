from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Clothes
from .serializers import ClothesSerializer


def home_page(request):  # pylint: disable=unused-argument
    return HttpResponse("<html><title>To-Do lists</title></html>")


@api_view(['GET'])
def clothing_list(request, clothing_type):
    if request.method == 'GET':
        clothes = Clothes.objects.filter(clothing_type=clothing_type).all()
        serializer = ClothesSerializer(clothes, context={'request': request}, many=True)
        return Response(serializer.data)
    return None
