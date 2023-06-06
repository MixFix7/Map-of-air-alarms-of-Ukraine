from django.shortcuts import render
from .parser import get_alarms
from django.views.generic import View, TemplateView
from django.http import JsonResponse


def map(request):
    if request.method == 'GET':
        all_alarms = get_alarms()
        return JsonResponse({'all_alarms': all_alarms})
    return render(request, 'index.html')

