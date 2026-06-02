export interface MaterialSpec {
  item: string;
  spec: string;
  code?: string;
}

export const MATERIALS: Record<string, MaterialSpec[]> = {
  // PLUMBING
  "Plumbing|New Installation": [
    { item: "Supply pipe", spec: "Type L copper or PEX-A min. 1/2\"", code: "IPC 605" },
    { item: "DWV pipe", spec: "ABS or PVC Schedule 40", code: "IPC 702" },
    { item: "Solder", spec: "Lead-free 95/5 tin-antimony", code: "IPC 605.14" },
    { item: "Flux", spec: "Water-soluble, lead-free", code: "IPC 605.14" },
    { item: "Pipe straps", spec: "Copper or galvanized steel, max 6' spacing horizontal", code: "IPC 308" },
    { item: "Shutoff valves", spec: "Full-port ball valve, rated 125 PSI min.", code: "IPC 605" },
  ],
  "Plumbing|Repair Leak": [
    { item: "Supply pipe", spec: "Match existing — Type L copper or PEX-A", code: "IPC 605" },
    { item: "Solder", spec: "Lead-free 95/5 tin-antimony", code: "IPC 605.14" },
    { item: "Compression fittings", spec: "Brass, rated for water service", code: "IPC 605" },
  ],
  "Plumbing|Replace Water Main": [
    { item: "Water main pipe", spec: "Type K copper or HDPE, min. 1\"", code: "IPC 605" },
    { item: "Corporation stop", spec: "Bronze, rated 150 PSI", code: "IPC 605" },
    { item: "Curb stop", spec: "Bronze ball valve, rated 150 PSI", code: "IPC 605" },
    { item: "Tracer wire", spec: "12 AWG solid copper, orange jacket", code: "Local code" },
    { item: "Bedding material", spec: "Clean sand or pea gravel, min. 6\" below/above pipe", code: "IPC 306" },
  ],
  "Plumbing|Bathroom Remodel": [
    { item: "Supply pipe", spec: "Type L copper or PEX-A min. 1/2\"", code: "IPC 605" },
    { item: "DWV pipe", spec: "PVC Schedule 40 or ABS", code: "IPC 702" },
    { item: "Wax ring", spec: "Standard or extra-thick for raised floors", code: "IPC 405" },
    { item: "Shutoff valves", spec: "1/4-turn angle stop, brass", code: "IPC 605" },
    { item: "P-trap", spec: "1-1/2\" PVC or brass, must be accessible", code: "IPC 1002" },
  ],
  "Plumbing|Water Heater": [
    { item: "Water heater", spec: "Min. Energy Factor per local code, T&P relief valve included", code: "IPC 504" },
    { item: "Supply/return pipe", spec: "Type L copper or dielectric unions if galvanized", code: "IPC 605" },
    { item: "T&P relief valve discharge pipe", spec: "Same diameter as valve outlet, run to within 6\" of floor", code: "IPC 504.6" },
    { item: "Seismic straps", spec: "Required in seismic zones — galvanized steel, 2 straps", code: "IPC 507" },
    { item: "Expansion tank", spec: "Required on closed systems — sized to system volume", code: "IPC 607.3" },
  ],
  "Plumbing|Backflow Prevention": [
    { item: "Backflow preventer", spec: "RPZ (reduced pressure zone) for high hazard, DCVA for low hazard", code: "IPC 608" },
    { item: "Test cocks", spec: "Included with RPZ assembly", code: "IPC 608" },
    { item: "Shutoff valves", spec: "Full-port ball valve both sides of assembly", code: "IPC 608" },
  ],
  "Plumbing|Pipe Relining": [
    { item: "CIPP liner", spec: "Minimum 6mm thickness, NSF 61 certified for potable water", code: "IPC 605" },
    { item: "Resin", spec: "Epoxy or polyester, NSF 61 certified", code: "IPC 605" },
  ],

  // HVAC
  "HVAC|New AC Unit": [
    { item: "Refrigerant", spec: "R-410A or R-32 (R-22 prohibited)", code: "EPA 608" },
    { item: "Disconnect", spec: "60A min. non-fused disconnect within sight of unit", code: "NEC 440.14" },
    { item: "Copper line set", spec: "ACR copper, insulated with 3/4\" foam min.", code: "IMC 1101" },
    { item: "Condensate drain", spec: "3/4\" PVC min., pitched 1/8\" per foot to drain", code: "IMC 307" },
    { item: "Pad", spec: "Concrete or composite, level, 3\" min. above grade", code: "IMC 1101" },
  ],
  "HVAC|Replace Furnace": [
    { item: "Flue pipe", spec: "B-vent or PVC (for 90%+ efficiency), match furnace rating", code: "IMC 803" },
    { item: "Gas connector", spec: "Corrugated stainless steel (CSST) or black iron, 1/2\" min.", code: "IFGC 403" },
    { item: "Condensate line", spec: "3/4\" PVC for high-efficiency units", code: "IMC 307" },
    { item: "Filter", spec: "MERV 8 min.", code: "IMC 601" },
    { item: "Thermostat wire", spec: "18/5 minimum for standard controls", code: "IMC" },
  ],
  "HVAC|Ductwork": [
    { item: "Supply duct", spec: "26 gauge galvanized sheet metal or Class 1 flex duct", code: "IMC 603" },
    { item: "Return duct", spec: "26 gauge galvanized or Class 1 flex, sealed at all joints", code: "IMC 603" },
    { item: "Duct sealant", spec: "UL 181A mastic or foil tape — NOT standard duct tape", code: "IMC 603.9" },
    { item: "Insulation", spec: "R-8 min. for ducts in unconditioned spaces", code: "IECC C403" },
    { item: "Hangers", spec: "Galvanized steel, max 4' spacing for flex duct", code: "IMC 603" },
  ],
  "HVAC|Mini Split": [
    { item: "Line set", spec: "ACR copper, insulated 3/4\" foam min., length per manufacturer spec", code: "IMC 1101" },
    { item: "Disconnect", spec: "Non-fused disconnect within sight of outdoor unit", code: "NEC 440.14" },
    { item: "Condensate line", spec: "3/4\" PVC or vinyl tubing, pitched to drain", code: "IMC 307" },
    { item: "Mounting bracket", spec: "Manufacturer-specified, rated for unit weight", code: "IMC" },
    { item: "Wire", spec: "14/4 or 12/4 min. per manufacturer spec", code: "NEC 440" },
  ],
  "HVAC|Boiler": [
    { item: "Expansion tank", spec: "Sized to system volume — diaphragm type", code: "IMC 1005" },
    { item: "Pressure relief valve", spec: "30 PSI max. for residential systems", code: "IMC 1006" },
    { item: "Gas connector", spec: "Black iron pipe or CSST, sized per BTU load", code: "IFGC 403" },
    { item: "Circulator pump", spec: "Sized per GPM/head loss of system", code: "IMC" },
    { item: "Air separator", spec: "Installed on supply side", code: "IMC 1003" },
    { item: "Backflow preventer", spec: "DCVA on makeup water line", code: "IPC 608" },
  ],// ELECTRICAL
  "Electrical|Service Upgrade": [
    { item: "Service panel", spec: "200A min. residential, UL listed, main breaker included", code: "NEC 230.79" },
    { item: "Service entrance cable", spec: "2/0-2/0-1/0 AL SER for 200A", code: "NEC 230" },
    { item: "Ground rod", spec: "5/8\" x 8' copper-clad, two rods min. or single with test", code: "NEC 250.52" },
    { item: "Ground wire", spec: "#4 copper from panel to ground rod", code: "NEC 250.66" },
    { item: "Meter base", spec: "200A, utility-approved", code: "NEC 230" },
    { item: "Weatherhead", spec: "2\" rigid conduit min., utility clearance required", code: "NEC 230.54" },
  ],
  "Electrical|New Circuit": [
    { item: "Wire", spec: "12 AWG copper for 20A, 14 AWG for 15A circuits", code: "NEC 210.19" },
    { item: "Breaker", spec: "AFCI required for living areas, GFCI for wet locations", code: "NEC 210.12" },
    { item: "Conduit", spec: "EMT in exposed areas, Romex (NM-B) in concealed", code: "NEC 334" },
    { item: "Boxes", spec: "Metal or PVC, sized per wire fill calculation", code: "NEC 314" },
    { item: "Wire connectors", spec: "UL listed, appropriate for wire gauge", code: "NEC 110.14" },
  ],
  "Electrical|Full Rewire": [
    { item: "Wire", spec: "NM-B (Romex) 12/2 for 20A, 14/2 for 15A, copper only", code: "NEC 334" },
    { item: "Panel", spec: "200A min., AFCI/GFCI breakers where required", code: "NEC 230" },
    { item: "Outlets", spec: "Tamper-resistant receptacles throughout", code: "NEC 406.12" },
    { item: "GFCI outlets", spec: "All bathrooms, kitchen, garage, outdoor, crawl space", code: "NEC 210.8" },
    { item: "AFCI breakers", spec: "All bedroom circuits and living areas", code: "NEC 210.12" },
    { item: "Smoke detectors", spec: "Interconnected, hardwired with battery backup", code: "NFPA 72" },
  ],
  "Electrical|Panel Replace": [
    { item: "Panel", spec: "200A min., UL listed, spaces for future circuits", code: "NEC 230.79" },
    { item: "Breakers", spec: "Must match panel brand — no tandem breakers beyond panel rating", code: "NEC 408" },
    { item: "Ground wire", spec: "#4 copper to ground rod(s)", code: "NEC 250.66" },
    { item: "Neutral/ground bars", spec: "Separate in subpanels, bonded only at main", code: "NEC 250.24" },
  ],
  "Electrical|Generator Hookup": [
    { item: "Transfer switch", spec: "Manual or automatic, rated for generator output, UL listed", code: "NEC 702" },
    { item: "Wire", spec: "10 AWG min. for 30A, 8 AWG for 40A, copper", code: "NEC 445" },
    { item: "Inlet box", spec: "Weatherproof, rated for generator amperage", code: "NEC 702" },
    { item: "Conduit", spec: "Weatherproof conduit from inlet to transfer switch", code: "NEC 702" },
  ],
  "Electrical|EV Charger": [
    { item: "Wire", spec: "6 AWG copper for 50A circuit (Level 2)", code: "NEC 625" },
    { item: "Breaker", spec: "50A double-pole GFCI (if outdoors)", code: "NEC 625.54" },
    { item: "Conduit", spec: "Weatherproof if outdoor run", code: "NEC 625" },
    { item: "EVSE unit", spec: "UL listed Level 2, min. 32A output", code: "NEC 625" },
  ],

  // DEMOLITION
  "Demolition|Partial Demo": [
    { item: "Disposal bags", spec: "6 mil poly bags for debris", code: "Local" },
    { item: "HEPA vacuum", spec: "Required if asbestos or lead suspected", code: "EPA" },
    { item: "Respirator", spec: "N100 min. for dust, full-face for asbestos", code: "OSHA 1926.1101" },
    { item: "Temporary barriers", spec: "6 mil poly sheeting for dust containment", code: "OSHA" },
  ],
  "Demolition|Full Demo": [
    { item: "Utility caps", spec: "Approved caps for gas, water, sewer at property line", code: "Local utility" },
    { item: "Silt fence", spec: "18\" depth, 36\" height, HDPE filter fabric", code: "Local erosion control" },
    { item: "Disposal containers", spec: "Licensed C&D dumpster, asbestos requires separate licensed hauler", code: "EPA/Local" },
  ],
  "Demolition|Hazmat Demo": [
    { item: "Tyvek suits", spec: "Category III Type 5/6 min.", code: "OSHA 1926.1101" },
    { item: "Respirator", spec: "Full-face PAPR with HEPA filters", code: "OSHA 1926.1101" },
    { item: "Negative air machine", spec: "HEPA filtered, sized for space", code: "EPA NESHAP" },
    { item: "Poly sheeting", spec: "6 mil, two-layer critical barriers", code: "EPA NESHAP" },
    { item: "Waste bags", spec: "6 mil labeled asbestos/hazmat bags, double-bagged", code: "EPA NESHAP" },
  ],

  // FOUNDATION
  "Foundation|New Foundation": [
    { item: "Concrete", spec: "Min. 3000 PSI at 28 days for footings/walls", code: "IRC R402.2" },
    { item: "Rebar", spec: "#4 rebar min., horizontal and vertical per engineered plan", code: "IRC R404" },
    { item: "Vapor barrier", spec: "6 mil poly on soil under slab", code: "IRC R506.2.3" },
    { item: "Anchor bolts", spec: "1/2\" x 10\" min., max 6' O.C., within 12\" of corners", code: "IRC R403.1.6" },
    { item: "Waterproofing", spec: "Dampproofing or waterproofing membrane on exterior of wall", code: "IRC R406" },
    { item: "Drainage board", spec: "Dimple mat or gravel against foundation wall", code: "IRC R405" },
  ],
  "Foundation|Underpinning": [
    { item: "Concrete", spec: "Min. 3500 PSI", code: "IRC R402" },
    { item: "Rebar", spec: "Per engineer spec — typically #5 minimum", code: "Engineering plans" },
    { item: "Helical piers", spec: "Galvanized steel, load-rated per engineer", code: "ICC AC358" },
  ],
  "Foundation|Waterproofing": [
    { item: "Waterproofing membrane", spec: "ASTM D1248 polyethylene or cementitious coating", code: "IRC R406" },
    { item: "Drainage board", spec: "Dimple mat min. 8mm", code: "IRC R405" },
    { item: "Drain pipe", spec: "4\" perforated PVC, slope 1/8\" per foot min.", code: "IRC R405" },
    { item: "Filter fabric", spec: "Wrap drain pipe in non-woven geotextile", code: "IRC R405" },
    { item: "Gravel", spec: "Clean 3/4\" crushed stone, min. 12\" wide trench", code: "IRC R405" },
  ],// ROOFING
  "Roofing|Full Replacement": [
    { item: "Shingles", spec: "ASTM D3462, min. Class A fire rating, 130 MPH wind rating", code: "IRC R905.2" },
    { item: "Underlayment", spec: "ASTM D226 Type II (30 lb) or synthetic equivalent", code: "IRC R905.2.7" },
    { item: "Ice & water shield", spec: "Min. 24\" past interior wall line at eaves, all valleys", code: "IRC R905.2.7" },
    { item: "Drip edge", spec: "Galvanized or aluminum, min. 2\" flange", code: "IRC R905.2.8" },
    { item: "Roofing nails", spec: "11 or 12 gauge, 3/8\" head, 1-1/4\" min. length", code: "IRC R905.2.5" },
    { item: "Ridge vent", spec: "18 NFA sq. in. per linear foot", code: "IRC R806" },
    { item: "Starter strip", spec: "Manufacturer-specified, full-width adhesive strip", code: "IRC R905.2" },
  ],
  "Roofing|Metal Roof": [
    { item: "Metal panels", spec: "Min. 26 gauge Galvalume steel or 0.032\" aluminum", code: "IRC R905.10" },
    { item: "Underlayment", spec: "Synthetic, min. 30 lb equivalent, high-temp rated", code: "IRC R905.10" },
    { item: "Screws", spec: "Pancake head hex with EPDM washer, #12 x 1-1/2\" min.", code: "IRC R905.10" },
    { item: "Closure strips", spec: "Foam closures, inside and outside, EPDM", code: "IRC R905.10" },
    { item: "Sealant", spec: "Butyl tape or urethane caulk at penetrations", code: "IRC R905.10" },
  ],
  "Roofing|Flat Roof": [
    { item: "TPO or EPDM membrane", spec: "Min. 60 mil EPDM or 60 mil TPO, UL listed", code: "IRC R905.12" },
    { item: "Insulation", spec: "Polyiso min. R-20 above deck for commercial, per local IECC", code: "IECC" },
    { item: "Cover board", spec: "1/2\" min. glass mat gypsum or HD polyiso", code: "IRC R905" },
    { item: "Adhesive/fasteners", spec: "Manufacturer-specified, wind uplift rated", code: "FM Global" },
  ],

  // DECK
  "Deck|New Deck": [
    { item: "Lumber", spec: "Min. #2 grade pressure treated (PT) — above ground: 0.15 ACQ, ground contact: 0.40 ACQ", code: "IRC R507.2" },
    { item: "Decking screws", spec: "#10 x 3\" min. hot-dipped galvanized (HDG) or stainless — NOT electroplated", code: "IRC R507.2" },
    { item: "Joist hangers", spec: "HDG Simpson Strong-Tie LUS or equivalent, sized to joist", code: "IRC R507" },
    { item: "Post bases", spec: "HDG post base, rated for post size, anchored to concrete", code: "IRC R507.3" },
    { item: "Concrete footings", spec: "Min. 3000 PSI, 12\" dia. min., below frost line", code: "IRC R403" },
    { item: "Ledger bolts", spec: "1/2\" lag screws or thru-bolts, staggered, per span table", code: "IRC R507.9" },
    { item: "Flashing", spec: "Galvanized or aluminum Z-flashing behind ledger, self-adhered membrane", code: "IRC R507.9" },
    { item: "Railing posts", spec: "4x4 min. PT, bolted through rim with 1/2\" bolt, not toe-nailed", code: "IRC R507.8" },
    { item: "Baluster spacing", spec: "Max. 4\" between balusters (sphere test)", code: "IRC R507.8.3" },
    { item: "Railing height", spec: "Min. 36\" for decks less than 30\" above grade, 42\" above 30\"", code: "IRC R507.8.1" },
  ],
  "Deck|Deck Repair": [
    { item: "Replacement lumber", spec: "Match existing or upgrade to min. #2 PT, same size", code: "IRC R507" },
    { item: "Screws/nails", spec: "HDG or stainless — no electroplated in PT lumber", code: "IRC R507.2" },
    { item: "Joist hangers", spec: "HDG, replace any rusted hardware", code: "IRC R507" },
  ],
  "Deck|Pergola": [
    { item: "Posts", spec: "6x6 min. PT or cedar, anchored to concrete footings", code: "IRC R507" },
    { item: "Beams", spec: "2x8 min. or LVL, sized per span", code: "IRC R507" },
    { item: "Hardware", spec: "HDG post caps and bases", code: "IRC R507" },
    { item: "Concrete footings", spec: "Min. 3000 PSI, below frost line", code: "IRC R403" },
  ],

  // SEPTIC
  "Septic System|New Install": [
    { item: "Septic tank", spec: "Min. 1000 gallon precast concrete or HDPE, watertight", code: "State health code" },
    { item: "Distribution box", spec: "Precast concrete or HDPE", code: "State health code" },
    { item: "Leach pipe", spec: "4\" perforated PVC Schedule 40", code: "State health code" },
    { item: "Filter fabric", spec: "Non-woven geotextile over leach field stone", code: "State health code" },
    { item: "Stone", spec: "3/4\" clean crushed stone, min. 6\" below and 2\" above pipe", code: "State health code" },
    { item: "Inlet/outlet baffles", spec: "Sanitary tees or effluent filter", code: "State health code" },
  ],

  // SEAWALL
  "Seawall|New Seawall": [
    { item: "Sheet pile", spec: "Vinyl or steel sheet pile, min. embedment 1.5x exposed height", code: "Engineering plans" },
    { item: "Waler", spec: "Structural steel or concrete, continuous horizontal", code: "Engineering plans" },
    { item: "Tie rods", spec: "Galvanized or stainless steel, per engineer spec", code: "Engineering plans" },
    { item: "Deadman anchor", spec: "Concrete, buried per engineer spec", code: "Engineering plans" },
    { item: "Cap", spec: "Concrete cap, min. 6\" thick, rebar reinforced", code: "Engineering plans" },
    { item: "Weep holes", spec: "4\" PVC, min. 1 per 8 linear feet at base", code: "Engineering plans" },
  ],

  // EXCAVATION
  "Excavation|Trenching": [
    { item: "Trench box / shoring", spec: "Required for trenches >5' deep — rated for soil type", code: "OSHA 1926.652" },
    { item: "Bedding material", spec: "Clean sand or pea gravel, 6\" min. below pipe", code: "Local code" },
    { item: "Tracer wire", spec: "12 AWG solid copper with orange jacket for utilities", code: "Local code" },
    { item: "Backfill", spec: "Compacted in 6\" lifts, min. 95% Proctor density", code: "Local code" },
  ],
  "Excavation|Site Prep": [
    { item: "Silt fence", spec: "HDPE filter fabric, 18\" buried, 36\" above grade", code: "Local erosion code" },
    { item: "Erosion matting", spec: "Biodegradable jute on slopes >3:1", code: "Local erosion code" },
  ],

  // CONCRETE
  "Concrete|New Pour": [
    { item: "Concrete", spec: "Min. 3000 PSI at 28 days for slabs, 3500 PSI for structural", code: "IRC R402" },
    { item: "Rebar", spec: "#4 rebar on 18\" grid for slabs, or fiber reinforced", code: "IRC R506" },
    { item: "Vapor barrier", spec: "6 mil poly under all interior slabs", code: "IRC R506.2.3" },
    { item: "Expansion joints", spec: "1/2\" asphalt-impregnated fiberboard at all abutments", code: "ACI 302" },
    { item: "Control joints", spec: "1/4 slab depth, max spacing 2-3x slab thickness in feet", code: "ACI 302" },
    { item: "Gravel base", spec: "4\" min. compacted 3/4\" crushed stone base", code: "IRC R506" },
  ],
  "Concrete|Driveway": [
    { item: "Concrete", spec: "Min. 4000 PSI, air-entrained in freeze/thaw climates", code: "ACI 330" },
    { item: "Thickness", spec: "4\" min. residential, 6\" for heavy vehicles", code: "ACI 330" },
    { item: "Rebar or mesh", spec: "#3 rebar on 18\" grid or 6x6 WWF", code: "ACI 330" },
    { item: "Gravel base", spec: "4\" min. compacted gravel sub-base", code: "ACI 330" },
    { item: "Sealer", spec: "Penetrating silane/siloxane sealer — NOT film-forming", code: "ACI 330" },
  ],// MASONRY
  "Masonry|Chimney": [
    { item: "Mortar", spec: "Type S mortar (1:1/2:4-1/2) for chimneys and below grade", code: "ASTM C270" },
    { item: "Flue liner", spec: "Clay tile ASTM C1283 or UL listed stainless steel liner", code: "IRC R1003.11" },
    { item: "Firebrick", spec: "ASTM C27 firebrick for firebox", code: "IRC R1001" },
    { item: "Refractory mortar", spec: "For firebox only — standard mortar not permitted", code: "IRC R1001" },
    { item: "Chimney cap", spec: "Galvanized or stainless steel, 2\" overhang with drip edge", code: "IRC R1003.9" },
    { item: "Flashing", spec: "Step flashing + counter flashing, lead or galvanized", code: "IRC R903.2" },
  ],
  "Masonry|Brick": [
    { item: "Brick", spec: "ASTM C216 Grade SW (severe weathering) for exterior", code: "IRC R606" },
    { item: "Mortar", spec: "Type S for below grade and exterior, Type N for interior", code: "ASTM C270" },
    { item: "Wall ties", spec: "Corrugated galvanized steel ties, max 16\" O.C. vertical", code: "IRC R606" },
    { item: "Lintels", spec: "Steel angle — min. 3x3x1/4\" for openings up to 4'", code: "IRC R606" },
  ],

  // FRAMING
  "Framing|New Build": [
    { item: "Lumber", spec: "Min. #2 Douglas Fir or Southern Yellow Pine", code: "IRC R602" },
    { item: "Structural screws/nails", spec: "16d common nails or structural screws per nailing schedule", code: "IRC R602.3" },
    { item: "LVL beams", spec: "Engineered lumber per span tables and engineer spec", code: "IRC R602" },
    { item: "Hurricane ties", spec: "Simpson H2.5A or equivalent at every rafter/truss to plate", code: "IRC R602.11" },
    { item: "Anchor bolts", spec: "1/2\" x 10\" min., max 6' O.C., embedded 7\" in concrete", code: "IRC R403.1.6" },
    { item: "Sheathing", spec: "7/16\" OSB or 1/2\" plywood, APA rated", code: "IRC R602.10" },
    { item: "House wrap", spec: "ASTM E2357 water-resistive barrier", code: "IRC R703" },
  ],
  "Framing|Addition": [
    { item: "Lumber", spec: "Min. #2 grade, match existing or better", code: "IRC R602" },
    { item: "Connector hardware", spec: "Simpson Strong-Tie or equivalent, galvanized", code: "IRC R602" },
    { item: "Sheathing", spec: "7/16\" OSB min., APA rated shear wall panels", code: "IRC R602.10" },
    { item: "Flashing at connection", spec: "Aluminum or galvanized Z-flashing where addition meets existing", code: "IRC R703" },
  ],
  "Framing|Garage": [
    { item: "Lumber", spec: "Min. #2 PT sill plate, standard framing lumber above", code: "IRC R602" },
    { item: "Anchor bolts", spec: "1/2\" x 10\", max 6' O.C.", code: "IRC R403.1.6" },
    { item: "Header", spec: "LVL or doubled 2x per span table for garage door opening", code: "IRC R602" },
    { item: "Sheathing", spec: "7/16\" OSB, APA rated", code: "IRC R602" },
    { item: "Fire separation", spec: "5/8\" Type X drywall on garage side of shared wall with living space", code: "IRC R302.6" },
  ],

  // INSULATION
  "Insulation|New Install": [
    { item: "Batt insulation", spec: "Kraft or unfaced fiberglass — R-13 walls, R-38 attic min. (climate zone 5)", code: "IECC R402" },
    { item: "Vapor retarder", spec: "Kraft facing or 6 mil poly on warm side in climate zones 4+", code: "IRC R702.7" },
    { item: "Rigid foam", spec: "XPS or polyiso — R-5 min. continuous exterior in zone 5+", code: "IECC R402" },
    { item: "Spray foam", spec: "Closed cell 2 lb min. for under slabs and rim joists", code: "IECC R402" },
    { item: "Ventilation baffles", spec: "Attic baffles at eaves to maintain 1\" min. airspace", code: "IRC R806" },
  ],

  // DRYWALL
  "Drywall|New Install": [
    { item: "Drywall", spec: "5/8\" Type X for fire-rated assemblies, 1/2\" standard, moisture-resistant in baths", code: "IRC R702" },
    { item: "Drywall screws", spec: "#6 x 1-5/8\" coarse thread for wood studs, fine thread for metal", code: "IRC R702" },
    { item: "Joint compound", spec: "All-purpose or setting-type (Durabond) for first coat", code: "IRC R702" },
    { item: "Tape", spec: "Paper tape for joints, fiberglass mesh for repairs", code: "IRC R702" },
    { item: "Corner bead", spec: "Metal or vinyl 90° bead at all outside corners", code: "IRC R702" },
  ],

  // WINDOWS & DOORS
  "Windows & Doors|New Install": [
    { item: "Window unit", spec: "Min. U-0.30, SHGC per climate zone, ENERGY STAR certified", code: "IECC R402.3" },
    { item: "Flashing tape", spec: "Self-adhered flexible flashing, min. 4\" wide", code: "IRC R703.4" },
    { item: "Sill pan flashing", spec: "Pre-formed or site-built with end dams", code: "IRC R703.4" },
    { item: "Exterior caulk", spec: "Paintable siliconized latex or 100% silicone", code: "IRC R703" },
    { item: "Shims", spec: "Composite or cedar shims — NOT foam shims for load-bearing", code: "IRC R613" },
  ],
  "Windows & Doors|Replacement": [
    { item: "Window unit", spec: "Min. U-0.30, ENERGY STAR certified, matches rough opening", code: "IECC R402.3" },
    { item: "Flashing tape", spec: "Self-adhered, min. 4\" wide at sill and jambs", code: "IRC R703.4" },
    { item: "Low-expansion foam", spec: "Window and door foam only — NOT standard construction foam", code: "IRC R613" },
    { item: "Exterior caulk", spec: "100% silicone or siliconized latex at perimeter", code: "IRC R703" },
  ],

  // SIDING
  "Siding|New Install": [
    { item: "House wrap", spec: "ASTM E2357, min. 1\" overlap at seams, taped", code: "IRC R703.2" },
    { item: "Siding nails", spec: "Hot-dipped galvanized or stainless, length per siding thickness + 1.5\"", code: "IRC R703" },
    { item: "Flashing", spec: "Galvanized or aluminum at all penetrations and horizontal transitions", code: "IRC R703.4" },
    { item: "Starter strip", spec: "Manufacturer-specified, level and straight", code: "IRC R703" },
    { item: "J-channel", spec: "At all windows, doors, and trim", code: "IRC R703" },
  ],// SOLAR
  "Solar|New Install": [
    { item: "Panels", spec: "UL 1703 listed, min. 300W per panel, 25-year power warranty", code: "NEC 690" },
    { item: "Inverter", spec: "UL 1741 listed, rapid shutdown compliant", code: "NEC 690.12" },
    { item: "Wire", spec: "USE-2 or PV wire, 10 AWG min. for string wiring", code: "NEC 690.31" },
    { item: "Conduit", spec: "EMT or PVC Schedule 80 for exposed runs", code: "NEC 690" },
    { item: "Rapid shutdown device", spec: "Required within 3' of array on roof", code: "NEC 690.12" },
    { item: "Roof mounts", spec: "Flashings — manufacturer-approved, sealed with butyl sealant", code: "NEC 690" },
    { item: "Disconnect", spec: "DC disconnect at inverter, AC disconnect at meter", code: "NEC 690.13" },
  ],

  // GENERATOR
  "Generator|New Install": [
    { item: "Transfer switch", spec: "ATS rated for generator output — mandatory, UL listed", code: "NEC 702.6" },
    { item: "Wire", spec: "10 AWG min. for 30A, copper, in conduit to transfer switch", code: "NEC 445" },
    { item: "Gas line", spec: "Black iron pipe or CSST, sized per BTU load", code: "IFGC 402" },
    { item: "Concrete pad", spec: "Min. 4\" thick, 3000 PSI, level", code: "Manufacturer" },
    { item: "Grounding", spec: "#8 copper ground wire from generator frame to ground rod", code: "NEC 445.13" },
  ],

  // POOL & SPA
  "Pool & Spa|New Pool": [
    { item: "Shotcrete/gunite", spec: "Min. 3500 PSI, 6\" thick shell min.", code: "IRC AG105" },
    { item: "Rebar", spec: "#4 rebar on 12\" grid", code: "IRC AG105" },
    { item: "GFCI protection", spec: "All pool equipment and within 20' of pool water", code: "NEC 680.22" },
    { item: "Bonding wire", spec: "#8 solid copper bonding grid connecting all metal within 5' of pool", code: "NEC 680.26" },
    { item: "Anti-vortex drain cover", spec: "VGB compliant dual drain or approved cover", code: "VGBA / NEC 680" },
    { item: "Safety fence", spec: "4-sided, min. 48\" height, self-latching gate", code: "IRC AG105.2" },
    { item: "Pump", spec: "Variable speed pump required in most states", code: "State energy code" },
  ],

  // WELL & WATER
  "Well & Water|New Well": [
    { item: "Well casing", spec: "Steel or PVC ASTM F480, min. 6\" diameter", code: "State well code" },
    { item: "Grout", spec: "Neat cement or bentonite grout, min. 20' from surface", code: "State well code" },
    { item: "Well cap", spec: "Vermin-proof, vented", code: "State well code" },
    { item: "Pitless adapter", spec: "NSF 61 certified", code: "State well code" },
    { item: "Pressure tank", spec: "Min. 20 gallon, pre-charged to 2 PSI below pump cut-in", code: "State well code" },
    { item: "Pump wire", spec: "Submersible pump cable, sized per pump HP and depth", code: "NEC 680" },
  ],

  // DRAINAGE
  "Drainage|French Drain": [
    { item: "Drain pipe", spec: "4\" perforated PVC, slotted side down, slope 1/8\" per foot", code: "IRC R405" },
    { item: "Filter fabric", spec: "Non-woven geotextile sock around pipe", code: "IRC R405" },
    { item: "Stone", spec: "3/4\" clean crushed stone, no fines", code: "IRC R405" },
    { item: "Outlet", spec: "Daylight at grade or to drywell/storm sewer", code: "IRC R405" },
  ],
  "Drainage|Catch Basin": [
    { item: "Basin", spec: "Polyethylene or concrete, min. 12\" square", code: "Local code" },
    { item: "Grate", spec: "Cast iron or HDPE, traffic-rated if in driveway", code: "Local code" },
    { item: "Outlet pipe", spec: "4\" PVC min., sloped to outlet", code: "Local code" },
  ],

  // RETAINING WALL
  "Retaining Wall|New Wall": [
    { item: "Block", spec: "Segmental retaining wall block — min. 130 lbs/ft² bearing capacity", code: "NCMA" },
    { item: "Geogrid", spec: "Required for walls >4' — HDPE biaxial geogrid per engineer spec", code: "NCMA" },
    { item: "Drainage aggregate", spec: "3/4\" clean crushed stone, min. 12\" wide column behind wall", code: "NCMA" },
    { item: "Drain pipe", spec: "4\" perforated PVC at base of wall", code: "NCMA" },
    { item: "Filter fabric", spec: "Non-woven geotextile behind stone", code: "NCMA" },
    { item: "Base course", spec: "Buried 1\" per foot of wall height, min. 6\"", code: "NCMA" },
  ],
  "Retaining Wall|Concrete": [
    { item: "Concrete", spec: "Min. 3500 PSI", code: "ACI 318" },
    { item: "Rebar", spec: "Per engineer — typically #4 or #5 vertical and horizontal", code: "ACI 318" },
    { item: "Waterproofing", spec: "Bituminous coating on soil side", code: "ACI 318" },
    { item: "Weep holes", spec: "4\" PVC, min. 1 per 8 LF at base", code: "ACI 318" },
  ],

  // FENCE
  "Fence|New Install": [
    { item: "Posts", spec: "4x4 PT for wood up to 6' height, 6x6 for taller. Set in concrete, 1/3 of total post length buried min.", code: "IRC R404" },
    { item: "Concrete", spec: "Min. 3000 PSI, 12\" dia. hole min.", code: "IRC R403" },
    { item: "Post cap", spec: "Aluminum or vinyl post cap to prevent water infiltration", code: "Local" },
    { item: "Hardware", spec: "HDG or stainless fasteners throughout", code: "IRC R317" },
    { item: "Gate hardware", spec: "Self-closing, self-latching if enclosing pool", code: "IRC AG105.2" },
  ],

  // SHED & STRUCTURE
  "Shed & Structure|New Install": [
    { item: "PT sill plate", spec: "Min. 0.40 ACQ pressure treated in contact with concrete", code: "IRC R317" },
    { item: "Anchor bolts", spec: "1/2\" x 10\" min., max 6' O.C.", code: "IRC R403.1.6" },
    { item: "Sheathing", spec: "7/16\" OSB or 1/2\" plywood", code: "IRC R602" },
    { item: "Roofing", spec: "Min. Class A shingles with underlayment", code: "IRC R905" },
    { item: "Framing lumber", spec: "Min. #2 grade", code: "IRC R602" },
  ],

  // FIRE SUPPRESSION
  "Fire Suppression|New Install": [
    { item: "Sprinkler heads", spec: "UL listed, temperature rated per location (standard 155°F residential)", code: "NFPA 13D" },
    { item: "Pipe", spec: "Schedule 40 steel, CPVC, or listed multipurpose pipe", code: "NFPA 13D" },
    { item: "Water supply", spec: "Min. 13 GPM for 10 minutes for 1-2 heads", code: "NFPA 13D" },
    { item: "Backflow preventer", spec: "DCVA on sprinkler supply line", code: "NFPA 13D" },
  ],

  // ELEVATOR
  "Elevator|New Install": [
    { item: "Hoistway", spec: "Min. 2-hour fire-rated construction", code: "IBC 3002" },
    { item: "Machine", spec: "ASME A17.1 compliant, UL listed", code: "ASME A17.1" },
    { item: "Wire rope", spec: "Per manufacturer spec, ASME rated", code: "ASME A17.1" },
    { item: "Buffer", spec: "Oil or spring buffer at pit base", code: "ASME A17.1" },
    { item: "Pit ladder", spec: "Min. 18\" wide, fixed, if pit > 35\"", code: "ASME A17.1" },
  ],

  // ASBESTOS
  "Asbestos Removal|Full Removal": [
    { item: "Poly sheeting", spec: "6 mil, two-layer critical barriers at all openings", code: "EPA NESHAP" },
    { item: "Negative air machine", spec: "HEPA filtered, 4 air changes per hour min.", code: "EPA NESHAP" },
    { item: "Waste bags", spec: "6 mil labeled asbestos waste bags, double-bagged", code: "EPA NESHAP" },
    { item: "Respirator", spec: "Half-face with P100 filters min., supplied air for friable", code: "OSHA 1926.1101" },
    { item: "Tyvek suits", spec: "Category III, disposable", code: "OSHA 1926.1101" },
    { item: "Amended water", spec: "Surfactant solution to wet friable materials before removal", code: "EPA NESHAP" },
  ],

  // LEAD ABATEMENT
  "Lead Abatement|Full Removal": [
    { item: "Poly sheeting", spec: "6 mil, double layer on floors and surfaces", code: "EPA RRP" },
    { item: "HEPA vacuum", spec: "Certified HEPA, used for all cleanup", code: "EPA RRP" },
    { item: "Respirator", spec: "Half-face P100 minimum", code: "OSHA 1926.62" },
    { item: "Disposable suits", spec: "Category III Tyvek with hood", code: "OSHA 1926.62" },
    { item: "Waste bags", spec: "6 mil poly, labeled lead waste", code: "EPA RRP" },
  ],

  // MOLD REMEDIATION
  "Mold Remediation|Full Remediation": [
    { item: "Poly sheeting", spec: "6 mil containment barriers, sealed with tape", code: "IICRC S520" },
    { item: "Negative air machine", spec: "HEPA filtered, min. 4 ACH", code: "IICRC S520" },
    { item: "HEPA vacuum", spec: "For all surfaces before wiping", code: "IICRC S520" },
    { item: "Respirator", spec: "N95 min. for limited mold, P100 half-face for larger areas", code: "IICRC S520" },
    { item: "Antimicrobial", spec: "EPA-registered encapsulant after removal", code: "IICRC S520" },
    { item: "Disposal bags", spec: "6 mil poly, sealed and labeled", code: "IICRC S520" },
  ],

  // FLOORING
  "Flooring|New Install": [
    { item: "Subfloor", spec: "3/4\" T&G plywood or OSB, APA rated Sturd-I-Floor", code: "IRC R503" },
    { item: "Underlayment", spec: "Per flooring type — cork, felt, or foam", code: "Manufacturer" },
    { item: "Adhesive", spec: "Manufacturer-specified, VOC compliant", code: "Manufacturer" },
    { item: "Fasteners", spec: "Cleat nails or staples for hardwood — 15/16\" min. length", code: "NWFA" },
    { item: "Moisture barrier", spec: "6 mil poly under wood flooring on concrete", code: "NWFA" },
  ],

  // IRRIGATION
  "Irrigation|New Install": [
    { item: "Backflow preventer", spec: "Pressure vacuum breaker (PVB) min. — RPZ for in-ground systems", code: "IPC 608" },
    { item: "Pipe", spec: "Schedule 40 PVC for mains, poly tubing for laterals", code: "IPC" },
    { item: "Valve box", spec: "UV-resistant polymer, color-coded", code: "Local" },
    { item: "Controller", spec: "Rain sensor or smart controller required in most jurisdictions", code: "Local water code" },
    { item: "Heads", spec: "Matched precipitation rate heads per zone", code: "Local water code" },
  ],

  // LANDSCAPING
  "Landscaping|New Install": [
    { item: "Topsoil", spec: "Min. 6\" topsoil for new lawns, pH 6.0-7.0", code: "Local" },
    { item: "Erosion control fabric", spec: "Biodegradable jute on slopes >3:1", code: "Local erosion" },
    { item: "Edging", spec: "Steel or aluminum, min. 3\" depth", code: "Local" },
    { item: "Mulch", spec: "2-3\" depth, keep 6\" away from foundations and tree trunks", code: "Local" },
  ],

  // GUTTERS
  "Gutters|New Install": [
    { item: "Gutters", spec: ".032\" aluminum min. or 16 oz copper, K-style or half-round", code: "SMACNA" },
    { item: "Downspouts", spec: "2x3\" or 3x4\" aluminum, one per 600 sq ft of roof area", code: "SMACNA" },
    { item: "Hangers", spec: "Hidden hanger with screw into rafter tail, max 24\" O.C.", code: "SMACNA" },
    { item: "Sealant", spec: "Gutter sealant at all seams and end caps", code: "SMACNA" },
    { item: "Splash blocks", spec: "Concrete or plastic, direct water 4' min. from foundation", code: "IRC R801" },
  ],

  // PAINTING
  "Painting|New Install": [
    { item: "Primer", spec: "Latex primer for drywall, oil-based for stain blocking", code: "Manufacturer" },
    { item: "Paint", spec: "Low-VOC latex (interior), 100% acrylic (exterior)", code: "Manufacturer" },
    { item: "Caulk", spec: "Paintable siliconized acrylic at all joints before painting", code: "Manufacturer" },
  ],
};

export function getMaterials(trade: string, jobType: string): MaterialSpec[] {
  return MATERIALS[`${trade}|${jobType}`] || [];
}