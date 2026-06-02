export interface PermitRequirement {
  permitName: string;
  department: string;
  phone: string;
  description: string;
  estimatedDays: number;
}

export interface SafetyAlert {
  title: string;
  description: string;
  isCritical: boolean;
}

export interface JobChecklist {
  safetyAlerts: SafetyAlert[];
  permits: PermitRequirement[];
}

export const TRADES = ["Plumbing","HVAC","Electrical","Demolition","Foundation","Roofing","Deck","Septic System","Seawall","Dock","Excavation","Concrete","Masonry","Framing","Insulation","Drywall","Painting","Flooring","Windows & Doors","Siding","Gutters","Landscaping","Irrigation","Solar","Generator","Fire Suppression","Elevator","Asbestos Removal","Lead Abatement","Mold Remediation","Well & Water","Drainage","Retaining Wall","Fence","Pool & Spa","Shed & Structure"];

export const STATES = ["CT","MA","VT","RI","NH","ME","NY"];

export const CITIES: Record<string, string[]> = {
  CT: ["Ansonia","Avon","Berlin","Bethel","Bloomfield","Branford","Bridgeport","Bristol","Brookfield","Canton","Cheshire","Clinton","Colchester","Coventry","Cromwell","Danbury","Darien","Derby","East Haddam","East Hampton","East Hartford","East Haven","East Lyme","Enfield","Fairfield","Farmington","Glastonbury","Granby","Greenwich","Groton","Guilford","Hamden","Hartford","Killingly","Ledyard","Lisbon","Litchfield","Madison","Manchester","Mansfield","Meriden","Middletown","Milford","Monroe","Naugatuck","New Britain","New Canaan","New Fairfield","New Hartford","New Haven","New London","New Milford","Newington","Newtown","Norfolk","North Branford","North Haven","Norwalk","Norwich","Old Lyme","Old Saybrook","Orange","Oxford","Plainfield","Plainville","Plymouth","Portland","Putnam","Redding","Ridgefield","Rocky Hill","Seymour","Shelton","Simsbury","Somers","Southbury","Southington","Stafford","Stamford","Stonington","Stratford","Suffield","Thomaston","Thompson","Tolland","Torrington","Trumbull","Vernon","Wallingford","Waterbury","Waterford","Watertown","West Hartford","West Haven","Westbrook","Weston","Westport","Wethersfield","Wilton","Winchester","Windham","Windsor","Windsor Locks","Wolcott","Woodbury","Woodstock"],
  MA: ["Abington","Acton","Agawam","Amesbury","Amherst","Andover","Arlington","Attleboro","Auburn","Barnstable","Bedford","Belmont","Beverly","Boston","Braintree","Brockton","Brookline","Burlington","Cambridge","Canton","Chelsea","Chicopee","Clinton","Concord","Danvers","Dartmouth","Dedham","Dracut","Easton","Everett","Fall River","Falmouth","Fitchburg","Framingham","Franklin","Gardner","Gloucester","Haverhill","Holyoke","Lawrence","Leominster","Lexington","Lowell","Lynn","Malden","Marlborough","Medford","Methuen","Milton","Natick","Needham","New Bedford","Newton","North Adams","Northampton","Norwood","Peabody","Pittsfield","Plymouth","Quincy","Randolph","Revere","Salem","Shrewsbury","Somerville","Springfield","Stoughton","Taunton","Tewksbury","Waltham","Watertown","Westfield","Weymouth","Woburn","Worcester","Wrentham"],
  VT: ["Barre","Bellows Falls","Bennington","Brandon","Brattleboro","Bristol","Burlington","Castleton","Colchester","Derby","Enosburg Falls","Essex","Fair Haven","Hartford","Hyde Park","Johnson","Ludlow","Lyndonville","Manchester","Middlebury","Milton","Montpelier","Morrisville","Newport","North Hero","Northfield","Orleans","Poultney","Randolph","Richford","Rutland","South Burlington","Springfield","St. Albans","St. Johnsbury","Swanton","Vergennes","Waterbury","White River Junction","Winooski","Woodstock"],
  RI: ["Barrington","Bristol","Burrillville","Central Falls","Charlestown","Coventry","Cranston","Cumberland","East Greenwich","East Providence","Exeter","Foster","Glocester","Hopkinton","Jamestown","Johnston","Lincoln","Little Compton","Middletown","Narragansett","Newport","New Shoreham","North Kingstown","North Providence","North Smithfield","Pawtucket","Portsmouth","Providence","Richmond","Scituate","Smithfield","South Kingstown","Tiverton","Warren","Warwick","West Greenwich","West Warwick","Westerly","Woonsocket"],
  NH: ["Alton","Amherst","Atkinson","Auburn","Barrington","Bedford","Belmont","Berlin","Bow","Claremont","Concord","Conway","Derry","Dover","Durham","Epping","Epsom","Exeter","Farmington","Franklin","Gilford","Goffstown","Hampstead","Hampton","Hanover","Hollis","Hooksett","Hudson","Jaffrey","Keene","Kingston","Laconia","Lebanon","Litchfield","Londonderry","Manchester","Merrimack","Milford","Nashua","New Ipswich","Newmarket","Newton","Northfield","Pelham","Pembroke","Plaistow","Plymouth","Portsmouth","Raymond","Rochester","Salem","Seabrook","Somersworth","Stratham","Swanzey","Weare","Windham","Wolfeboro"],
  ME: ["Auburn","Augusta","Bangor","Bar Harbor","Bath","Belfast","Biddeford","Brewer","Brunswick","Bucksport","Calais","Camden","Caribou","Damariscotta","Dexter","Dover-Foxcroft","Eastport","Ellsworth","Fairfield","Falmouth","Farmington","Fort Kent","Fryeburg","Gardiner","Gorham","Hallowell","Hampden","Harpswell","Houlton","Jay","Kennebunk","Kennebunkport","Kittery","Lewiston","Machias","Madison","Millinocket","Milo","Monmouth","Naples","Newcastle","North Berwick","Norway","Oakland","Ogunquit","Old Orchard Beach","Old Town","Orrington","Oxford","Paris","Patten","Pembroke","Portland","Presque Isle","Rockland","Rumford","Saco","Sanford","Scarborough","Skowhegan","South Portland","Waterville","Wells","Westbrook","Windham","Winslow","Winthrop","Yarmouth","York"],
  NY: ["Albany","Amsterdam","Auburn","Babylon","Batavia","Beacon","Binghamton","Buffalo","Canandaigua","Cohoes","Corning","Cortland","Dunkirk","Elmira","Freeport","Fulton","Geneva","Glen Cove","Glens Falls","Gloversville","Hempstead","Hornell","Hudson","Ithaca","Jamestown","Johnstown","Kingston","Lackawanna","Little Falls","Lockport","Long Beach","Mechanicville","Middletown","Mount Vernon","New Rochelle","New York City","Newburgh","Niagara Falls","North Tonawanda","Norwich","Ogdensburg","Olean","Oneida","Oneonta","Oswego","Peekskill","Plattsburgh","Port Jervis","Poughkeepsie","Rensselaer","Rochester","Rome","Rye","Saratoga Springs","Schenectady","Sherrill","Syracuse","Tonawanda","Troy","Utica","Watertown","Watervliet","White Plains","Yonkers"],
};

