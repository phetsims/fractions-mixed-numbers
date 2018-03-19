// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  var FractionsMixedNumbersModel = require( 'FRACTIONS_MIXED_NUMBERS/fractions-mixed-numbers/model/FractionsMixedNumbersModel' );
  var FractionsMixedNumbersScreenView = require( 'FRACTIONS_MIXED_NUMBERS/fractions-mixed-numbers/view/FractionsMixedNumbersScreenView' );

  /**
   * @constructor
   */
  function FractionsMixedNumbersScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new FractionsMixedNumbersModel(); },
      function( model ) { return new FractionsMixedNumbersScreenView( model ); },
      options
    );
  }

  fractionsMixedNumbers.register( 'FractionsMixedNumbersScreen', FractionsMixedNumbersScreen );

  return inherit( Screen, FractionsMixedNumbersScreen );
} );