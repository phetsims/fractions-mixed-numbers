// Copyright 2018, University of Colorado Boulder

/**
 * Lab screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const BuildingLabModel = require( 'FRACTIONS_COMMON/lab/model/BuildingLabModel' );
  const BuildingLabScreenView = require( 'FRACTIONS_COMMON/lab/view/BuildingLabScreenView' );
  const FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  const fractionsMixedNumbers = require( 'FRACTIONS_MIXED_NUMBERS/fractionsMixedNumbers' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenLabString = require( 'string!FRACTIONS_MIXED_NUMBERS/screen.lab' );

  class LabScreen extends Screen {
    constructor() {
      super(
        () => new BuildingLabModel( true ),
        model => new BuildingLabScreenView( model ),
        {
          name: screenLabString,
          backgroundColorProperty: FractionsCommonColorProfile.otherScreenBackgroundProperty,
          homeScreenIcon: BuildingLabScreenView.createMixedScreenIcon()
        }
      );
    }
  }

  return fractionsMixedNumbers.register( 'LabScreen', LabScreen );
} );
