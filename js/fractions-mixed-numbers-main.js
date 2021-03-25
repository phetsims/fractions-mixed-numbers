// Copyright 2018-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import fractionsMixedNumbersStrings from './fractionsMixedNumbersStrings.js';
import GameScreen from './view/GameScreen.js';
import IntroScreen from './view/IntroScreen.js';
import LabScreen from './view/LabScreen.js';

const fractionsMixedNumbersTitleString = fractionsMixedNumbersStrings[ 'fractions-mixed-numbers' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amanda McGarry',
    softwareDevelopment: 'Jonathan Olson, Sam Reid, Martin Veillette',
    team: 'Mike Dubson, Trish Loeblein, Ariel Paul, Kathy Perkins, Vincent Davis, Michael Moorer, Dusty Cole',
    qualityAssurance: 'Steele Dalton, Megan Lai, Liam Mulhall, Laura Rea, Jacob Romero, Kathryn Woessner, and Kelly Wurtz',
    graphicArts: '',
    thanks: ''
  }
};

simLauncher.launch( () => {
  const sim = new Sim( fractionsMixedNumbersTitleString, [
    new IntroScreen(),
    new GameScreen(),
    new LabScreen()
  ], simOptions );
  sim.start();
} );