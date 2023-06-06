from django.shortcuts import render
from .parser import get_alarms
from django.views import View
from django.http import JsonResponse


class Map(View):
    def get(self, request):
        all_alarms = get_alarms()
        return render(request, 'index.html', {"all_alarms": all_alarms})

    def post(self, request):
        name = request.POST.get('ourForm_input')

        return JsonResponse({'message': "Данні отримано"})