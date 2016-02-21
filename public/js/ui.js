var _sys = {
    currentMap: "countries/us/us-all-all-highres",
    data: _data, // Replace this for dynamic data
    colorScales: [
        '#f1eef6',
        '#bdc9e1',
        '#74a9cf',
        '#2b8cbe',
        '#045a8d'
    ]
};


var countiesMap = Highcharts.geojson(Highcharts.maps[_sys.currentMap]),
    lines = Highcharts.geojson(Highcharts.maps[_sys.currentMap], 'mapline'),
    options;

// Add state acronym for tooltip
Highcharts.each(countiesMap, function (mapPoint) {
    mapPoint.name = mapPoint.name + ', ' + mapPoint.properties['hc-key'].substr(3, 2).toUpperCase();
});

options = {
    chart: {
        borderWidth: 0,
        marginRight: 50, // for the legend
        height: 520,
        backgroundColor: null
    },

    credits: {
        enabled: false
    },

    title: {
        text: ''
    },

    legend: {
        title: {
            text: 'Trend size',
            style: {
                color: 'black'
            }
        },
        layout: 'vertical',
        align: 'right',
        floating: true,
        valueDecimals: 0,
        valueSuffix: 'K hits',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        symbolRadius: 0,
        symbolHeight: 14
    },

    mapNavigation: {
        enabled: true
    },

    plotOptions: {
        mapline: {
            showInLegend: false,
            enableMouseTracking: false
        }
    },
    
    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 3,
            color: _sys.colorScales[0]
        }, {
            from: 3,
            to: 6,
            color: _sys.colorScales[1]
        }, {
            from: 6,
            to: 9,
            color: _sys.colorScales[2]
        }, {
            from: 9,
            to: 12,
            color: _sys.colorScales[3]
        }, {
            from: 12,
            color: _sys.colorScales[4]
        }]
    },

    series: [{
        mapData: countiesMap,
        data: _sys.data,
        joinBy: ['hc-key', 'code'],
        name: 'Trend size',
        tooltip: {
            valueSuffix: 'K hits'
        },
        borderWidth: 0.5,
        states: {
            hover: {
                color: '#ff9ae1'
            }
        }
    }, {
        type: 'mapline',
        name: 'State borders',
        data: [lines[0]],
        color: 'white'
    }, {
        type: 'mapline',
        name: 'Separator',
        data: [lines[1]],
        color: 'gray'
    }]
};

// Load the map
$('#map').highcharts('Map', options);