export const JOB_TYPES: Record<string, string[]> = {
  "Plumbing": ["New Installation","Repair Leak","Replace Water Main","Bathroom Remodel","Kitchen Plumbing","Water Heater","Backflow Prevention","Pipe Relining"],
  "HVAC": ["New AC Unit","Replace Furnace","Ductwork","Mini Split","Boiler","Refrigerant Recharge","Ventilation","Thermostat"],
  "Electrical": ["Service Upgrade","New Circuit","Full Rewire","Panel Replace","Generator Hookup","EV Charger","Lighting","Low Voltage"],
  "Demolition": ["Partial Demo","Full Demo","Interior Demo","Selective Demo","Hazmat Demo","Foundation Demo"],
  "Foundation": ["New Foundation","Foundation Repair","Crack Repair","Underpinning","Waterproofing","Slab Pour","Pier Install"],
  "Roofing": ["Full Replacement","Repair","Flat Roof","Metal Roof","Shingle","Flashing","Skylight","Gutter Install"],
  "Deck": ["New Deck","Deck Repair","Expansion","Pergola","Patio","Balcony","Railing"],
  "Septic System": ["New Install","Replacement","Pump Out","Inspection","Repair","Cesspool Conversion","Leach Field"],
  "Seawall": ["New Seawall","Seawall Repair","Cap Repair","Tie-Back Install","Rip Rap","Bulkhead"],
  "Dock": ["New Dock","Dock Repair","Float Dock","Fixed Dock","Gangway","Piling Replace","Boat Lift"],
  "Excavation": ["Site Prep","Trenching","Grading","Land Clearing","Pond/Pool Dig","Utility Trench"],
  "Concrete": ["New Pour","Repair","Driveway","Sidewalk","Retaining Wall","Stamped","Resurfacing"],
  "Masonry": ["Brick","Block","Stone","Chimney","Repointing","Retaining Wall","Steps"],
  "Framing": ["New Build","Addition","Garage","Shed","Barn","Structural Repair"],
  "Solar": ["New Install","Panel Add","Battery Storage","Inspection","Repair"],
  "Pool & Spa": ["New Pool","Pool Repair","Spa Install","Resurfacing","Equipment Replace","Fence"],
  "Well & Water": ["New Well","Well Repair","Pump Replace","Water Treatment","Abandonment"],
  "Drainage": ["French Drain","Catch Basin","Dry Well","Grading","Sump Pump"],
  "Retaining Wall": ["New Wall","Repair","Block","Stone","Timber","Concrete"],
  "Asbestos Removal": ["Inspection","Full Removal","Encapsulation","Air Testing"],
  "Lead Abatement": ["Inspection","Full Removal","Encapsulation","Testing"],
  "Mold Remediation": ["Inspection","Full Remediation","Air Testing","Prevention"],
};

