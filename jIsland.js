;
(function (window, document, undefined) {
    var jIsland, _islands = {},
        queue = {},

        loadScript = function (uri, callback) {
            var script, cb;

            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = uri;

            cb = function () {
                if (typeof callback === "function") {
                    callback();
                }
            };

<<<<<<< HEAD
	wait = function ( cb, version ) {
		queue[version].push( cb );
	},

	ver_tmpl        = "{{ v }}",
    goog_cdn_jquery = "http://ajax.googleapis.com/ajax/libs/jquery/"+ ver_tmpl +"/jquery.min.js";

	jIsland = function ( version, cb ) {

		if ( typeof cb === "function" ) {

			if ( version in queue ) {
				wait( cb, version );
				return;
			}

			if ( version in _islands ) {
				cb( _islands[version] )
				return;	
			}

			loadIsland( version, cb );
			return;
		}

		return function ( func ) {
			jIsland( version, func );
		};

	};
=======
            if (script.readyState) { //IE
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        cb();
                    }
                };
            } else {
                script.onload = cb;
            }

            document.getElementsByTagName("head")[0].appendChild(script);
        },

        loadIsland = function (version, island) {
            queue[version] = [];

            loadScript(goog_cdn_jquery.replace(ver_tmpl, version), function () {
                _islands[version] = $.noConflict(true); // cache jQuery version
                island(_islands[version]);
                clearQueue(version);
            });
        },

        clearQueue = function (version) {
            var i = 0,
                len = queue[version].length;
            for (; i < len; i++) {
                queue[version][i](_islands[version]);
            }
            delete queue[version];
        },

        wait = function (cb, version) {
            queue[version].push(cb);
        },

        ver_tmpl = "{{ v }}",
        goog_cdn_jquery = "http://ajax.googleapis.com/ajax/libs/jquery/" + ver_tmpl + "/jquery.min.js";

    jIsland = function (version, cb) {

        if (typeof cb === "function") {

            if (version in queue) {
                wait(cb, version);
                return;
            }

            if (version in _islands) {
                cb(_islands[version])
                return;
            }

            loadIsland(version, cb);
            return;
        }
>>>>>>> e66190c820e51a2c7df57cb2f9e0b0d1948ce65e

        return function (func) {
            jIsland(version, func);
        };

    };

    jIsland.islands = _islands;
    jIsland.queue = queue;

    window.jIsland = jIsland;
}(window, document));
