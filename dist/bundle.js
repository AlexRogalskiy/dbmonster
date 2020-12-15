function renderMainFragment ( root, component, target ) {
	var table = document.createElement( 'table' );
	table.className = "table table-striped latest-data";
	
	var tbody = document.createElement( 'tbody' );
	
	var eachBlock_0_anchor = document.createComment( "#each dbs" );
	tbody.appendChild( eachBlock_0_anchor );
	
	var eachBlock_0_value = root.dbs;
	var eachBlock_0_fragment = document.createDocumentFragment();
	var eachBlock_0_iterations = [];
	
	for ( var i = 0; i < eachBlock_0_value.length; i += 1 ) {
		eachBlock_0_iterations[i] = renderEachBlock_0( root, eachBlock_0_value, eachBlock_0_value[i], i, component, eachBlock_0_fragment );
	}
	
	eachBlock_0_anchor.parentNode.insertBefore( eachBlock_0_fragment, eachBlock_0_anchor );
	
	table.appendChild( tbody );
	
	target.appendChild( table );

	return {
		update: function ( changed, root ) {
			var eachBlock_0_value = root.dbs;
			
			for ( var i = 0; i < eachBlock_0_value.length; i += 1 ) {
				if ( !eachBlock_0_iterations[i] ) {
					eachBlock_0_iterations[i] = renderEachBlock_0( root, eachBlock_0_value, eachBlock_0_value[i], i, component, eachBlock_0_fragment );
				} else {
					eachBlock_0_iterations[i].update( changed, root, eachBlock_0_value, eachBlock_0_value[i], i );
				}
			}
			
			for ( var i = eachBlock_0_value.length; i < eachBlock_0_iterations.length; i += 1 ) {
				eachBlock_0_iterations[i].teardown( true );
			}
			
			eachBlock_0_anchor.parentNode.insertBefore( eachBlock_0_fragment, eachBlock_0_anchor );
			eachBlock_0_iterations.length = eachBlock_0_value.length;
		},

		teardown: function ( detach ) {
			if ( detach ) table.parentNode.removeChild( table );
			
			
			
			for ( let i = 0; i < eachBlock_0_iterations.length; i += 1 ) {
				eachBlock_0_iterations[i].teardown( detach );
			}
			
			if ( detach ) eachBlock_0_anchor.parentNode.removeChild( eachBlock_0_anchor );
		}
	};
}

function renderEachBlock_0 ( root, eachBlock_0_value, db, db__index, component, target ) {
	var tr = document.createElement( 'tr' );
	
	var td = document.createElement( 'td' );
	td.className = "dbname";
	
	var text = document.createTextNode( db.dbname );
	td.appendChild( text );
	
	tr.appendChild( td );
	
	var text1 = document.createTextNode( "\r\n\r\n      " );
	tr.appendChild( text1 );
	
	var td1 = document.createElement( 'td' );
	td1.className = "query-count";
	
	var span = document.createElement( 'span' );
	span.className = db.lastSample.countClassName;
	
	var text2 = document.createTextNode( db.lastSample.nbQueries );
	span.appendChild( text2 );
	
	td1.appendChild( span );
	
	tr.appendChild( td1 );
	
	var text3 = document.createTextNode( "\r\n\r\n      " );
	tr.appendChild( text3 );
	
	var eachBlock_1_anchor = document.createComment( "#each db.lastSample.topFiveQueries" );
	tr.appendChild( eachBlock_1_anchor );
	
	var eachBlock_1_value = db.lastSample.topFiveQueries;
	var eachBlock_1_fragment = document.createDocumentFragment();
	var eachBlock_1_iterations = [];
	
	for ( var i = 0; i < eachBlock_1_value.length; i += 1 ) {
		eachBlock_1_iterations[i] = renderEachBlock_1( root, eachBlock_0_value, db, db__index, eachBlock_1_value, eachBlock_1_value[i], i, component, eachBlock_1_fragment );
	}
	
	eachBlock_1_anchor.parentNode.insertBefore( eachBlock_1_fragment, eachBlock_1_anchor );
	
	target.appendChild( tr );

	return {
		update: function ( changed, root, eachBlock_0_value, db, db__index ) {
			var db = eachBlock_0_value[db__index];
			
			text.data = db.dbname;
			
			span.className = db.lastSample.countClassName;
			
			text2.data = db.lastSample.nbQueries;
			
			var eachBlock_1_value = db.lastSample.topFiveQueries;
			
			for ( var i = 0; i < eachBlock_1_value.length; i += 1 ) {
				if ( !eachBlock_1_iterations[i] ) {
					eachBlock_1_iterations[i] = renderEachBlock_1( root, eachBlock_0_value, db, db__index, eachBlock_1_value, eachBlock_1_value[i], i, component, eachBlock_1_fragment );
				} else {
					eachBlock_1_iterations[i].update( changed, root, eachBlock_0_value, db, db__index, eachBlock_1_value, eachBlock_1_value[i], i );
				}
			}
			
			for ( var i = eachBlock_1_value.length; i < eachBlock_1_iterations.length; i += 1 ) {
				eachBlock_1_iterations[i].teardown( true );
			}
			
			eachBlock_1_anchor.parentNode.insertBefore( eachBlock_1_fragment, eachBlock_1_anchor );
			eachBlock_1_iterations.length = eachBlock_1_value.length;
		},

		teardown: function ( detach ) {
			if ( detach ) tr.parentNode.removeChild( tr );
			
			
			
			text1.parentNode.removeChild( text1 );
			
			
			
			
			
			text3.parentNode.removeChild( text3 );
			
			for ( let i = 0; i < eachBlock_1_iterations.length; i += 1 ) {
				eachBlock_1_iterations[i].teardown( detach );
			}
			
			if ( detach ) eachBlock_1_anchor.parentNode.removeChild( eachBlock_1_anchor );
		}
	};
}

