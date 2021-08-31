# Generated by Django 3.2.6 on 2021-08-31 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sports', '0003_team'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='vacant',
        ),
        migrations.AddField(
            model_name='team',
            name='filled',
            field=models.IntegerField(default=0),
        ),
    ]
