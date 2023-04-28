from django.shortcuts import render
from ukraine_map.parser import get_alarms



def home(request):
    all_alarms = get_alarms()
    return render(request, 'index.html', {"all_alarms": all_alarms})
