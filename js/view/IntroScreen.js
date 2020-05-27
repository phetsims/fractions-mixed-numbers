// Copyright 2018-2020, University of Colorado Boulder

/**
 * Intro screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import IntroModel from '../../../fractions-common/js/intro/model/IntroModel.js';
import IntroScreenView from '../../../fractions-common/js/intro/view/IntroScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import fractionsMixedNumbers from '../fractionsMixedNumbers.js';
import fractionsMixedNumbersStrings from '../fractionsMixedNumbersStrings.js';

const screenIntroString = fractionsMixedNumbersStrings.screen.intro;

class IntroScreen extends Screen {
  constructor() {
    super(
      () => new IntroModel( true ),
      model => new IntroScreenView( model ),
      {
        name: screenIntroString,
        backgroundColorProperty: FractionsCommonColorProfile.introScreenBackgroundProperty,
        homeScreenIcon: new ScreenIcon( IntroScreenView.createMixedScreenIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        navigationBarIcon: new ScreenIcon( IntroScreenView.createMixedScreenThumbnail(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } )
      }
    );
  }
}

fractionsMixedNumbers.register( 'IntroScreen', IntroScreen );
export default IntroScreen;