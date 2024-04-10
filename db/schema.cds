namespace riskManagement;

using { API_BUSINESS_PARTNER } from '../srv/external/API_BUSINESS_PARTNER.cds';

entity Risks
{
    key ID : UUID;
    risksID : String(10)
        @mandatory;
    description : String(200);
    impact : Integer;
    criticality : Integer;
    mitigation : Association to one Mitigations;
    BusinessPartner : Association to one API_BUSINESS_PARTNER.A_BusinessPartner;
}

entity Mitigations
{
    key ID : UUID;
    mitigationsID : String(10)
        @mandatory;
    description : String(200);
    counter : Integer;
    risk : Association to one Risks;
}
