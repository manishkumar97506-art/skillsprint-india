import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'course-1',
    slug: 'digital-marketing-fundamentals',
    title: 'Digital Marketing Fundamentals',
    shortDescription: 'Learn the foundations of digital marketing and understand how modern businesses use online channels to attract, engage and convert audiences.',
    fullDescription: 'Designed from the ground up for beginners, this course demystifies the digital marketing landscape. You will explore organic search, social platforms, paid advertising architectures, content engines, and analytics. Rather than high-level theory, every module is structured around realistic case studies from Indian startups and small businesses.',
    category: 'Digital Marketing',
    level: 'Beginner',
    modulesCount: 8,
    lessonsCount: 32,
    estimatedHours: '12 hours of practical learning',
    topics: ['SEO Basics', 'Social Media', 'Content Strategy', 'Paid Advertising', 'Web Analytics'],
    whatYoullLearn: [
      'Core digital marketing frameworks and customer journey mapping',
      'Keyword research and on-page search engine optimization (SEO)',
      'Building organic engagement across Instagram, LinkedIn, and Facebook',
      'Planning and producing high-converting marketing content',
      'Email marketing fundamentals and audience segmentation',
      'Fundamentals of Meta (Facebook & Instagram) and Google ad campaigns',
      'Web analytics, conversion tracking, and campaign performance metrics',
      'Developing end-to-end strategic campaign roadmaps for real businesses'
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1 — Introduction to Digital Marketing',
        duration: '45 mins',
        lessons: [
          'What is Digital Marketing in 2026 and why it matters',
          'Traditional vs. Digital Marketing comparison',
          'The Modern Inbound Marketing Funnel (Awareness → Consideration → Conversion)',
          'Setting measurable business marketing goals (KPIs)'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Module 2 — Understanding Your Audience',
        duration: '55 mins',
        lessons: [
          'Defining target buyer personas for Indian consumers',
          'Customer pain points and value proposition mapping',
          'Competitor analysis frameworks and social listening',
          'Crafting core brand messaging that resonates'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Module 3 — Content Marketing',
        duration: '60 mins',
        lessons: [
          'The Content Engine: Ideation, Production, and Distribution',
          'Storytelling formulas for beginners (PAS, AIDA, Before-After-Bridge)',
          'Writing high-converting headlines and hooks',
          'Repurposing one core asset across multiple social channels'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Module 4 — Social Media Marketing',
        duration: '70 mins',
        lessons: [
          'Understanding algorithmic feeds on Instagram, LinkedIn & YouTube',
          'Organic community building vs. paid reach',
          'Creating a 30-day content calendar with Canva and Notion',
          'Engaging followers and community management best practices'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Module 5 — SEO Basics',
        duration: '65 mins',
        lessons: [
          'How search engines crawl, index, and rank web pages',
          'Keyword research using free tools (Google Trends, Keyword Surfer)',
          'On-page SEO checklist: Titles, Meta descriptions, Alt tags, H1-H3',
          'Technical SEO essentials: mobile friendliness and page speed'
        ]
      },
      {
        moduleNumber: 6,
        title: 'Module 6 — Paid Advertising',
        duration: '75 mins',
        lessons: [
          'Introduction to Meta Ads Manager (Facebook & Instagram)',
          'Understanding Campaign Objectives: Awareness, Traffic, Leads & Sales',
          'Budgeting, bidding, and audience targeting strategies',
          'Ad creatives breakdown: Hook, Body, Visual, Call to Action'
        ]
      },
      {
        moduleNumber: 7,
        title: 'Module 7 — Analytics & Tracking',
        duration: '50 mins',
        lessons: [
          'Understanding traffic sources (Organic, Direct, Referral, Paid, Social)',
          'Key metrics demystified: CTR, CPC, Conversion Rate, ROAS',
          'Setting up custom event tracking and UTM parameters',
          'Reading analytics dashboards to make data-driven decisions'
        ]
      },
      {
        moduleNumber: 8,
        title: 'Module 8 — Final Project Execution',
        duration: '80 mins',
        lessons: [
          'Review of project guidelines and template walk-through',
          'Synthesizing audience research and campaign goals',
          'Designing creatives and drafting ad copy',
          'Submitting your campaign blueprint for peer review'
        ]
      }
    ],
    finalProject: {
      title: 'Build Your First Digital Marketing Campaign',
      description: 'You will take a fictional local business (e.g. an artisan coffee roastery or an eco-friendly apparel startup) and develop a complete, launch-ready digital marketing campaign plan.',
      deliverables: [
        'Detailed Target Buyer Persona sheet with demographic & psychographic insights',
        'SEO Keyword Research sheet targeting 10 high-intent search terms',
        '30-day multi-channel social media content calendar',
        '3 complete ad creative concepts (copy + visual brief) for Meta Ads',
        'Measurement framework with specific targets for CTR and leads'
      ]
    },
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-2',
    slug: 'ai-tools-for-productivity',
    title: 'AI Tools for Productivity',
    shortDescription: 'Discover practical AI tools that help college students and beginners save 10+ hours a week in research, writing, and daily tasks.',
    fullDescription: 'Artificial Intelligence is transforming how we study, work, and create. This course avoids technical jargon and coding math to focus entirely on applied AI. You will master prompting methodologies, AI document analysis, workflow automation, and how to combine AI assistants with human creativity.',
    category: 'AI Tools',
    level: 'Beginner',
    modulesCount: 6,
    lessonsCount: 24,
    estimatedHours: '8 hours of practical learning',
    topics: ['Prompt Engineering', 'Research Automation', 'AI Writing', 'Visual AI', 'Workflow Optimization'],
    whatYoullLearn: [
      'The foundational principles of Large Language Models and prompt design',
      'The CLEAR Prompting Framework for precise, hallucination-free outputs',
      'Summarizing complex research papers and lecture notes with AI in seconds',
      'Automating repetitive administrative and study workflows',
      'Creating visual assets, charts, and slide decks with AI assistance',
      'Ethical considerations and academic integrity when using AI'
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1 — The Applied AI Landscape',
        duration: '40 mins',
        lessons: [
          'How modern AI tools work without the complex math',
          'Overview of top tools: ChatGPT, Gemini, Claude, and Perplexity',
          'Debunking common myths about AI taking beginner jobs'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Module 2 — Prompt Engineering for Real Work',
        duration: '60 mins',
        lessons: [
          'Role-Task-Context-Constraint (RTCC) prompt architecture',
          'Few-shot prompting: Teaching the AI with examples',
          'Iterative refinement: How to converse and guide the output',
          'Prompt library creation in Notion'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Module 3 — AI for Study & Academic Research',
        duration: '50 mins',
        lessons: [
          'Summarizing 50-page PDFs into actionable flashcards',
          'Perplexity AI for grounded research with verified citations',
          'Interactive Socratic tutoring for complex subjects'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Module 4 — AI for Content & Copywriting',
        duration: '55 mins',
        lessons: [
          'Generating first drafts that avoid generic robotic tones',
          'Tone matching: Training AI on your natural writing style',
          'Brainstorming 50 content ideas in under 5 minutes'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Module 5 — Visual & Presentation AI',
        duration: '45 mins',
        lessons: [
          'Prompting image generation tools for blog headers and social cards',
          'Gamma and Canva Magic Studio for instant professional slide decks',
          'Exporting and polishing visual assets'
        ]
      },
      {
        moduleNumber: 6,
        title: 'Module 6 — Final Productivity Engine Project',
        duration: '60 mins',
        lessons: [
          'Assembling your custom daily AI productivity stack',
          'Setting up automated daily briefing workflows',
          'Final project submission and rubric review'
        ]
      }
    ],
    finalProject: {
      title: 'Build Your Personal AI Productivity System',
      description: 'Create a repeatable personal AI operating system tailored to your college studies or career exploration.',
      deliverables: [
        'Curated Notion Prompt Library with at least 15 tested prompts',
        'Step-by-step Research & Summary Workflow doc for weekly study tasks',
        'One complete AI-assisted presentation deck polished with human oversight'
      ]
    },
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-3',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Master how modern brands build engaged communities, craft viral hooks, and generate consistent inbound traffic across Instagram, LinkedIn, and YouTube.',
    fullDescription: 'Social media is no longer about posting random quotes and hoping for likes. It is a rigorous marketing discipline combining audience psychology, visual storytelling, and distribution mechanics. Learn the exact methods brand managers use to grow audiences from scratch.',
    category: 'Social Media',
    level: 'Beginner',
    modulesCount: 6,
    lessonsCount: 26,
    estimatedHours: '10 hours of practical learning',
    topics: ['Instagram Growth', 'LinkedIn Authority', 'Short-form Video', 'Community Building', 'Analytics'],
    whatYoullLearn: [
      'Algorithm fundamentals across Meta, LinkedIn, and YouTube Shorts',
      'The 3-second hook framework for high-retention short-form video',
      'Developing a distinct visual and editorial brand voice',
      'Planning a 4-pillar content rotation to avoid creator burnout',
      'Collaborations, influencer outreach, and user-generated content (UGC)',
      'Tracking reach, impressions, engagement rates, and link clicks'
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1 — Social Media Foundations & Mindset',
        duration: '45 mins',
        lessons: [
          'The shift from broadcasting to community conversation',
          'Platform selection: Where does your target audience actually hang out?',
          'Profile optimization: Bio formulas, link trees, and high-impact avatars'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Module 2 — Instagram Organic Growth',
        duration: '65 mins',
        lessons: [
          'Reels production: Audio selection, pacing, and visual hooks',
          'Carousels that get saved: Value-dense slide frameworks',
          'Stories that convert: Behind-the-scenes and interactive stickers'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Module 3 — Professional Authority on LinkedIn',
        duration: '50 mins',
        lessons: [
          'Writing text-only posts that spark meaningful comments',
          'PDF Document Carousels for industry frameworks',
          'Networking authentically without spamming inboxes'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Module 4 — Content Production Workflows',
        duration: '60 mins',
        lessons: [
          'Batching content: Recording 8 reels in a single afternoon',
          'Free mobile editing tools (CapCut, InShot, VN Editor)',
          'Scheduling and auto-publishing tools'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Module 5 — Community Management & Social Care',
        duration: '40 mins',
        lessons: [
          'Turning casual commenters into loyal brand advocates',
          'Handling negative comments with grace and professionalism',
          'Running audience polls, AMAs, and Q&A sessions'
        ]
      },
      {
        moduleNumber: 6,
        title: 'Module 6 — Final Campaign & Strategy Deck',
        duration: '70 mins',
        lessons: [
          'Synthesizing your 30-day social media playbook',
          'Setting benchmark KPIs for reach and follower growth',
          'Final project submission'
        ]
      }
    ],
    finalProject: {
      title: '30-Day Social Media Growth Strategy for a Local Indian Business',
      description: 'Develop a complete month-long organic social media launch strategy for an Indian D2C brand or local service.',
      deliverables: [
        'Complete Channel Audit & Profile Optimization Checklist',
        '4-Pillar Content Strategy document (Educational, Entertaining, Inspiring, Promotional)',
        '30-Day Content Matrix with hooks, formats, and caption drafts',
        '3 fully designed carousel creatives ready to post'
      ]
    },
    badge: 'Hands-on',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-4',
    slug: 'canva-design-essentials',
    title: 'Canva Design Essentials',
    shortDescription: 'Learn graphic design principles and create stunning social media graphics, presentations, and marketing materials with Canva.',
    fullDescription: 'You do not need years of complex Photoshop training to make clean, professional designs. This course teaches the timeless visual hierarchy and layout rules used by graphic designers, combined with the speed and accessibility of Canva.',
    category: 'Canva & Design',
    level: 'Beginner',
    modulesCount: 5,
    lessonsCount: 20,
    estimatedHours: '7 hours of practical learning',
    topics: ['Visual Hierarchy', 'Typography Pairing', 'Color Theory', 'Social Creatives', 'Branding Kits'],
    whatYoullLearn: [
      'Fundamental principles of design: Contrast, Alignment, Proximity, Balance',
      'Font pairings that look modern, readable, and cohesive',
      'Creating harmonious color palettes that match brand psychology',
      'Designing social media carousels, thumbnails, and story templates',
      'Setting up a reusable Brand Kit in Canva for fast turnaround',
      'Exporting print-ready and web-optimized graphic assets'
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1 — Design Fundamentals for Non-Designers',
        duration: '45 mins',
        lessons: [
          'Why bad design hurts marketing conversion rates',
          'Whitespace is not wasted space: The power of breathing room',
          'Visual hierarchy: Guiding the reader’s eye effortlessly'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Module 2 — Color & Typography Mastery',
        duration: '50 mins',
        lessons: [
          'Color psychology for marketing in India',
          'Creating 60-30-10 color rules for balanced graphics',
          'Header and body font pairing formulas that never fail'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Module 3 — Navigating the Canva Interface like a Pro',
        duration: '40 mins',
        lessons: [
          'Canva keyboard shortcuts that save hours',
          'Smart frames, grids, positioning, and alignment tools',
          'Background removal and shadow effects'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Module 4 — Social Media & Ad Creative Templates',
        duration: '60 mins',
        lessons: [
          'Designing high-CTR Facebook & Instagram ad banners',
          'YouTube thumbnail design: High contrast, big emotions, bold text',
          'Multi-slide seamless carousel design tricks'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Module 5 — Final Brand Identity Kit Project',
        duration: '50 mins',
        lessons: [
          'Building your mini brand guideline document',
          'Packaging assets for clients or your personal portfolio',
          'Final project showcase'
        ]
      }
    ],
    finalProject: {
      title: 'Complete Brand Identity Kit & 5 Social Media Ad Creatives',
      description: 'Design a cohesive visual kit and five marketing ad creatives for a modern startup brand.',
      deliverables: [
        'Brand Guideline One-Pager (Logo placement, color hex codes, font hierarchy)',
        '3 High-CTR Meta Ad banners (Square 1:1, Vertical 9:16)',
        '1 Seamless 5-slide Educational Instagram Carousel',
        '1 Professional Slide Deck Template in 16:9 widescreen format'
      ]
    },
    badge: 'Practical',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-5',
    slug: 'freelancing-for-beginners',
    title: 'Freelancing for Beginners',
    shortDescription: 'Understand how beginners can package digital skills, build proof of work, pitch clients with confidence, and earn their first income.',
    fullDescription: 'Many courses teach a skill, but fail to explain how to get clients. This practical masterclass bridges the gap. Learn how to identify your minimum marketable skill, assemble a portfolio without prior clients, write personalized proposals that get responses, and price projects fairly.',
    category: 'Freelancing',
    level: 'Beginner',
    modulesCount: 5,
    lessonsCount: 22,
    estimatedHours: '9 hours of practical learning',
    topics: ['Portfolio Building', 'Client Prospecting', 'Proposal Writing', 'Pricing Strategy', 'Invoicing'],
    whatYoullLearn: [
      'Identifying your core marketable skill as a fresher or student',
      'Creating concept case studies to prove your skills without prior clients',
      'Setting up a clean digital portfolio on Notion, GitHub, or Behance',
      'Cold outreach strategies on LinkedIn and email that feel natural, not spammy',
      'Pricing models: Project-based vs. Retainers vs. Hourly rates',
      'Client onboarding contracts, scopes of work, and milestone payments'
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1 — The Freelance Mindset & Positioning',
        duration: '45 mins',
        lessons: [
          'Transitioning from an employee/student mindset to a service provider',
          'Niche selection: Generalist vs. Specialist for beginners',
          'The 3 things clients actually pay for: Time, Money, or Peace of Mind'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Module 2 — Building Proof of Work From Scratch',
        duration: '55 mins',
        lessons: [
          'Why you do not need 5 years of experience to get your first client',
          'Creating "Spec Work" (concept projects) that demonstrate taste and skill',
          'Structuring a one-page Notion portfolio that converts'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Module 3 — Client Outreach & Lead Generation',
        duration: '65 mins',
        lessons: [
          'Finding prospective clients on LinkedIn, Twitter, and local communities',
          'The "Loom Audit" method: Delivering upfront value before asking for money',
          'Cold message frameworks that get an 80%+ response rate'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Module 4 — Proposals, Pricing & Closing Deals',
        duration: '50 mins',
        lessons: [
          'Why hourly pricing punishes efficiency, and what to use instead',
          'Writing a 2-page project proposal with clear scope boundaries',
          'Handling objections: "Your price is too high" or "Can you do a free trial?"'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Module 5 — Client Retention & Scaling Up',
        duration: '45 mins',
        lessons: [
          'Onboarding clients with clear communication protocols',
          'Turning one-off projects into recurring monthly retainers',
          'Asking for testimonials and client referrals'
        ]
      }
    ],
    finalProject: {
      title: 'Launch-Ready Freelance Portfolio & Proposal Deck',
      description: 'Prepare your complete client-acquisition system so you are ready to reach out to real businesses immediately.',
      deliverables: [
        'Live Notion Portfolio containing 3 detailed concept case studies',
        'Personalized Client Pitch Script tailored to local businesses',
        'Standard Scope of Work (SOW) & Proposal template',
        'Client Onboarding & Questionnaires checklist'
      ]
    },
    badge: 'Career Skill',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-6',
    slug: 'content-creation-copywriting',
    title: 'Content Creation & Copywriting',
    shortDescription: 'Learn how to plan, write, and distribute compelling words and media that capture attention and persuade readers.',
    fullDescription: 'In the digital age, writing is the ultimate leverage. Great copywriting makes ads click, emails open, and landing pages convert. This course teaches the psychology of persuasive writing and how to turn ideas into engaging content across articles, newsletters, and social posts.',
    category: 'Content Creation',
    level: 'Beginner',
    modulesCount: 5,
    lessonsCount: 20,
    estimatedHours: '8 hours of practical learning',
    topics: ['Copywriting Psychology', 'Headline Writing', 'Storytelling', 'Email Marketing', 'Content Engines'],
    whatYoullLearn: [
      'The difference between creative writing, content writing, and direct response copywriting',
      'The 7 deadly sins of boring digital writing and how to fix them',
      'Writing hypnotic hooks that prevent readers from scrolling past',
      'Direct response formulas: PAS, AIDA, FAB, and BAB',
      'Structuring persuasive sales landing pages and product descriptions',
      'Building an evergreen newsletter distribution system'
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1 — Foundations of Persuasive Writing',
        duration: '40 mins',
        lessons: [
          'Writing for scanners: Short sentences, active verbs, and bullet points',
          'Emotional drivers: Fear of missing out, aspiration, curiosity, and relief',
          'Features vs. Benefits: Turning technical specs into human desires'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Module 2 — Headlines, Hooks & Subheads',
        duration: '50 mins',
        lessons: [
          'The 80/20 rule of headlines: Why 8 out of 10 people only read the title',
          'Formulaic headline frameworks tested over 50 years',
          'Writing subheadings that pull readers down the page'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Module 3 — Landing Page & Ad Copywriting',
        duration: '60 mins',
        lessons: [
          'Anatomy of a high-converting Hero section',
          'Writing bullet points that sell without sounding pushy',
          'Crafting Call-to-Action (CTA) buttons that demand clicks'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Module 4 — Email Newsletters that Get Read',
        duration: '45 mins',
        lessons: [
          'Subject lines that achieve 40%+ open rates',
          'Story-Lesson-Offer email structure',
          'Autoresponder welcome sequence design for new subscribers'
        ]
      },
      {
        moduleNumber: 5,
        title: 'Module 5 — Final Copywriting Portfolio Project',
        duration: '55 mins',
        lessons: [
          'Polishing your copy with editing rules (The "Read Aloud" test)',
          'Assembling your copy portfolio',
          'Peer feedback and grading rubric'
        ]
      }
    ],
    finalProject: {
      title: 'Complete Multi-Channel Copywriting Package',
      description: 'Write a full suite of copy assets for an upcoming digital product or online event.',
      deliverables: [
        'Complete Landing Page copy draft (Hero, Features, FAQ, CTA)',
        '3 Email sequence drafts (Welcome, Educational, Call to Action)',
        '5 Meta Ad variations with distinct hooks and angles',
        '10 Headline variations with rationale for testing'
      ]
    },
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
  }
];