const DEFAULT_JOBS = ["New Install","Repair","Inspection","Replacement","Upgrade"];
export const getJobTypes = (trade: string) => JOB_TYPES[trade] || DEFAULT_JOBS;

// CT building dept phones
export const CT_PHONES: Record<string, string> = {
  "Ansonia":"(203) 736-5940","Avon":"(860) 675-4848","Berlin":"(860) 828-7004","Bethel":"(203) 794-8510","Bloomfield":"(860) 769-3050","Branford":"(203) 488-8355","Bridgeport":"(203) 576-6269","Bristol":"(860) 584-6300","Brookfield":"(203) 740-1842","Canton":"(860) 693-7884","Cheshire":"(203) 272-2743","Clinton":"(860) 669-5560","Colchester":"(860) 537-7219","Coventry":"(860) 742-6751","Cromwell":"(860) 613-4630","Danbury":"(203) 797-4519","Darien":"(203) 656-1815","Derby":"(203) 735-2808","East Haddam":"(860) 873-5017","East Hampton":"(860) 267-4426","East Hartford":"(860) 528-5040","East Haven":"(203) 468-4813","East Lyme":"(860) 739-5964","Enfield":"(860) 763-3407","Fairfield":"(203) 256-3140","Farmington":"(860) 675-2345","Glastonbury":"(860) 652-7712","Granby":"(860) 653-2611","Greenwich":"(203) 622-7744","Groton":"(860) 441-6622","Guilford":"(203) 453-8041","Hamden":"(203) 287-2623","Hartford":"(860) 757-9500","Killingly":"(860) 779-5302","Ledyard":"(860) 464-3200","Lisbon":"(860) 376-7633","Litchfield":"(860) 567-7551","Madison":"(203) 245-5680","Manchester":"(860) 647-3091","Mansfield":"(860) 487-4611","Meriden":"(203) 630-4040","Middletown":"(860) 344-3555","Milford":"(203) 783-3388","Monroe":"(203) 452-2725","Naugatuck":"(203) 729-5701","New Britain":"(860) 826-3370","New Canaan":"(203) 594-5002","New Fairfield":"(203) 312-5670","New Hartford":"(860) 738-6948","New Haven":"(203) 946-8020","New London":"(860) 447-5247","New Milford":"(860) 355-6010","Newington":"(860) 665-7705","Newtown":"(203) 270-4354","Norfolk":"(860) 542-5148","North Branford":"(203) 484-6005","North Haven":"(203) 234-4915","Norwalk":"(203) 854-7888","Norwich":"(860) 823-3795","Old Lyme":"(860) 434-1605","Old Saybrook":"(860) 395-3123","Orange":"(203) 891-4850","Oxford":"(203) 888-0206","Plainfield":"(860) 564-3836","Plainville":"(860) 793-8701","Plymouth":"(860) 283-2019","Portland":"(860) 342-6795","Putnam":"(860) 963-6705","Redding":"(203) 938-2032","Ridgefield":"(203) 894-5312","Rocky Hill":"(860) 721-2620","Seymour":"(203) 888-2529","Shelton":"(203) 924-1555","Simsbury":"(860) 658-3875","Somers":"(860) 749-9022","Southbury":"(203) 262-0709","Southington":"(860) 628-0540","Stafford":"(860) 684-1310","Stamford":"(203) 977-5640","Stonington":"(860) 535-5000","Stratford":"(203) 385-4077","Suffield":"(860) 668-3853","Thomaston":"(860) 283-5120","Thompson":"(860) 923-9550","Tolland":"(860) 870-3061","Torrington":"(860) 496-3520","Trumbull":"(203) 452-5084","Vernon":"(860) 870-3620","Wallingford":"(203) 294-2060","Waterbury":"(203) 574-8081","Waterford":"(860) 444-5810","Watertown":"(860) 274-1212","West Hartford":"(860) 561-7604","West Haven":"(203) 937-3514","Westbrook":"(860) 399-3001","Weston":"(203) 222-2616","Westport":"(203) 341-1155","Wethersfield":"(860) 721-2838","Wilton":"(203) 563-0180","Winchester":"(860) 379-9451","Windham":"(860) 465-3025","Windsor":"(860) 285-1990","Windsor Locks":"(860) 627-1448","Wolcott":"(203) 879-8100","Woodbury":"(203) 263-2141","Woodstock":"(860) 928-6595",
};

function p(permitName: string, department: string, description: string, estimatedDays: number): PermitRequirement {
  return { permitName, department, phone: "", description, estimatedDays };
}
function s(title: string, description: string, isCritical: boolean): SafetyAlert {
  return { title, description, isCritical };
}

type ChecklistData = [SafetyAlert[], PermitRequirement[]];

