from django.shortcuts import render
from .models import Programmer
from django.http.response import JsonResponse
# Create your views here.

def index(request):
    return render(request, 'index.html')

def list_programmers(request):
    programmers = list(Programmer.objects.values())
    data={"mesagge":"Success",'programmers': programmers}
    return JsonResponse(data)