// Copyright 2017, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var BuildingGameModel = require( 'FRACTIONS_COMMON/game/model/BuildingGameModel' );
  var BuildingGameScreenView = require( 'FRACTIONS_COMMON/game/view/BuildingGameScreenView' );
  var FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  var fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenGameString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.game' );

  /**
   * @constructor
   */
  function GameScreen() {

    var options = {
      name: screenGameString,
      backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty
    };

    Screen.call( this,
      function() { return new BuildingGameModel( true ); },
      function( model ) { return new BuildingGameScreenView( model ); },
      options
    );
  }

  fractionsMixedNumbers.register( 'GameScreen', GameScreen );

  return inherit( Screen, GameScreen );
} );
