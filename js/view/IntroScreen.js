// Copyright 2018, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  var fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  var inherit = require( 'PHET_CORE/inherit' );
  var IntroModel = require( 'FRACTIONS_COMMON/intro/model/IntroModel' );
  var IntroScreenView = require( 'FRACTIONS_COMMON/intro/view/IntroScreenView' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenIntroString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.intro' );

  /**
   * @constructor
   */
  function IntroScreen() {

    var options = {
      name: screenIntroString,
      backgroundColorProperty: FractionsCommonColorProfile.introScreenBackgroundProperty
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
