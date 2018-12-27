// Copyright 2018, University of Colorado Boulder

/**
 * Intro screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  const fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  const IntroModel = require( 'FRACTIONS_COMMON/intro/model/IntroModel' );
  const IntroScreenView = require( 'FRACTIONS_COMMON/intro/view/IntroScreenView' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenIntroString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.intro' );

  class IntroScreen extends Screen {
    constructor() {
      super(
        () => new IntroModel( true ),
        model => new IntroScreenView( model ),
        {
          name: screenIntroString,
          backgroundColorProperty: FractionsCommonColorProfile.introScreenBackgroundProperty,
          homeScreenIcon: IntroScreenView.createMixedScreenIcon(),
          navigationBarIcon: IntroScreenView.createMixedScreenThumbnail()
        }
      );
    }
  }

  return fractionsMixedNumbers.register( 'IntroScreen', IntroScreen );
} );
