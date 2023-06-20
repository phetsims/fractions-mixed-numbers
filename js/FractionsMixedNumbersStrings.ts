// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import fractionsMixedNumbers from './fractionsMixedNumbers.js';

type StringsType = {
  'fractions-mixed-numbers': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'intro': string;
    'introStringProperty': LocalizedStringProperty;
    'game': string;
    'gameStringProperty': LocalizedStringProperty;
    'lab': string;
    'labStringProperty': LocalizedStringProperty;
  }
};

const FractionsMixedNumbersStrings = getStringModule( 'FRACTIONS_MIXED_NUMBERS' ) as StringsType;

fractionsMixedNumbers.register( 'FractionsMixedNumbersStrings', FractionsMixedNumbersStrings );

export default FractionsMixedNumbersStrings;
