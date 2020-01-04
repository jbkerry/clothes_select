from rest_framework import serializers

from .models import Clothes


class ClothesSerializer(serializers.ModelSerializer):
    readable_name = serializers.SerializerMethodField('get_readable_name')

    def get_readable_name(self, item):  # pylint: disable=no-self-use
        return str(item).lower()

    class Meta:
        model = Clothes
        fields = ("id", "clothing_type", "colour", "readable_name", "additional_details", "picture")
