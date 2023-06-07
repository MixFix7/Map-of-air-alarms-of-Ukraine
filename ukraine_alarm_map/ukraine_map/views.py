from django.shortcuts import render
from .parser import get_alarms
from django.views.generic import View, TemplateView
from django.http import JsonResponse, HttpRequest
from django.template import loader


class Map(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        alarms = self.request.GET.get('alarms', [])
        context['alarms'] = alarms
        return context


class Alarms(View):
    def get(self, request):
        all_alarms = get_alarms()
        return render(request, )





