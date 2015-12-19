---
layout: post
title:  "You learn things on the go"
date:   2015-12-19 12:05:53 +0530
categories: jekyll update
---
Dude, if you are serious about competitive programming, you should follow this awesome <a href="https://www.hackerearth.com/notes/getting-started-with-the-sport-of-programming/">article</a>. It is a brief introduction if you are looking to dive into competitive programming. In IIT Kanpur, they start competitive programming from here. In my future blog post, I will cover this article also.

For your information, the boilerplate of Java code has been updated.
The importance of boilerplate in competitive programming in discussed in my previous article. The reason I have changed the boilerplate is because I have observed buffered stream is much faster than the scanner. My previous boilerplate also had the BufferedReader but in this <a href="{{ site.baseurl }}/code/boilerplate-java">boilerplate</a>, I am buffering only bytes, which is much faster than buffering integers or floats or strings. There is a Github <a href="https://gist.githubusercontent.com/pmcs/3659948/raw/5f482c64f3a8722966cec127d4ce55d289d98840/CopyBytes.java">repository</a> in which the code is there that tests the timing of buffer inputs.

Let us begin with the actual stuff which is Code Monk. This time, I will cover Searching and Stacks and Queues. Also, I will cover some extra questions that relate to the series. So let us dive in.

#Part 3(Searching)
Question one is Discover The Monk. It is a simple binary search question. Just apply the algorithm and you are good to go.

Monk's Encounter with Polynomial with the next problem. It is a little bit tricky if you have no prior experience of using binary search. Well, binary search is an awesome algorithm. Consider an array in which you have to find an element which occurs more than one time. Well, how you modify the binary search to accommodate such is by adding a small alteration. If you want to find the lower bound see the code below. 
{% highlight ruby %}
public static long bsearchLowerBound(long a, long b, long k) {
	long lo = 0, hi = 100000;
	long ans = 100001;
	while (lo <= hi) {
		long mid=(lo+hi)>>1;
		long cal=(a*mid*mid)+(b*mid);
		if(cal>=k){
			ans=mid;
			hi=mid-1;
		}
		else{
			lo=mid+1;
		}
	}
	return ans;
}
{% endhighlight %}
The above code is specific to the question. What I want to tell or rather show you that is how to change the change condition for high and low variables. What we do in the algorithm is that even though we have found the index --were our key resides, we do not stop looking into the array. If we want to find the lower bound, we keep on going in the left and if we want to find the upper bound we keep on looking in right until the low variable is greater than high variable. Once, you understand the above algorithm, the question is a piece of cake. We have A, B, C, and K. We keep on looking for the value of X in lower bound until:-
{% highlight ruby %}
A(X*X)+B(X)>=K-C
{%endhighlight%}
For high variable value choose hi=100000. It will cover the bounds given in the question.

Next question is also very easy that is The Old Monk --nice name :P.
In the question, there are two non-decreasing arrays. What we do in this is that we run a loop on the first array and we continue to search in the second array with the binary search algorithm. But in solution, we will search for the upper bound. In the second array if we have found an element greater than or equal to the key we search on right only. The reason is that we don't want J value less than what we have found. I am still not convinced with this solution. I am looking for something more efficient. 

{%highlight ruby%}
for (int i = 0; i < n; i++) {
	long res=bsearchUpperBound(b, a[i]);
	ans = Math.max(ans, res - i);
}
{%endhighlight%}

{%highlight ruby%}
public static int bsearchUpperBound(long[] arr, long key) {
	int low = 0, hi = arr.length - 1;
	int ans = -1;
	while (low <= hi) {
		int mid = (low + hi) / 2;
		if (arr[mid] >= key) {
			ans = mid;
			low = mid + 1;
		} else {
			hi = mid - 1;
		}
	}
	return ans;
}
{%endhighlight%}

Well, the fourth question is fun and tricky. I have two more questions of a similar kind. I will discuss them in next post. It would be a total disregard for the level of questions if I put them in this post.

Peace man. See you in next post.

