# Generated by Django 3.0.1 on 2020-01-05 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clothing_selector', '0003_auto_20200105_1920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clothes',
            name='picture',
            field=models.ImageField(upload_to='clothing_images'),
        ),
    ]
