exports.install = function (Vue, options) {
	Vue.prototype.formatStringRgx = function (param) {
		// console.log(param);
		let strList = param.substring(0, param.length - 9).split('-');
		let str = strList[0] + '/' + strList[1] + '/' + strList[2];
		// console.log(str);
		return str;
	};

	Vue.prototype.formatDateStringRgx = function (param) {
		// console.log(param);
		let strList = param.substring(0, param.length - 9).split('-');
		let str = strList[0] + '.' + strList[1] + '.' + strList[2];
		// console.log(str);
		return str;
	};

	Vue.prototype.formatDateTimeStringRgx = function (param) {
		console.log(param);
		if (param !== undefined) {
			let str = param.substring(0, param.length - 9);
			return str;
		}
	};
};