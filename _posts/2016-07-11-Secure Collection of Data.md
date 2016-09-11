---
layout: post
title: Secure Collection of Data
author: Shashank Kapoor
---

"We have to clean data first to find something out of it", we all have heard that maxim ; and yes, that is true especially, in this era of NoSQL where there is no schema at all.  I am starting my data engineering at the point I do have data --JSON Strings stored in MySQL database-- and I need to find analytics out of it. Turns out, cleaning of data removes a lot of data points which is daunting for me. So, being a data engineer my first task should be to ensure you can work with the data provided. If not, take a stand go to your superiors and ask for revamps into new technologies. That is what I did as my first task. My job, being a data engineer, should be to make sure the data collected is in galore. If previously build APIs are not built nicely, it is time to change things.

Currently, I am working on cloud based REST API which is just the beginning of the work. This is the API with which I communicate with the mobile front. Analytics engine is written in scala and spark which is decoupled from this API. This API is being made collect data for the analytics engine. The technology stack on which this is built is NodeJS, Restify, MongoDB.
