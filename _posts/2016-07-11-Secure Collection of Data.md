---
layout: post
title: Secure Collection of Data
author: Shashank Kapoor
---
<div style="text-align:justify;">
"We have to clean data first to find something out of it," we all have heard that maxim; and yes, that is right especially, in this era of NoSQL where there is no schema at all.  I am starting my data engineering at the point where I do have data --JSON Strings stored in MySQL database-- and I need to find analytics out of it. It turns out, cleaning of data removes a lot of data points which is daunting for me. So, being a data engineer, my first task should be to ensure you can work with the data provided. If not, take a stand go to your superiors and ask for revamps into new technologies. That is what I did as my first task. My job, being a data engineer, should be to make sure the data collected is in galore. If previously built APIs are not made nicely, it is time to change things.
</div>


<br>
<div style="text-align:justify;">
Currently, I am working on cloud based REST API which is just the beginning of the work. This is the API with which I communicate with the mobile front. Analytics engine is written in Scala and Spark which is decoupled from this API. This API is being made to collect data for the analytics engine. The technology stack on which this is built is NodeJS, RestifyJS, and MongoDB. For caching the data, I use Redis; it is damn fast. 
</div>
<br>
<div style="text-align:justify;">
The first thing, I cared about when I started building this data collection cloud API was Security and Schema. For schema, I quickly found out that it will change a lot as the project is in the nascent phase. So for that, I  gave all my worries to mongoose; excellent Schema handler for Mongo development. For security, the choice was obvious, Oauth2. It is a good framework, handling all access and permission requests. But for the safety, that is not enough. The front door of this API is handled by Amazon API gateway. I use three things provided by Amazon API gateway, which are traffic management, monitoring, and API version management. I could I have used access control also but, using access control of AWS was becoming a bottleneck in some of the cases and I wanted to host complete Oauth2 powered API so, I did not take that option. The tokens that I provide in the Oauth2 framework are JWT. With this, my API's heart and front door are ready. 
</div>
<br>
<div style="text-align:justify;">
The next thing I picked up was best practices. This <a href="http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api">excellent post</a> was helpful in that. The post has nicely organized points. Give it a read; you won't be disappointed.
</div>
<br>
<div style="text-align:justify;">
The reason, I choose nodeJS is because of its asynchronous nature. Also, the community is large. The development in this area is intense. Go to a npmJS website, and you will know what I am talking about here. A lot of things are already available as an NPM package, like request-validators, loggers, Jsonwebtokkens, etc. With that provided, I can care more about development. RestifyJS was also an <a href="https://raygun.com/blog/2015/03/node-performance-hapi-express-js-restify/">obvious choice</a>; because, I am making a REST API, I do not care about templating engines.
</div>
<br>
<div style="text-align:justify;">
With that, the API's development has kickstarted.
</div> 

