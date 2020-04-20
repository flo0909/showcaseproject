from django.shortcuts import render
from .forms import UserMessageForm
from django.core.mail import send_mail


def index(request):
    return render(request, 'main/index.html')
from django.shortcuts import render

def contact(request):
    form = UserMessageForm(request.POST)
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        content = request.POST['content']
        form.save()
        email_body = 'You have a new message from {0} , with the email: {1} . The message is: {2}'.format(name,email,content)
        form = UserMessageForm
    return render( request, 'main/contact.html',{'form':form})