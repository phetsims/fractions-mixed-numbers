// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const GameScreen = require( 'FRACTIONS_MIXED_NUMBERS/view/GameScreen' );
  const IntroScreen = require( 'FRACTIONS_MIXED_NUMBERS/view/IntroScreen' );
  const LabScreen = require( 'FRACTIONS_MIXED_NUMBERS/view/LabScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const fractionsMixedNumbersTitleString = require( 'string!FRACTIONS_MIXED_NUMBERS/fractions-mixed-numbers.title' );

  const simOptions = {
    credits: {
      leadDesign: 'Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson, Sam Reid, Martin Veillette',
      team: 'Mike Dubson, Trish Loeblein, Ariel Paul, Kathy Perkins, Vincent Davis, Michael Moorer, Dusty Cole',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( () => {
    const sim = new Sim( fractionsMixedNumbersTitleString, [
      new IntroScreen(),
      new GameScreen(),
      new LabScreen()
    ], simOptions );
    sim.start();
  } );
} );