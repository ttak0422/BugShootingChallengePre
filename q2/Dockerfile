FROM ruby:2.3

ENV WORK_DIR /usr/src

WORKDIR $WORK_DIR

RUN apt-get update && \
    apt-get install && \
    echo 'gem: --no-document' >> ~/.gemrc && \
    gem install rails -v 5.1.6