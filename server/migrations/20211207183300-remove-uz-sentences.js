'use strict';

// https://discourse.mozilla.org/t/sentence-collector-need-help-to-remove/88934

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      DELETE FROM Sentences
      WHERE localeId="uz" AND id IN (
        10171383,
        10171383,
        10167590,
        10166763,
        10167075,
        10139183,
        10139443,
        10137635,
        10137636,
        10137850,
        10137851,
        10137857,
        10115446,
        10066289,
        10066290,
        10004171,
        10004208,
        10004218,
        10003714,
        10003087,
        10002786,
        10002839,
        10002569,
        10002570,
        10002571,
        10002594,
        10002595,
        10002596,
        10002604,
        10002664,
        10002337,
        10002369,
        10002377,
        10002378,
        10002380,
        10002449,
        10002478,
        10002479,
        10002529,
        10002087,
        10001378,
        10001696,
        10001697,
        10001724,
        10001726,
        10001790,
        9993669,
        9993731,
        9993735,
        9993753,
        9993796,
        9993178,
        9993193,
        9993237,
        9993267,
        9986289,
        9986290,
        9986476,
        9985470,
        9985604,
        9985771,
        9985194,
        9981263,
        9981264,
        9981268,
        9981270,
        9981345,
        9981346,
        9981347,
        9981348,
        9981349,
        9981350,
        9981362,
        9981383,
        9980445,
        9980489,
        9979956,
        9979957,
        9980113,
        9980114,
        9979740,
        9979741,
        9979378,
        9978714,
        9962645,
        9962541,
        9958389,
        9954024,
        9954061,
        9954086,
        9954105,
        9954109,
        9954109,
        9954122,
        9954122,
        9954123,
        9954124,
        9954125,
        9954125,
        9954126,
        9954126,
        9954130,
        9954142,
        9954143,
        9954144,
        9954145,
        9954146,
        9954155,
        9954158,
        9954169,
        9954170,
        9954171,
        9954216,
        9954249,
        9954251,
        9954257,
        9954279,
        9954297,
        9954310,
        9954311,
        9954312,
        9954313,
        9954337,
        9954350,
        9954383,
        9954384,
        9954385,
        9954391,
        9954395,
        9954469,
        9954520,
        9954531,
        9954546,
        9954563,
        9954721,
        9954781,
        9954783,
        9954812,
        9954838,
        9954840,
        9954880,
        9954931,
        9954932,
        9954936,
        9954947,
        9954956,
        9954967,
        9954969,
        9954970,
        9954971,
        9954985,
        9947177,
        9947188,
        9929327,
        9916865,
        9916867,
        9911789,
        9911847,
        9907251,
        9907281,
        9906051,
        9906056,
        9906093,
        9906110,
        9906121,
        9906132,
        9906177,
        9906225,
        9906243,
        9906350,
        9906417,
        9906590,
        9906766,
        9906875,
        9906977,
        9907102,
        9907127,
        9905841,
        9905853,
        9905857,
        9905861,
        9905919,
        9905923,
        9893853,
        9893854,
        9893855,
        9893885,
        9893138,
        9893140,
        9893156,
        9893167,
        9893188,
        9893270,
        9893374,
        9893534,
        9893588,
        9892411,
        9878576,
        9877130,
        9877131,
        9876687,
        9869717,
        9868326,
        9868328,
        9868329,
        9868331,
        9868332,
        9868334,
        9868336,
        9868338,
        9868339,
        9868340,
        9868343,
        9868346,
        9868353,
        9868356,
        9868357,
        9868361,
        9868362,
        9868363,
        9868364,
        9868365,
        9868368,
        9868369,
        9868370,
        9868371,
        9868372,
        9868373,
        9868374,
        9868375,
        9868377,
        9868379,
        9868380,
        9868382,
        9868385,
        9868388,
        9868389,
        9868390,
        9868392,
        9868394,
        9868395,
        9868398,
        9868399,
        9868401,
        9868402,
        9868404,
        9868405,
        9868406,
        9868408,
        9868410,
        9868411,
        9868412,
        9868413,
        9868417,
        9868419,
        9868420,
        9868421,
        9868422,
        9868427,
        9868430,
        9868436,
        9868438,
        9868439,
        9868443,
        9868444,
        9868446,
        9868448,
        9868449,
        9868453,
        9868454,
        9868455,
        9868456,
        9868459,
        9868460,
        9868464,
        9868466,
        9868468,
        9868469,
        9868470,
        9868471,
        9868472,
        9868474,
        9868475,
        9868476,
        9868477,
        9868478,
        9868480,
        9868483,
        9868485,
        9868487,
        9868488,
        9868492,
        9868494,
        9868496,
        9868497,
        9868499,
        9868501,
        9868502,
        9868504,
        9868506,
        9868507,
        9868508,
        9868511,
        9868513,
        9868517,
        9868518,
        9868524,
        9868525,
        9868528,
        9868530,
        9868532,
        9868533,
        9868534,
        9868535,
        9868536,
        9868537,
        9868542,
        9868544,
        9868547,
        9868548,
        9868552,
        9868553,
        9868556,
        9868559,
        9868561,
        9868562,
        9868563,
        9868564,
        9868565,
        9868567,
        9868570,
        9868571,
        9868572,
        9868573,
        9868575,
        9868576,
        9868581,
        9868587,
        9868589,
        9868591,
        9868596,
        9868597,
        9868600,
        9868604,
        9868606,
        9868607,
        9868608,
        9868610,
        9868611,
        9868612,
        9868617,
        9868620,
        9868621,
        9868622,
        9868623,
        9868624,
        9868626,
        9868627,
        9868629,
        9868635,
        9868636,
        9868639,
        9868640,
        9868641,
        9868648,
        9864533,
        9863133,
        9863135,
        9863136,
        9863137,
        9863140,
        9863142,
        9863144,
        9863145,
        9863146,
        9863147,
        9863148,
        9863151,
        9863152,
        9863154,
        9863155,
        9863156,
        9863158,
        9863160,
        9863162,
        9863164,
        9863165,
        9863169,
        9863175,
        9863176,
        9863178,
        9863179,
        9863180,
        9863182,
        9863183,
        9863184,
        9863185,
        9863186,
        9863187,
        9863189,
        9863190,
        9863191,
        9863193,
        9863194,
        9863195,
        9863197,
        9863201,
        9863203,
        9863204,
        9863205,
        9863207,
        9863209,
        9863210,
        9863214,
        9863215,
        9863216,
        9863217,
        9863221,
        9863224,
        9863225,
        9863228,
        9863229,
        9863230,
        9863231,
        9863233,
        9863234,
        9863235,
        9863236,
        9863239,
        9863240,
        9863241,
        9863287,
        9860175,
        9860188,
        9860201,
        9860220,
        9860235,
        9860242,
        9860243,
        9860247,
        9860267,
        9860268,
        9860269,
        9860281,
        9860282,
        9860302,
        9860306,
        9860310,
        9860312,
        9860328,
        9860329,
        9860352,
        9860360,
        9860361,
        9860365,
        9860404,
        9860425,
        9860427,
        9860428,
        9860432,
        9860436,
        9860437,
        9860440,
        9860443,
        9860460,
        9860461,
        9860465,
        9860490,
        9860852,
        9860863,
        9860865,
        9860891,
        9860895,
        9860904,
        9860925,
        9860943,
        9860944,
        9860949,
        9860955,
        9860965,
        9860969,
        9860983,
        9860989,
        9860993,
        9861016,
        9861034,
        9861046,
        9861065,
        9861070,
        9861075,
        9861077,
        9861078,
        9861080,
        9861086,
        9861090,
        9861105,
        9861112,
        9861118,
        9861119,
        9861139,
        9861143,
        9861149,
        9861153,
        9861158,
        9861163,
        9861167,
        9861171,
        9861180,
        9861181,
        9861189,
        9861196,
        9861208,
        9861209,
        9861219,
        9861228,
        9861232,
        9861237,
        9861241,
        9861254,
        9861283,
        9861290,
        9861293,
        9861294,
        9861312,
        9861317,
        9861326,
        9861345,
        9861347,
        9861361,
        9861368,
        9861371,
        9861378,
        9861381,
        9860135,
        9860154,
        9860157,
        9860165,
        9860168,
        9858913,
        9859502,
        9857386,
        9857505,
        9680352
      )
    `);
  },
  down: () => Promise.resolve(),
};
