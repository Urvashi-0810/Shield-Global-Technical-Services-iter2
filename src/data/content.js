// All copy below is taken from content.md (the inventory of shieldglobaltech.ae).
// Placeholder phone numbers from the old site are intentionally left out.

export const company = {
  name: 'Shield Global Technical Services LLC',
  short: 'Shield Global',
  email: 'info@shieldglobaltech.ae',
  hours: 'Mon – Sat: 8:00 AM – 6:00 PM (GST)',
  hub: 'Industrial & Commercial Operations Hub',
  regional: 'Industrial Area & Offshore Technical Operations',
  taglines: [
    'Quality Assured • Safety First • Engineering Excellence',
    'UAE & GCC Multi-Disciplinary Contracting',
  ],
  footerBlurb:
    'Delivering excellence across building construction, facility management, oil & gas, energy utilities, MEP contracting, welding fabrication, and technical engineering support.',
}

export const divisions = [
  {
    id: 'building-construction',
    title: 'Building Construction',
    short:
      'Commercial, industrial, and infrastructure structural civil construction services.',
    pillarTag: 'Civil & Structural Excellence',
    pillarText:
      'Civil construction, renovation, structural works, finishing and project support.',
    pillarCaps: [
      'Civil & Structural Works',
      'Commercial & Industrial Buildings',
      'Renovation & Fit-out',
      'Turnkey Finishing',
    ],
    pillarImage: '/images/service-building-construction.jpg',
    text: 'Complete turnkey structural and civil engineering solutions delivering industrial plants, commercial facilities, and specialized infrastructure built to rigorous engineering standards.',
    caps: [
      'Civil & Structural Engineering',
      'Industrial Plants & Warehouses',
      'Commercial Infrastructure',
      'Foundation & Concrete Works',
      'Retrofitting & Structural Refurbishment',
    ],
    image: '/images/svc-building-construction.jpg',
  },
  {
    id: 'facility-management',
    title: 'Facility Management',
    short:
      'Comprehensive hard and soft facility management, operations, and asset lifecycle care.',
    pillarTag: 'Total Asset Lifecycle Care',
    pillarText:
      'Hard FM, technical maintenance, MEP maintenance, building services and facility support.',
    pillarCaps: [
      'Hard FM Solutions',
      'Planned Preventive Maintenance (PPM)',
      'Building Automation & HVAC',
      '24/7 Operations Support',
    ],
    pillarImage: '/images/svc-facility-management.jpg',
    text: 'Integrated facility management solutions ensuring asset longevity, operational uptime, preventive maintenance, and energy efficiency for commercial and industrial complexes.',
    caps: [
      'Planned Preventive Maintenance (PPM)',
      'Corrective & Emergency Repairs',
      'Asset Lifecycle Management',
      'HVAC & Building Automation Care',
      '24/7 Rapid Response Teams',
    ],
    image: '/images/service-facility-management.jpg',
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    short:
      'Specialized upstream, midstream, downstream mechanical and pipeline support services.',
    pillarTag: 'Onshore & Offshore Operations',
    pillarText:
      'Onshore & offshore technical services, maintenance, shutdown, turnaround and project support.',
    pillarCaps: [
      'Pipeline & Plant Maintenance',
      'Offshore & Onshore Support',
      'Shutdown Management',
      'API & ASME Code Compliance',
    ],
    pillarImage: '/images/service-oil-gas.jpg',
    text: 'High-spec technical contracting for refineries, petrochemical plants, offshore installations, pipeline networks, and storage terminals adhering to global safety and API/ASME standards.',
    caps: [
      'Pipeline Installation & Integrity Testing',
      'Refinery & Plant Maintenance',
      'Valve Overhaul & Testing',
      'Offshore & Onshore Structural Works',
      'Shutdown & Turnaround Management',
    ],
    image: '/images/svc-oil-gas.jpg',
  },
  {
    id: 'energy-utilities',
    title: 'Energy & Utilities',
    short:
      'Power generation, renewable systems, sub-stations, and utility grid installations.',
    pillarTag: 'Power & Grid Infrastructure',
    pillarText:
      'Technical services and maintenance support for power, water, energy and utility infrastructure.',
    pillarCaps: [
      'Substation & Grid Installations',
      'Water & Wastewater Systems',
      'Renewable & Solar Support',
      'HV / MV Cabling & Testing',
    ],
    pillarImage: '/images/service-energy-utilities.jpg',
    text: 'End-to-end engineering support for thermal, solar, water distribution networks, electrical substations, and industrial power distribution infrastructures.',
    caps: [
      'Substation Installation & Commissioning',
      'Solar PV & Renewable Solutions',
      'Water & Wastewater Utility Networks',
      'High & Medium Voltage Cabling',
      'Grid Synchronization & Testing',
    ],
    image: '/images/svc-energy-utilities.jpg',
  },
  {
    id: 'mep-services',
    title: 'MEP Services',
    short:
      'Mechanical, Electrical, and Plumbing engineering design, installation, and retrofitting.',
    pillarTag: 'Integrated Systems & Controls',
    pillarText:
      'Mechanical, electrical, HVAC, plumbing, BMS and associated building systems.',
    pillarCaps: [
      'HVAC & Chilled Water Piping',
      'Fire Fighting & Alarm Systems',
      'Electrical Distribution & LV',
      'BMS & Smart Building Setup',
    ],
    pillarImage: '/images/service-mep.jpg',
    text: 'Advanced Mechanical, Electrical, and Plumbing (MEP) contracting delivered with precision coordination, energy modeling, fire safety compliance, and smart building integration.',
    caps: [
      'HVAC Chilled Water & Ducting Systems',
      'Fire Fighting & Fire Alarm Systems',
      'LV & ELV Electrical Distribution',
      'Drainage, Water Supply & Sanitary Works',
      'BMS (Building Management Systems) Setup',
    ],
    image: '/images/svc-mep-services.jpg',
  },
  {
    id: 'welding-fabrication',
    title: 'Welding & Fabrication',
    short:
      'Certified structural steel fabrication, spool fabrication, and precision coded welding.',
    text: 'State-of-the-art fabrication facility equipped for heavy structural steel, pressure piping spools, skid units, storage vessels, and certified SMAW/GTAW/GMAW/FCAW coded welding.',
    caps: [
      'Structural Steel Fabrication & Erection',
      'Pressure Piping Spooling (ASME / AWS)',
      'Skid-Mounted Process Units',
      'Non-Destructive Testing (NDT) QA/QC',
      'Surface Treatment, Blasting & Coating',
    ],
    image: '/images/svc-welding-fabrication.jpg',
  },
  {
    id: 'technical-support',
    title: 'Technical Support & Project Services',
    short:
      'Multi-disciplinary engineering manpower, QA/QC inspection, and project management.',
    text: 'High-caliber engineering consultancy, technical secondment, certified QA/QC inspectors, HSE officers, project management, and site supervision tailored to complex industrial programmes.',
    caps: [
      'Certified Technical Staffing & Secondment',
      'QA/QC Inspection & Third-Party Auditing',
      'Project Management & Planning (P6/MS Project)',
      'Commissioning & Pre-Commissioning Support',
      'Procurement & Supply Chain Management',
    ],
    // The old site reused the Building Construction photo here; this division has no image of its own.
    image: null,
  },
]

