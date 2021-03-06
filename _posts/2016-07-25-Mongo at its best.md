---
layout: post
title: Mongo at its best
author: Shashank Kapoor
---
<div style="text-align:justify;">
If we were to start to use the good things about mongo, till the time we would be done, mongo community would have already launched a better version of it with new 30 to 40 features --intentionally exaggerating that--, and the process will start over again. At least that is what I am experiencing.
</div>

<br>

<div style="text-align:justify;">
I started my voyage with mongo in Feb 2016. Trust me, when you come from a background of SQL, you kinda think data in tables, tuples, and columns. But when it comes to Mongo --I don't know how other NoSQL systems like  <a href="http://cassandra.apache.org/">Cassandra</a> work--, there ain't any joins that you would have relied on. Initially, that was weird for me but later when I started using Mongo, I realised how good and important steps Mongo community has taken up to solve the problems of availability and speed. With SQL, you have to deal up with fucking master and slaves --hate that architecture, and no this is not a Mongo NoSQL user talking, this hatred goes back down to March-August 2015. You don't know when either of those two (master or slave) goes down and you have to deal with server admins and a long list of mail chain starts who was at fault. Mongo came up with a very elegant solution <a href="https://docs.mongodb.com/manual/replication/">'replica set'</a> to solve availability issue. You can launch 3 servers of Mongo having same data, all CRUD operations will happen in such a manner that response from these servers will be same -- not considering the 'Sharding' concept here. Okay,  problem solved, if one goes down another server is available to me, cool. But this increases redundancy, right? 3 servers same data, also, to add, there are no joins and to solve that I have to add internal documents. Wooah! that is daunting, right? Actually, it is not. Mongo community very cunningly hits two targets with the same bow. This architecture brings speed -- it's damn fast than MySQL. In the era of big data and reduction in storage cost, we can definitely trade off with redundancy. That is the first good thing I experienced in mongo; in fact two good things.
</div>
<br>

<div style="text-align:justify;">
Next thing, you would consider might be an issue with the mongo is that it has no schema. Mongo community had reasons why it did not enforce schema and validations at the first place; validations is now supported in Mongo 3.2. Mongo is referred as NoSQL database and why NoSQL emerged because SQL had fixed relational schema which was becoming a bottleneck to ever growing enterprise world. NoSQL solved this problem to a major extent. Obviously, there was still a need to have the schema because we don't want to change schema every day, schema change is growing but not at that pace. Open source community, came forward and produced some awesome tools like <a href="http://mongoosejs.com/">mongoose</a>(Nodejs), <a href="https://mongodb.github.io/casbah/">Cashbah</a>(java and scala), <a href="http://mongoengine.org/">MongoEngine</a>(Python) and much more. They provide you schema and validations. These tools do slow down traditional Mongo, but still benchmarking them with MySQL will still give a superior response --try it. Cool, isn't it?
</div>
<br>

<div style="text-align:justify;">
Next thing you might want to criticise, in mongo is querying language. This is something you might have enjoyed in SQL and feel too reluctant to leave it. Hold on, have you seen the query language of mongo. It is dammmmnnnn awesome. If you think I am talking about that jibberish map reduce framework of Mongo, no I am not. Aggregation framework is the new query language for mongo. You have complex queries, no issues, mongo has easy query language to solve that. The geospatial operators, date operators, grouping operators, projections, aggregation pipeline, versatile data type support, huh, I need water here. If you are lazy enough to learn it, no issues, <a href="http://www.querymongo.com/">here</a>.
</div>
<br>

<div style="text-align:justify;">
Hmm, now targeting the HDFS user. Ya, you have distributed database, but mongo, I guess, has the same distributed concept right? Please welcome Mongo Spark Connector --La-da-da-da-dah. It's the mother fuckin' D-O-double-G, thug life. Sorry for the exaggeration people. Actually, I don't know much about this. I am taking up a course on this. You can try it out [here](https://university.mongodb.com/courses/M233/about). Also, Elastic can also be added with Mongo, if you are into that; <a href="http://stackoverflow.com/questions/23846971/how-to-use-elasticsearch-with-mongodb">link</a>.
</div>

<br>
<div style="text-align:justify;">
Okay, that is impressive, but a change might be nearly there. For reference, there are people out there who have started leveraging GPUs and one such company is <a href="https://geospock.com/">GeoSpock</a>. Who knows what the future is, but the present is NoSQL and MongoDB is a part of it.
</div>
<br>
Cheers!!!!