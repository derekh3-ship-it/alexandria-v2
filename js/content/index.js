/**
 * Content Index
 * Aggregates all content modules into a single CONTENT export
 */

import { INTRO_CONTENT } from './intro.js';
import { ACT1_CONTENT } from './act1.js';
import { ACT2_NETWORK_CONTENT } from './act2-network.js';
import { ACT2_LIBRARY_CONTENT } from './act2-library.js';
import { ACT2_TEMPLE_CONTENT } from './act2-temple.js';
import { ACT2_CITY_CONTENT } from './act2-city.js';
import { ACT2_KYROS_CONTENT } from './act2-kyros.js';
import { ACT2_HUB_CONTENT } from './act2-hub.js';
import { ACT3_CONTENT } from './act3.js';
import { ACT4_CONTENT } from './act4.js';

export const CONTENT = {
    ...INTRO_CONTENT,
    ...ACT1_CONTENT,
    ...ACT2_NETWORK_CONTENT,
    ...ACT2_LIBRARY_CONTENT,
    ...ACT2_TEMPLE_CONTENT,
    ...ACT2_CITY_CONTENT,
    ...ACT2_KYROS_CONTENT,
    ...ACT2_HUB_CONTENT,
    ...ACT3_CONTENT,
    ...ACT4_CONTENT
};
