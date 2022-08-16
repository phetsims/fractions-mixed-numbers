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
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introProperty': TReadOnlyProperty<string>;
    'game': string;
    'gameProperty': TReadOnlyProperty<string>;
    'lab': string;
    'labProperty': TReadOnlyProperty<string>;
  }
};

const fractionsMixedNumbersStrings = getStringModule( 'FRACTIONS_MIXED_NUMBERS' ) as StringsType;

fractionsMixedNumbers.register( 'fractionsMixedNumbersStrings', fractionsMixedNumbersStrings );

export default fractionsMixedNumbersStrings;
