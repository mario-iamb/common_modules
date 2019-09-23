function OnClickEvent (){
	console.log('on click function');

	var placeHolderElement = document.querySelector('.cs-placeholder');
	var placeHolderValue = placeHolderElement.innerHTML;

	if (placeHolderValue == 'France') {
		placeHolderElement.classList = '';
		placeHolderElement.classList.add('cs-placeholder', 'country-fr');
	}

	else if (placeHolderValue == 'England') {
		placeHolderElement.classList = '';
		placeHolderElement.classList.add('cs-placeholder', 'country-en');
	}

	else if (placeHolderValue == 'Scotland') {
		placeHolderElement.classList = '';
		placeHolderElement.classList.add('cs-placeholder', 'country-sc');
	}

	else if (placeHolderValue == 'Belgium') {
		placeHolderElement.classList = '';
		placeHolderElement.classList.add('cs-placeholder', 'country-be');
	}

	else if (placeHolderValue == 'Netherlands') {
		placeHolderElement.classList = '';
		placeHolderElement.classList.add('cs-placeholder', 'country-nl');
	}

	else if (placeHolderValue == 'Ireland') {
		placeHolderElement.classList = '';
		placeHolderElement.classList.add('cs-placeholder', 'country-ir');
	}
};



( function( window ) {
	
	'use strict';

	var classie = require('../libraries/plugins/classie.js');

	

	function hasParent( e, p ) {
		if (!e) return false;
		var el = e.target||e.srcElement||e||false;
		while (el && el != p) {
			el = el.parentNode||false;
		}
		return (el!==false);
	};
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * SelectFx function
	 */
	function SelectFx( el, options ) {	
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * SelectFx options
	 */
	SelectFx.prototype.options = {
		// if true all the links will open in a new tab.
		// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
		newTab : true,
		// when opening the select element, the default placeholder (if any) is shown
		stickyPlaceholder : true,
		// callback when changing the value
		onChange : function( val ) { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	SelectFx.prototype._init = function() {
		// check if we are using a placeholder for the native select box
		// we assume the placeholder is disabled and selected by default
		var selectedOpt = this.el.querySelector( 'option[selected]' );
		this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

		// get selected option (either the first option with attr selected or just the first option)
		this.selectedOpt = selectedOpt || this.el.querySelector( 'option' );

		// create structure
		this._createSelectEl();

		// all options
		this.selOpts = [].slice.call( this.selEl.querySelectorAll( 'li[data-option]' ) );
		
		// total options
		this.selOptsCount = this.selOpts.length;
		
		// current index
		this.current = this.selOpts.indexOf( this.selEl.querySelector( 'li.cs-selected' ) ) || -1;
		
		// placeholder elem
		this.selPlaceholder = this.selEl.querySelector( 'span.cs-placeholder' );

		// init events
		this._initEvents();
	}

	/**
	 * creates the structure for the select element
	 */
	SelectFx.prototype._createSelectEl = function() {
		var self = this, options = '', createOptionHTML = function(el) {
			var optclass = '', classes = '', link = '';

			if( el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder ) {
				classes += 'cs-selected ';
				this.foundSelected = true;
			}

			if( el.getAttribute( 'data-class' ) ) {
				classes += el.getAttribute( 'data-class' );
			}

			if( el.getAttribute( 'data-link' ) ) {
				link = 'data-link=' + el.getAttribute( 'data-link' );
			}

			if( classes !== '' ) {
				optclass = 'class="' + classes + '" ';
			}

			return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
		};

		[].slice.call( this.el.children ).forEach( function(el) {
			if( el.disabled ) { return; }

			var tag = el.tagName.toLowerCase();

			if( tag === 'option' ) {
				options += createOptionHTML(el);
			}
			else if( tag === 'optgroup' ) {
				options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
				[].slice.call( el.children ).forEach( function(opt) {
					options += createOptionHTML(opt);
				} );
				options += '</ul></li>';
			}
		} );

		var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
		this.selEl = document.createElement( 'div' );
		this.selEl.className = this.el.className;
		this.selEl.tabIndex = this.el.tabIndex;
		this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
		this.el.parentNode.appendChild( this.selEl );
		this.selEl.appendChild( this.el );
	}

	SelectFx.prototype._initEvents = function() {
		var self = this;

		this.selPlaceholder.addEventListener( 'click', function() {
			self._toggleSelect();
		} );

		this.selOpts.forEach( function(opt, idx) {
			opt.addEventListener( 'click', function() {
				self.current = idx;
				self._changeOption();
				self._toggleSelect();
				OnClickEvent();
				document.querySelector('.cs-placeholder').innerHTML = ' ';
			} );
		} );

		document.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( self._isOpen() && target !== self.selEl && !hasParent( target, self.selEl ) ) {
				self._toggleSelect();
			}
		} );

		this.selEl.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;

			switch (keyCode) {
				case 38:
					ev.preventDefault();
					self._navigateOpts('prev');
					break;
				case 40:
					ev.preventDefault();
					self._navigateOpts('next');
					break;
				case 32:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
					}
					self._toggleSelect();
					break;
				case 13:
					ev.preventDefault();
					if( self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1 ) {
						self._changeOption();
						self._toggleSelect();
					}
					break;
				case 27:
					ev.preventDefault();
					if( self._isOpen() ) {
						self._toggleSelect();
					}
					break;
			}
		} );
	}

	SelectFx.prototype._navigateOpts = function(dir) {
		if( !this._isOpen() ) {
			this._toggleSelect();
		}

		var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
		
		if( dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1 ) {
			this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
			this._removeFocus();
			classie.add( this.selOpts[this.preSelCurrent], 'cs-focus' );
		}
	}

	SelectFx.prototype._toggleSelect = function() {
		this._removeFocus();
		
		if( this._isOpen() ) {
			if( this.current !== -1 ) {
				this.selPlaceholder.textContent = this.selOpts[ this.current ].textContent;
			}
			classie.remove( this.selEl, 'cs-active' );
		}
		else {
			if( this.hasDefaultPlaceholder && this.options.stickyPlaceholder ) {
				this.selPlaceholder.textContent = this.selectedOpt.textContent;
			}
			classie.add( this.selEl, 'cs-active' );
		}
	}

	SelectFx.prototype._changeOption = function() {
		if( typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ) {
			this.current = this.preSelCurrent;
			this.preSelCurrent = -1;
		}

		var opt = this.selOpts[ this.current ];

		this.selPlaceholder.textContent = opt.textContent;
		
		this.el.value = opt.getAttribute( 'data-value' );

		var oldOpt = this.selEl.querySelector( 'li.cs-selected' );
		if( oldOpt ) {
			classie.remove( oldOpt, 'cs-selected' );
		}
		classie.add( opt, 'cs-selected' );

		if( opt.getAttribute( 'data-link' ) ) {
			if( this.options.newTab ) {
				window.open( opt.getAttribute( 'data-link' ), '_blank' );
			}
			else {
				window.location = opt.getAttribute( 'data-link' );
			}
		}

		this.options.onChange( this.el.value );
	}

	SelectFx.prototype._isOpen = function(opt) {
		return classie.has( this.selEl, 'cs-active' );
	}

	SelectFx.prototype._removeFocus = function(opt) {
		var focusEl = this.selEl.querySelector( 'li.cs-focus' )
		if( focusEl ) {
			classie.remove( focusEl, 'cs-focus' );
		}
	}

	window.SelectFx = SelectFx;


} )( window );




(function() {
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );

	OnClickEvent ();
	document.querySelector('.cs-placeholder').innerHTML = ' ';

	

})();
