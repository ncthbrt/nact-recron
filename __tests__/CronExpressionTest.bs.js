// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var CronExpression$NactPatterns = require("../src/CronExpression.bs.js");

function testExpression($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, $staropt$star$4, expression) {
  var minutes = $staropt$star ? $staropt$star[0] : /* Wildcard */46765562;
  var hours = $staropt$star$1 ? $staropt$star$1[0] : /* Wildcard */46765562;
  var daysOfMonth = $staropt$star$2 ? $staropt$star$2[0] : /* Wildcard */46765562;
  var months = $staropt$star$3 ? $staropt$star$3[0] : /* Wildcard */46765562;
  var daysOfWeek = $staropt$star$4 ? $staropt$star$4[0] : /* Wildcard */46765562;
  return Jest.test("The cron expression " + (expression + " should be correctly parsed"), (function () {
                return Jest.ExpectJs[/* toEqual */12](/* record */[
                            /* minutes */minutes,
                            /* hours */hours,
                            /* daysOfMonth */daysOfMonth,
                            /* months */months,
                            /* daysOfWeek */daysOfWeek,
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

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, "* * * * *");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* None */0, /* None */0, /* None */0, /* None */0, "0 * * * *");

testExpression(/* Some */[/* `Values */[
        72054786,
        Belt_Array.range(0, 10)
      ]], /* None */0, /* None */0, /* None */0, /* None */0, "0-10 * * * *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          0,
          2,
          4,
          6
        ]
      ]], "* * * * */2");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          9,
          11
        ]
      ]], /* None */0, "* * * 9-12/2 *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          0,
          1,
          2,
          4
        ]
      ]], "* * * * mon,tue,thu,sun");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          0,
          2
        ]
      ]], "* * * * 7,2");

testExpression(/* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[0]
      ]], /* Some */[/* `Values */[
        72054786,
        /* int array */[1]
      ]], /* None */0, /* None */0, "@monthly");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          12
        ]
      ]], /* None */0, "* * * DEC,JAN *");

testExpression(/* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* int array */[
          1,
          2,
          3
        ]
      ]], /* None */0, "* * * JAN-MAR *");

testExpression(/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* `Values */[
        72054786,
        /* array */[
          1,
          2,
          3,
          4,
          5
        ]
      ]], "* * * * MON-FRI");

testMalformedExpression("* * * DEC,JAN * *");

testMalformedExpression("60 * * DEC,JAN * *");

testMalformedExpression("* 24 * DEC,JAN * *");

testMalformedExpression("* * 32 DEC,JAN * *");

testMalformedExpression("* * * 13 *");

testMalformedExpression("* * * * 8");

testMalformedExpression("* * * JANFEB *");

exports.testExpression = testExpression;
exports.testMalformedExpression = testMalformedExpression;
/*  Not a pure module */
