import os

from rest_framework import serializers

from .models import Clothes


class ClothesSerializer(serializers.ModelSerializer):
    readable_name = serializers.SerializerMethodField('get_readable_name')
    image_path = serializers.SerializerMethodField('generate_image_path')

    def get_readable_name(self, item):  # pylint: disable=no-self-use
        return str(item).lower()

    def generate_image_path(self, item):
        if item.picture:
            uri = self.context["request"].build_absolute_uri('/')
            return os.path.join(uri, item.picture.url[1:])
        return None

    class Meta:
        model = Clothes
        fields = ("id", "clothing_type", "colour", "readable_name", "additional_details", "image_path")
