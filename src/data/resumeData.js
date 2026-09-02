const asset = path => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Aariz Zafar',
  location: 'Bangalore, India',
  title: 'Machine Learning Engineer',
  tagline: 'Data Analysis · Cloud AI · ML',
  email: 'aariz.zafar01@gmail.com',
  phone: '+91 9353707832',
  github: 'https://github.com/AarizZafar',
  linkedin: 'https://linkedin.com/in/aariz-zafar',
  summary:
    'Results-driven Computer Science Engineering graduate with 1.5+ years of hands-on industry experience in Machine Learning, Data Science, and Cloud Computing. Specialized in developing AI/ML solutions for predictive maintenance, synthetic data generation using physics-based simulation, and computer vision applications for industrial safety. Proficient in Python, PyTorch, PySpark, and Azure cloud technologies, with three Microsoft Azure certifications.'
}

export const education = {
  degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
  school: 'Vellore Institute of Technology AP, India',
  cgpa: '8.66 / 10.0',
  year: '2025'
}

export const skillGroups = [
  { category: 'Programming Languages', skills: ['Python', 'C++', 'SQL', 'Java', 'R', 'Golang'] },
  { category: 'Machine Learning & AI', skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face Transformers', 'LangChain', 'LangGraph', 'RAG'] },
  { category: 'Computer Vision', skills: ['OpenCV', 'PPE Violation Detection', 'Object Detection', 'Image Preprocessing'] },
  { category: 'Data Analysis', skills: ['NumPy', 'Pandas', 'Feature Engineering', 'Exploratory Data Analysis'] },
  { category: 'Big Data & Data Engineering', skills: ['Apache Spark (PySpark)', 'Apache Kafka', 'Apache Airflow', 'Hadoop', 'HDFS', 'MapReduce', 'YARN'] },
  { category: 'Cloud & MLOps', skills: ['Azure Data Factory', 'Databricks', 'Synapse Analytics', 'ADLS Gen2', 'GCP Dataproc', 'Jenkins', 'GitHub Actions', 'Docker'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { category: 'Domain Expertise', skills: ['Predictive Maintenance', 'Fault Detection & Diagnosis', 'Building Energy Simulation', 'PPE Compliance Monitoring', 'Sustainability & Energy Optimization'] }
]

export const experience = [
  {
    company: 'Trinity Mobility',
    role: 'AI Engineer',
    location: 'Bangalore, India',
    period: 'Mar 2026 – Present',
    logo: asset('artifacts/company_logo/trinity_mobility.png'),
    points: [
      'Designed and developed a machine learning-based Fault Detection and Diagnosis (FDD) framework for HVAC equipment (chillers, AHUs, FCUs) using Python, Scikit-learn, and time-series anomaly detection models, enabling early fault identification from synthetic sensor data.',
      'Built physics-based simulation models using EnergyPlus and Modelica to generate 40+ refrigerant degradation fault scenarios, creating high-quality synthetic datasets to overcome limited real-world training data.',
      'Developed end-to-end data pipelines for HVAC sensor data ingestion, preprocessing, feature engineering, and model training, integrating simulation outputs with supervised learning models for equipment health monitoring.'
    ]
  },
  {
    company: 'LivNSense',
    role: 'Software Engineer (Intern + Full-time)',
    location: 'Bangalore, India',
    period: 'Dec 2024 – Mar 2026',
    logo: asset('artifacts/company_logo/LivNSense.png'),
    points: [
      'Developed asphalt manufacturing process analytics using exploratory data analysis, statistical modelling, and anomaly detection on large-scale plant time-series data, supporting 10-15% gas-consumption and resource savings.',
      'Designed and deployed a domain-specific RAG solution using LangChain, Hugging Face Transformers, and vector embeddings, reducing engineering knowledge retrieval effort by 30%.',
      'Improved YOLO-model detection accuracy by 9% by testing multiple image-enhancement techniques that increased contrast and visibility for real-time PPE monitoring.',
      'Defined business-impact KPIs that connected model performance, process engineering outcomes, and operational decision-making for industrial AI projects.'
    ]
  },
  {
    company: 'NETTECH',
    role: 'Software Engineering Intern',
    location: 'New Delhi, India',
    period: 'Oct 2023 – Dec 2023',
    logo: asset('artifacts/company_logo/Nettech.png'),
    points: [
      'Developed a Retrieval-Augmented Generation (RAG) solution using LangChain and SBERT embeddings to enable natural language querying of network device documentation, reducing manual configuration lookup effort by 20%.'
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
