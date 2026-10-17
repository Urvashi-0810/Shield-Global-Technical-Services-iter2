# Shield Global Technical Services LLC: Website Content Inventory

**Source site:** https://www.shieldglobaltech.ae
**Crawled:** 2026-10-17
**Pages found:** 8 (Home, About Us, Services, Industries, Projects, HSE & Quality, Careers, Contact Us). There is no sitemap.xml (it returns 404). robots.txt allows everything. All internal links from the nav, footer, and page bodies lead to these 8 pages or to anchors on the Services page.

---

## Brand summary

- **Business name:** Shield Global Technical Services LLC (also shortened to "Shield Global" on the site)
- **What they do:** A multi-disciplinary technical services and contracting company. They list seven service divisions: Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP Services, Welding & Fabrication, and Technical Support & Project Services. They also offer project mobilization and shutdown/turnaround support. The site leans heavily on HSE (safety) and QA/QC (quality).
- **Who their customers are:** Clients running industrial, commercial, civil, and energy infrastructure projects in the UAE and GCC / Gulf region. The site names refineries, petrochemical plants, offshore installations, pipeline networks, storage terminals, power/water/utility infrastructure, and commercial and industrial buildings and complexes. It speaks to people issuing tenders, RFPs, RFQs, and bills of quantities. The site does not name any specific clients.
- **Taglines used on the site:** "Quality Assured • Safety First • Engineering Excellence" / "UAE & GCC Multi-Disciplinary Contracting" / "Engineering. Technical Services. Project Excellence."

---

## Notes and items marked [UNCLEAR] (read first)

