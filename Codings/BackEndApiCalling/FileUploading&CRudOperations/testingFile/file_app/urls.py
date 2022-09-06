# from django.conf.urls import url
from django.urls import include, path
from .views import FileView

urlpatterns = [
    path('upload', FileView.as_view(), name='file-upload'),
]