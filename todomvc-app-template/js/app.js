(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var vm = new Vue({
		el: "#app",
		data: {
			list: [{
					text: '吃饭',
					status: true
				},
				{
					text: '睡觉',
					status: false
				},
				{
					text: '打豆豆',
					status: false
				}
			],
			newText: '',
			editList: '',
			listStaus: 'all'
		},

	})
})(window);
