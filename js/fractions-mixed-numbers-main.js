// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var IntroScreen = require( 'FRACTIONS_MIXED_NUMBERS/view/IntroScreen' );
  var GameScreen = require( 'FRACTIONS_MIXED_NUMBERS/view/GameScreen' );
  var LabScreen = require( 'FRACTIONS_MIXED_NUMBERS/view/LabScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var fractionsMixedNumbersTitleString = require( 'string!FRACTIONS_MIXED_NUMBERS/fractions-mixed-numbers.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( fractionsMixedNumbersTitleString, [
      new IntroScreen(),
      new GameScreen(),
      new LabScreen()
    ], simOptions );
    sim.start();
  } );
} );