// Copyright 2018, University of Colorado Boulder

/**
 * Game screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const BuildingGameModel = require( 'FRACTIONS_COMMON/game/model/BuildingGameModel' );
  const BuildingGameScreenView = require( 'FRACTIONS_COMMON/game/view/BuildingGameScreenView' );
  const FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  const fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenGameString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.game' );

  class GameScreen extends Screen {
    constructor() {
      super(
        () => new BuildingGameModel( true ),
        model => new BuildingGameScreenView( model ),
        {
          name: screenGameString,
          backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty,
          homeScreenIcon: BuildingGameScreenView.createMixedScreenIcon()
        }
      );
    }
  }

  return fractionsMixedNumbers.register( 'GameScreen', GameScreen );
} );
