// Copyright 2018, University of Colorado Boulder

/**
 * Game screen for Fractions: Mixed Numbers
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import BuildingGameModel from '../../../fractions-common/js/game/model/BuildingGameModel.js';
import BuildingGameScreenView from '../../../fractions-common/js/game/view/BuildingGameScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import fractionsMixedNumbersStrings from '../fractions-mixed-numbers-strings.js';
import fractionsMixedNumbers from '../fractionsMixedNumbers.js';

const screenGameString = fractionsMixedNumbersStrings.screen.game;

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

fractionsMixedNumbers.register( 'GameScreen', GameScreen );
export default GameScreen;