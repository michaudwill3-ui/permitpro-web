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

export const STATE_PHONES: Record<string, Record<string, string>> = {
  CT: {
    "Ansonia":"(203) 736-5940","Avon":"(860) 675-4848","Berlin":"(860) 828-7004","Bethel":"(203) 794-8510","Bloomfield":"(860) 769-3050","Branford":"(203) 488-8355","Bridgeport":"(203) 576-6269","Bristol":"(860) 584-6300","Brookfield":"(203) 740-1842","Canton":"(860) 693-7884","Cheshire":"(203) 272-2743","Clinton":"(860) 669-5560","Colchester":"(860) 537-7219","Coventry":"(860) 742-6751","Cromwell":"(860) 613-4630","Danbury":"(203) 797-4519","Darien":"(203) 656-1815","Derby":"(203) 735-2808","East Haddam":"(860) 873-5017","East Hampton":"(860) 267-4426","East Hartford":"(860) 528-5040","East Haven":"(203) 468-4813","East Lyme":"(860) 739-5964","Enfield":"(860) 763-3407","Fairfield":"(203) 256-3140","Farmington":"(860) 675-2345","Glastonbury":"(860) 652-7712","Granby":"(860) 653-2611","Greenwich":"(203) 622-7744","Groton":"(860) 441-6622","Guilford":"(203) 453-8041","Hamden":"(203) 287-2623","Hartford":"(860) 757-9500","Killingly":"(860) 779-5302","Ledyard":"(860) 464-3200","Lisbon":"(860) 376-7633","Litchfield":"(860) 567-7551","Madison":"(203) 245-5680","Manchester":"(860) 647-3091","Mansfield":"(860) 487-4611","Meriden":"(203) 630-4040","Middletown":"(860) 344-3555","Milford":"(203) 783-3388","Monroe":"(203) 452-2725","Naugatuck":"(203) 729-5701","New Britain":"(860) 826-3370","New Canaan":"(203) 594-5002","New Fairfield":"(203) 312-5670","New Hartford":"(860) 738-6948","New Haven":"(203) 946-8020","New London":"(860) 447-5247","New Milford":"(860) 355-6010","Newington":"(860) 665-7705","Newtown":"(203) 270-4354","Norfolk":"(860) 542-5148","North Branford":"(203) 484-6005","North Haven":"(203) 234-4915","Norwalk":"(203) 854-7888","Norwich":"(860) 823-3795","Old Lyme":"(860) 434-1605","Old Saybrook":"(860) 395-3123","Orange":"(203) 891-4850","Oxford":"(203) 888-0206","Plainfield":"(860) 564-3836","Plainville":"(860) 793-8701","Plymouth":"(860) 283-2019","Portland":"(860) 342-6795","Putnam":"(860) 963-6705","Redding":"(203) 938-2032","Ridgefield":"(203) 894-5312","Rocky Hill":"(860) 721-2620","Seymour":"(203) 888-2529","Shelton":"(203) 924-1555","Simsbury":"(860) 658-3875","Somers":"(860) 749-9022","Southbury":"(203) 262-0709","Southington":"(860) 628-0540","Stafford":"(860) 684-1310","Stamford":"(203) 977-5640","Stonington":"(860) 535-5000","Stratford":"(203) 385-4077","Suffield":"(860) 668-3853","Thomaston":"(860) 283-5120","Thompson":"(860) 923-9550","Tolland":"(860) 870-3061","Torrington":"(860) 496-3520","Trumbull":"(203) 452-5084","Vernon":"(860) 870-3620","Wallingford":"(203) 294-2060","Waterbury":"(203) 574-8081","Waterford":"(860) 444-5810","Watertown":"(860) 274-1212","West Hartford":"(860) 561-7604","West Haven":"(203) 937-3514","Westbrook":"(860) 399-3001","Weston":"(203) 222-2616","Westport":"(203) 341-1155","Wethersfield":"(860) 721-2838","Wilton":"(203) 563-0180","Winchester":"(860) 379-9451","Windham":"(860) 465-3025","Windsor":"(860) 285-1990","Windsor Locks":"(860) 627-1448","Wolcott":"(203) 879-8100","Woodbury":"(203) 263-2141","Woodstock":"(860) 928-6595",
  },
  MA: {
    "Abington":"(781) 982-2118","Acton":"(978) 929-6633","Agawam":"(413) 786-0400","Amesbury":"(978) 388-8118","Amherst":"(413) 259-3040","Andover":"(978) 623-8650","Arlington":"(781) 316-3090","Attleboro":"(508) 223-2222","Auburn":"(508) 832-7720","Barnstable":"(508) 862-4678","Bedford":"(781) 275-1000","Belmont":"(617) 993-2600","Beverly":"(978) 921-6000","Boston":"(617) 635-5300","Braintree":"(781) 794-8232","Brockton":"(508) 580-7123","Brookline":"(617) 730-2090","Burlington":"(781) 270-1600","Cambridge":"(617) 349-6100","Canton":"(781) 821-5008","Chelsea":"(617) 466-4050","Chicopee":"(413) 594-1515","Clinton":"(978) 365-4160","Concord":"(978) 318-3250","Danvers":"(978) 777-0001","Dartmouth":"(508) 910-1800","Dedham":"(781) 751-9150","Dracut":"(978) 452-0982","Easton":"(508) 230-0520","Everett":"(617) 394-2220","Fall River":"(508) 324-2560","Falmouth":"(508) 495-7440","Fitchburg":"(978) 345-9557","Framingham":"(508) 532-5490","Franklin":"(508) 520-4925","Gardner":"(978) 630-4024","Gloucester":"(978) 281-9781","Haverhill":"(978) 374-2360","Holyoke":"(413) 322-5510","Lawrence":"(978) 794-5891","Leominster":"(978) 534-7530","Lexington":"(781) 698-4530","Lowell":"(978) 970-4000","Lynn":"(781) 598-4000","Malden":"(781) 397-7000","Marlborough":"(508) 460-3770","Medford":"(781) 393-2475","Methuen":"(978) 983-8512","Milton":"(617) 898-4886","Natick":"(508) 647-6420","Needham":"(781) 455-7550","New Bedford":"(508) 979-1480","Newton":"(617) 796-1120","North Adams":"(413) 662-3000","Northampton":"(413) 587-1240","Norwood":"(781) 762-1240","Peabody":"(978) 538-5700","Pittsfield":"(413) 499-9366","Plymouth":"(508) 747-1620","Quincy":"(617) 376-1090","Randolph":"(781) 961-0912","Revere":"(781) 286-8180","Salem":"(978) 745-9595","Shrewsbury":"(508) 841-8500","Somerville":"(617) 625-6600","Springfield":"(413) 787-6020","Stoughton":"(781) 341-1300","Taunton":"(508) 821-1000","Tewksbury":"(978) 640-4470","Waltham":"(781) 314-3300","Watertown":"(617) 972-6420","Westfield":"(413) 572-6200","Weymouth":"(781) 335-2000","Woburn":"(781) 897-5800","Worcester":"(508) 799-1180","Wrentham":"(508) 384-5415",
  },
  VT: {
    "Barre":"(802) 476-0245","Bellows Falls":"(802) 463-3964","Bennington":"(802) 442-1037","Brandon":"(802) 247-3622","Brattleboro":"(802) 251-8155","Bristol":"(802) 453-2410","Burlington":"(802) 865-7188","Castleton":"(802) 468-5319","Colchester":"(802) 264-5520","Derby":"(802) 766-4906","Essex":"(802) 878-1345","Hartford":"(802) 295-2785","Middlebury":"(802) 388-8100","Milton":"(802) 893-4111","Montpelier":"(802) 223-9502","Newport":"(802) 334-6720","Randolph":"(802) 728-5433","Rutland":"(802) 773-1800","South Burlington":"(802) 846-4106","Springfield":"(802) 885-2104","St. Albans":"(802) 524-2194","St. Johnsbury":"(802) 748-3926","Swanton":"(802) 868-4341","Waterbury":"(802) 244-8447","White River Junction":"(802) 295-2785","Winooski":"(802) 655-6410","Woodstock":"(802) 457-3456",
  },
  RI: {
    "Barrington":"(401) 247-1900","Bristol":"(401) 253-7000","Burrillville":"(401) 568-4300","Central Falls":"(401) 727-7400","Charlestown":"(401) 364-1200","Coventry":"(401) 822-9100","Cranston":"(401) 780-3120","Cumberland":"(401) 728-2400","East Greenwich":"(401) 886-8625","East Providence":"(401) 435-7500","Johnston":"(401) 553-8800","Lincoln":"(401) 333-1100","Middletown":"(401) 847-0009","Narragansett":"(401) 789-1044","Newport":"(401) 845-5300","North Kingstown":"(401) 294-3331","North Providence":"(401) 232-0900","Pawtucket":"(401) 728-0500","Portsmouth":"(401) 683-3255","Providence":"(401) 680-5500","Smithfield":"(401) 949-4700","South Kingstown":"(401) 789-9331","Tiverton":"(401) 625-6700","Warren":"(401) 245-7340","Warwick":"(401) 738-2000","West Warwick":"(401) 822-9200","Westerly":"(401) 348-2500","Woonsocket":"(401) 762-6400",
  },
  NH: {
    "Amherst":"(603) 673-6041","Bedford":"(603) 472-5242","Berlin":"(603) 752-7532","Bow":"(603) 228-1187","Claremont":"(603) 542-7003","Concord":"(603) 225-8550","Conway":"(603) 447-3811","Derry":"(603) 432-6100","Dover":"(603) 516-6010","Durham":"(603) 868-5571","Exeter":"(603) 772-4709","Franklin":"(603) 934-3900","Gilford":"(603) 527-4700","Goffstown":"(603) 497-8987","Hampton":"(603) 926-6766","Hanover":"(603) 643-0742","Hooksett":"(603) 485-8472","Hudson":"(603) 886-6000","Keene":"(603) 357-9800","Laconia":"(603) 527-1267","Lebanon":"(603) 448-3054","Londonderry":"(603) 432-1100","Manchester":"(603) 624-6450","Merrimack":"(603) 424-5136","Milford":"(603) 249-0600","Nashua":"(603) 589-3090","Newmarket":"(603) 659-3617","Pelham":"(603) 635-8517","Portsmouth":"(603) 610-7216","Raymond":"(603) 895-4735","Rochester":"(603) 332-1167","Salem":"(603) 890-2000","Somersworth":"(603) 692-4262","Windham":"(603) 434-5075","Wolfeboro":"(603) 569-5328",
  },
  ME: {
    "Auburn":"(207) 333-6601","Augusta":"(207) 626-2349","Bangor":"(207) 992-4280","Bath":"(207) 443-8340","Belfast":"(207) 338-3370","Biddeford":"(207) 284-9115","Brewer":"(207) 989-7500","Brunswick":"(207) 725-6650","Calais":"(207) 454-2521","Camden":"(207) 236-3353","Caribou":"(207) 493-3324","Ellsworth":"(207) 667-2563","Falmouth":"(207) 781-5253","Farmington":"(207) 778-6538","Gorham":"(207) 222-1620","Hallowell":"(207) 623-4021","Houlton":"(207) 532-7111","Kennebunk":"(207) 985-2102","Kittery":"(207) 475-1303","Lewiston":"(207) 784-2951","Millinocket":"(207) 723-7000","Old Town":"(207) 827-3965","Portland":"(207) 874-8703","Presque Isle":"(207) 760-2785","Rockland":"(207) 594-0318","Saco":"(207) 282-4191","Sanford":"(207) 324-9173","Scarborough":"(207) 730-4040","Skowhegan":"(207) 474-6905","South Portland":"(207) 767-7604","Waterville":"(207) 680-4730","Wells":"(207) 646-5113","Westbrook":"(207) 854-0638","Windham":"(207) 892-1906","Yarmouth":"(207) 846-9036","York":"(207) 363-1000",
  },
  NY: {
    "Albany":"(518) 434-5995","Amsterdam":"(518) 841-4390","Auburn":"(315) 255-4125","Binghamton":"(607) 772-7028","Buffalo":"(716) 851-5500","Canandaigua":"(585) 396-5010","Cohoes":"(518) 233-2139","Corning":"(607) 962-0340","Cortland":"(607) 428-7431","Dunkirk":"(716) 366-9858","Elmira":"(607) 737-5651","Freeport":"(516) 377-2200","Fulton":"(315) 593-8400","Geneva":"(315) 789-2255","Glen Cove":"(516) 676-2004","Glens Falls":"(518) 761-3833","Hempstead":"(516) 489-5000","Hornell":"(607) 324-7421","Hudson":"(518) 828-7033","Ithaca":"(607) 274-6508","Jamestown":"(716) 483-7612","Kingston":"(845) 334-3900","Lackawanna":"(716) 827-6565","Lockport":"(716) 439-6676","Long Beach":"(516) 431-1014","Middletown":"(845) 346-4100","Mount Vernon":"(914) 665-2300","New Rochelle":"(914) 654-2185","New York City":"(212) 566-5000","Newburgh":"(845) 569-7380","Niagara Falls":"(716) 286-4490","Norwich":"(607) 334-1234","Ogdensburg":"(315) 393-7150","Olean":"(716) 376-5647","Oneonta":"(607) 432-6450","Oswego":"(315) 342-8159","Peekskill":"(914) 737-3400","Plattsburgh":"(518) 563-7701","Poughkeepsie":"(845) 451-4000","Rochester":"(585) 428-7000","Rome":"(315) 339-7676","Saratoga Springs":"(518) 587-3550","Schenectady":"(518) 382-5050","Syracuse":"(315) 448-8695","Troy":"(518) 270-4530","Utica":"(315) 792-0181","Watertown":"(315) 785-7760","White Plains":"(914) 422-1200","Yonkers":"(914) 377-6500",
  },
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

  const statePhones = STATE_PHONES[state] || {};
  const phone = city ? (statePhones[city] || "") : "";
  const enrichedPermits = permits.map(permit => ({ ...permit, phone }));

  return { safetyAlerts, permits: enrichedPermits };
}