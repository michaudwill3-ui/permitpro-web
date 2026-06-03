export interface DeptPhones {
  health?: string;
  publicWorks?: string;
  planning?: string;
  fireMarshal?: string;
  conservation?: string;
  dep?: string;
}

export const CITY_TO_COUNTY: Record<string, Record<string, string>> = {
  CT: {
    "Ansonia":"New Haven","Avon":"Hartford","Berlin":"Hartford","Bethel":"Fairfield",
    "Bloomfield":"Hartford","Branford":"New Haven","Bridgeport":"Fairfield",
    "Bristol":"Hartford","Brookfield":"Fairfield","Canton":"Hartford","Cheshire":"New Haven",
    "Clinton":"Middlesex","Colchester":"New London","Coventry":"Tolland","Cromwell":"Middlesex",
    "Danbury":"Fairfield","Darien":"Fairfield","Derby":"New Haven","East Haddam":"Middlesex",
    "East Hampton":"Middlesex","East Hartford":"Hartford","East Haven":"New Haven",
    "East Lyme":"New London","Enfield":"Hartford","Fairfield":"Fairfield",
    "Farmington":"Hartford","Glastonbury":"Hartford","Granby":"Hartford","Greenwich":"Fairfield",
    "Groton":"New London","Guilford":"New Haven","Hamden":"New Haven","Hartford":"Hartford",
    "Killingly":"Windham","Ledyard":"New London","Lisbon":"New London","Litchfield":"Litchfield",
    "Madison":"New Haven","Manchester":"Hartford","Mansfield":"Tolland","Meriden":"New Haven",
    "Middletown":"Middlesex","Milford":"New Haven","Monroe":"Fairfield","Naugatuck":"New Haven",
    "New Britain":"Hartford","New Canaan":"Fairfield","New Fairfield":"Fairfield",
    "New Hartford":"Litchfield","New Haven":"New Haven","New London":"New London",
    "New Milford":"Litchfield","Newington":"Hartford","Newtown":"Fairfield","Norfolk":"Litchfield",
    "North Branford":"New Haven","North Haven":"New Haven","Norwalk":"Fairfield",
    "Norwich":"New London","Old Lyme":"New London","Old Saybrook":"Middlesex","Orange":"New Haven",
    "Oxford":"New Haven","Plainfield":"Windham","Plainville":"Hartford","Plymouth":"Litchfield",
    "Portland":"Middlesex","Putnam":"Windham","Redding":"Fairfield","Ridgefield":"Fairfield",
    "Rocky Hill":"Hartford","Seymour":"New Haven","Shelton":"Fairfield","Simsbury":"Hartford",
    "Somers":"Tolland","Southbury":"New Haven","Southington":"Hartford","Stafford":"Tolland",
    "Stamford":"Fairfield","Stonington":"New London","Stratford":"Fairfield","Suffield":"Hartford",
    "Thomaston":"Litchfield","Thompson":"Windham","Tolland":"Tolland","Torrington":"Litchfield",
    "Trumbull":"Fairfield","Vernon":"Tolland","Wallingford":"New Haven","Waterbury":"New Haven",
    "Waterford":"New London","Watertown":"Litchfield","West Hartford":"Hartford",
    "West Haven":"New Haven","Westbrook":"Middlesex","Weston":"Fairfield","Westport":"Fairfield",
    "Wethersfield":"Hartford","Wilton":"Fairfield","Winchester":"Litchfield","Windham":"Windham",
    "Windsor":"Hartford","Windsor Locks":"Hartford","Wolcott":"New Haven","Woodbury":"Litchfield",
    "Woodstock":"Windham",
  },
  MA: {
    "Abington":"Plymouth","Acton":"Middlesex","Agawam":"Hampden","Amesbury":"Essex",
    "Amherst":"Hampshire","Andover":"Essex","Arlington":"Middlesex","Attleboro":"Bristol",
    "Auburn":"Worcester","Barnstable":"Barnstable","Bedford":"Middlesex","Belmont":"Middlesex",
    "Beverly":"Essex","Boston":"Suffolk","Braintree":"Norfolk","Brockton":"Plymouth",
    "Brookline":"Norfolk","Burlington":"Middlesex","Cambridge":"Middlesex","Canton":"Norfolk",
    "Chelsea":"Suffolk","Chicopee":"Hampden","Clinton":"Worcester","Concord":"Middlesex",
    "Danvers":"Essex","Dartmouth":"Bristol","Dedham":"Norfolk","Dracut":"Middlesex",
    "Easton":"Bristol","Everett":"Middlesex","Fall River":"Bristol","Falmouth":"Barnstable",
    "Fitchburg":"Worcester","Framingham":"Middlesex","Franklin":"Norfolk","Gardner":"Worcester",
    "Gloucester":"Essex","Haverhill":"Essex","Holyoke":"Hampden","Lawrence":"Essex",
    "Leominster":"Worcester","Lexington":"Middlesex","Lowell":"Middlesex","Lynn":"Essex",
    "Malden":"Middlesex","Marlborough":"Middlesex","Medford":"Middlesex","Methuen":"Essex",
    "Milton":"Norfolk","Natick":"Middlesex","Needham":"Norfolk","New Bedford":"Bristol",
    "Newton":"Middlesex","North Adams":"Berkshire","Northampton":"Hampshire","Norwood":"Norfolk",
    "Peabody":"Essex","Pittsfield":"Berkshire","Plymouth":"Plymouth","Quincy":"Norfolk",
    "Randolph":"Norfolk","Revere":"Suffolk","Salem":"Essex","Shrewsbury":"Worcester",
    "Somerville":"Middlesex","Springfield":"Hampden","Stoughton":"Norfolk","Taunton":"Bristol",
    "Tewksbury":"Middlesex","Waltham":"Middlesex","Watertown":"Middlesex","Westfield":"Hampden",
    "Weymouth":"Norfolk","Woburn":"Middlesex","Worcester":"Worcester","Wrentham":"Norfolk",
  },
  RI: {
    "Barrington":"Bristol","Bristol":"Bristol","Burrillville":"Providence","Central Falls":"Providence",
    "Charlestown":"Washington","Coventry":"Kent","Cranston":"Providence","Cumberland":"Providence",
    "East Greenwich":"Kent","East Providence":"Providence","Exeter":"Washington","Foster":"Providence",
    "Glocester":"Providence","Hopkinton":"Washington","Jamestown":"Newport","Johnston":"Providence",
    "Lincoln":"Providence","Little Compton":"Newport","Middletown":"Newport","Narragansett":"Washington",
    "Newport":"Newport","New Shoreham":"Washington","North Kingstown":"Washington",
    "North Providence":"Providence","North Smithfield":"Providence","Pawtucket":"Providence",
    "Portsmouth":"Newport","Providence":"Providence","Richmond":"Washington","Scituate":"Providence",
    "Smithfield":"Providence","South Kingstown":"Washington","Tiverton":"Newport","Warren":"Bristol",
    "Warwick":"Kent","West Greenwich":"Kent","West Warwick":"Kent","Westerly":"Washington",
    "Woonsocket":"Providence",
  },
  NH: {
    "Amherst":"Hillsborough","Bedford":"Hillsborough","Berlin":"Coös","Bow":"Merrimack",
    "Claremont":"Sullivan","Concord":"Merrimack","Conway":"Carroll","Derry":"Rockingham",
    "Dover":"Strafford","Durham":"Strafford","Exeter":"Rockingham","Franklin":"Merrimack",
    "Gilford":"Belknap","Goffstown":"Hillsborough","Hampton":"Rockingham","Hanover":"Grafton",
    "Hooksett":"Merrimack","Hudson":"Hillsborough","Keene":"Cheshire","Laconia":"Belknap",
    "Lebanon":"Grafton","Londonderry":"Rockingham","Manchester":"Hillsborough","Merrimack":"Hillsborough",
    "Milford":"Hillsborough","Nashua":"Hillsborough","Newmarket":"Rockingham","Pelham":"Hillsborough",
    "Portsmouth":"Rockingham","Raymond":"Rockingham","Rochester":"Strafford","Salem":"Rockingham",
    "Somersworth":"Strafford","Windham":"Rockingham","Wolfeboro":"Carroll",
  },
  ME: {
    "Auburn":"Androscoggin","Augusta":"Kennebec","Bangor":"Penobscot","Bath":"Sagadahoc",
    "Belfast":"Waldo","Biddeford":"York","Brewer":"Penobscot","Brunswick":"Cumberland",
    "Calais":"Washington","Camden":"Knox","Caribou":"Aroostook","Ellsworth":"Hancock",
    "Falmouth":"Cumberland","Farmington":"Franklin","Gorham":"Cumberland","Hallowell":"Kennebec",
    "Houlton":"Aroostook","Kennebunk":"York","Kittery":"York","Lewiston":"Androscoggin",
    "Millinocket":"Penobscot","Old Town":"Penobscot","Portland":"Cumberland","Presque Isle":"Aroostook",
    "Rockland":"Knox","Saco":"York","Sanford":"York","Scarborough":"Cumberland","Skowhegan":"Somerset",
    "South Portland":"Cumberland","Waterville":"Kennebec","Wells":"York","Westbrook":"Cumberland",
    "Windham":"Cumberland","Yarmouth":"Cumberland","York":"York",
  },
  VT: {
    "Barre":"Washington","Bellows Falls":"Windham","Bennington":"Bennington","Brandon":"Rutland",
    "Brattleboro":"Windham","Bristol":"Addison","Burlington":"Chittenden","Castleton":"Rutland",
    "Colchester":"Chittenden","Derby":"Orleans","Essex":"Chittenden","Hartford":"Windsor",
    "Middlebury":"Addison","Milton":"Chittenden","Montpelier":"Washington","Newport":"Orleans",
    "Randolph":"Orange","Rutland":"Rutland","South Burlington":"Chittenden","Springfield":"Windsor",
    "St. Albans":"Franklin","St. Johnsbury":"Caledonia","Swanton":"Franklin","Waterbury":"Washington",
    "White River Junction":"Windsor","Winooski":"Chittenden","Woodstock":"Windsor",
  },
  FL: {
    "Alachua":"Alachua","Altamonte Springs":"Seminole","Apopka":"Orange","Aventura":"Miami-Dade","Bartow":"Polk","Belle Glade":"Palm Beach","Boca Raton":"Palm Beach","Boynton Beach":"Palm Beach","Bradenton":"Manatee","Brooksville":"Hernando","Cape Coral":"Lee","Clearwater":"Pinellas","Clermont":"Lake","Cocoa":"Brevard","Coral Gables":"Miami-Dade","Coral Springs":"Broward","Crestview":"Okaloosa","Dania Beach":"Broward","Davie":"Broward","Daytona Beach":"Volusia","Deerfield Beach":"Broward","Delray Beach":"Palm Beach","Deltona":"Volusia","Doral":"Miami-Dade","Dunedin":"Pinellas","Edgewater":"Volusia","Eustis":"Lake","Fort Lauderdale":"Broward","Fort Myers":"Lee","Fort Pierce":"St. Lucie","Fort Walton Beach":"Okaloosa","Gainesville":"Alachua","Greenacres":"Palm Beach","Hallandale Beach":"Broward","Hialeah":"Miami-Dade","Hollywood":"Broward","Homestead":"Miami-Dade","Jacksonville":"Duval","Jupiter":"Palm Beach","Key West":"Monroe","Kissimmee":"Osceola","Lake City":"Columbia","Lake Worth":"Palm Beach","Lakeland":"Polk","Largo":"Pinellas","Lauderhill":"Broward","Leesburg":"Lake","Margate":"Broward","Melbourne":"Brevard","Miami":"Miami-Dade","Miami Beach":"Miami-Dade","Miami Gardens":"Miami-Dade","Miramar":"Broward","Naples":"Collier","New Smyrna Beach":"Volusia","North Miami":"Miami-Dade","North Miami Beach":"Miami-Dade","North Port":"Sarasota","Ocala":"Marion","Orlando":"Orange","Ormond Beach":"Volusia","Oviedo":"Seminole","Palm Bay":"Brevard","Palm Beach Gardens":"Palm Beach","Palm Coast":"Flagler","Panama City":"Bay","Pembroke Pines":"Broward","Pensacola":"Escambia","Pinellas Park":"Pinellas","Plant City":"Hillsborough","Plantation":"Broward","Pompano Beach":"Broward","Port Orange":"Volusia","Port St. Lucie":"St. Lucie","Riviera Beach":"Palm Beach","Sanford":"Seminole","Sarasota":"Sarasota","Sebastian":"Indian River","St. Augustine":"St. Johns","St. Cloud":"Osceola","St. Petersburg":"Pinellas","Sunrise":"Broward","Tallahassee":"Leon","Tamarac":"Broward","Tampa":"Hillsborough","Titusville":"Brevard","Venice":"Sarasota","Vero Beach":"Indian River","Wellington":"Palm Beach","West Palm Beach":"Palm Beach","Weston":"Broward","Winter Garden":"Orange","Winter Haven":"Polk","Winter Park":"Orange","Winter Springs":"Seminole",
  },
  NY: {
    "Albany":"Albany","Amsterdam":"Montgomery","Auburn":"Cayuga","Binghamton":"Broome",
    "Buffalo":"Erie","Canandaigua":"Ontario","Cohoes":"Albany","Corning":"Steuben",
    "Cortland":"Cortland","Dunkirk":"Chautauqua","Elmira":"Chemung","Freeport":"Nassau",
    "Fulton":"Oswego","Geneva":"Ontario","Glen Cove":"Nassau","Glens Falls":"Warren",
    "Hempstead":"Nassau","Hornell":"Steuben","Hudson":"Columbia","Ithaca":"Tompkins",
    "Jamestown":"Chautauqua","Kingston":"Ulster","Lackawanna":"Erie","Lockport":"Niagara",
    "Long Beach":"Nassau","Middletown":"Orange","Mount Vernon":"Westchester","New Rochelle":"Westchester",
    "New York City":"New York","Newburgh":"Orange","Niagara Falls":"Niagara","Norwich":"Chenango",
    "Ogdensburg":"St. Lawrence","Olean":"Cattaraugus","Oneonta":"Otsego","Oswego":"Oswego",
    "Peekskill":"Westchester","Plattsburgh":"Clinton","Poughkeepsie":"Dutchess","Rochester":"Monroe",
    "Rome":"Oneida","Saratoga Springs":"Saratoga","Schenectady":"Schenectady","Syracuse":"Onondaga",
    "Troy":"Rensselaer","Utica":"Oneida","Watertown":"Jefferson","White Plains":"Westchester",
    "Yonkers":"Westchester",
  },
};

