// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import fractionsMixedNumbers from './fractionsMixedNumbers.js';

type StringsType = {
  'fractions-mixed-numbers': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introStringProperty': TReadOnlyProperty<string>;
    'game': string;
    'gameStringProperty': TReadOnlyProperty<string>;
    'lab': string;
    'labStringProperty': TReadOnlyProperty<string>;
  }
};

const FractionsMixedNumbersStrings = getStringModule( 'FRACTIONS_MIXED_NUMBERS' ) as StringsType;

fractionsMixedNumbers.register( 'FractionsMixedNumbersStrings', FractionsMixedNumbersStrings );

export default FractionsMixedNumbersStrings;