1. **Phone numbers look like placeholders.** The site lists `+971 4 000 0000` and `+971 50 000 0000`. These are almost certainly dummy numbers. [UNCLEAR] Confirm the real numbers with the client.
2. **There is no physical address anywhere.** The only location text is "Industrial & Commercial Operations Hub" (Contact page) and "Industrial Area & Offshore Technical Operations" (footer). The site never names a city or emirate. [UNCLEAR]
3. **The site has two different logos.**
   - The header and footer use a **blue shield with a checkmark** and the words "SHIELD GLOBAL / TECHNICAL SERVICES LLC": `/assets/logo-B-qOYJue.png`.
   - The favicon and apple-touch-icon file `/logo.png` is a **red shield with a piston and wrench** and the words "SHIELD / GLOBAL TECHNICAL SERVICES LLC".
   - The SVG favicon is a blue (#0f4ba1) rounded square with a white shield and a checkmark.
   - [UNCLEAR] which one is the current, official logo.
4. **The forms don't send anything.** The JavaScript for the Contact page form and the "Request a Quotation" popup only shows a success message after a short delay. No data goes to a server or email address. Any inquiries submitted through the current site are probably lost.
5. **There are no social media links anywhere on the site** (header, footer, or page bodies, including the JS code).
6. **The site has none of the following:** team members/leadership names, testimonials, FAQs, numeric stats, awards, certifications with certificate numbers, client logos or client names, or prices. One button says "About Our Leadership" and links to /about, but the About page names no leaders.
7. **Projects and Industries look like template filler.** All three Projects use the same description: "Engineered to strict engineering quality and client project specifications with on-time delivery." All three Industries use the same description: "Comprehensive technical contracting, specialized fabrication, and certified maintenance execution." The project names (e.g. "High-Tolerance Production Cell") don't match the company's service lines, and no clients, locations, or dates are given. [UNCLEAR] whether any of these are real projects.
8. **The images may not be real company photos.** None are captioned as real company projects or staff, and several look like stock or AI-generated images. [UNCLEAR] Ask the client for real project photos.
9. **The copyright line says "© 2026".** It is generated automatically from the current year.

---

## Global elements (appear on every page)

### Top bar (desktop only)
- Email: info@shieldglobaltech.ae
- Phone: +971 4 000 0000 [UNCLEAR, likely a placeholder]
- "Quality Assured • Safety First • Engineering Excellence"
- "|"
- "UAE & GCC Multi-Disciplinary Contracting"

### Header
- Logo: `https://www.shieldglobaltech.ae/assets/logo-B-qOYJue.png` (alt: "Shield Global Technical Services LLC"). The blue shield logo; links to `/`.
- Main navigation:
  - Home → `/`
  - About Us → `/about`
  - Services → `/services` (has a dropdown, below)
  - Contact Us → `/contact`
- CTA button: **Request a Quotation →** (opens the quotation popup, below)

**Note:** Industries, Projects, HSE & Quality, and Careers are *not* in the header nav. They are only linked from the footer.

### Services dropdown menu (header)
- Heading: "Service Divisions"
- Link: "All Services" → `/services`
- Items (each links to `/services#<id>`):
  - **Building Construction**: "Commercial, industrial, and infrastructure structural civil construction services." → `/services#building-construction`
  - **Facility Management**: "Comprehensive hard and soft facility management, operations, and asset lifecycle care." → `/services#facility-management`
  - **Oil & Gas**: "Specialized upstream, midstream, downstream mechanical and pipeline support services." → `/services#oil-gas`
  - **Energy & Utilities**: "Power generation, renewable systems, sub-stations, and utility grid installations." → `/services#energy-utilities`
  - **MEP Services**: "Mechanical, Electrical, and Plumbing engineering design, installation, and retrofitting." → `/services#mep-services`
  - **Welding & Fabrication**: "Certified structural steel fabrication, spool fabrication, and precision coded welding." → `/services#welding-fabrication`
  - **Technical Support & Project Services**: "Multi-disciplinary engineering manpower, QA/QC inspection, and project management." → `/services#technical-support`
- Footer of the dropdown: "Need specific technical specs or project BOQ?" and the link **Request Quotation →** → `/contact`

### Mobile menu
- Logo, plus a "Quality Assured" label
- Links: Home (`/`), About Us (`/about`), Services (`/services`, which expands to the service list), Contact Us (`/contact`)
- Button: "Request a Quotation"
- Label: "Safety & Quality Standard" / "Zero-Incident HSE & Strict QA/QC Compliance"

### "Request a Quotation" popup (opened by every "Request a Quotation" / "Quote" button)
- Eyebrow: "Fast Response Engineering Quotation"
- Heading: **Request a Quotation**
- Text: "Shield Global Technical Services LLC — Share your technical requirements, specifications, or bill of quantities for an engineered proposal."
- Form fields:
  - **Select Required Service Division \*** (dropdown): Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP Services, Welding & Fabrication, Technical Support & Project Services, Multi-disciplinary / Turnkey Project, General Technical Consultation
  - **Full Name \*** (placeholder "e.g. Johnathan Miller")
  - **Company / Organization \*** (placeholder "e.g. Petrochem Industries")
  - **Work Email \*** (placeholder "name@company.com")
  - **Phone / Mobile \*** (placeholder "+971 50 123 4567")
  - **Project Scope & Technical Details \*** (placeholder "Outline key project deliverables, location, site timeline, specifications or standards required...")
- Note below the form: "Direct inquiry to: info@shieldglobaltech.ae"
- Submit button: "Submit Request" (shows "Processing..." while it waits)
- Success message: **Quotation Request Received**. "Thank you for contacting Shield Global Technical Services LLC. Our technical estimation department has logged your project scope and will review specifications within 24 hours." Button: "Close Window"
- When the popup is opened from a service's "Quote" button, that service is pre-selected in the dropdown.

### Footer
- Logo (same blue logo) → `/`
- Text: "Delivering excellence across building construction, facility management, oil & gas, energy utilities, MEP contracting, welding fabrication, and technical engineering support."
- Button: **Request a Quotation** (opens the popup)
- **Service Divisions**
  - Building Construction → `/services#building-construction`
  - Facility Management → `/services#facility-management`
  - Oil & Gas → `/services#oil-gas`
  - Energy & Utilities → `/services#energy-utilities`
  - MEP Services → `/services#mep-services`
  - Welding & Fabrication → `/services#welding-fabrication`
  - Technical Support & Project Services → `/services#technical-support`
- **Navigation**
  - Home → `/`
  - About Us → `/about`
  - Services → `/services`
  - Industries → `/industries`
  - Projects → `/projects`
  - HSE & Quality → `/hse-quality`
  - Careers → `/careers`
  - Contact Us → `/contact`
- **Regional Operations**
  - "Industrial Area & Offshore Technical Operations"
  - info@shieldglobaltech.ae
  - "+971 4 000 0000 / Quotations" [UNCLEAR, likely a placeholder phone]
  - "Quality & Safety" / "Zero-Incident HSE & Strict QA/QC Compliance"
- Bottom bar:
  - "© 2026 Shield Global Technical Services LLC. All rights reserved."
  - HSE Policy → `/hse-quality`
  - Quality Assurance → `/about`
  - Tenders & Inquiries → `/contact`

---

## Page 1: Home

- **URL:** https://www.shieldglobaltech.ae/
- **Page title:** Shield Global Technical Services LLC — Engineering & Project Excellence
- **Meta description:** Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.

### Hero
- Background image: `https://www.shieldglobaltech.ae/assets/hero-turbine-Cc-CNyzt.jpg` (alt: "Shield Global Technical Services LLC industrial operations"). A large industrial gas/steam turbine rotor on stands inside a bright factory hall with tall windows.
- Eyebrow: SHIELD GLOBAL TECHNICAL SERVICES LLC
- **H1:** Engineering.
  Technical Services.
  Project Excellence.
  - The last word is animated. It cycles every 2.8 seconds through: "Excellence." → "Precision." → "Reliability." → "Innovation." → "Performance."
- Body: "Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond."
- CTAs:
  - **Our Services** → `/services`
  - **Request a Quotation** → opens the quotation popup

### Trust strip
- Safety & QA/QC Verified
- Civil & MEP Contracting
- Oil & Gas / Energy Specs
- UAE & Regional Execution
- Multi-Disciplinary Capabilities

### H2: The 5 Core Pillars
"Engineered turnkey solutions tailored for major industrial, commercial, civil, and energy infrastructure projects across the GCC."

Each card has a number, a tagline, a title, a description, "Key Capabilities:", an **Explore Service** link, and a **Quote** button (opens the popup with that service pre-selected).

**01 — Civil & Structural Excellence**
### Building Construction
- Image: `https://www.shieldglobaltech.ae/assets/service-building-construction-DUS5K3kz.jpg` (alt: "Building Construction"). A high-rise under construction with steel frame, scaffolding, and tower cranes; workers in hi-vis on a deck; a city skyline behind.
- "Civil construction, renovation, structural works, finishing and project support."
- Key Capabilities:
  - Civil & Structural Works
  - Commercial & Industrial Buildings
  - Renovation & Fit-out
  - Turnkey Finishing
- Explore Service → `/services#building-construction`

**02 — Total Asset Lifecycle Care**
### Facility Management
- Image: `https://www.shieldglobaltech.ae/assets/service-facility-management-BK0j3WvE.jpg` (alt: "Facility Management"). A 4-panel collage of technicians in navy uniforms and white hard hats servicing a rooftop chiller, inspecting an air-handling unit, and using tablets in office corridors.
- "Hard FM, technical maintenance, MEP maintenance, building services and facility support."
- Key Capabilities:
  - Hard FM Solutions
  - Planned Preventive Maintenance (PPM)
  - Building Automation & HVAC
  - 24/7 Operations Support
- Explore Service → `/services#facility-management`

**03 — Onshore & Offshore Operations**
### Oil & Gas
- Image: `https://www.shieldglobaltech.ae/assets/service-oil-gas--AlqYfhx.jpg` (alt: "Oil & Gas"). Workers in tan coveralls and hard hats inspecting a valve on a refinery platform at dusk, with a flare stack in the background.
- "Onshore & offshore technical services, maintenance, shutdown, turnaround and project support."
- Key Capabilities:
  - Pipeline & Plant Maintenance
  - Offshore & Onshore Support
  - Shutdown Management
  - API & ASME Code Compliance
- Explore Service → `/services#oil-gas`

**04 — Power & Grid Infrastructure**
### Energy & Utilities
- Image: `https://www.shieldglobaltech.ae/assets/service-energy-utilities-9HHwMtuO.jpg` (alt: "Energy & Utilities"). Two engineers in yellow hi-vis at a control cabinet in an electrical substation at sunset, with solar panels, wind turbines, and pylons behind.
- "Technical services and maintenance support for power, water, energy and utility infrastructure."
- Key Capabilities:
  - Substation & Grid Installations
  - Water & Wastewater Systems
  - Renewable & Solar Support
  - HV / MV Cabling & Testing
- Explore Service → `/services#energy-utilities`

**05 — Integrated Systems & Controls**
### MEP Services
- Image: `https://www.shieldglobaltech.ae/assets/service-mep-CQbJ3DF6.jpg` (alt: "MEP Services"). Workers in hi-vis installing ductwork, copper piping, cable trays, and electrical panels in an unfinished building interior.
- "Mechanical, electrical, HVAC, plumbing, BMS and associated building systems."
- Key Capabilities:
  - HVAC & Chilled Water Piping
  - Fire Fighting & Alarm Systems
  - Electrical Distribution & LV
  - BMS & Smart Building Setup
- Explore Service → `/services#mep-services`

### Specialized Technical Services section
- Eyebrow: Specialized Technical Services
- **H2:** Fabrication, Manpower & Turnarounds
- "Complementary technical disciplines providing comprehensive support from workshop pre-fabrication to on-site project commissioning."

| Badge | Title | Description | Link |
|---|---|---|---|
| Specialized Shop & Field | **Welding & Fabrication** | Heavy structural steel fabrication, ASME/AWS coded pipe spooling, skid-mounted units, and certified NDT-compliant welding. | Learn More → `/services#welding-fabrication` |
| Engineering & Supervision | **EPC/EPCM Technical Support** | Multi-disciplinary engineering manpower, QA/QC certified inspection, third-party audits, and comprehensive project controls. | Learn More → `/services#technical-support` |
| Rapid Response Deployment | **Project Mobilization** | Fast-track site setup, specialized equipment logistics, certified manpower mobilization, and structured tooling deployment across the region. | Learn More → `/contact` |
| 24/7 Outage Management | **Shutdown & Turnaround Support** | Critical-path turnaround execution, heat exchanger & valve overhaul, emergency mechanical repairs, and rapid re-commissioning. | Learn More → `/services#oil-gas` |

### HSEQ section
- Eyebrow: HSEQ & Quality Standards
- **H2:** Rigorous Safety Culture.
  Zero-Compromise Quality.
- "Every project executed by Shield Global Technical Services LLC adheres strictly to international engineering standards and regional regulatory requirements. We provide complete transparency through Inspection Test Plans (ITP), Material Test Certificates (MTC), and certified QA/QC oversight."
- Three badges:
  - QA / QC: Quality Management
  - HSE Plan: Health & Safety
  - Eco Guard: Environmental
- CTAs:
  - **Explore HSE & Quality Manual** → `/hse-quality`
  - **About Our Leadership** → `/about` (the About page names no leaders)
- Image: `https://www.shieldglobaltech.ae/assets/quality-detail-MY2jzC3J.jpg` (alt: "Quality assurance inspection and dimensional verification"). A close-up of a machined steel gear meshing next to a roller bearing.
- Image overlay text: "Shield Global QA/QC" / "100% Traceability"

### Closing CTA
- Eyebrow: Start Your Technical Tender
- **H2:** Ready to mobilize your next industrial or construction project?
- "Contact Shield Global Technical Services LLC for competitive bids, project proposals, and technical consultations across the UAE and Gulf region."
- CTAs:
  - **Request a Quotation** → opens the popup
  - **Contact Technical Desk** → `/contact`

---

## Page 2: About Us

- **URL:** https://www.shieldglobaltech.ae/about
- **Page title:** About Us — Shield Global Technical Services LLC
- **Meta description:** Shield Global Technical Services LLC provides engineering contracting, MEP, civil construction, facility management, and technical support services.

### Page intro
- Eyebrow: 02 / Shield Global Technical Services LLC
- **H1:** Engineering Excellence, Integrity & High-Performance Execution
- "Shield Global Technical Services LLC is a premier technical solutions and multi-disciplinary contracting firm delivering specialized engineering, construction, facility maintenance, and industrial support."

### Image
- `https://www.shieldglobaltech.ae/assets/hero-turbine-Cc-CNyzt.jpg` (alt: "Shield Global Technical operations"). The same turbine-in-factory-hall image as the Home hero.
- Overlay text: "Shield Global Technical Services LLC" / "Committed to Safety, Quality & Engineering Precision"

### Corporate Overview
- Eyebrow: Corporate Overview
- **H2:** Delivering robust technical solutions built to last.
- "From heavy structural construction and MEP installations to oil & gas infrastructure maintenance and certified technical staffing, Shield Global provides end-to-end expertise tailored to demanding industrial requirements."
- Bullet points:
  - Multi-disciplinary engineering capabilities under one roof
  - Comprehensive QA/QC and zero-incident HSE management systems
  - Experienced project managers, certified inspectors, and specialized workforce
  - Uncompromising adherence to safety standards and client project timelines
- CTAs:
  - **Request a Quotation** → opens the popup
  - **Contact Our Team** → `/contact`

### Core Pillars
- Eyebrow: Core Pillars
- **H2:** Our Operating Principles

**01 — Engineering Precision**
"We bring meticulous planning, certified methodologies, and advanced tooling to every civil, mechanical, and MEP challenge."

**02 — Safety & Integrity First**
"Zero-harm commitment across all work sites, comprehensive hazard identification, and strict adherence to international safety codes."

**03 — Client Partnership**
"Transparent communication, proactive schedule tracking, and adaptable engineering teams that ensure on-time delivery."

**Not on this page:** company history, founding year, licence/trade number, team or leadership names, mission/vision statements.

---

## Page 3: Services

- **URL:** https://www.shieldglobaltech.ae/services
- **Page title:** Services — Shield Global Technical Services LLC
- **Meta description:** Comprehensive technical services: Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP, Welding & Fabrication, Technical Support.
- **Prices:** none listed for any service.

### Page intro
- Eyebrow: 03 / Shield Global Technical Services LLC
- **H1:** Comprehensive Technical & Industrial Services
- "Shield Global Technical Services LLC delivers multi-disciplinary contracting, engineering fabrication, maintenance, and facility solutions across critical industry sectors."

Each division below has the same CTAs: a **Request Quotation for [Service]** button (opens the popup) and a **Technical Inquiry** link → `/contact`. Each image has the overlay text "Shield Global Ref-0X Quality Assured".

### Service Division 01: Building Construction (anchor `#building-construction`)
- **H2:** Building Construction
- "Complete turnkey structural and civil engineering solutions delivering industrial plants, commercial facilities, and specialized infrastructure built to rigorous engineering standards."
- Key Capabilities:
  - Civil & Structural Engineering
  - Industrial Plants & Warehouses
  - Commercial Infrastructure
  - Foundation & Concrete Works
  - Retrofitting & Structural Refurbishment
- CTA: Request Quotation for Building Construction (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-building-construction-4qEN4ejL.jpg` (alt: "Building Construction"). A concrete building under construction with rebar and formwork; workers in orange hi-vis and yellow hard hats; tower cranes, an excavator, and a mixer truck; a dense city skyline behind.
- Overlay: "Shield Global Ref-01 Quality Assured"

### Service Division 02: Facility Management (anchor `#facility-management`)
- **H2:** Facility Management
- "Integrated facility management solutions ensuring asset longevity, operational uptime, preventive maintenance, and energy efficiency for commercial and industrial complexes."
- Key Capabilities:
  - Planned Preventive Maintenance (PPM)
  - Corrective & Emergency Repairs
  - Asset Lifecycle Management
  - HVAC & Building Automation Care
  - 24/7 Rapid Response Teams
- CTA: Request Quotation for Facility Management (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-facility-management-DKVvP6nZ.jpg` (alt: "Facility Management"). Three technicians in blue coveralls and hard hats inspecting rooftop HVAC units, one with a clipboard; office towers behind.
- Overlay: "Shield Global Ref-02 Quality Assured"

### Service Division 03: Oil & Gas (anchor `#oil-gas`)
- **H2:** Oil & Gas
- "High-spec technical contracting for refineries, petrochemical plants, offshore installations, pipeline networks, and storage terminals adhering to global safety and API/ASME standards."
- Key Capabilities:
  - Pipeline Installation & Integrity Testing
  - Refinery & Plant Maintenance
  - Valve Overhaul & Testing
  - Offshore & Onshore Structural Works
  - Shutdown & Turnaround Management
- CTA: Request Quotation for Oil & Gas (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-oil-gas-Bpxurx2-.jpg` (alt: "Oil & Gas"). Two workers (one in orange coveralls, one in blue) operating a red valve on a pipe rack at a refinery, with a flare stack behind.
- Overlay: "Shield Global Ref-03 Quality Assured"

### Service Division 04: Energy & Utilities (anchor `#energy-utilities`)
- **H2:** Energy & Utilities
- "End-to-end engineering support for thermal, solar, water distribution networks, electrical substations, and industrial power distribution infrastructures."
- Key Capabilities:
  - Substation Installation & Commissioning
  - Solar PV & Renewable Solutions
  - Water & Wastewater Utility Networks
  - High & Medium Voltage Cabling
  - Grid Synchronization & Testing
- CTA: Request Quotation for Energy & Utilities (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-energy-utilities-Bo5U-uT4.jpg` (alt: "Energy & Utilities"). Workers in hi-vis and yellow hard hats on substation steel structures with transformers and insulators; a solar farm and transmission towers behind.
- Overlay: "Shield Global Ref-04 Quality Assured"

### Service Division 05: MEP Services (anchor `#mep-services`)
- **H2:** MEP Services
- "Advanced Mechanical, Electrical, and Plumbing (MEP) contracting delivered with precision coordination, energy modeling, fire safety compliance, and smart building integration."
- Key Capabilities:
  - HVAC Chilled Water & Ducting Systems
  - Fire Fighting & Fire Alarm Systems
  - LV & ELV Electrical Distribution
  - Drainage, Water Supply & Sanitary Works
  - BMS (Building Management Systems) Setup
- CTA: Request Quotation for MEP Services (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-mep-services-C-Hv6Jb3.jpg` (alt: "MEP Services"). Workers on scaffolding installing cable trays and HVAC ductwork under a concrete ceiling in an unfinished building.
- Overlay: "Shield Global Ref-05 Quality Assured"

### Service Division 06: Welding & Fabrication (anchor `#welding-fabrication`)
- **H2:** Welding & Fabrication
- "State-of-the-art fabrication facility equipped for heavy structural steel, pressure piping spools, skid units, storage vessels, and certified SMAW/GTAW/GMAW/FCAW coded welding."
- Key Capabilities:
  - Structural Steel Fabrication & Erection
  - Pressure Piping Spooling (ASME / AWS)
  - Skid-Mounted Process Units
  - Non-Destructive Testing (NDT) QA/QC
  - Surface Treatment, Blasting & Coating
- CTA: Request Quotation for Welding & Fabrication (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-welding-fabrication-C1sthS65.jpg` (alt: "Welding & Fabrication"). Two welders in welding helmets welding a steel I-beam and a large pipe in a fabrication workshop with overhead cranes.
- Overlay: "Shield Global Ref-06 Quality Assured"

### Service Division 07: Technical Support & Project Services (anchor `#technical-support`)
- **H2:** Technical Support & Project Services
- "High-caliber engineering consultancy, technical secondment, certified QA/QC inspectors, HSE officers, project management, and site supervision tailored to complex industrial programmes."
- Key Capabilities:
  - Certified Technical Staffing & Secondment
  - QA/QC Inspection & Third-Party Auditing
  - Project Management & Planning (P6/MS Project)
  - Commissioning & Pre-Commissioning Support
  - Procurement & Supply Chain Management
- CTA: Request Quotation for Technical Support & Project Services (popup) | Technical Inquiry → `/contact`
- Image: `https://www.shieldglobaltech.ae/assets/svc-building-construction-4qEN4ejL.jpg` (alt: "Technical Support & Project Services"). **This reuses the Building Construction image** (the concrete building site); this division has no image of its own.
- Overlay: "Shield Global Ref-07 Quality Assured"

### Closing CTA
- Eyebrow: Turnkey Engineering & Contracting
- **H2:** Need a customized solution for your project?
- "Our multi-disciplinary engineering teams provide detailed proposals, site inspections, and quotation breakdowns for projects across the region."
- CTAs:
  - **Request a Quotation** → opens the popup
  - **Speak with an Engineer** → `/contact`

---

## Page 4: Industries

- **URL:** https://www.shieldglobaltech.ae/industries
- **Page title:** Industries — Shield Global Technical Services LLC
- **Meta description:** Delivering engineering contracting and technical services across key industrial sectors.
- **Linked from:** footer only (not in the header nav)

### Page intro
- Eyebrow: 04 / Shield Global Technical Services LLC
- **H1:** Engineered for Demanding Industrial Environments
- "Shield Global Technical Services LLC operates across critical sectors including Building Construction, Oil & Gas, Energy & Utilities, MEP Contracting, and Manufacturing Infrastructure."

### Industry sectors
The page shows three sectors, all with the same description. The intro text names five sectors, but only these three are shown. [UNCLEAR]

**01 / Industry Sector**
## Energy & Process
- Image: `https://www.shieldglobaltech.ae/assets/industry-process-Br-50fmq.jpg` (alt: "Energy & Process"). A refinery/petrochemical plant at sunset with distillation columns, large pipe runs, and storage tanks by the water.
- "Comprehensive technical contracting, specialized fabrication, and certified maintenance execution."

**02 / Industry Sector**
## Power Generation
- Image: `https://www.shieldglobaltech.ae/assets/hero-turbine-Cc-CNyzt.jpg` (alt: "Power Generation"). The same turbine-in-factory-hall image as the Home hero.
- "Comprehensive technical contracting, specialized fabrication, and certified maintenance execution."

**03 / Industry Sector**
## Advanced Manufacturing
- Image: `https://www.shieldglobaltech.ae/assets/product-machining-DYwBtIfM.jpg` (alt: "Advanced Manufacturing"). A CNC machining centre milling a large, complex aluminium/steel component in a factory.
- "Comprehensive technical contracting, specialized fabrication, and certified maintenance execution."

**No CTAs on this page** apart from the global header and footer.

---

## Page 5: Projects

- **URL:** https://www.shieldglobaltech.ae/projects
- **Page title:** Projects — Shield Global Technical Services LLC
- **Meta description:** Engineering, construction, MEP and technical maintenance project portfolio.
- **Linked from:** footer only

### Page intro
- Eyebrow: 05 / Shield Global Technical Services LLC
- **H1:** Work Measured by Precision & Performance
- "A showcase of multidisciplinary engineering contracting, structural fabrication, MEP installations, and industrial facility execution across the UAE."

### Projects
None of the projects give a client, location, date, or scope. All three use the same description. [UNCLEAR] whether these are real projects.

**Manufacturing System**
## High-Tolerance Production Cell
- Image: `https://www.shieldglobaltech.ae/assets/product-machining-DYwBtIfM.jpg` (alt: "High-Tolerance Production Cell"). The CNC machining image (also used on Industries).
- "Engineered to strict engineering quality and client project specifications with on-time delivery."

**Industrial Engineering**
## Integrated Process Infrastructure
- Image: `https://www.shieldglobaltech.ae/assets/industry-process-Br-50fmq.jpg` (alt: "Integrated Process Infrastructure"). The refinery-at-sunset image (also used on Industries).
- "Engineered to strict engineering quality and client project specifications with on-time delivery."

**Precision Quality**
## Critical Component Programme
- Image: `https://www.shieldglobaltech.ae/assets/quality-detail-MY2jzC3J.jpg` (alt: "Critical Component Programme"). The gear and bearing close-up (also used on Home and HSE).
- "Engineered to strict engineering quality and client project specifications with on-time delivery."

**No CTAs on this page** apart from the global header and footer.

---

## Page 6: HSE & Quality

- **URL:** https://www.shieldglobaltech.ae/hse-quality
- **Page title:** HSE & Quality — Shield Global Technical Services LLC
- **Meta description:** Health, Safety, Environment, and Quality commitment at Shield Global Technical Services LLC. Zero-incident culture and rigorous engineering quality assurance.
- **Linked from:** footer ("HSE & Quality", "HSE Policy") and the Home page ("Explore HSE & Quality Manual")

### Page intro
- Eyebrow: 06 / Shield Global Technical Services LLC
- **H1:** Health, Safety, Environment & Quality (HSEQ)
- "At Shield Global Technical Services LLC, HSE is an uncompromising cornerstone. We maintain a zero-incident culture alongside rigorous quality assurance across all engineering, fabrication, and field operations."

### HSEQ Commitment
- Eyebrow: HSEQ Commitment
- **H2:** Zero harm to people, zero impact to the environment, 100% adherence to quality.
- "Shield Global Technical Services LLC enforces stringent HSE management systems modeled on international engineering best practices and regional regulatory benchmarks. Our proactive safety culture empowers every team member with Stop-Work Authority."

**Target Zero Incidents**
"Continuous toolbox talks, risk assessments (HIRA/JSA), and mandatory PPE compliance on all construction & site projects."

**Strict QA/QC Controls**
"Comprehensive Material Test Certificates (MTC), NDT inspection logs, and traceable Quality Control Plans (ITP)."

- Image: `https://www.shieldglobaltech.ae/assets/quality-detail-MY2jzC3J.jpg` (alt: "Quality assurance inspection and precision measurement"). The gear and roller bearing close-up.

### Core Pillars
- Eyebrow: Core Pillars
- **H2:** Our HSE & Quality Framework

**Occupational Health & Safety**
"Zero-harm safety framework. Comprehensive site induction, emergency evacuation drills, hazardous material management, and continuous hazard mitigation."

**Environmental Stewardship**
"Ecological responsibility. Sustainable waste segregation, emissions reduction, energy-efficient plant operations, and environmental protection guidelines."

**Rigorous Quality Assurance**
"Total engineering precision. Rigorous WPS/PQR welding qualification, dimensional inspection, calibration verification, and transparent reporting."

### Dossier CTA
- **H3:** Require our HSEQ compliance dossier?
- "Request our quality manual, safety records, or company HSE policy document."
- CTAs:
  - **Request a Quotation** → opens the popup
  - **Contact HSE Department** → `/contact`

**Not on this page:** ISO or other certification names or numbers, safety statistics (e.g. LTI-free hours), or downloadable policy documents.

---

## Page 7: Careers

- **URL:** https://www.shieldglobaltech.ae/careers
- **Page title:** Careers — Shield Global Technical Services LLC
- **Meta description:** Build your career with Shield Global Technical Services LLC. Explore opportunities in civil engineering, MEP, welding, project management, and HSE.
- **Linked from:** footer only

### Page intro
- Eyebrow: 07 / Shield Global Technical Services LLC
- **H1:** Careers at Shield Global
- "Join a dynamic, precision-driven engineering contracting organization. We invest in talent, continuous technical growth, safety leadership, and impactful industrial projects."

### Opportunities
- Eyebrow: Opportunities
- **H2:** Open Positions
- "Don't see your specific role? Send your CV and portfolio to info@shieldglobaltech.ae"

Each job has an **Apply Now** link → `/contact`. There is no application form or job detail page. No salaries are listed.

| Division | Location | Type | Experience | Title | Description |
|---|---|---|---|---|---|
| MEP Services | UAE / Middle East | Full-Time | 7+ Years | **Senior MEP Project Engineer** | Lead HVAC, electrical, and plumbing project execution, site coordination, submittals, and client liaison on large industrial projects. |
| Building Construction | UAE | Full-Time | 5+ Years | **Civil & Structural QA/QC Engineer** | Manage inspection and test plans (ITP), material approvals, non-conformance reports, and ensure compliance with stringent engineering quality standards. |
| Welding & Fabrication | Fabrication Facility | Full-Time | 6+ Years | **Lead Piping & Welding Inspector (CSWIP / AWS)** | Supervise structural and pressure pipe welding, verify WPS/PQR, perform visual inspection and coordinate NDT testing. |
| HSE & Quality | Site Based | Full-Time | 4+ Years | **HSE Officer (NEBOSH Certified)** | Enforce safety policies, perform daily risk assessments, conduct toolbox talks, and maintain zero-incident site performance. |
| Facility Management | Regional Projects | Full-Time | 5+ Years | **Facility Management Operations Supervisor** | Oversee preventive and corrective maintenance schedules for MEP and commercial building infrastructure. |

[UNCLEAR] whether these vacancies are current or placeholder listings. None have posting dates.

---

## Page 8: Contact Us

- **URL:** https://www.shieldglobaltech.ae/contact
- **Page title:** Contact Us — Shield Global Technical Services LLC
- **Meta description:** Contact Shield Global Technical Services LLC for technical project inquiries, tender submissions, RFQs, and quotation requests.

### Page intro
- Eyebrow: 08 / Shield Global Technical Services LLC
- **H1:** Contact Shield Global Technical Services LLC
- "Connect with our technical estimation, tendering, and engineering divisions. Request a quotation or discuss your technical project scope."

### Direct Communication
- Eyebrow: Direct Communication
- **H2:** Head Office & Operations
- Company: Shield Global Technical Services LLC
- Location line: "Industrial & Commercial Operations Hub" (no street address, city, or map) [UNCLEAR]
- Email: info@shieldglobaltech.ae
- Phone: +971 4 000 0000 / +971 50 000 0000 [UNCLEAR, both look like placeholders]
- Hours: Mon - Sat: 8:00 AM – 6:00 PM (GST)
- Label: "Quality Assurance & Safety" / "Zero-Incident HSE • Traceable QA/QC Inspection Controls"

### Tender & Quotation Form
- Eyebrow: Tender & Quotation Form
- **H3:** Send an Inquiry or RFP
- "Fill in your project details and our engineering estimators will respond promptly."
- Fields:
  - **Your Full Name \*** (placeholder "e.g. Michael Vance")
  - **Company / Organization \*** (placeholder "e.g. Apex Industrial LLC")
  - **Official Email \*** (placeholder "name@company.com")
  - **Telephone / Mobile \*** (placeholder "+971 50 123 4567")
  - **Service Division Required** (dropdown): -- Select Division --, Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP Services, Welding & Fabrication, Technical Support & Project Services, Turnkey Multi-disciplinary, General Technical Support
  - **Project Scope & Bill of Quantities Outline \*** (placeholder "Describe your project requirements, location, target delivery schedule, and any technical standards...")
- Submit button: **Submit Inquiry / Request Quotation** (shows "Sending..." while it waits)
- Success message: **Message Transmitted**. "Thank you for reaching out to Shield Global Technical Services LLC. Our team has received your submission and will get in touch with you shortly." Button: "Send Another Inquiry"
- **Note:** this form doesn't send anything to a server or email (see the notes at the top).

---

## Consolidated contact details

| Item | Value |
|---|---|
| Email | info@shieldglobaltech.ae |
| Phone (landline) | +971 4 000 0000 [UNCLEAR, likely a placeholder] |
| Phone (mobile) | +971 50 000 0000 [UNCLEAR, likely a placeholder] |
| Address | Not provided. Only "Industrial & Commercial Operations Hub" / "Industrial Area & Offshore Technical Operations". [UNCLEAR] |
| Hours | Mon - Sat: 8:00 AM – 6:00 PM (GST) |
| Social links | None on the site |
| Service area | "UAE & GCC", "UAE and beyond", "across the UAE and Gulf region" |

## Services at a glance (7 divisions + 2 extra offerings)

| # | Division | Anchor | Prices |
|---|---|---|---|
| 01 | Building Construction | /services#building-construction | Not listed |
| 02 | Facility Management | /services#facility-management | Not listed |
| 03 | Oil & Gas | /services#oil-gas | Not listed |
| 04 | Energy & Utilities | /services#energy-utilities | Not listed |
| 05 | MEP Services | /services#mep-services | Not listed |
| 06 | Welding & Fabrication | /services#welding-fabrication | Not listed |
| 07 | Technical Support & Project Services (called "EPC/EPCM Technical Support" on Home) | /services#technical-support | Not listed |
| — | Project Mobilization (Home page only, no section of its own) | /contact | Not listed |
| — | Shutdown & Turnaround Support (Home page only, links to Oil & Gas) | /services#oil-gas | Not listed |

## Standards, codes, and qualifications mentioned on the site
These are mentioned as capabilities only. The site doesn't claim any certificates.
API, ASME, AWS, NDT, ITP (Inspection Test Plans), MTC (Material Test Certificates), WPS/PQR, SMAW/GTAW/GMAW/FCAW welding processes, HIRA/JSA, PPE, Stop-Work Authority, CSWIP, NEBOSH, P6 / MS Project, BMS, PPM, HV/MV/LV/ELV.

## Full image inventory

| URL | Used on | What it shows |
|---|---|---|
| https://www.shieldglobaltech.ae/assets/logo-B-qOYJue.png | Header, footer (all pages) | Blue shield with a white checkmark/swoosh; text "SHIELD GLOBAL / TECHNICAL SERVICES LLC" |
| https://www.shieldglobaltech.ae/logo.png | Favicon / apple-touch-icon | **Different logo:** red shield with a white piston and wrench; text "SHIELD / GLOBAL TECHNICAL SERVICES LLC" [UNCLEAR which logo is official] |
| https://www.shieldglobaltech.ae/favicon.svg | Browser tab icon | Blue (#0f4ba1) rounded square with a white shield and a blue checkmark |
| https://www.shieldglobaltech.ae/assets/hero-turbine-Cc-CNyzt.jpg | Home hero, About, Industries (Power Generation) | Large turbine rotor on stands in a bright industrial hall |
| https://www.shieldglobaltech.ae/assets/service-building-construction-DUS5K3kz.jpg | Home (pillar 01) | High-rise steel frame under construction, cranes, workers, city skyline |
| https://www.shieldglobaltech.ae/assets/service-facility-management-BK0j3WvE.jpg | Home (pillar 02) | 4-panel collage of FM technicians servicing a chiller and AHU and using tablets in corridors |
| https://www.shieldglobaltech.ae/assets/service-oil-gas--AlqYfhx.jpg | Home (pillar 03) | Workers inspecting a valve on a refinery platform at dusk, flare stack |
| https://www.shieldglobaltech.ae/assets/service-energy-utilities-9HHwMtuO.jpg | Home (pillar 04) | Engineers at a substation control cabinet; solar, wind turbines, pylons at sunset |
| https://www.shieldglobaltech.ae/assets/service-mep-CQbJ3DF6.jpg | Home (pillar 05) | MEP installation of ducts, copper pipes, cable trays, and electrical panels |
| https://www.shieldglobaltech.ae/assets/quality-detail-MY2jzC3J.jpg | Home (HSEQ), Projects, HSE & Quality | Close-up of a machined steel gear and roller bearing |
| https://www.shieldglobaltech.ae/assets/svc-building-construction-4qEN4ejL.jpg | Services (Building Construction and Technical Support) | Concrete building under construction, rebar, workers, cranes, excavator |
| https://www.shieldglobaltech.ae/assets/svc-facility-management-DKVvP6nZ.jpg | Services (Facility Management) | Three technicians in blue coveralls inspecting rooftop HVAC units |
| https://www.shieldglobaltech.ae/assets/svc-oil-gas-Bpxurx2-.jpg | Services (Oil & Gas) | Two workers turning a red valve on a refinery pipe rack |
| https://www.shieldglobaltech.ae/assets/svc-energy-utilities-Bo5U-uT4.jpg | Services (Energy & Utilities) | Workers on substation steel structures; solar farm and pylons behind |
| https://www.shieldglobaltech.ae/assets/svc-mep-services-C-Hv6Jb3.jpg | Services (MEP Services) | Workers on scaffolding installing cable trays and ductwork |
| https://www.shieldglobaltech.ae/assets/svc-welding-fabrication-C1sthS65.jpg | Services (Welding & Fabrication) | Two welders welding an I-beam and a large pipe in a workshop |
| https://www.shieldglobaltech.ae/assets/industry-process-Br-50fmq.jpg | Industries (Energy & Process), Projects | Refinery/petrochemical plant with columns and pipe racks at sunset |
| https://www.shieldglobaltech.ae/assets/product-machining-DYwBtIfM.jpg | Industries (Advanced Manufacturing), Projects | CNC machine milling a large metal component |

## Full CTA inventory

| CTA text | Where | Goes to |
|---|---|---|
| Request a Quotation | Header, footer, mobile menu, Home hero, Home closing, About, Services closing, HSE | Opens the quotation popup |
| Quote | Home: each of the 5 pillar cards | Opens the popup with the service pre-selected |
| Request Quotation for [Service] | Services: each of the 7 divisions | Opens the popup with the service pre-selected |
| Request Quotation → | Services dropdown footer | /contact |
| All Services | Services dropdown | /services |
| Our Services | Home hero | /services |
| Explore Service | Home: 5 pillar cards | /services#[division] |
| Learn More | Home: Specialized Technical Services cards | /services#welding-fabrication, /services#technical-support, /contact, /services#oil-gas |
| Explore HSE & Quality Manual | Home | /hse-quality |
| About Our Leadership | Home | /about |
| Contact Technical Desk | Home closing | /contact |
| Contact Our Team | About | /contact |
| Technical Inquiry | Services: each division | /contact |
| Speak with an Engineer | Services closing | /contact |
| Contact HSE Department | HSE & Quality | /contact |
| Apply Now | Careers: each job | /contact |
| Submit Inquiry / Request Quotation | Contact form | Simulated only (nothing is sent) |
| Submit Request | Quotation popup | Simulated only (nothing is sent) |
| HSE Policy / Quality Assurance / Tenders & Inquiries | Footer bottom bar | /hse-quality, /about, /contact |

## Content not found anywhere on the site
- Team members / leadership names
- Testimonials or reviews
- FAQs
- Numeric stats (years in business, projects completed, headcount, etc.)
- Awards
- Certifications with names or numbers (e.g. ISO)
- Client names or client logos
- Prices
- Physical address, map, or trade licence number
- Social media links
- Blog, news, or case study pages
