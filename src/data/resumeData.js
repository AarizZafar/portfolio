const asset = path => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Aariz Zafar',
  location: 'Bangalore, India',
  title: 'Machine Learning Engineer',
  tagline: 'Data Analysis · Cloud AI · ML',
  email: 'aariz.zafar01@gmail.com',
  phone: '+91 9353707832',
  github: 'https://github.com/AarizZafar',
  linkedin: 'https://linkedin.com/in/aariz-zafar'
}

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'Vellore Institute of Technology AP',
  cgpa: '8.66/10.0',
  year: '2021 - 2025'
}

export const skillGroups = [
  { category: 'Programming Languages', skills: ['Python', 'C++', 'SQL', 'Java', 'Golang'] },
  { category: 'Machine Learning & AI', skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face Transformers', 'LangChain', 'LangGraph', 'RAG'] },
  { category: 'Computer Vision', skills: ['OpenCV', 'PPE Violation Detection', 'Object Detection', 'Image Preprocessing'] },
  { category: 'Data Analysis', skills: ['NumPy', 'Pandas', 'Feature Engineering', 'Exploratory Data Analysis'] },
  { category: 'Big Data & Data Engineering', skills: ['Apache Spark (PySpark)', 'Apache Kafka', 'Apache Airflow', 'Hadoop', 'HDFS', 'MapReduce', 'YARN'] },
  { category: 'Cloud & MLOps', skills: ['Azure Data Factory', 'Databricks', 'Synapse Analytics', 'ADLS Gen2', 'GCP Dataproc', 'Jenkins', 'GitHub Actions', 'Docker'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Domain Expertise', skills: ['Predictive Maintenance', 'Fault Detection & Diagnosis', 'Building Energy Simulation', 'PPE Compliance Monitoring'] }
]

export const experience = [
  {
    company: 'Trinity Mobility',
    role: 'AI Engineer',
    location: 'Bangalore, India',
    period: 'Mar 2026 - Present',
    logo: asset('artifacts/company_logo/trinity_mobility.png'),
    points: [
      'Simulated 10+ degradation fault scenarios with EnergyPlus and Modelica to create synthetic sensor datasets for HVAC systems where real-world fault data was limited.',
      'Utilized pre-trained time-series forecasting models, including TimesFM and Chronos, for predictive maintenance and equipment health monitoring, improving forecasting accuracy by 15%.'
    ]
  },
  {
    company: 'LivNSense',
    role: 'Software Engineer (Intern + Full-time)',
    location: 'Bangalore, India',
    period: 'Dec 2024 - Mar 2026',
    logo: asset('artifacts/company_logo/LivNSense.png'),
    points: [
      'Developed an end-to-end ML pipeline for asphalt plant optimization using EDA, statistical modelling, and anomaly detection, improving operational efficiency by 10%.',
      'Designed and deployed a domain-specific RAG solution using LangChain and vector embeddings, reducing engineering knowledge retrieval effort by 30%.',
      'Built a C++ image pre-processing pipeline for industrial PPE detection, improving object detection accuracy from 75% to 87% for real-time monitoring of 100+ workers.'
    ]
  },
  {
    company: 'NETTECH',
    role: 'Software Engineering Intern',
    location: 'Bangalore, India',
    period: 'Oct 2023 - Dec 2023',
    logo: asset('artifacts/company_logo/Nettech.png'),
    points: [
      'Developed a RAG system using LangChain and SBERT embeddings to support natural language querying of network device documentation, reducing lookup effort by 20%.'
    ]
  }
]

export const certificationGroups = [
  {
    heading: 'Microsoft Azure',
    items: [
      { name: 'Microsoft Azure AZ-500 Security Engineer Associate', logo: asset('artifacts/certificates_logo/Az500.png'), files: [{ src: asset('artifacts/certificates/Az500.pdf'), label: 'Certificate' }, { src: asset('artifacts/certificates/Az500_score.pdf'), label: 'Score report' }] },
      { name: 'Microsoft Azure AZ-104 Administrator Associate', logo: asset('artifacts/certificates_logo/Az104.png'), files: [{ src: asset('artifacts/certificates/Az104.pdf'), label: 'Certificate' }, { src: asset('artifacts/certificates/Az104_score_card.pdf'), label: 'Score report' }] },
      { name: 'Microsoft Azure AZ-900 Fundamentals', logo: asset('artifacts/certificates_logo/Az900.png'), files: [{ src: asset('artifacts/certificates/Az900.pdf'), label: 'Certificate' }] }
    ]
  },
  {
    heading: 'Machine Learning',
    items: [
      { name: 'Machine Learning — Boston Training Academy', logo: asset('artifacts/certificates_logo/boston.png'), files: [{ src: asset('artifacts/certificates/Boston_IT.png'), label: 'Certificate' }] },
      { name: 'AI & ML Program — Google Developer (Smart Internz)', logo: asset('artifacts/certificates_logo/google.png'), files: [{ src: asset('artifacts/certificates/Google_developers.jpg'), label: 'Certificate' }] }
    ]
  }
]

export const awards = [
  {
    title: 'Star Performer Award',
    detail: 'Recognized for strong delivery and ownership across AI-based industrial optimization projects.',
    files: [{ src: asset('artifacts/awards/start_performer_award.png'), label: 'Award certificate' }]
  },
  {
    title: 'Certificate of Appreciation',
    detail: 'Awarded for contributions to applied AI initiatives and customer-facing project demonstrations.',
    files: [{ src: asset('artifacts/awards/certificate_of_appreciation.png'), label: 'Certificate' }]
  },
  {
    title: 'Automation Expo 2025',
    detail: 'Represented LivNSense at Automation Expo 2025, held August 11-14 at the Bombay Exhibition Centre in Goregaon, Mumbai; demonstrated AI projects and interacted with visitors from multiple countries.',
    link: 'https://www.linkedin.com/posts/livnsense-technologies-pvt-ltd_aiinnovation-artificialintelligence-futureofwork-activity-7360908174301802496-suIu'
  }
]

export const liveProjects = [
  {
    name: 'NanoGPT',
    description: 'Create your own LLM',
    url: 'https://gentle-ocean-01208a90f.7.azurestaticapps.net/'
  },
  {
    name: 'BPE Tokenizer',
    description: 'Tokenize your text data',
    url: 'https://lemon-dune-08f4e870f.7.azurestaticapps.net/'
  }
]
