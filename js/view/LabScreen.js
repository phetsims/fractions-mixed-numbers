// Copyright 2018, University of Colorado Boulder

/**
 * Lab screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import BuildingLabModel from '../../../fractions-common/js/lab/model/BuildingLabModel.js';
import BuildingLabScreenView from '../../../fractions-common/js/lab/view/BuildingLabScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import fractionsMixedNumbersStrings from '../fractions-mixed-numbers-strings.js';
import fractionsMixedNumbers from '../fractionsMixedNumbers.js';

const screenLabString = fractionsMixedNumbersStrings.screen.lab;

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

fractionsMixedNumbers.register( 'LabScreen', LabScreen );
export default LabScreen;