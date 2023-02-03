FROM python:3.9.0-slim-buster

ENV PYTHONUNBUFFERED 1

ENV PYTHONDONTWRITEBYTECODE 1

ARG SOURCE_TAG

ENV SOURCE_TAG=$SOURCE_TAG

RUN useradd --create-home --home-dir /code --shell /bin/bash app

USER app

WORKDIR /code

COPY --chown=app:app requirements.txt /code/

RUN pip3 install -r requirements.txt

COPY --chown=app:app blog /code/blog

COPY --chown=app:app core /code/core

COPY --chown=app:app build /code/build

COPY --chown=app:app manage.py .

ENV PYTHONPATH=$PYTHONPATH:/code

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]