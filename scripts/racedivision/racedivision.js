$(document).ready(function() {
	$.getJSON('/data/racedivision/collegeList.json', function(data) {
		var series = []
		var highChartConfig = {
			chart: {
				polar: true,
				type: 'line'
			},
			title: {
				text: 'Race Division Ratio',
				x: -80
			},
			pane: {
				size: '80%'
			},
			xAxis: {
				categories: ['UGDS_WHITE', 'UGDS_BLACK', 'UGDS_HISP', 'UGDS_ASIAN', 'UGDS_AIAN', 'UGDS_NHPI', 'UGDS_2MOR', 'UGDS_NRA', 'UGDS_UNKN'],
				tickmarkPlacement: 'on',
				lineWidth: 0
			},
			yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				min: 0
			},
			tooltip: {
				shared: true,
				pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b><br/>'
			},
			legend: {
				align: 'right',
				verticalAlign: 'top',
				y: 70,
				layout: 'vertical'
			},
			series: [],
		}
		var racedivisionChart;
		async.forEachOfSeries(data, function(object, key, callback) {
			$.getJSON('/data/racedivision/' + object + '.json', function(data) {
				series.push({
					name: object,
					data: [parseFloat(data['2013']['UGDS_WHITE']), parseFloat(data['2013']['UGDS_BLACK']), parseFloat(data['2013']['UGDS_HISP']), parseFloat(data['2013']['UGDS_AIAN']), parseFloat(data['2013']['UGDS_NHPI']), parseFloat(data['2013']['UGDS_ASIAN']), parseFloat(data['2013']['UGDS_2MOR']), parseFloat(data['2013']['UGDS_NRA']), parseFloat(data['2013']['UGDS_UNKN'])],
					pointPlacement: 'on'
				})
				callback();
			}).fail(function(jqXHR, textStatus, errorThrown) {
				callback(textStatus)
			});
		}, function(error) {
			if (error) console.log(error)
			else {
				highChartConfig.series = series
				racedivisionChart = Highcharts.chart('racedivision', highChartConfig)
			}
		});
	});
});


// function raceBoxSelect() {

// }