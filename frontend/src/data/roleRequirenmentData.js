export const roleRequirementsData = {
  'VIDEO EDITOR': {
    title: 'VIDEO EDITOR',
    description: `Understand the project goals and edit footage to match the vision.
Use editing software to produce polished, engaging videos.
Add effects, music, and graphics to enhance visual storytelling.
Collaborate with creative and marketing teams.
Ensure timely delivery and maintain quality standards.
Stay updated with the trends in video content and editing tools.`,
    fields: [
      {
        label: 'Portfolio Link:',
        name: 'videoEditorPortfolioLink',
        type: 'url',
        placeholder: 'Link to your video portfolio (e.g., YouTube, Vimeo)',
        required: true,
      },
      {
        label: 'Software Proficiency:',
        name: 'videoEditorSoftwareProficiency',
        type: 'textarea',
        placeholder: 'e.g., Adobe Premiere Pro, After Effects, DaVinci Resolve',
        required: true,
      },
      {
        label: 'Years of Experience (Video):',
        name: 'videoEditorYearsExperience',
        type: 'text',
        placeholder: 'e.g., 2 years',
        required: false,
      },
    ],
  },
  'GRAPHIC DESIGNER': {
    title: 'GRAPHIC DESIGNER',
    description: `Create visual concepts to communicate ideas effectively.
Design logos, banners, social media creatives, and more.
Use tools like Adobe Photoshop, Figma, Canva, etc.
Ensure brand consistency across all designs.
Collaborate with marketing and content teams.
Contribute fresh ideas to elevate design strategy.`,
    fields: [
      { label: 'Design Portfolio URL:', name: 'graphicDesignerPortfolioUrl', type: 'url', placeholder: 'Link to your Behance/Dribbble/personal portfolio', required: true },
      { label: 'Preferred Design Software:', name: 'graphicDesignerSoftware', type: 'text', placeholder: 'e.g., Figma, Adobe Illustrator, Photoshop', required: true },
      { label: 'Specialization Area:', name: 'graphicDesignerSpecialization', type: 'text', placeholder: 'e.g., Branding, UI/UX, Print Design', required: false },
    ],
  },
  'FRONT OFFICE': {
    title: 'FRONT OFFICE',
    description: `Greet visitors and manage the front desk operations.
Handle phone calls, inquiries, and appointments.
Maintain a professional and organized reception area.
Support administrative and clerical duties.
Coordinate with internal teams for smooth operations.
Maintain logs, records, and daily attendance tracking.`,
    fields: [
      { label: 'Relevant Experience:', name: 'frontOfficeRelevantExperience', type: 'textarea', placeholder: 'Describe your experience in front office or administrative roles.', required: true },
      { label: 'Communication Skills:', name: 'frontOfficeCommunicationSkills', type: 'text', placeholder: 'e.g., Excellent, Good, Basic', required: false },
    ],
  },
  'RESEARCH': {
    title: 'RESEARCH',
    description: `Identify market needs and technological opportunities.
Generate new ideas and develop innovative concepts.
Conduct research and experiments to explore solutions.
Develop and test new products, services, or processes.
Drive innovation and continuously improve existing offerings.
Collaborate with other teams for successful implementation.`,
    fields: [
      { label: 'Research Area of Interest:', name: 'researchAreaOfInterest', type: 'textarea', placeholder: 'Describe your primary area of research interest.', required: true },
      { label: 'Data Analysis Tools:', name: 'researchDataAnalysisTools', type: 'text', placeholder: 'e.g., Excel, SPSS, R, Python', required: false },
      { label: 'Past Research Projects (Links):', name: 'researchProjectsLinks', type: 'url', placeholder: 'Link to any past research work or papers.', required: false },
    ],
  },
  'TECHNICAL': {
    title: 'TECHNICAL',
    description: `Develop and maintain the company’s core platform (website, app, etc.).
Manage and secure student data, ensuring privacy and compliance.
Provide technical support and training to users.
Explore and implement new technologies to improve the platform.
Collaborate with other teams to meet company needs.
Communicate technical concepts clearly to non-technical audiences.
Scale the platform to accommodate growth.
Implement security measures to protect against cyber threats.`,
    fields: [
      { label: 'Programming Languages/Technologies:', name: 'technicalProgrammingLanguages', type: 'textarea', placeholder: 'e.g., JavaScript, Python, React, Node.js', required: true },
      { label: 'GitHub/Portfolio Link:', name: 'technicalGithubPortfolio', type: 'url', placeholder: 'Link to your GitHub profile or technical portfolio.', required: false },
      { label: 'Problem-Solving Experience:', name: 'technicalProblemSolvingExperience', type: 'textarea', placeholder: 'Describe a complex technical problem you solved.', required: true },
    ],
  },
  'HR': {
    title: 'HR',
    description: `Manage recruitment and onboarding processes.
Develop and implement HR policies and procedures.
Administer employee benefits and compensation programs.
Foster positive employee relations and manage performance.
Organize training and development initiatives.
Ensure compliance with labor laws and regulations.`,
    fields: [
      { label: 'Relevant HR Experience:', name: 'hrRelevantExperience', type: 'textarea', placeholder: 'Describe your past experience in Human Resources.', required: true },
      { label: 'HR Software Knowledge:', name: 'hrSoftwareKnowledge', type: 'text', placeholder: 'e.g., HRIS, ATS (Applicant Tracking System)', required: false },
      { label: 'Certifications (if any):', name: 'hrCertifications', type: 'text', placeholder: 'e.g., SHRM-CP, PHR', required: false },
    ],
  },
  'CONTENT': {
    title: 'CONTENT',
    description: `Short, engaging videos can simplify complex topics, like accessing welfare benefits
Campaigns and engaging storytelling can promote healthy
Educational content can inform people about welfare programs, rights, and available resources
Visually appealing and easy-to-share graphics convey key information quickly and effectively.
Content can represent diverse voices, fostering an inclusive environment`,
    fields: [
      { label: 'Writing Samples/Portfolio Link:', name: 'contentPortfolioLink', type: 'url', placeholder: 'Link to your writing portfolio or content samples.', required: true },
      { label: 'Types of Content Experience:', name: 'contentTypesExperience', type: 'textarea', placeholder: 'e.g., Blog posts, video scripts, social media copy, articles.', required: true },
      { label: 'SEO Knowledge:', name: 'contentSeoKnowledge', type: 'text', placeholder: 'e.g., Basic, Intermediate, Advanced', required: false },
    ],
  },
  'SOCIAL MEDIA': {
    title: 'SOCIAL MEDIA',
    description: `Develop social media strategies aligned with business goals.
Create and curate engaging content tailored to each platform.
Manage online communities and engage with followers.
Run and optimize social media advertising campaigns.
Track, analyze, and report on social media performance.
Stay up-to-date on social media trends and best practices.`,
    fields: [
      {
        label: 'Skill Sets You Bring In:',
        name: 'socialMediaSkillSets',
        type: 'textarea',
        placeholder: 'e.g., Content Creation, SEO, Social Media Analytics, Community Management',
        required: true,
      },
      {
        label: 'Previous Experience:',
        name: 'socialMediaPreviousExperience',
        type: 'textarea',
        placeholder: 'Describe your relevant past experience in social media.',
        required: true,
      },
      {
        label: 'Referral Name:',
        name: 'socialMediaReferralName',
        type: 'text',
        placeholder: 'Name of the person who referred you (if any).',
        required: false,
      },
    ],
  },
  'MANAGEMENT': {
    title: 'MANAGEMENT',
    description: `Organizing: Structuring tasks, allocating resources, and defining roles
Planning: Setting goals, strategizing, and anticipating challenges
Directing: Leading and motivating individuals or teams toward a shared goal
Controlling: Monitoring progress, evaluating results, and making adjustments.`,
    fields: [
      { label: 'Leadership Experience:', name: 'managementLeadershipExperience', type: 'textarea', placeholder: 'Describe your experience leading teams or projects.', required: true },
      { label: 'Project Management Tools:', name: 'managementProjectTools', type: 'text', placeholder: 'e.g., Asana, Trello, Jira', required: false },
      { label: 'Years of Management Experience:', name: 'managementYearsExperience', type: 'text', placeholder: 'e.g., 2 years', required: false },
    ],
  },
  'DESIGN': {
    title: 'DESIGN',
    description: `Conduct user research and define design problems.
Generate ideas and develop design concepts.
Create wireframes, prototypes, and visual designs.
Collaborate with cross-functional teams.
Present design work and gather feedback.
Conduct usability testing and iterate on designs.
Maintain design systems and ensure consistency.
Solve design problems creatively and effectively.`,
    fields: [
      { label: 'Design Portfolio URL:', name: 'designPortfolioUrl', type: 'url', placeholder: 'Link to your design portfolio.', required: true },
      { label: 'Design Software Proficiency:', name: 'designSoftwareProficiency', type: 'textarea', placeholder: 'e.g., Figma, Sketch, Adobe XD, Photoshop, Illustrator', required: true },
      { label: 'UX/UI Experience:', name: 'designUxUiExperience', type: 'textarea', placeholder: 'Describe your experience with user experience and interface design.', required: false },
    ],
  },
  'PR': {
    title: 'PR',
    description: `Develop and implement PR strategies.
Manage media relations and secure positive coverage.
Create and distribute press releases and media kits.
Manage online reputation and address crises.
Plan and execute PR events and sponsorships.
Monitor media coverage and analyze PR effectiveness.
Build and maintain relationships with key stakeholders.
Craft compelling narratives and messaging.`,
    fields: [
      { label: 'PR Campaign Experience:', name: 'prCampaignExperience', type: 'textarea', placeholder: 'Describe your experience managing PR campaigns.', required: true },
      { label: 'Media Relations Skills:', name: 'prMediaRelationsSkills', type: 'text', placeholder: 'e.g., Strong, Moderate, Basic', required: true },
      { label: 'Press Release Samples (Link):', name: 'prPressReleaseSamples', type: 'url', placeholder: 'Link to any press release samples.', required: false },
    ],
  },
  'MARKETING': {
    title: 'MARKETING',
    description: `Market research: Analyzing consumer behavior and market trends
Product development: Creating or refining products to satisfy customer needs.
Branding: Establishing a unique identity for the product or business.
Promotion: Communicating the value of the product through advertising, PR, or online strategies.
Distribution: Delivering the product to the right place at the right time.
Customer engagement: Building trust and loyalty with the audience.`,
    fields: [
      { label: 'Marketing Campaign Experience:', name: 'marketingCampaignExperience', type: 'textarea', placeholder: 'Describe your experience with marketing campaigns (digital, traditional, etc.).', required: true },
      { label: 'Preferred Marketing Tools:', name: 'marketingPreferredTools', type: 'text', placeholder: 'e.g., Google Analytics, Mailchimp, CRM software', required: false },
      { label: 'Marketing Portfolio/Case Studies (Link):', name: 'marketingPortfolioLink', type: 'url', placeholder: 'Link to your marketing portfolio or case studies.', required: false },
    ],
  },
};