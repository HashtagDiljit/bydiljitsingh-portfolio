
import { Project, Experience, Education, WikiEntry, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'idp3',
    title: 'Electric Rally Pickup — Toyota Hilux (IDP3)',
    subtitle: 'Led a 30-person multidisciplinary team to design a fully electric Toyota Hilux EV concept for the Dakar Rally.',
    summary: 'Vehicle dynamics, suspension, steering, braking & tyres for a Hilux-based EV concept with a swappable battery.',
    description: 'Vehicle dynamics, suspension, steering, braking & tyres for a Hilux-based EV concept with a swappable battery.',
    longDescription: 'A comprehensive multidisciplinary project focused on converting a standard Toyota Hilux into a performance electric rally vehicle with modular battery technology.',
    
    // Metadata from screenshot
    teamSize: '30',
    role: 'Team Leader + Mechanical Subgroup Lead',
    duration: 'Sept–May',
    tools: ['Fusion 360', 'Ansys Fluent', 'Granta Edupack'],

    // Sections from screenshot
    context: 'The Dakar Rally is one of the toughest off-road events on earth. Rally contenders have traditionally been ICE-powered; our challenge was to electrify a Hilux for a 2028 Dakar entry using Toyota’s next-gen solid-state battery. Beyond performance, the brief served a broader sustainability goal: demonstrate that EVs can survive extreme endurance racing while staying fast, safe and serviceable.',
    
    objectives: [
      { icon: 'fa-gauge-high', label: 'Performance', value: '0–100 < 6 s; top speed > 200 km/h.' },
      { icon: 'fa-shield-halved', label: 'Durability', value: 'Survive 500–800 km rally stages under extreme loads.' },
      { icon: 'fa-lock', label: 'Safety', value: 'FIA roll cage compliance, crashworthiness, HV battery safety.' },
      { icon: 'fa-leaf', label: 'Sustainability', value: 'Solid-state battery, regenerative suspension, zero tailpipe emissions.' }
    ],

    leadership: {
      summary: 'Elected Team Leader for the 30-person cohort. I chaired weekly stand-ups, resolved cross-group conflicts and kept interfaces aligned across six sub-teams. I authored shared documentation and review standards to maintain design quality. Within the Mechanical subgroup (suspension, steering, braking, tyres, vehicle dynamics) I contributed CAD/kinematics, vehicle-dynamics calculations, risk assessment and system integration.',
      quote: 'I balanced technical design with leadership, ensuring six subgroups integrated into one concept.',
      stats: [
        '30 teammates across 6 specialist groups coordinated',
        'Delivered 3 reports & 1 final presentation on time',
        'Subsystem integration achieved with 0 missed deadlines'
      ]
    },

    technicalContributions: [
      {
        title: 'Suspension',
        description: 'Double wishbone front and rear with 350 mm travel, tuned to around 2 Hz ride frequency for predictable handling on loose terrain. We explored regenerative dampers targeting 2–5 kW per wheel during heavy compression events.',
        imageUrl: 'https://images.unsplash.com/photo-1598970434745-0b17369666ee?auto=format&fit=crop&q=80&w=800',
        subtext: 'Kinematics/packaging study for long-travel double wishbone.'
      },
      {
        title: 'Steering',
        description: 'Electro-hydraulic power steering rack sized for off-road loads, capable of >11,500 Nm wheel torque. Ratios chosen to balance quick inputs at speed with stability and feedback.',
        imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
        subtext: 'EHPS concept and CAD study.'
      },
      {
        title: 'Braking',
        description: 'Brembo 6-piston front / 4-piston rear with vented rotors; deceleration target 7.7 m·s⁻². Thermal/structural FEA confirmed margin for repeated high-speed stops.',
        imageUrl: 'https://images.unsplash.com/photo-1486326704275-cd374454ed17?auto=format&fit=crop&q=80&w=800',
        subtext: 'Thermal/structural FEA snapshot of front rotor.'
      },
      {
        title: 'Tyres',
        description: 'BFGoodrich Dakar All-Terrain on beadlock wheels for low-pressure running in sand/rock, balancing endurance, puncture resistance and grip over 500–800 km stages.',
        imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
        subtext: 'Tyre & beadlock selection for low-pressure stages.'
      },
      {
        title: 'Vehicle Dynamics',
        description: 'Targeted 50:50 distribution including a central ~1,200 kg battery pack. Stability analysis and envelope trade-offs performed with MATLAB & GP100.',
        imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
      }
    ],

    achievementsSummary: 'Delivered a validated concept with suspension/brake FEA, an integration plan across six subgroups, and a concise business case for Toyota to launch an EV Dakar entry in 2028.',
    achievementMetrics: [
      { label: 'Top Speed', value: '204 km/h', subvalue: '' },
      { label: '0–100 km/h', value: '< 6 s', subvalue: '' },
      { label: 'Lateral Grip (target)', value: '1.2–1.5 g', subvalue: '' },
      { label: 'Battery Swap Time', value: '< few min', subvalue: '' }
    ],

    tags: ['Automotive', 'CAD', 'Simulation', 'EV'],
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    date: '2024',
    reportUrl: '#'
  },
  {
    id: 'mdb',
    title: 'Wankel Engine Transmission (MDB)',
    description: 'Designing a speed-reduction gearbox for a light-aircraft Wankel engine.',
    longDescription: 'Mechanical Design B (MDB) project involving the engineering of a high-torque speed reduction unit for aviation applications.',
    context: 'The requirement was to reduce the high RPM output of a Wankel engine to a suitable propeller speed while maintaining high efficiency and low weight.',
    objectives: [
      { icon: 'fa-cog', label: 'Efficiency', value: '> 95% transmission efficiency.' },
      { icon: 'fa-weight-hanging', label: 'Weight', value: 'Under 15kg for flight housing.' }
    ],
    role: 'Mechanical Design Engineer',
    tags: ['Mechanical Design', 'Gears', 'Aerospace'],
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    date: '2023',
    reportUrl: '#'
  },
  {
    id: 'fea-plate',
    title: 'Thin Plate with Hole (FEA)',
    description: 'Finite Element Analysis to evaluate stress concentration and deflection.',
    longDescription: 'A rigorous structural analysis project investigating the theoretical vs. numerical stress concentrations in perforated members.',
    context: 'Module focused on the application of Finite Element Methods in structural engineering.',
    role: 'FEA Analyst',
    tags: ['FEA', 'Ansys', 'Structural'],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    date: '2023',
    reportUrl: '#'
  },
  {
    id: 'cfd-inhaler',
    title: 'Child’s Inhaler Spacer Redesign (CFD)',
    description: 'Improving inhaler spacer efficiency using Computational Fluid Dynamics.',
    longDescription: 'A bio-mechanical engineering project aimed at optimizing the delivery of aerosolized medication for pediatric patients.',
    context: 'Standard spacers often lose significant medication due to turbulence and wall deposition.',
    role: 'CFD Specialist',
    tags: ['CFD', 'Medical Device', 'Fluid Dynamics'],
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    date: '2024',
    reportUrl: '#'
  },
  {
    id: 'idp2-hydrogen',
    title: 'Green Hydrogen Plant (IDP2)',
    description: 'Multidisciplinary design project focused on sustainability and systems integration. Final grade: 83%.',
    longDescription: 'Large-scale systems engineering project for a sustainable hydrogen production facility.',
    context: 'Integrated Design Project (IDP2) requiring the design of a complete utility-scale green hydrogen plant.',
    role: 'Process & Safety Engineer',
    tags: ['Sustainability', 'Systems Engineering', 'Energy'],
    imageUrl: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
    date: '2023',
    reportUrl: '#'
  },
  {
    id: 'mda-engine',
    title: 'Small-Scale 2-Stroke Engine (MDA)',
    description: 'Designing and modelling a compact 2-stroke engine.',
    longDescription: 'Mechanical Design A (MDA) project involving the complete part-by-part design of an internal combustion engine.',
    context: 'Foundational mechanical design module focused on component tolerances, assembly, and kinematics.',
    role: 'Lead CAD Designer',
    tags: ['Mechanical Design', 'CAD', 'IC Engines'],
    imageUrl: 'https://images.unsplash.com/photo-1486326704275-cd374454ed17?auto=format&fit=crop&q=80&w=800',
    date: '2022',
    reportUrl: '#'
  },
  {
    id: 'idp1b-bridge',
    title: 'Wooden Bridge (IDP1 B)',
    description: 'Withstood 2.4 kN vs 1.1 kN pass; highest in cohort.',
    longDescription: 'A structural efficiency challenge using limited materials to achieve maximum load capacity.',
    context: 'First-year design project introduced to test structural intuition and craftsmanship.',
    role: 'Structural Lead',
    tags: ['Structural', 'Civil', 'Testing'],
    imageUrl: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?auto=format&fit=crop&q=80&w=800',
    date: '2022',
    reportUrl: '#'
  },
  {
    id: 'idp1a-piston',
    title: 'Pneumatic Piston Model (IDP1 A)',
    description: 'Parametric modelling and assembly drawings for a pneumatic piston.',
    longDescription: 'Introduction to professional CAD standards and assembly management.',
    context: 'First Integrated Design Project (IDP1 A) focused on foundational CAD skills.',
    role: 'Junior Designer',
    tags: ['CAD', 'Fusion 360', 'Fundamentals'],
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    date: '2022',
    reportUrl: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'University of Birmingham',
    role: 'Student Ambassador',
    period: '11/2022 – Present',
    description: [
      'Representative for the university, collaborating with other ambassadors to facilitate student recruitment and outreach events.',
      'Ensured smooth delivery of open days and school visits by supervising and engaging students aged 11-18.',
      'Increased attendee satisfaction by taking initiative during unassigned tasks to resolve issues before escalation.'
    ]
  },
  {
    id: 'exp2',
    company: 'University of Birmingham',
    role: 'Inspired@Birmingham Mentor',
    period: '04/2023 – 12/2024',
    description: [
      'Mentored 16 students, all of whom finalised a university or course choice by providing tailored guidance and feedback.',
      'Improved mentees’ CVs and applications through structured feedback and mock reviews based on real-world standards.',
      'Designed personalised planning and check-ins, inspired by own post-16 mentorship journey.'
    ]
  },
  {
    id: 'exp3',
    company: 'Alstom UK',
    role: 'Online Intern',
    period: '08/2021',
    description: [
      'Gained foundational knowledge of the rail sector by attending 5 days of talks on signalling, services, and sustainability.',
      'Presented sustainable transport solutions to an audience of 20+ students and professionals.',
      'Explored engineering career paths through direct Q&As with industry professionals.'
    ]
  },
  {
    id: 'exp4',
    company: 'Spectrum Motors',
    role: 'Mechanic Apprentice',
    period: '02/2019 – 07/2019',
    description: [
      'Learned the fundamentals of bodywork repair by restoring damaged panels using sanding and filing.',
      'Improved reliability and timeliness by arriving early, enhancing time management and professionalism.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    institution: 'University of Birmingham',
    degree: 'MEng Mechanical Engineering (Automotive)',
    period: '09/2022 - Present',
    details: 'Member of Powerlifting, Olympic Weightlifting, and Mountaineering. A2B Scholarship recipient.'
  },
  {
    id: 'edu2',
    institution: 'James Watt College',
    degree: 'L3 Extended Diploma in Advanced Manufacturing Engineering',
    period: '09/2020 – 07/2022',
    details: 'Grade Achieved: D*D*D*. Vice Chair of the Student Council. James Watt Values Award recipient.'
  }
];

