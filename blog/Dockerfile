FROM python:3.9.0-slim-buster as base

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

ARG SOURCE_TAG
ENV SOURCE_TAG=$SOURCE_TAG

RUN useradd --create-home --home-dir /code --shell /bin/bash app

WORKDIR /code

# Create a virtual environment and activate it
RUN python3 -m venv venv
RUN . venv/bin/activate

# Install the required packages in the virtual environment
ADD requirements.txt /code/
RUN pip3 install -r requirements.txt

FROM base AS prod

COPY . /code
RUN chown -R app:app /code
USER app

