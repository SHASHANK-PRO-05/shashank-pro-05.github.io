---
layout: post
title: Some Visualisations
author: Shashank Kapoor
---
<div style="text-align:justify;">
    I found an interesting data source from
    <a href="https://inventory.data.gov/dataset/032e19b4-5a90-41dc-83ff-6e4cd234f565/resource/38625c3d-5388-4c16-a30f-d105432553a4">data.gov</a>. So I have decided to make some visualizations based on the data. This page is going to iterate as I extract more and more insights from data. So stay tuned.
</div>



<div class="col-md-12">
    <div class="col-md-12">
        <h6>
            US College Cluster
        </h6>
        Some of the data is invalid. But anyways Zoom In!!!
        <div id="clusterMap" style="width: 100%; height: 400px;">
        </div>
    </div>
    <div class="col-md-12">
        <h6>
            Undergraduate enrollment trend(1996-2013)
        </h6>
        If something is zero then it does not mean no students were enrolled. It is just that no data is found. Also, I have added only few colleges as the list was very big. Use sliders and hover on circles.
        <div id="undergraduateTrend">
        </div>
    </div>
    <div class="col-md-12">
      <h6>Race Division Ratio(2013)</h6>
      <div class="col-md-12">
        <div>
        
        <div class="col-md-12" id="racedivision">
        </div>
      
    </div>
     <div class="col-md-12">
      <h6>Money Data(2013)</h6>
      TUITFTE: Tuition revenue per full-time equivalent student,<br>
      INEXPFTE: Instructional expenditures per FTE student,<br>
      AVGFACSAL: The average faculty salary
      <div class="col-md-12">
        <div>
        
        <div class="col-md-12" id="moneyData">
        </div>
      
    </div>
</div>
<style>


.ticks {
  font: 10px sans-serif;
}
 .d3-tip text {
    fill: #fff;
    font-size: 12px;
    stroke: none;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
.track,
.track-inset,
.track-overlay {
  stroke-linecap: round;
}

.track {
  stroke: #000;
  stroke-opacity: 0.3;
  stroke-width: 10px;
}

.track-inset {
  stroke: #ddd;
  stroke-width: 8px;
}

.track-overlay {
  pointer-events: stroke;
  stroke-width: 50px;
  cursor: crosshair;
}

.handle {
  fill: #fff;
  stroke: #000;
  stroke-opacity: 0.5;
  stroke-width: 1.25px;
}
</style>
<script src="https://d3js.org/d3.v4.min.js"></script>
<link rel="stylesheet" href="//rawgithub.com/Caged/d3-tip/master/examples/example-styles.css">
<script type="text/javascript" src="/lib/d3-tip/index.js"></script>
<script src="/lib/leaflet.markercluster/dist/leaflet.markercluster.js">
</script>
<script src="/scripts/visualisation.js" type="text/javascript">
</script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="/lib/async/dist/async.min.js" type="text/javascript" charset="utf-8" async defer></script>
<script src="/scripts/racedivision/racedivision.js" type="text/javascript" charset="utf-8" async defer></script>
