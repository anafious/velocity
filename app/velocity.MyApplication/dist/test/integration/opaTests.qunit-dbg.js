sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'velocity/MyApplication/test/integration/FirstJourney',
		'velocity/MyApplication/test/integration/pages/RisksList',
		'velocity/MyApplication/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('velocity/MyApplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);