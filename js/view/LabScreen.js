// Copyright 2017, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var BuildingLabModel = require( 'FRACTIONS_COMMON/building/model/BuildingLabModel' );
  var BuildingLabScreenView = require( 'FRACTIONS_COMMON/building/view/BuildingLabScreenView' );
  var Color = require( 'SCENERY/util/Color' );
  var fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenLabString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.lab' );

  /**
   * @constructor
   */
  function LabScreen() {

    var options = {
      name: screenLabString,
      backgroundColorProperty: new Property( Color.WHITE )
    };

    Screen.call( this,
      function() { return new BuildingLabModel( true ); },
      function( model ) { return new BuildingLabScreenView( model ); },
      options
    );
  }

  fractionsMixedNumbers.register( 'LabScreen', LabScreen );

  return inherit( Screen, LabScreen );
} );
