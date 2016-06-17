exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	
	var def = $.Deferred();
	setTimeout(function() {
			def.resolve(value);
		}, 30);
	return def.promise();
	
  },

  manipulateRemoteData: function(url) {
  	var def = $.Deferred();

	$.getJSON('/data/testdata.json', function(data) {
		var names = [];
		$.map(data.people, function(item){
			names.push(item.name);
		});

		def.resolve(names.sort());
	});

	return def.promise();

  }
};
