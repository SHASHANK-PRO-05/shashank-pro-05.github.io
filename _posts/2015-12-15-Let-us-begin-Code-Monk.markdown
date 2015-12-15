---
layout: post
title:  "Let us begin Code Monk"
date:   2015-12-15 19:18:53 +0530
categories: Code Monk
---
I have taken up Code Monk series of Hackerearth as my first task. You can also find this series [here][code-monk-link]. 

Honestly speaking, I had done the first two parts of the series earlier, but just to refreshen up, I did the two parts again. First two parts are easy like hell. Hackerearth has built this series in such a manner that you can learn to code from easy to advance level. I will give just a brief outline here, of what I did, as intelligence required to solve these problems is very less.

First things first, if you have just started competitive programming, make a boilerplate. If you want to avoid tedious tasks of declaring same stuff, make a boilerplate. I am a Java user and we all know how much prolixity is involved in Java coding. This will help you even if you are a Python or C++ user -- pardon me if I have not mentioned your weapon. If you want a boilerplate of Java, you can use my <a href="{{ site.baseurl }}/code/boilerplate-java">BoilerPlate-Java</a>. Right now this is a basic one. In future, it might change.

#Part 1(Sorting)
For the first three questions, you just need to know the basic sorting.
The first question is to sort an array in decreasing order. You can use merge sort or quick sort, or if you are good at them, try out Timsort.
The second question is specific to merge sort. It will just click you when you will try to solve the question. Go, try that on your own.
The third question is also specific to merge sort --too easy. The fourth question is not as easy as the other questions are. Priority queue knowledge is required for that. A priority queue is something which uses the concept of sorting. In "MonkintheGrassFields" start with finding the sum of all rows and all columns.
{% highlight ruby %}
for (int i = 0; i < n; i++) {
	for (int j = 0; j < n; j++) {
		arr[i][j] = nextInt();
		rSum[i] += arr[i][j];
		cSum[j] += arr[i][j];
	}
}
{% endhighlight %}
Where  cSum and rSum are Integer arrays, storing the sum of each row and each column. "arr" is a two-dimensional Integer array storing the weight of poison. Put the array data in a priority queue. 

{% highlight ruby %}
for (int i = 0; i < n; i++) {
	cDose.add(cSum[i]);
	rDose.add(rSum[i]);
}
{% endhighlight %}
Here cDose and rDose are two priority queues. Initially, we have added the given inputs rSum and cSum. We will poll this and check and increase the size of this priority queue to a kth element. By doing this what we are doing is that we are calculating the result of choosing all the rows or column in all k runs.
{% highlight ruby %}
Integer[] cResult = letsPollIt(cDose, n, k);
Integer[] rResult = letsPollIt(rDose, n, k);
{% endhighlight %}

By doing this what we are doing is that we are calculating the result of choosing all the rows or column in all k runs. Wait for it. It will be legendary.

{% highlight ruby %}
public static Integer[] letsPollIt(PriorityQueue<Integer> dose, int n, int k) {
	Integer[] result = new Integer[k + 1];
	result[0] = 0;
	for (int i = 1; i <= k; i++) {
		int temp = dose.poll();
		result[i] = result[i - 1] + temp;
		dose.add(temp + n);
	}
	return result;
}
{% endhighlight %}

Here comes the trick part. What we are going to do is that we are going to cover all possibilities of choosing different number or rows and a different number of columns. For example, if we choose c number of columns we will choose the (k - c) number of rows. Hey, that is what is asked right. We are just traversing all the possibilities for it. We can do that because inputs have short size. Now one problem is there. How to solve for that extra 1 added to every column if a row is updated and vice versa? See the trick below.

{% highlight ruby %}
int finalAnswer = Integer.MAX_VALUE;
for (int i = 0; i <= k; i++) {
	int j = k - i;
	finalAnswer = Math.min(finalAnswer, cResult[i] + rResult[j] + i * j);
}
{% endhighlight %}

See that (i*j), think carefully. We just added the remaining portion of dose to be updated. Then the final result is the minimum of all. There you go.

#Part 2(Array and Strings)
First two questions are very easy in this section. I am not going to discuss that here. Though in the 3rd question there is not much to discuss, I will give a brief description. What you do is you start with declaring a variable sum=0. You declare front=0 and rear=0. We will run a while loop till rear is not equal to array size, i.e. n. During this, we keep on adding arr[i] in sum. If we find sum=key we break, if it is greater we increment front and remove arr[front] from the sum, till sum is not less than the key. See the code below.

{% highlight ruby %}
int front = 0, rear = 0;
long sum = 0;
boolean result = false;
while (rear < n) {
	if (sum == x) {
		result = true;
		break;
	}
	if (front > rear) {
		rear = front;
	}
	sum=sum+arr[rear];
	while(sum>x){
	sum-=arr[front++];
	}
	rear++;
}
while(sum>x){
	sum-=arr[front++];
}
if (sum == x) {
	result = true;
}
{% endhighlight %}

Peace Man. See you in next post. Let me know if something is arcane here.

[code-monk-link]:https://www.hackerearth.com/codemonk/