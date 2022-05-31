from django.conf import settings
from django.db import models


class Order(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="order_user",
    )
    order_number = models.CharField(
        max_length=256,
    )
