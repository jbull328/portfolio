let streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "ProfessorBroman", "lumpytv", "StreamerHouse"];

var krakenUrl = 'https://api.twitch.tv/kraken/streams/?channel=';

function loadData() {

	$.ajax({
			url: krakenUrl + streamers.join(','),
			type: 'get',
			datatype: 'jsonp',
			success: function(data) {
				console.log(data);

				for (var i = 0, len = data.streams.length; i < len; i++) {
					var sName = data['streams'][i]['channel']['display_name'];
					var sStatus = data['streams'][i]['channel']['status'];
					var sLink = 'http://twitch.tv/';
					var sBanner = data['streams'][i]['channel']['video_banner'];



			if (sBanner == null) {
				$("#loadIn").append('<div class="panel onlineStreamer panel-default"><div class="panel-heading"><a href="' + sLink + sName + '" target="_blank" class="btn btn-default btn-sm pull-right">View Stream</a><h5>' + sName + '</h5></button></div><div class="panel-body">' + sStatus + '<div class="glyphicon glyphicon-facetime-video pull-right"></div></div>');
			} else {
				$("#loadIn").append('<div class="panel onlineStreamer panel-default"><div class="panel-heading"><a href="' + sLink + sName + '" target="_blank" class="btn btn-default btn-sm pull-right">View Stream</a><h5>' + sName + '</h5></button></div><div class="panel-body">' + sStatus + '<img src="' + sBanner + '"' + 'class="img-responsive pull-right"></div></div>');
			}

		}

						//----------------------------------------------------------------
						//add all streamers that are offline to the streamsOffline Array
					//----------------------------------------------------------------

					//Offline Streams
					function offlineTest(streamers) {
						if (sName.indexOf(streamers) == -1) {
								return true;
							} else {
								return false;
						}
					}

				var streamsOffline = streamers.filter(offlineTest);
					console.log(streamsOffline);


		for (var j = 0; j < streamsOffline.length; j++) {
			var sName = streamsOffline[j];
			var sLink = 'http://twitch.tv/';

			$("#loadIn").append('<div class="panel offlineStreamer panel-default"><div class="panel-heading"><a href="' + sLink + sName + '" target="_blank" class="btn btn-default btn-sm pull-right">View Videos</a><h5>' + sName + '</h5></button></div><div class="panel-body">Offline<div class="glyphicon glyphicon-ban-circle pull-right"></div></div>');
		}
	}
});
};

//-------------------------------------------------------
//Button functions
//-------------------------------------------------------

$(document).ready(loadData);
	setTimeout(function(){ loadData; }, 20000);

$('#all').click(function() {


		$(".onlineStreamer").show();
	$(".offlineStreamer").show();
});


$('#online').click(function() {

	//$(loadData);
	$(".onlineStreamer").show();
	$(".offlineStreamer").hide();
});


$('#offline').click(function() {


	$(".offlineStreamer").show();
	$(".onlineStreamer").hide();
});


$("navbar-brand").onHover()
//<i class="fa fa-code" aria-hidden="true"></i>