export const COUNTY_HEALTH_PHONES: Record<string, Record<string, string>> = {
  CT: {
    "Fairfield":"(203) 622-3600","Hartford":"(860) 509-7900","New Haven":"(203) 946-7097",
    "New London":"(860) 447-5322","Middlesex":"(860) 346-9113","Tolland":"(860) 875-3731",
    "Windham":"(860) 928-6541","Litchfield":"(860) 567-8302",
  },
  MA: {
    "Barnstable":"(508) 375-6609","Berkshire":"(413) 443-3101","Bristol":"(508) 880-4888",
    "Essex":"(978) 282-4130","Franklin":"(413) 774-3167","Hampden":"(413) 452-2210",
    "Hampshire":"(413) 586-4498","Middlesex":"(617) 983-6800","Norfolk":"(781) 433-1390",
    "Plymouth":"(508) 746-2000","Suffolk":"(617) 534-5395","Worcester":"(508) 929-3700",
  },
  RI: {
    "Bristol":"(401) 253-7000","Kent":"(401) 222-5960","Newport":"(401) 845-5300",
    "Providence":"(401) 222-5960","Washington":"(401) 789-0398",
  },
  NH: {
    "Belknap":"(603) 527-5400","Carroll":"(603) 539-2284","Cheshire":"(603) 352-4232",
    "Coös":"(603) 788-4417","Grafton":"(603) 787-6370","Hillsborough":"(603) 594-3450",
    "Merrimack":"(603) 796-6600","Rockingham":"(603) 679-9350","Strafford":"(603) 742-5607",
    "Sullivan":"(603) 542-9700",
  },
  ME: {
    "Androscoggin":"(207) 795-4411","Aroostook":"(207) 764-3783","Cumberland":"(207) 871-8480",
    "Franklin":"(207) 778-5990","Hancock":"(207) 667-8400","Kennebec":"(207) 626-5178",
    "Knox":"(207) 594-7641","Lincoln":"(207) 882-7396","Oxford":"(207) 743-0505",
    "Penobscot":"(207) 941-3000","Piscataquis":"(207) 564-3322","Sagadahoc":"(207) 443-8330",
    "Somerset":"(207) 474-4510","Waldo":"(207) 338-2258","Washington":"(207) 255-3040",
    "York":"(207) 324-1502",
  },
  VT: {
    "Addison":"(802) 388-4644","Bennington":"(802) 447-3011","Caledonia":"(802) 748-5171",
    "Chittenden":"(802) 863-7323","Essex":"(802) 334-6707","Franklin":"(802) 524-7970",
    "Grand Isle":"(802) 372-5552","Lamoille":"(802) 888-3386","Orange":"(802) 685-4820",
    "Orleans":"(802) 334-6707","Rutland":"(802) 786-5826","Washington":"(802) 223-2340",
    "Windham":"(802) 257-2880","Windsor":"(802) 674-7366",
  },
  FL: {
    "Alachua":"(352) 334-7900","Bay":"(850) 872-4455","Brevard":"(321) 633-2100","Broward":"(954) 467-4700","Charlotte":"(941) 624-7200","Citrus":"(352) 527-0068","Clay":"(904) 278-7550","Collier":"(239) 252-8200","Columbia":"(386) 758-1068","Duval":"(904) 253-1000","Escambia":"(850) 595-6500","Flagler":"(386) 437-7350","Hernando":"(352) 540-6800","Hillsborough":"(813) 307-8000","Indian River":"(772) 794-7400","Lake":"(352) 253-4900","Lee":"(239) 690-2100","Leon":"(850) 606-8000","Manatee":"(941) 748-0747","Marion":"(352) 629-0137","Miami-Dade":"(305) 324-2400","Monroe":"(305) 293-7500","Okaloosa":"(850) 689-7724","Orange":"(407) 858-1400","Osceola":"(407) 343-2000","Palm Beach":"(561) 840-4500","Pinellas":"(727) 824-6900","Polk":"(863) 519-8208","Sarasota":"(941) 861-2900","Seminole":"(407) 665-3000","St. Johns":"(904) 824-6000","St. Lucie":"(772) 462-3800","Volusia":"(386) 274-0629",
  },
  NY: {
    "Albany":"(518) 447-4580","Allegany":"(585) 268-9250","Broome":"(607) 778-3911",
    "Cattaraugus":"(716) 938-9111","Cayuga":"(315) 253-1560","Chautauqua":"(716) 753-4481",
    "Chemung":"(607) 737-2028","Chenango":"(607) 337-1660","Clinton":"(518) 565-4870",
    "Columbia":"(518) 828-3358","Cortland":"(607) 753-5036","Dutchess":"(845) 486-3400",
    "Erie":"(716) 858-6901","Essex":"(518) 873-3500","Franklin":"(518) 481-1800",
    "Fulton":"(518) 736-5720","Genesee":"(585) 344-2580","Greene":"(518) 719-3600",
    "Herkimer":"(315) 867-1176","Jefferson":"(315) 786-3720","Lewis":"(315) 376-5453",
    "Livingston":"(585) 243-7280","Madison":"(315) 366-2361","Monroe":"(585) 753-5000",
    "Montgomery":"(518) 843-2300","Nassau":"(516) 227-9620","New York":"(212) 442-9666",
    "Niagara":"(716) 439-7444","Oneida":"(315) 798-5064","Onondaga":"(315) 435-3251",
    "Ontario":"(585) 396-4343","Orange":"(845) 615-0600","Orleans":"(585) 589-3278",
    "Oswego":"(315) 349-3547","Otsego":"(607) 547-4230","Putnam":"(845) 808-1390",
    "Rensselaer":"(518) 270-2655","Rockland":"(845) 364-2500","St. Lawrence":"(315) 386-2325",
    "Saratoga":"(518) 584-7460","Schenectady":"(518) 386-2810","Schoharie":"(518) 295-8316",
    "Steuben":"(607) 664-2438","Suffolk":"(631) 853-3055","Sullivan":"(845) 292-5910",
    "Tioga":"(607) 687-8600","Tompkins":"(607) 274-6600","Ulster":"(845) 340-3150",
    "Warren":"(518) 761-6580","Washington":"(518) 746-2400","Wayne":"(315) 946-5749",
    "Westchester":"(914) 813-5000","Wyoming":"(585) 786-8890","Yates":"(315) 536-5160",
  },
};