export const SKILLS: Skill[] = [
  { category: 'Engineering Design', items: ['Fusion 360', 'Solidworks', 'Abaqus', 'CFD', 'FEA'] },
  { category: 'Creative & Media', items: ['Adobe Lightroom', 'Davinci Resolve', 'Content Creation'] },
  { category: 'Analysis & Tech', items: ['Ansys Fluent', 'C Programming', 'Technical Report Writing'] },
  { category: 'Soft Skills', items: ['Public Speaking', 'Team Leadership', 'Mentoring', 'Problem Solving'] }
];

export const WIKI_ENTRIES: WikiEntry[] = [
  {
    id: 'w1',
    title: 'Precision in Physical Modeling',
    category: 'Engineering',
    content: 'When moving from CAD to CAM, tolerance stacks are the silent killer of assembly. I always factor in the material deformation coefficient when designing interference fits for automotive components.',
    date: 'Feb 2024',
    tags: ['CAD', 'Design']
  },
  {
    id: 'w2',
    title: 'The Discipline of Weightlifting',
    category: 'Personal Development',
    content: 'Olympic weightlifting taught me that progress is measured in grams and repetitions. This same meticulous focus is what I bring to my engineering reports—checking every variable and every decimal.',
    date: 'Dec 2023',
    tags: ['Mindset', 'Growth']
  },
  {
    id: 'w3',
    title: 'Communicating Technical Complexity',
    category: 'Soft Skills',
    content: 'As a Student Ambassador, I learned that if you can\'t explain a differential gear to a 12-year-old, you don\'t understand it well enough yourself. Simplification is the ultimate sophistication.',
    date: 'Jan 2024',
    tags: ['Mentoring', 'Communication']
  }
];
