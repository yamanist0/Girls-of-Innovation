export const slogan = 'Empowering girls to break STEM barriers, one innovation at a time.'

export const heroStats = [
  { label: 'Program since', value: '2019' },
  { label: 'Girls in the team', value: 'Nearly half' },
  { label: 'FRC Team', value: '8828' }
]

export const aboutParagraphs = [
  'What started in 2019 as a small but curious group called EAL Robotics has grown into a club enriched by different ages, genders and perspectives at Eskişehir Anadolu Lisesi. Our team is organized around four departments, Mechanics, PR, Software and Electronics, each working in coordination with its captain, which helps distribute tasks fairly and strengthens the bond between sub teams.',
  'We are not only engineers: we are advocates. For us, a captaincy is not a privilege. Every member contributes equally, is respected equally and expresses their ideas freely. Empowering women and girls in STEM is one of our priorities, so we actively break gender stereotypes, encourage girls to step into science and technology, and push girls toward leadership.',
  'Alumni return as mentors and pass their experience to new members, keeping the club sustainable. We do not only build robots, we build a culture where every girl knows she belongs in the lab.'
]

export const equalitySteps = [
  {
    title: 'Balanced recruitment',
    text: 'We watch the gender distribution of every department during new member intake and never pick an all-male or all-female captain team.'
  },
  {
    title: 'Girls in technical roles',
    text: 'Our girls hold critical and technical responsibilities: mechanical captaincy, battery lead, human player and more.'
  },
  {
    title: 'Stereotype-proof examples',
    text: 'PR captaincy has been held by a boy while mechanics leadership has been held by a girl. Skills have no gender.'
  },
  {
    title: 'Learn and teach cycle',
    text: 'Graduates mentor active members who mentor new members, so equality culture survives every generation.'
  }
]

export interface Barrier {
  label: string
  reveal: string
  stat?: string
  tagline: string
}

export const barriers: Barrier[] = [
  {
    label: 'Engineering is a boys job',
    reveal:
      'Girls lead our build season, in the captain chair and at the workbench. A girl has been our mechanical captain.',
    stat: 'MECH CAPTAIN',
    tagline: 'Sparks, torque and a girl in the captain chair.'
  },
  {
    label: 'Girls belong in PR',
    reveal:
      'Skills, not gender, decide who leads every department. A boy has been our PR captain.',
    stat: 'ALL DEPARTMENTS',
    tagline: 'Solder burns and social posts, skills decide both.'
  },
  {
    label: 'Girls cannot handle the build season',
    reveal: 'Battery lead, human player, build lead: girls own critical roles every season.',
    stat: 'TECH ROLES',
    tagline: 'Deadlines do not check pronouns.'
  },
  {
    label: 'STEM is too hard for girls',
    reveal: 'Girls are nearly half our team and the share keeps growing every year.',
    stat: 'NEARLY HALF',
    tagline: 'Hard is not a wall, it is a door.'
  },
  {
    label: 'There are no role models',
    reveal: 'Marie Curie, Ada Lovelace, Katherine Johnson... and the girls right next to you.',
    stat: 'ROLE MODELS',
    tagline: 'Look to your left, she is already one.'
  },
  {
    label: 'Careers have a gender',
    reveal: 'Careers have no gender. Curiosity, effort and talent do.',
    stat: 'NO GENDER',
    tagline: 'Robots read volts, not genders.'
  }
]

export const pillars = [
  {
    title: 'Educational Workshops',
    text: 'Seminars, interactive trainings and quizzes build not only technical knowledge but also critical thinking, problem solving and leadership. We turn fear into confidence, one workshop at a time.'
  },
  {
    title: 'Mentorship & Role Models',
    text: 'Inoqueens, our conference, gathered the women of the city FRC teams to celebrate STEM pioneers like Marie Curie, Ada Lovelace and Katherine Johnson, and to share personal journeys through Women and STEM talks.'
  },
  {
    title: 'Creative Community',
    text: 'From the Diva Mark t-shirt painting party to collaborative events with other teams, we make women in STEM visible and build a community where everyone creates together.'
  }
]

export const impactNotes = [
  'Girls joined the team as a minority, and today they are nearly half of it.',
  'Breaking the prejudice that girls and women cannot take active roles in STEM.',
  'Turning fear into courage for girls who hesitate to enter STEM.',
  'Showing our city that women can achieve anything they set their minds to.',
  'Inspiring new FRC teams and helping them grow across Turkey and beyond.'
]

export const contact = {
  email: 'contact@ealrobotik.com',
  instagram: 'https://www.instagram.com/ealrobotik_8828',
  mainSite: 'https://ealrobotik.com/',
  school: 'Eskişehir Anadolu Lisesi'
}