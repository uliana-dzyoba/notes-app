from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.NoteList.as_view(), name="notes"),
    path('notes/<str:pk>/', views.NoteDetail.as_view(), name="note"),
]