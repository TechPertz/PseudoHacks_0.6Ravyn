from django.contrib import admin

from django.contrib.gis.admin import OSMGeoAdmin
from .models import Sport, Location

admin.site.register(Sport)
@admin.register(Location)
class ShopAdmin(OSMGeoAdmin):
    list_display = ('name', 'location')