export const PUBLIC_WORKS_PHONES: Record<string, Record<string, string>> = {
  CT: {
    "Fairfield":"(203) 256-3050","Hartford":"(860) 757-9800","New Haven":"(203) 946-8099",
    "New London":"(860) 447-5200","Middlesex":"(860) 344-3473","Tolland":"(860) 875-2000",
    "Windham":"(860) 465-3015","Litchfield":"(860) 567-7222",
  },
  MA: {
    "Barnstable":"(508) 862-4000","Berkshire":"(413) 499-9371","Bristol":"(508) 583-8110",
    "Essex":"(978) 741-1900","Hampden":"(413) 452-2240","Middlesex":"(617) 349-4800",
    "Norfolk":"(617) 734-1234","Plymouth":"(508) 830-9100","Suffolk":"(617) 635-4900",
    "Worcester":"(508) 929-1300",
  },
  RI: {
    "Providence":"(401) 421-7740","Kent":"(401) 822-9200","Newport":"(401) 845-5400",
    "Bristol":"(401) 253-7000","Washington":"(401) 789-9331",
  },
  NH: {
    "Hillsborough":"(603) 627-5600","Rockingham":"(603) 772-4424","Merrimack":"(603) 228-3391",
    "Strafford":"(603) 742-1458","Cheshire":"(603) 352-8310","Grafton":"(603) 787-6941",
    "Belknap":"(603) 527-5400","Carroll":"(603) 539-4123",
  },
  ME: {
    "Cumberland":"(207) 871-8380","York":"(207) 324-1571","Kennebec":"(207) 626-2345",
    "Penobscot":"(207) 942-8535","Androscoggin":"(207) 784-8360","Sagadahoc":"(207) 443-8200",
    "Knox":"(207) 596-2900","Waldo":"(207) 338-3790","Somerset":"(207) 474-9861",
  },
  VT: {
    "Chittenden":"(802) 863-3582","Washington":"(802) 476-0200","Windham":"(802) 254-5936",
    "Rutland":"(802) 775-4274","Windsor":"(802) 885-4501","Addison":"(802) 388-6724",
    "Franklin":"(802) 524-3341","Bennington":"(802) 442-6321",
  },
  FL: {
    "Alachua":"(352) 374-5245","Bay":"(850) 248-8470","Brevard":"(321) 633-2054","Broward":"(954) 831-4000","Charlotte":"(941) 764-4940","Collier":"(239) 252-8192","Duval":"(904) 630-2489","Escambia":"(850) 595-3490","Hillsborough":"(813) 272-5977","Lake":"(352) 343-9760","Lee":"(239) 533-8000","Leon":"(850) 606-1500","Manatee":"(941) 708-7450","Marion":"(352) 671-8686","Miami-Dade":"(305) 375-2090","Orange":"(407) 836-7900","Osceola":"(407) 742-0200","Palm Beach":"(561) 684-4000","Pinellas":"(727) 464-4751","Polk":"(863) 534-6090","Sarasota":"(941) 861-5000","Seminole":"(407) 665-5600","St. Johns":"(904) 209-0120","St. Lucie":"(772) 462-1707","Volusia":"(386) 736-5953",
  },
  NY: {
    "Albany":"(518) 434-5780","Erie":"(716) 858-6800","Monroe":"(585) 753-7700",
    "Nassau":"(516) 571-6900","Onondaga":"(315) 435-3460","Suffolk":"(631) 852-4000",
    "Westchester":"(914) 995-4321","Dutchess":"(845) 486-3900","Orange":"(845) 291-2700",
    "Rockland":"(845) 364-2670","Ulster":"(845) 340-3455","Saratoga":"(518) 884-4700",
    "Rensselaer":"(518) 270-2930","Schenectady":"(518) 388-4500","Broome":"(607) 778-2168",
    "Niagara":"(716) 439-7027","Oneida":"(315) 798-5715","Chemung":"(607) 737-2067",
    "Tompkins":"(607) 274-5560","Warren":"(518) 761-6566",
  },
};

