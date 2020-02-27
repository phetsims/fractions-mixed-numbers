// Copyright 2018, University of Colorado Boulder

/**
 * Intro screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import IntroModel from '../../../fractions-common/js/intro/model/IntroModel.js';
import IntroScreenView from '../../../fractions-common/js/intro/view/IntroScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import fractionsMixedNumbersStrings from '../fractions-mixed-numbers-strings.js';
import fractionsMixedNumbers from '../fractionsMixedNumbers.js';

const screenIntroString = fractionsMixedNumbersStrings.screen.intro;

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

fractionsMixedNumbers.register( 'IntroScreen', IntroScreen );
export default IntroScreen;