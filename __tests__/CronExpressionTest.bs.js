// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var CronExpression$NactPatterns = require("../src/CronExpression.bs.js");

function testExpression($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, $staropt$star$5, expression) {
  var minutes = $staropt$star ? $staropt$star[0] : /* Wildcard */46765562;
  var hours = $staropt$star$1 ? $staropt$star$1[0] : /* Wildcard */46765562;
  var daysOfMonth = $staropt$star$2 ? $staropt$star$2[0] : /* Wildcard */46765562;
  var months = $staropt$star$3 ? $staropt$star$3[0] : /* Wildcard */46765562;
  var daysOfWeek = $staropt$star$4 ? $staropt$star$4[0] : /* Wildcard */46765562;
  var years = $staropt$star$5 ? $staropt$star$5[0] : /* Wildcard */46765562;
  return Jest.test("The cron expression " + (expression + " should be correctly parsed"), (function () {
                return Jest.ExpectJs[/* toEqual */12](/* record */[
                            /* minutes */minutes,
                            /* hours */hours,
                            /* daysOfMonth */daysOfMonth,
                            /* months */months,
                            /* daysOfWeek */daysOfWeek,
                            /* years */years,
                            /* expression */expression
                          ], Jest.ExpectJs[/* expect */0](CronExpression$NactPatterns.parse(expression)));
              }));
}

function testMalformedExpression(expression) {
  return Jest.test("The cron expression " + (expression + " should fail to parse"), (function () {
                return Jest.ExpectJs[/* toThrowException */20](CronExpression$NactPatterns.MalformedCronExpression, Jest.ExpectJs[/* expectFn */1]((function () {
                                  return CronExpression$NactPatterns.parse(expression);
                                }), /* () */0));
              }));
}

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "* * * * *");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "0 * * * *");

testExpression(/* Some */[/* `Values */[
        72054786,
        Belt_Array.range(0, 10)
      ]], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "0-10 * * * *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          0,
          2,
          4,
          6
        ]
      ]], /* None */0, "* * * * */2");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          9,
          11
        ]
      ]], /* None */0, /* None */0, "* * * 9-12/2 *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "* * * ? *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "* * * * * ?");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          0,
          1,
          2,
          4
        ]
      ]], /* None */0, "* * * * mon,tue,thu,sun");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          0,
          2
        ]
      ]], /* None */0, "* * * * 7,2");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[1]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[1]
      ]], /* None */0, /* None */0, "@annually");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[1]
      ]], /* None */0, /* None */0, /* None */0, "@monthly");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, "@weekly");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, /* None */0, /* None */0, /* None */0, "@daily");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, /* None */0, /* None */0, /* None */0, "@midnight");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "@hourly");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[18]
      ]], /* None */0, /* None */0, /* Some */[/* `LastDayOfWeekInMonth */[
        -1029051830,
        6
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[
          2015,
          2016,
          2017
        ]
      ]], "0 18 ? * 6L 2015-2017");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* None */0, "* * * DEC,JAN *");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          2,
          3
        ]
      ]], /* None */0, /* None */0, "* * * JAN-MAR *");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          3,
          5
        ]
      ]], /* None */0, /* None */0, "* * * JAN-MAY/2 *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* array */[
          1,
          2,
          3,
          4,
          5
        ]
      ]], /* None */0, "* * * * MON-FRI");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        Belt_Array.rangeBy(2, 6, 2)
      ]], /* None */0, "* * * * TUE-/2");

testExpression(/* None */0, /* None */0, /* Some */[/* `NearestWeekday */[
        525980234,
        15
      ]], /* None */0, /* None */0, /* None */0, "* * 15W * *");

testExpression(/* None */0, /* None */0, /* Some */[/* `DaysBeforeEndOfMonth */[
        1044297284,
        0
      ]], /* None */0, /* None */0, /* None */0, "* * L * *");

testExpression(/* None */0, /* None */0, /* Some */[/* `DaysBeforeEndOfMonth */[
        1044297284,
        1
      ]], /* None */0, /* None */0, /* None */0, "* * L-2 * *");

testMalformedExpression("* * L-32 * *");

testMalformedExpression("* * L-0 * *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `LastDayOfWeekInMonth */[
        -1029051830,
        5
      ]], /* None */0, "* * * * 5L");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `NthDayOfWeekInMonth */[
        -339304170,
        /* tuple */[
          3,
          3
        ]
      ]], /* None */0, "* * * * WED#3");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `NthDayOfWeekInMonth */[
        -339304170,
        /* tuple */[
          3,
          3
        ]
      ]], /* None */0, "* * * * wed#3");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `NthDayOfWeekInMonth */[
        -339304170,
        /* tuple */[
          3,
          3
        ]
      ]], /* None */0, "* * * * 3#3");

testExpression(/* None */0, /* None */0, /* Some */[/* LastWeekdayOfMonth */-595231305], /* None */0, /* None */0, /* None */0, "* * LW * *");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `Values */[
        72054786,
        Belt_Array.rangeBy(2000, 2020, 3)
      ]], "* * * DEC,JAN * 2000-2020/3");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* Some */[2000],
          /* None */0,
          3
        ]
      ]], "* * * DEC,JAN * 2000-/3");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* Some */[2000],
          /* None */0,
          3
        ]
      ]], "* * * DEC,JAN * 2000/3");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* Some */[2000],
          /* None */0,
          1
        ]
      ]], "* * * DEC,JAN * 2000-");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* None */0,
          /* Some */[2020],
          1
        ]
      ]], "* * * DEC,JAN * -2020");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* None */0,
          /* Some */[2020],
          2
        ]
      ]], "* * * DEC,JAN * -2020/2");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          2018,
          2019,
          2020
        ]
      ]], "* * * DEC,JAN * 2018,2019,2020");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* None */0,
          /* None */0,
          2
        ]
      ]], "* * * DEC,JAN * */2");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* None */0,
          /* None */0,
          2
        ]
      ]], "* * * DEC,JAN * */2");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, /* Some */[/* `UnboundedInterval */[
        -1055288279,
        /* tuple */[
          /* None */0,
          /* Some */[2020],
          2
        ]
      ]], "* * * DEC,JAN * -2020/2");

testMalformedExpression("* * * DEC,JAN * * *");

testMalformedExpression("* * * *");

testMalformedExpression("* * *");

testMalformedExpression("* *");

testMalformedExpression("*");

testMalformedExpression("* * * DEC,JAN * 2020-/2/2");

testMalformedExpression("* * * DEC-/2/3 * *");

testMalformedExpression("* * * DEC,JAN * 2020,2021/2");

testMalformedExpression("* * * DEC,JAN/2 * *");

testMalformedExpression("* * * 1,2/2 * *");

testMalformedExpression("* * * 10-20/ * *");

testMalformedExpression("60 * * DEC,JAN * *");

testMalformedExpression("* 24 * DEC,JAN * *");

testMalformedExpression("* * 32 DEC,JAN * *");

testMalformedExpression("* * 0 DEC,JAN * *");

testMalformedExpression("* * * 13 *");

testMalformedExpression("* * * 0 *");

testMalformedExpression("* * * * 8");

testMalformedExpression("* * * JANFEB *");

testMalformedExpression("* * * - *");

testMalformedExpression("* * * * * -");

exports.testExpression = testExpression;
exports.testMalformedExpression = testMalformedExpression;
/*  Not a pure module */