function renderEachBlock_1 ( root, eachBlock_0_value, db, db__index, eachBlock_1_value, query, query__index, component, target ) {
	var td = document.createElement( 'td' );
	td.className = "Query " + ( root.elapsedClassName );
	
	var text = document.createTextNode( query.formatElapsed );
	td.appendChild( text );
	
	var text1 = document.createTextNode( "\r\n          " );
	td.appendChild( text1 );
	
	var div = document.createElement( 'div' );
	div.className = "popover left";
	
	var div1 = document.createElement( 'div' );
	div1.className = "popover-content";
	
	var text2 = document.createTextNode( query.query );
	div1.appendChild( text2 );
	
	div.appendChild( div1 );
	
	var text3 = document.createTextNode( "\r\n            " );
	div.appendChild( text3 );
	
	var div2 = document.createElement( 'div' );
	div2.className = "arrow";
	
	div.appendChild( div2 );
	
	td.appendChild( div );
	
	target.appendChild( td );

	return {
		update: function ( changed, root, eachBlock_0_value, db, db__index, eachBlock_1_value, query, query__index ) {
			var db = eachBlock_0_value[db__index];
			var query = eachBlock_1_value[query__index];
			
			td.className = "Query " + ( root.elapsedClassName );
			
			text.data = query.formatElapsed;
			
			text2.data = query.query;
		},

		teardown: function ( detach ) {
			if ( detach ) td.parentNode.removeChild( td );
			
			text1.parentNode.removeChild( text1 );
			
			
			
			
			
			text3.parentNode.removeChild( text3 );
			
			
		}
	};
}

function Table ( options ) {
	var component = this;
	var state = options.data || {};

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( const key in group ) {
			if ( !( key in newState ) ) continue;

			const newValue = newState[ key ];
			const oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			const callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( let i = 0; i < callbacks.length; i += 1 ) {
				const callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return state[ key ];
	};

	this.set = function set ( newState ) {
		const oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this.observe = function ( key, callback, options = {} ) {
		const group = options.defer ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel () {
				const index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		const handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				const index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	var mainFragment = renderMainFragment( state, this, options.target );
}

perfMonitor.startFPSMonitor();
perfMonitor.startMemMonitor();
perfMonitor.initProfiler('view update');

const table = new Table({
	target: document.querySelector( '#body' ),
	data: {
		dbs: ENV.generateData().toArray()
	}
});

function redraw() {
	perfMonitor.startProfile('view update');
	table.set({ dbs: ENV.generateData().toArray() });
	perfMonitor.endProfile('view update');
	setTimeout(redraw, ENV.timeout);
}

redraw();
//# sourceMappingURL=bundle.js.map