export const STATE_DEP_PHONES: Record<string, string> = {
  CT: "(860) 424-3000",
  MA: "(617) 292-5500",
  VT: "(802) 828-1535",
  RI: "(401) 222-4700",
  NH: "(603) 271-3503",
  ME: "(207) 287-7688",
  FL: "(850) 245-2118",
  NY: "(518) 402-8545",
};

export const STATE_FIRE_MARSHAL_PHONES: Record<string, string> = {
  CT: "(860) 685-8970",
  MA: "(978) 567-3100",
  VT: "(802) 479-7561",
  RI: "(401) 462-0577",
  NH: "(603) 223-4289",
  ME: "(207) 626-3880",
  FL: "(850) 413-3601",
  NY: "(518) 474-6746",
};

export const ARMY_CORPS_PHONES: Record<string, string> = {
  CT: "(978) 318-8238",
  MA: "(978) 318-8238",
  VT: "(978) 318-8238",
  RI: "(978) 318-8238",
  NH: "(978) 318-8238",
  ME: "(978) 318-8238",
  FL: "(904) 232-2241",
  NY: "(917) 790-8000",
};

export const EPA_PHONES: Record<string, string> = {
  CT: "(888) 372-7341",
  MA: "(888) 372-7341",
  VT: "(888) 372-7341",
  RI: "(888) 372-7341",
  NH: "(888) 372-7341",
  ME: "(888) 372-7341",
  FL: "(404) 562-9900",
  NY: "(212) 637-3000",
};

