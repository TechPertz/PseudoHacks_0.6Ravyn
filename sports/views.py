from django.views import generic
from django.contrib.gis.geos import fromstr, Point
from django.contrib.gis.measure import Distance
from .models import Location
from django.shortcuts import render

# Create your views here.

longitude = 19.127730749999998
latitude = 72.83693882433897

user_location = Point(longitude, latitude, srid=4326)

# class Home(generic.ListView):
#     model = Location
#     context_object_name = 'places'
#     queryset = Location.objects.annotate(distance=Distance('location',
#     user_location)
#     ).order_by('distance')[0:6]
#     template_name = 'sports/index.html'
#     # print(queryset)

def index(request):
    locations = Location.objects.all().order_by('?')
    # random.shuffle(locations)
    # locations = Location.objects.annotate(distance=Distance('location',user_location))
    print(str(locations))
    return render(request, 'sports/index.html', {'locations' : locations})

