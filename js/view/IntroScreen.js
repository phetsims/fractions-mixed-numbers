// Copyright 2017, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var Color = require( 'SCENERY/util/Color' );
  var fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  var inherit = require( 'PHET_CORE/inherit' );
  var IntroModel = require( 'FRACTIONS_COMMON/intro/model/IntroModel' );
  var IntroScreenView = require( 'FRACTIONS_COMMON/intro/view/IntroScreenView' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenIntroString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.intro' );

  /**
   * @constructor
   */
  function IntroScreen() {

    var options = {
      name: screenIntroString,
      backgroundColorProperty: new Property( Color.WHITE )
    };

    Screen.call( this,
      function() { return new IntroModel( true ); },
      function( model ) { return new IntroScreenView( model ); },
      options
    );
  }

  fractionsMixedNumbers.register( 'IntroScreen', IntroScreen );

  return inherit( Screen, IntroScreen );
} );
