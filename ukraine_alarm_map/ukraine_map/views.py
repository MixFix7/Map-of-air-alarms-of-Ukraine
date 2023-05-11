from django.shortcuts import render
from ukraine_map.parser import get_alarms
from django.views import View


class Map(View):
    def get(self, request):
        all_alarms = get_alarms()
        return render(request, 'index.html', {"all_alarms": all_alarms})
