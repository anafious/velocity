sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'velocity.MyApplication',
            componentId: 'RisksList',
            contextPath: '/Risks'
        },
        CustomPageDefinitions
    );
});