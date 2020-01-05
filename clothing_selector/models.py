from django.db import models  # pylint: disable=unused-import


class Clothes(models.Model):
    CLOTHING_TYPE = [
        ("JU", "Jumper"),
        ("TS", "T-Shirt"),
        ("SI", "Shirt"),
        ("TR", "Trousers"),
        ("SH", "Shoes")
    ]

    clothing_type = models.CharField(max_length=2, choices=CLOTHING_TYPE, null=False)
    colour = models.CharField(max_length=20, null=False)
    additional_details = models.CharField(max_length=150, null=True)
    picture = models.ImageField(upload_to="clothing_images")

    def __str__(self):
        return f"{self.colour} {self.get_clothing_type_display()}"