export const PLANNING_PHONES: Record<string, Record<string, string>> = {
  CT: {
    "Bridgeport":"(203) 576-7221","Danbury":"(203) 797-4524","Greenwich":"(203) 622-7894",
    "Hartford":"(860) 757-9040","Milford":"(203) 783-3370","New Haven":"(203) 946-7839",
    "New London":"(860) 447-5204","Norwalk":"(203) 854-7770","Stamford":"(203) 977-4516",
    "Waterbury":"(203) 574-6817","Shelton":"(203) 924-1555","Torrington":"(860) 489-2228",
    "West Hartford":"(860) 561-7520","Westport":"(203) 341-1080","Glastonbury":"(860) 652-7720",
  },
  MA: {
    "Boston":"(617) 635-4470","Cambridge":"(617) 349-4300","Springfield":"(413) 787-6020",
    "Worcester":"(508) 799-1400","Lowell":"(978) 674-4144","Newton":"(617) 796-1120",
    "Quincy":"(617) 376-1090","Brockton":"(508) 580-7130","Fall River":"(508) 324-2100",
    "New Bedford":"(508) 979-1488","Lynn":"(781) 598-4000","Somerville":"(617) 625-6600",
    "Lawrence":"(978) 794-5891","Framingham":"(508) 532-5400","Haverhill":"(978) 374-2395",
  },
  RI: {
    "Providence":"(401) 421-7740","Cranston":"(401) 461-1000","Warwick":"(401) 738-2000",
    "Pawtucket":"(401) 728-0500","East Providence":"(401) 435-7500","Woonsocket":"(401) 762-6400",
    "Newport":"(401) 845-5490","Central Falls":"(401) 727-7400","North Providence":"(401) 232-0900",
  },
  NH: {
    "Manchester":"(603) 624-6450","Nashua":"(603) 589-3090","Concord":"(603) 225-8595",
    "Dover":"(603) 516-6008","Portsmouth":"(603) 610-7216","Salem":"(603) 890-2000",
    "Derry":"(603) 432-6100","Rochester":"(603) 332-1167","Keene":"(603) 352-0133",
  },
  ME: {
    "Portland":"(207) 874-8711","Lewiston":"(207) 784-2951","Bangor":"(207) 992-4280",
    "South Portland":"(207) 767-7650","Auburn":"(207) 333-6601","Biddeford":"(207) 284-9116",
    "Sanford":"(207) 324-9173","Augusta":"(207) 626-2336","Saco":"(207) 282-3487",
  },
  VT: {
    "Burlington":"(802) 865-7144","South Burlington":"(802) 846-4106","Rutland":"(802) 773-1800",
    "Barre":"(802) 476-0245","Montpelier":"(802) 223-9502","St. Albans":"(802) 524-2194",
    "Winooski":"(802) 655-6410","Newport":"(802) 334-6720","Vergennes":"(802) 877-2841",
  },
  FL: {
    "Jacksonville":"(904) 255-7800","Miami":"(305) 416-1400","Tampa":"(813) 274-8211","Orlando":"(407) 246-2269","St. Petersburg":"(727) 893-7422","Hialeah":"(305) 883-5830","Tallahassee":"(850) 891-6550","Fort Lauderdale":"(954) 828-6520","Cape Coral":"(239) 574-0553","Pembroke Pines":"(954) 435-6510","Hollywood":"(954) 967-4200","Miramar":"(954) 602-3200","Gainesville":"(352) 334-5045","Coral Springs":"(954) 344-1130","West Palm Beach":"(561) 822-1510","Clearwater":"(727) 562-4741","Pompano Beach":"(954) 786-4661","Lakeland":"(863) 834-6011","Davie":"(954) 797-1056","Boca Raton":"(561) 393-7750",
  },
  NY: {
    "New York City":"(212) 720-3300","Buffalo":"(716) 851-5555","Rochester":"(585) 428-7110",
    "Yonkers":"(914) 377-6020","Syracuse":"(315) 448-8640","Albany":"(518) 434-2532",
    "New Rochelle":"(914) 654-2185","Mount Vernon":"(914) 665-2300","Schenectady":"(518) 382-5147",
    "Utica":"(315) 792-0181","White Plains":"(914) 422-1227","Troy":"(518) 270-4614",
    "Niagara Falls":"(716) 286-4477","Ithaca":"(607) 274-6550","Binghamton":"(607) 772-7028",
  },
};

export function getDeptPhone(department: string, state: string, city: string): string {
  const county = CITY_TO_COUNTY[state]?.[city] || "";
  const dept = department.toLowerCase();

  if (dept.includes("building")) return "";
  if (dept.includes("health")) return COUNTY_HEALTH_PHONES[state]?.[county] || "";
  if (dept.includes("public works") || dept.includes("dpw") || dept.includes("engineering")) return PUBLIC_WORKS_PHONES[state]?.[county] || "";
  if (dept.includes("dep") || dept.includes("coastal") || dept.includes("conservation") || dept.includes("environmental") || dept.includes("wetland")) return STATE_DEP_PHONES[state] || "";
  if (dept.includes("fire")) return STATE_FIRE_MARSHAL_PHONES[state] || "";
  if (dept.includes("army") || dept.includes("corps")) return ARMY_CORPS_PHONES[state] || "";
  if (dept.includes("epa")) return EPA_PHONES[state] || "";
  if (dept.includes("planning") || dept.includes("zoning")) return PLANNING_PHONES[state]?.[city] || "";

  return "";
}