export const pillars = divisions.slice(0, 5)

export const specialized = [
  {
    badge: 'Specialized Shop & Field',
    title: 'Welding & Fabrication',
    text: 'Heavy structural steel fabrication, ASME/AWS coded pipe spooling, skid-mounted units, and certified NDT-compliant welding.',
    to: '/services#welding-fabrication',
  },
  {
    badge: 'Engineering & Supervision',
    title: 'EPC/EPCM Technical Support',
    text: 'Multi-disciplinary engineering manpower, QA/QC certified inspection, third-party audits, and comprehensive project controls.',
    to: '/services#technical-support',
  },
  {
    badge: 'Rapid Response Deployment',
    title: 'Project Mobilization',
    text: 'Fast-track site setup, specialized equipment logistics, certified manpower mobilization, and structured tooling deployment across the region.',
    to: '/contact',
  },
  {
    badge: '24/7 Outage Management',
    title: 'Shutdown & Turnaround Support',
    text: 'Critical-path turnaround execution, heat exchanger & valve overhaul, emergency mechanical repairs, and rapid re-commissioning.',
    to: '/services#oil-gas',
  },
]

export const trustStrip = [
  'Safety & QA/QC Verified',
  'Civil & MEP Contracting',
  'Oil & Gas / Energy Specs',
  'UAE & Regional Execution',
  'Multi-Disciplinary Capabilities',
]

export const sectors = [
  { title: 'Energy & Process', image: '/images/industry-process.jpg' },
  { title: 'Power Generation', image: '/images/hero-turbine.jpg' },
  { title: 'Advanced Manufacturing', image: '/images/product-machining.jpg' },
]

export const quoteOptions = [
  ...divisions.map((d) => d.title),
  'Multi-disciplinary / Turnkey Project',
  'General Technical Consultation',
]

export const jobs = [
  {
    title: 'Senior MEP Project Engineer',
    division: 'MEP Services',
    location: 'UAE / Middle East',
    type: 'Full-Time',
    experience: '7+ Years',
    text: 'Lead HVAC, electrical, and plumbing project execution, site coordination, submittals, and client liaison on large industrial projects.',
  },
  {
    title: 'Civil & Structural QA/QC Engineer',
    division: 'Building Construction',
    location: 'UAE',
    type: 'Full-Time',
    experience: '5+ Years',
    text: 'Manage inspection and test plans (ITP), material approvals, non-conformance reports, and ensure compliance with stringent engineering quality standards.',
  },
  {
    title: 'Lead Piping & Welding Inspector (CSWIP / AWS)',
    division: 'Welding & Fabrication',
    location: 'Fabrication Facility',
    type: 'Full-Time',
    experience: '6+ Years',
    text: 'Supervise structural and pressure pipe welding, verify WPS/PQR, perform visual inspection and coordinate NDT testing.',
  },
  {
    title: 'HSE Officer (NEBOSH Certified)',
    division: 'HSE & Quality',
    location: 'Site Based',
    type: 'Full-Time',
    experience: '4+ Years',
    text: 'Enforce safety policies, perform daily risk assessments, conduct toolbox talks, and maintain zero-incident site performance.',
  },
  {
    title: 'Facility Management Operations Supervisor',
    division: 'Facility Management',
    location: 'Regional Projects',
    type: 'Full-Time',
    experience: '5+ Years',
    text: 'Oversee preventive and corrective maintenance schedules for MEP and commercial building infrastructure.',
  },
]
