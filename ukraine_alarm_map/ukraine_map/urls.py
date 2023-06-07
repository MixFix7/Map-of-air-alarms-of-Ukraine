from django.urls import path
from .views import *

urlpatterns = [
    path('', Map.as_view(), name="home"),
    path('get_alarms/', Alarms.as_view(), name='get_alarms')
]