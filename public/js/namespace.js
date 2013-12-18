(function(global) {
	function namespace(path, parent) {
		var pathElements = path.split(".");
		return createPackage(pathElements);
	}
	
	function isFunction(fn) {
		return typeof fn == "function"; 
	}
	
	function nameToObject(objectName) {
		if(typeof objectName == "string") {
			var pathElements = objectName.split(".");
			var obj = global;
			for(var i = 0; i < pathElements.length; i++) {
				if(obj[pathElements[i]]) {
					obj = obj[pathElements[i]];
				} else {
					return undefined;
				}
			}
			return obj;
		}
		return undefined;
	}
	
	function createPackage(pathElements) {
		var parent = global;
	
		for(var i = 0; i < pathElements.length; i ++) {
			var pathElement = pathElements[i];
			var child = parent[pathElement];
			if(!child && typeof child != "object" && typeof child != "function") {
				parent[pathElement] = {}; 
			}
			parent = parent[pathElement];
		}
		return parent;
	}
	
	function define(options) {
		if(options && options.className) {
			var fullName = options.className;
			var pathElements = fullName.split(".");
			var clazz = pathElements.pop();
			var namespace = createPackage(pathElements); 
			var initializer = null;
			var superClass = null;
			if(isFunction(options.initialize)) {
				initializer = options.initialize;
			}
			if(options.extend) {
				superClass = isFunction(options.extend) ? options.extend : (nameToObject(options.extend)); 
			}
			namespace[clazz] = function() {
				if(superClass) {
					superClass.apply(this, arguments);
				}
				if(initializer) {
					initializer.apply(this, arguments);
				};
			};
			if(superClass) {
				$.extend(namespace[clazz].prototype, superClass.prototype);
			}
			if(options.implement && typeof options.implement == "object") {
				$.extend(namespace[clazz].prototype, options.implement);
			}
			return namespace[clazz];
		}
		throw new Error("illegal parameters, no class name specified");
	}

	//export functions
	global.namespace = namespace;
	global.define = define;
	
})(this);