export const PERMIT_DATA: Record<string, ChecklistData> = {
  "Plumbing|New Installation|Residential": [[s("Turn Off Water Main","Shut off before any work",true)],[p("Plumbing Permit","Building","New plumbing installation permit",5)]],
  "Plumbing|Repair Leak|Residential": [[s("Turn Off Water","Shut off water supply",true)],[]],
  "Plumbing|Replace Water Main|Residential": [[s("Call 811","Locate utilities before digging",true),s("Turn Off Water Main","Required before work",true)],[p("Plumbing Permit","Building","Water main replacement permit",3)]],
  "Plumbing|Bathroom Remodel|Residential": [[s("Turn Off Water","Shut off supply lines",true)],[p("Plumbing Permit","Building","Bathroom remodel plumbing permit",5),p("Building Permit","Building","Bathroom renovation permit",5)]],
  "Plumbing|Kitchen Plumbing|Residential": [[s("Turn Off Water","Shut off supply",true)],[p("Plumbing Permit","Building","Kitchen plumbing permit",3)]],
  "Plumbing|Water Heater|Residential": [[s("Turn Off Gas/Electric","De-energize before work",true),s("Turn Off Water","Shut off cold water supply",true)],[p("Plumbing Permit","Building","Water heater replacement permit",2)]],
  "Plumbing|Backflow Prevention|Residential": [[s("Turn Off Water","Shut off main supply",true)],[p("Plumbing Permit","Building","Backflow prevention device permit",2)]],
  "Plumbing|Pipe Relining|Residential": [[s("CCTV Inspection","Camera inspection required first",false)],[]],

  "HVAC|New AC Unit|Residential": [[s("Turn Off Power","De-energize unit",true)],[p("Mechanical Permit","Building","New AC installation permit",5),p("Electrical Permit","Building","Electrical connections permit",3)]],
  "HVAC|Replace Furnace|Residential": [[s("Turn Off Gas","Shut off gas supply",true),s("Turn Off Power","De-energize unit",true)],[p("Mechanical Permit","Building","Furnace replacement permit",3)]],
  "HVAC|Ductwork|Residential": [[s("Proper Sealing","All joints must be sealed",false)],[p("Mechanical Permit","Building","Ductwork installation permit",2)]],
  "HVAC|Mini Split|Residential": [[s("Turn Off Power","De-energize before work",true)],[p("Mechanical Permit","Building","Mini split installation permit",3),p("Electrical Permit","Building","Electrical permit",2)]],
  "HVAC|Boiler|Residential": [[s("Turn Off Gas","Shut off gas supply",true),s("Licensed Professional","Licensed HVAC contractor required",true)],[p("Mechanical Permit","Building","Boiler installation/replacement permit",5)]],
  "HVAC|Refrigerant Recharge|Residential": [[s("EPA Certification","EPA 608 certification required",true)],[]],
  "HVAC|Ventilation|Residential": [[s("Proper Airflow","Ensure adequate CFM ratings",false)],[p("Mechanical Permit","Building","Ventilation permit",2)]],
  "HVAC|Thermostat|Residential": [[],[]],

  "Electrical|Service Upgrade|Residential": [[s("Licensed Electrician","Must be licensed",true),s("Utility Notification","Notify utility company",true)],[p("Electrical Permit","Building","Service upgrade permit",7)]],
  "Electrical|New Circuit|Residential": [[s("Turn Off Main Breaker","De-energize panel",true)],[p("Electrical Permit","Building","New circuit permit",3)]],
  "Electrical|Full Rewire|Residential": [[s("Turn Off Main Breaker","Full de-energization required",true),s("Licensed Electrician","Must be licensed",true)],[p("Electrical Permit","Building","Full rewire permit",10)]],
  "Electrical|Panel Replace|Residential": [[s("Turn Off Main Breaker","De-energize panel",true),s("Utility Coordination","Coordinate with utility for disconnect",true)],[p("Electrical Permit","Building","Panel replacement permit",5)]],
  "Electrical|Generator Hookup|Residential": [[s("Turn Off Main Breaker","De-energize panel",true),s("Transfer Switch","Proper transfer switch required",true)],[p("Electrical Permit","Building","Generator hookup permit",3)]],
  "Electrical|EV Charger|Residential": [[s("Turn Off Main Breaker","De-energize panel",true)],[p("Electrical Permit","Building","EV charger installation permit",3)]],
  "Electrical|Lighting|Residential": [[s("Turn Off Circuit","De-energize before work",true)],[]],
  "Electrical|Low Voltage|Residential": [[],[]],

  "Demolition|Partial Demo|Residential": [[s("Check For Asbestos","Pre-1980 buildings require testing",true),s("Call 811","Locate utilities",true)],[p("Demolition Permit","Building","Partial demolition permit",5)]],
  "Demolition|Full Demo|Residential": [[s("Check For Asbestos","Pre-1980 buildings require testing",true),s("Utility Disconnect","All utilities must be capped",true),s("Call 811","Locate all utilities",true)],[p("Demolition Permit","Building","Full demolition permit",10)]],
  "Demolition|Interior Demo|Residential": [[s("Check For Asbestos","Pre-1980 buildings require testing",true),s("Dust Containment","Proper containment required",false)],[p("Building Permit","Building","Interior demolition permit",3)]],
  "Demolition|Selective Demo|Residential": [[s("Check For Asbestos","Test before work",true)],[p("Building Permit","Building","Selective demolition permit",3)]],
  "Demolition|Hazmat Demo|Residential": [[s("Licensed Contractor","Certified hazmat contractor required",true),s("EPA Regulations","Follow all EPA hazmat rules",true)],[p("Demolition Permit","Building","Hazmat demolition permit",20),p("Environmental Permit","Health","Environmental/hazmat approval",30)]],
  "Demolition|Foundation Demo|Residential": [[s("Structural Assessment","Engineering review required",true),s("Call 811","Locate utilities",true)],[p("Demolition Permit","Building","Foundation demolition permit",7)]],

  "Foundation|New Foundation|Residential": [[s("Call 811","Locate utilities",true),s("Soil Testing","Geotechnical report may be required",true)],[p("Building Permit","Building","New foundation permit",10)]],
  "Foundation|Foundation Repair|Residential": [[s("Structural Assessment","Professional inspection required",true)],[p("Building Permit","Building","Foundation repair permit",5)]],
  "Foundation|Crack Repair|Residential": [[s("Monitor Cracks","Document crack width and length",false)],[]],
  "Foundation|Underpinning|Residential": [[s("Engineering Required","Professional design required",true),s("Excavation Safety","Proper shoring required",true)],[p("Building Permit","Building","Underpinning permit",10)]],
  "Foundation|Waterproofing|Residential": [[s("Call 811","Locate utilities if excavating",true)],[p("Building Permit","Building","Foundation waterproofing permit",3)]],
  "Foundation|Slab Pour|Residential": [[s("Proper Curing","Follow curing procedures",false)],[p("Building Permit","Building","Slab pour permit",5)]],
  "Foundation|Pier Install|Residential": [[s("Engineering Required","Structural engineer required",true)],[p("Building Permit","Building","Pier installation permit",7)]],

  "Roofing|Full Replacement|Residential": [[s("Fall Protection","OSHA fall protection required",true)],[p("Building Permit","Building","Roof replacement permit",3)]],
  "Roofing|Repair|Residential": [[s("Fall Protection","Safety harness required",true)],[]],
  "Roofing|Flat Roof|Residential": [[s("Fall Protection","OSHA fall protection required",true),s("Proper Drainage","Ensure adequate drainage slope",true)],[p("Building Permit","Building","Flat roof permit",5)]],
  "Roofing|Metal Roof|Residential": [[s("Fall Protection","Safety harness required",true)],[p("Building Permit","Building","Metal roof installation permit",3)]],
  "Roofing|Shingle|Residential": [[s("Fall Protection","Safety harness required",true)],[]],
  "Roofing|Flashing|Residential": [[s("Fall Protection","Safety harness required",true)],[]],
  "Roofing|Skylight|Residential": [[s("Fall Protection","Safety harness required",true),s("Waterproofing","Proper flashing and sealing critical",true)],[p("Building Permit","Building","Skylight installation permit",3)]],
  "Roofing|Gutter Install|Residential": [[s("Ladder Safety","Use proper ladder stabilizers",false)],[]],

  "Deck|New Deck|Residential": [[s("Call 811","Locate utilities if footings",true),s("Ledger Attachment","Proper flashing at house connection",true)],[p("Building Permit","Building","Deck construction permit",7)]],
  "Deck|Deck Repair|Residential": [[s("Check For Rot","Inspect all structural members",true)],[]],
  "Deck|Expansion|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Deck expansion permit",5)]],
  "Deck|Pergola|Residential": [[],[p("Building Permit","Building","Pergola installation permit",5)]],
  "Deck|Patio|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Patio permit",3)]],
  "Deck|Balcony|Residential": [[s("Engineering Required","Structural assessment required",true)],[p("Building Permit","Building","Balcony permit",7)]],
  "Deck|Railing|Residential": [[s("Height Requirements","Check local code for railing height",false)],[p("Building Permit","Building","Railing permit",2)]],

  "Septic System|New Install|Residential": [[s("Soil Testing","Perc test required",true),s("Setback Requirements","Check setback distances",true)],[p("Septic Permit","Health","Septic system installation permit",30),p("Building Permit","Building","Building permit",5)]],
  "Septic System|Replacement|Residential": [[s("Soil Testing","Perc test may be required",true)],[p("Septic Permit","Health","Septic system replacement permit",20)]],
  "Septic System|Pump Out|Residential": [[s("Licensed Hauler","Use licensed septic hauler",true)],[]],
  "Septic System|Inspection|Residential": [[s("Licensed Inspector","Certified septic inspector",true)],[]],
  "Septic System|Repair|Residential": [[s("Licensed Contractor","Licensed septic contractor required",true)],[p("Septic Permit","Health","Septic repair permit",10)]],
  "Septic System|Cesspool Conversion|Residential": [[s("Licensed Contractor","Licensed contractor required",true)],[p("Septic Permit","Health","Cesspool conversion permit",30)]],
  "Septic System|Leach Field|Residential": [[s("Soil Testing","Perc test required",true)],[p("Septic Permit","Health","Leach field permit",20)]],

  "Seawall|New Seawall|Residential": [[s("Environmental Review","Wetlands and coastal regulations apply",true),s("Call 811","Locate utilities",true)],[p("Coastal Permit","Building","Seawall construction permit",30),p("Environmental Permit","Health","Environmental/wetlands approval",45)]],
  "Seawall|Seawall Repair|Residential": [[s("Environmental Review","Check wetlands regulations",true)],[p("Repair Permit","Building","Seawall repair permit",10)]],
  "Seawall|Cap Repair|Residential": [[],[]],
  "Seawall|Tie-Back Install|Residential": [[s("Environmental Review","Wetlands compliance",true)],[p("Building Permit","Building","Tie-back installation permit",10)]],
  "Seawall|Rip Rap|Residential": [[s("Environmental Review","Coastal regulations",true)],[p("Building Permit","Building","Rip rap installation permit",10)]],
  "Seawall|Bulkhead|Residential": [[s("Environmental Review","Wetlands/coastal review",true),s("Call 811","Locate utilities",true)],[p("Coastal Permit","Building","Bulkhead construction permit",30)]],

  "Dock|New Dock|Residential": [[s("Environmental Review","Wetlands and water regulations",true),s("Call 811","Locate utilities",true)],[p("Dock Permit","Building","Dock construction permit",30),p("Environmental Permit","Health","Wetlands/water approval",45)]],
  "Dock|Dock Repair|Residential": [[s("Structural Inspection","Check for rot/damage",true)],[p("Repair Permit","Building","Dock repair permit",5)]],
  "Dock|Float Dock|Residential": [[s("Environmental Review","Water regulations",true)],[p("Dock Permit","Building","Float dock installation permit",15)]],
  "Dock|Fixed Dock|Residential": [[s("Environmental Review","Wetlands approval needed",true),s("Call 811","Locate utilities",true)],[p("Dock Permit","Building","Fixed dock construction permit",30)]],
  "Dock|Gangway|Residential": [[],[]],
  "Dock|Piling Replace|Residential": [[s("Structural Assessment","Professional inspection required",true)],[p("Repair Permit","Building","Piling replacement permit",10)]],
  "Dock|Boat Lift|Residential": [[s("Environmental Review","Water quality regulations",true)],[p("Equipment Permit","Building","Boat lift installation permit",5)]],

  "Excavation|Site Prep|Residential": [[s("Call 811","Mandatory utility locate",true)],[p("Building Permit","Building","Site preparation permit",2)]],
  "Excavation|Trenching|Residential": [[s("Call 811","Mandatory utility locate",true),s("Trench Safety","Proper shoring required",true)],[p("Excavation Permit","Building","Trenching permit",3)]],
  "Excavation|Grading|Residential": [[s("Proper Drainage","Grade away from structure",true)],[p("Building Permit","Building","Grading permit",2)]],
  "Excavation|Land Clearing|Residential": [[s("Environmental Review","Check for protected areas",true)],[p("Building Permit","Building","Land clearing permit",3)]],
  "Excavation|Pond/Pool Dig|Residential": [[s("Call 811","Locate utilities",true),s("Proper Drainage","Drainage system required",true)],[p("Building Permit","Building","Pond/pool excavation permit",5)]],
  "Excavation|Utility Trench|Residential": [[s("Call 811","Mandatory locate",true),s("Trench Safety","Proper shoring required",true)],[p("Excavation Permit","Building","Utility trench permit",3)]],

  "Concrete|New Pour|Residential": [[s("Call 811","Locate utilities if excavating",true)],[p("Building Permit","Building","Concrete pour permit",2)]],
  "Concrete|Repair|Residential": [[],[]],
  "Concrete|Driveway|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Driveway permit",2)]],
  "Concrete|Sidewalk|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Sidewalk permit",2)]],
  "Concrete|Retaining Wall|Residential": [[s("Call 811","Locate utilities",true),s("Drainage","Install drainage behind wall",true)],[p("Building Permit","Building","Retaining wall permit",5)]],
  "Concrete|Stamped|Residential": [[],[]],
  "Concrete|Resurfacing|Residential": [[],[]],

  "Masonry|Brick|Residential": [[],[p("Building Permit","Building","Masonry permit",3)]],
  "Masonry|Block|Residential": [[],[p("Building Permit","Building","Masonry permit",3)]],
  "Masonry|Stone|Residential": [[],[p("Building Permit","Building","Masonry permit",3)]],
  "Masonry|Chimney|Residential": [[s("Fall Protection","Safety harness required",true)],[p("Building Permit","Building","Chimney permit",5)]],
  "Masonry|Repointing|Residential": [[],[]],
  "Masonry|Retaining Wall|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Retaining wall permit",5)]],
  "Masonry|Steps|Residential": [[],[p("Building Permit","Building","Steps permit",2)]],

  "Framing|New Build|Residential": [[s("Engineering Required","Structural plans required",true)],[p("Building Permit","Building","New construction permit",14)]],
  "Framing|Addition|Residential": [[s("Engineering Required","Structural plans required",true)],[p("Building Permit","Building","Addition permit",10)]],
  "Framing|Garage|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Garage permit",7)]],
  "Framing|Shed|Residential": [[],[p("Building Permit","Building","Shed permit",3)]],
  "Framing|Barn|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Barn construction permit",7)]],
  "Framing|Structural Repair|Residential": [[s("Engineer Assessment","Professional inspection required",true)],[p("Building Permit","Building","Structural repair permit",5)]],

  "Insulation|New Install|Residential": [[s("Proper Ventilation","Ensure adequate airflow",true)],[p("Building Permit","Building","Insulation installation permit",1)]],
  "Drywall|New Install|Residential": [[s("Proper Ventilation","Ventilate work area",false)],[p("Building Permit","Building","Drywall installation permit",1)]],
  "Drywall|Repair|Residential": [[s("Dust Control","Use dust containment during sanding",false)],[]],

  "Painting|New Install|Residential": [[s("Ventilation Required","Ensure proper airflow",false)],[]],
  "Painting|Repair|Residential": [[s("Check For Lead Paint","Pre-1980 homes may have lead paint",false)],[]],

  "Flooring|New Install|Residential": [[s("Proper Subfloor","Check subfloor condition",true)],[]],
  "Flooring|Repair|Residential": [[s("Check Subfloor","Ensure structural integrity",false)],[]],

  "Windows & Doors|New Install|Residential": [[s("Proper Flashing","Prevents water damage",true)],[p("Building Permit","Building","Windows and doors installation permit",1)]],
  "Windows & Doors|Replacement|Residential": [[s("Proper Flashing","Ensure correct installation",false)],[]],

  "Siding|New Install|Residential": [[s("Proper Flashing","Prevents water damage",true)],[p("Building Permit","Building","Siding installation permit",2)]],
  "Siding|Replacement|Residential": [[s("Proper Installation","Ensure correct attachment",false)],[]],

  "Gutters|New Install|Residential": [[s("Proper Slope","For water drainage",true)],[]],

  "Landscaping|New Install|Residential": [[s("Proper Grading","Grade away from house",false)],[]],

  "Irrigation|New Install|Residential": [[s("Call 811","Locate utilities before digging",true)],[p("Building Permit","Building","Irrigation system installation permit",2)]],

  "Solar|New Install|Residential": [[s("Turn Off Main Breaker","De-energize before work",true)],[p("Electrical Permit","Building","Solar panel electrical permit",5),p("Building Permit","Building","Solar system installation permit",5)]],
  "Solar|Battery Storage|Residential": [[s("Turn Off Main Breaker","De-energize before work",true)],[p("Electrical Permit","Building","Battery storage permit",3)]],

  "Generator|New Install|Residential": [[s("Turn Off Main Breaker","De-energize panel",true),s("Proper Grounding","Required for safety",true)],[p("Electrical Permit","Building","Generator electrical permit",3)]],

  "Fire Suppression|New Install|Residential": [[s("Licensed Professional","Must be certified",true)],[p("Fire Suppression Permit","Building","Fire suppression system permit",10)]],

  "Elevator|New Install|Residential": [[s("Licensed Professional","Certified installer required",true),s("Engineering Required","Professional design and inspection",true)],[p("Elevator Permit","Building","Elevator installation permit",30),p("Building Permit","Building","General building permit",30)]],
  "Elevator|Inspection|Residential": [[s("Annual Inspection","Required safety inspection",true)],[p("Inspection Permit","Building","Elevator inspection",1)]],
  "Elevator|Replacement|Residential": [[s("Licensed Professional","Certified installer required",true)],[p("Elevator Permit","Building","Elevator replacement permit",20)]],

  "Asbestos Removal|Inspection|Residential": [[s("Licensed Inspector","Must be certified asbestos professional",true)],[p("Asbestos Inspection","Health","Asbestos inspection and assessment",5)]],
  "Asbestos Removal|Full Removal|Residential": [[s("Licensed Contractor","Certified asbestos removal contractor required",true),s("EPA Regulations","Follow all EPA asbestos removal rules",true),s("Containment","Proper containment required",true)],[p("Asbestos Removal Permit","Health","Asbestos abatement and removal permit",20)]],
  "Asbestos Removal|Encapsulation|Residential": [[s("Licensed Contractor","Certified professional required",true)],[p("Asbestos Permit","Health","Asbestos encapsulation permit",10)]],
  "Asbestos Removal|Air Testing|Residential": [[s("Licensed Lab","Air quality testing required",true)],[p("Testing Permit","Health","Air quality/asbestos testing",3)]],

  "Lead Abatement|Inspection|Residential": [[s("Licensed Inspector","Certified lead inspector required",true)],[p("Lead Inspection","Health","Lead paint inspection and assessment",3)]],
  "Lead Abatement|Full Removal|Residential": [[s("Licensed Contractor","EPA certified lead contractor required",true),s("Containment","Proper containment required",true)],[p("Lead Abatement Permit","Health","Lead paint removal permit",15)]],
  "Lead Abatement|Encapsulation|Residential": [[s("Licensed Contractor","EPA certified contractor",true)],[p("Lead Permit","Health","Lead paint encapsulation permit",10)]],
  "Lead Abatement|Testing|Residential": [[s("Licensed Lab","EPA approved testing lab",true)],[p("Testing Permit","Health","Lead content testing",5)]],

  "Mold Remediation|Inspection|Residential": [[s("Certified Inspector","Professional mold assessment required",true)],[p("Mold Inspection","Health","Mold inspection and assessment",3)]],
  "Mold Remediation|Full Remediation|Residential": [[s("Licensed Contractor","Certified mold remediation contractor",true),s("Source Identification","Identify and fix moisture source",true)],[p("Mold Remediation Permit","Health","Mold remediation project approval",10)]],
  "Mold Remediation|Air Testing|Residential": [[s("Certified Lab","Air quality testing required",true)],[p("Testing Permit","Health","Air quality/mold spore testing",5)]],
  "Mold Remediation|Prevention|Residential": [[s("Moisture Control","Address moisture sources",true)],[]],

  "Pool & Spa|New Pool|Residential": [[s("Call 811","Locate utilities",true),s("Safety Fencing","4-sided enclosure required",true),s("Health Dept Review","Water quality standards",true)],[p("Building Permit","Building","Pool construction permit",15),p("Health Permit","Health","Pool safety and water quality approval",10)]],
  "Pool & Spa|Spa Install|Residential": [[s("Call 811","Locate utilities",true),s("Electrical Work","Licensed electrician required",true)],[p("Building Permit","Building","Spa installation permit",5),p("Electrical Permit","Building","Electrical connections permit",3)]],
  "Pool & Spa|Fence|Residential": [[s("4-Sided Enclosure","Safety fence required around pool",true)],[p("Building Permit","Building","Pool fence installation permit",3)]],

  "Well & Water|New Well|Residential": [[s("Call 811","Locate utilities",true),s("Health Dept Approval","Well location and construction approval",true),s("Water Testing","Initial water quality test required",true)],[p("Well Permit","Health","Well drilling and construction permit",30),p("Building Permit","Building","Building permit",5)]],
  "Well & Water|Well Repair|Residential": [[s("Professional Assessment","Licensed well contractor required",true)],[p("Well Permit","Health","Well repair approval",5)]],
  "Well & Water|Water Treatment|Residential": [[s("Health Dept Approval","Treatment system must be approved",true)],[p("Health Permit","Health","Water treatment system approval",10)]],
  "Well & Water|Abandonment|Residential": [[s("Professional Abandonment","Must be properly sealed by professional",true)],[p("Well Permit","Health","Well abandonment permit",5)]],

  "Drainage|French Drain|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","French drain installation permit",2)]],
  "Drainage|Catch Basin|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Catch basin installation permit",2)]],
  "Drainage|Dry Well|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Dry well installation permit",2)]],
  "Drainage|Grading|Residential": [[s("Proper Slope","Grade away from structure",true)],[p("Building Permit","Building","Grading permit",1)]],

  "Retaining Wall|New Wall|Residential": [[s("Call 811","Locate utilities",true),s("Proper Drainage","Drainage system required behind wall",true),s("Height Restrictions","Check local height limits",true)],[p("Building Permit","Building","Retaining wall construction permit",5)]],
  "Retaining Wall|Block|Residential": [[s("Call 811","Locate utilities",true),s("Drainage","Install drainage behind wall",true)],[p("Building Permit","Building","Block retaining wall permit",3)]],
  "Retaining Wall|Stone|Residential": [[s("Call 811","Locate utilities",true),s("Drainage","Proper drainage required",true)],[p("Building Permit","Building","Stone retaining wall permit",5)]],
  "Retaining Wall|Timber|Residential": [[s("Call 811","Locate utilities",true),s("Drainage","Install drainage",true),s("Treated Lumber","Use pressure-treated timber",true)],[p("Building Permit","Building","Timber retaining wall permit",3)]],
  "Retaining Wall|Concrete|Residential": [[s("Call 811","Locate utilities",true),s("Drainage","Drainage system required",true)],[p("Building Permit","Building","Concrete retaining wall permit",5)]],

  "Fence|New Install|Residential": [[s("Property Line Verification","Confirm property lines before building",true),s("Call 811","Locate utilities",true)],[p("Fence Permit","Building","Fence construction permit",3)]],
  "Fence|Replacement|Residential": [[s("Property Line Verification","Confirm property lines",true)],[p("Fence Permit","Building","Fence replacement permit",3)]],

  "Shed & Structure|New Install|Residential": [[s("Foundation Required","Proper foundation needed",true),s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Shed/structure construction permit",5)]],
  "Shed & Structure|Replacement|Residential": [[s("Call 811","Locate utilities",true)],[p("Building Permit","Building","Structure replacement permit",5)]],
};

export function getChecklist(trade: string, jobType: string, state: string, city: string): JobChecklist {
  const key = `${trade}|${jobType}|Residential`;
  const data = PERMIT_DATA[key];
  if (!data) return { safetyAlerts: [], permits: [] };
  
  const [safetyAlerts, permits] = data;
  
  // Attach real phone number for CT cities
  const phone = state === "CT" && city ? (CT_PHONES[city] || "") : "";
  const enrichedPermits = permits.map(permit => ({ ...permit, phone }));
  
  return { safetyAlerts, permits: enrichedPermits };
}
