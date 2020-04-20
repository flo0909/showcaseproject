from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class UserMessage(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    subject = models.CharField(max_length=250)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.name