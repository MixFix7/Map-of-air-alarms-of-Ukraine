from django.shortcuts import render
from .parser import get_alarms
from django.views.generic import View, TemplateView
from django.http import JsonResponse


class Map(View):
    def get(self, request):
        all_alarms = get_alarms()




        return JsonResponse({'data': all_alarms})

