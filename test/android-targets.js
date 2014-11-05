// Copyright © 2014 Intel Corporation. All rights reserved.
// Use  of this  source  code is  governed by  an Apache v2
// license that can be found in the LICENSE-APACHE-V2 file.

// Run tests silently to avoid spew from tests failing on purpose.
require("../src/Config").setSilentConsole(true);
var AndroidTargets = require("../src/AndroidTargets");

var _androidTargets = "" +
'Available Android targets:\n' +
'----------\n' +
'id: 1 or "android-18"\n' +
'     Name: Android 4.3.1\n' +
'     Type: Platform\n' +
'     API level: 18\n' +
'     Revision: 3\n' +
'     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n' +
' Tag/ABIs : no ABIs.\n' +
'----------\n' +
'id: 2 or "android-19"\n' +
'     Name: Android 4.4.2\n' +
'     Type: Platform\n' +
'     API level: 19\n' +
'     Revision: 4\n' +
'     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n' +
' Tag/ABIs : default/armeabi-v7a, default/x86\n' +
'----------\n' +
'id: 3 or "android-20"\n' +
'     Name: Android 4.4W\n' +
'     Type: Platform\n' +
'     API level: 20\n' +
'     Revision: 1\n' +
'     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n' +
' Tag/ABIs : no ABIs.\n' +
'----------\n' +
'id: 4 or "android-21"\n' +
'     Name: Android 5.0\n' +
'     Type: Platform\n' +
'     API level: 21\n' +
'     Revision: 1\n' +
'     Skins: HVGA, QVGA, WQVGA400, WQVGA432, WSVGA, WVGA800 (default), WVGA854, WXGA720, WXGA800, WXGA800-7in\n' +
' Tag/ABIs : android-tv/armeabi-v7a';

exports.tests = {

    parse: function(test) {

        test.expect(2);

        // Bad test, invalid instantiation.
        try {
            var at1 = new AndroidTargets(null);
        } catch (e) {
            test.equal(e instanceof TypeError, true);
        }

        // Good test.
        var at2 = new AndroidTargets(_androidTargets);
        var targets = at2.parse();

        test.equal(Object.keys(targets).length, 2);

        test.done();
    }

};
