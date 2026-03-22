// ==========================================
// HOSPITAL WEBSITE — MOCK DATA
// ==========================================

export const doctors = [
  { id: 1, name: 'Dr. Rajesh Sharma', speciality: 'Cardiology', experience: 18, hospital: 'MedCare Delhi', fee: 800, gender: 'Male', available: 'Today', image: '/images/dr_rajesh_1774214919777.png', bio: 'One of India\'s leading cardiologists with expertise in interventional cardiology, angioplasty, and heart failure management.', education: 'MBBS, MD (Cardiology) – AIIMS Delhi', languages: ['English', 'Hindi'], rating: 4.9 },
  { id: 2, name: 'Dr. Priya Verma', speciality: 'Neurology', experience: 14, hospital: 'MedCare Mumbai', fee: 900, gender: 'Female', available: 'Today', image: '/images/dr_priya_1774214936122.png', bio: 'Specializes in stroke management, epilepsy treatment, and neuro-degenerative disorders.', education: 'MBBS, DM (Neurology) – CMC Vellore', languages: ['English', 'Hindi', 'Marathi'], rating: 4.8 },
  { id: 3, name: 'Dr. Anil Kumar', speciality: 'Orthopedics', experience: 22, hospital: 'MedCare Bangalore', fee: 700, gender: 'Male', available: 'Tomorrow', image: '/images/dr_anil_1774214954009.png', bio: 'Expert in joint replacements, sports injuries, and spine surgery with over 5000+ successful surgeries.', education: 'MBBS, MS (Orthopedics) – KMC Manipal', languages: ['English', 'Hindi', 'Kannada'], rating: 4.7 },
  { id: 4, name: 'Dr. Sneha Patel', speciality: 'Gynecology', experience: 12, hospital: 'MedCare Ahmedabad', fee: 600, gender: 'Female', available: 'Today', image: '/images/dr_sneha_1774214970423.png', bio: 'Renowned for high-risk pregnancy management, laparoscopic surgery, and fertility treatments.', education: 'MBBS, MS (OBG) – BJ Medical College', languages: ['English', 'Hindi', 'Gujarati'], rating: 4.9 },
  { id: 5, name: 'Dr. Vikram Singh', speciality: 'Oncology', experience: 16, hospital: 'MedCare Delhi', fee: 1200, gender: 'Male', available: 'Tomorrow', bio: 'Leading oncologist specializing in targeted cancer therapy, immunotherapy, and precision oncology.', education: 'MBBS, MD, DM (Medical Oncology) – TMC Mumbai', languages: ['English', 'Hindi'], rating: 4.8 },
  { id: 6, name: 'Dr. Meera Iyer', speciality: 'Pediatrics', experience: 10, hospital: 'MedCare Chennai', fee: 500, gender: 'Female', available: 'Today', bio: 'Compassionate pediatrician with expertise in neonatal care, developmental pediatrics, and childhood immunization.', education: 'MBBS, MD (Pediatrics) – Madras Medical College', languages: ['English', 'Hindi', 'Tamil'], rating: 4.9 },
  { id: 7, name: 'Dr. Arjun Mehta', speciality: 'Gastroenterology', experience: 15, hospital: 'MedCare Mumbai', fee: 850, gender: 'Male', available: 'Today', bio: 'Expert in endoscopy, liver disease management, and inflammatory bowel disease treatment.', education: 'MBBS, MD, DM (Gastro) – SGPGI Lucknow', languages: ['English', 'Hindi'], rating: 4.7 },
  { id: 8, name: 'Dr. Kavita Reddy', speciality: 'Dermatology', experience: 8, hospital: 'MedCare Hyderabad', fee: 600, gender: 'Female', available: 'Tomorrow', bio: 'Specializes in cosmetic dermatology, laser treatments, hair transplant, and skin allergy management.', education: 'MBBS, MD (Dermatology) – Osmania Medical College', languages: ['English', 'Hindi', 'Telugu'], rating: 4.6 },
  { id: 9, name: 'Dr. Suresh Nair', speciality: 'ENT', experience: 20, hospital: 'MedCare Kochi', fee: 550, gender: 'Male', available: 'Today', bio: 'Renowned ENT surgeon with expertise in cochlear implants, sinus surgery, and head-neck oncology.', education: 'MBBS, MS (ENT) – Medical College Trivandrum', languages: ['English', 'Hindi', 'Malayalam'], rating: 4.8 },
  { id: 10, name: 'Dr. Rina Das', speciality: 'Urology', experience: 13, hospital: 'MedCare Kolkata', fee: 750, gender: 'Female', available: 'Today', bio: 'Expert in robotic urology, kidney transplant, and minimally invasive urological procedures.', education: 'MBBS, MCh (Urology) – IPGMER Kolkata', languages: ['English', 'Hindi', 'Bengali'], rating: 4.7 },
  { id: 11, name: 'Dr. Ramesh Gupta', speciality: 'Cardiology', experience: 25, hospital: 'MedCare Delhi', fee: 1000, gender: 'Male', available: 'Today', bio: 'Pioneer in cardiac electrophysiology and pacemaker implantation with national awards in cardiology.', education: 'MBBS, MD, DM (Cardiology) – PGIMER Chandigarh', languages: ['English', 'Hindi'], rating: 5.0 },
  { id: 12, name: 'Dr. Swati Joshi', speciality: 'Neurology', experience: 9, hospital: 'MedCare Pune', fee: 700, gender: 'Female', available: 'Tomorrow', bio: 'Young and dynamic neurologist specializing in pediatric neurology and movement disorders.', education: 'MBBS, MD, DM (Neurology) – KEM Mumbai', languages: ['English', 'Hindi', 'Marathi'], rating: 4.6 },
];

export const hospitals = [
  { id: 1, name: 'MedCare Super Speciality Hospital', city: 'New Delhi', address: 'Saket, New Delhi – 110017', beds: 500, emergency: true, established: 2005, specialities: ['Cardiology', 'Neurology', 'Oncology', 'Orthopedics'], accreditation: 'NABH & JCI', contact: '+91 11 4000 1000', icu: 80, ot: 20 },
  { id: 2, name: 'MedCare Multispeciality Hospital', city: 'Mumbai', address: 'Andheri West, Mumbai – 400053', beds: 350, emergency: true, established: 2008, specialities: ['Gastroenterology', 'Neurology', 'Pediatrics'], accreditation: 'NABH', contact: '+91 22 4000 2000', icu: 50, ot: 15 },
  { id: 3, name: 'MedCare Hospital & Research Centre', city: 'Bangalore', address: 'Whitefield, Bangalore – 560066', beds: 420, emergency: true, established: 2010, specialities: ['Orthopedics', 'Cardiology', 'Oncology'], accreditation: 'NABH', contact: '+91 80 4000 3000', icu: 65, ot: 18 },
  { id: 4, name: 'MedCare Women & Children Hospital', city: 'Chennai', address: 'T. Nagar, Chennai – 600017', beds: 200, emergency: true, established: 2012, specialities: ['Gynecology', 'Pediatrics', 'Neonatology'], accreditation: 'NABH', contact: '+91 44 4000 4000', icu: 30, ot: 10 },
  { id: 5, name: 'MedCare Heart Institute', city: 'Hyderabad', address: 'Banjara Hills, Hyderabad – 500034', beds: 280, emergency: true, established: 2009, specialities: ['Cardiology', 'Cardiac Surgery', 'Vascular Surgery'], accreditation: 'NABH & JCI', contact: '+91 40 4000 5000', icu: 45, ot: 12 },
  { id: 6, name: 'MedCare Hospital', city: 'Kolkata', address: 'Salt Lake, Kolkata – 700091', beds: 300, emergency: true, established: 2014, specialities: ['Urology', 'Nephrology', 'Gastroenterology'], accreditation: 'NABH', contact: '+91 33 4000 6000', icu: 40, ot: 14 },
];

export const specialities = [
  { id: 1, name: 'Cardiology', icon: 'fa-heart-pulse', desc: 'Expert care for heart diseases, bypass surgery, angioplasty, and cardiac rehabilitation.' },
  { id: 2, name: 'Neurology', icon: 'fa-brain', desc: 'Comprehensive treatment for brain, spine, and nervous system disorders.' },
  { id: 3, name: 'Orthopedics', icon: 'fa-bone', desc: 'Advanced joint replacement, sports medicine, and spine surgery.' },
  { id: 4, name: 'Gastroenterology', icon: 'fa-stomach', desc: 'Diagnosis and treatment of digestive system diseases and liver disorders.' },
  { id: 5, name: 'Oncology', icon: 'fa-ribbon', desc: 'Cutting-edge cancer treatment including chemotherapy, radiation, and immunotherapy.' },
  { id: 6, name: 'Pediatrics', icon: 'fa-baby', desc: 'Complete healthcare for infants, children, and adolescents.' },
  { id: 7, name: 'Gynecology', icon: 'fa-person-pregnant', desc: 'Women\'s healthcare, pregnancy care, fertility treatments, and laparoscopic surgery.' },
  { id: 8, name: 'Dermatology', icon: 'fa-hand-dots', desc: 'Skin care, cosmetic treatments, laser therapy, and allergy management.' },
  { id: 9, name: 'ENT', icon: 'fa-ear-listen', desc: 'Ear, nose, and throat treatments including cochlear implants and sinus surgery.' },
  { id: 10, name: 'Urology', icon: 'fa-kidneys', desc: 'Kidney, bladder, and urinary tract treatment with robotic surgery options.' },
];

export const packages = [
  { id: 1, name: 'Basic Health Checkup', icon: '🩺', price: 999, original: 1499, popular: false, tests: ['Complete Blood Count', 'Blood Sugar (Fasting)', 'Lipid Profile', 'Kidney Function Test', 'Liver Function Test', 'Urine Routine'] },
  { id: 2, name: 'Full Body Checkup', icon: '🏥', price: 2499, original: 3999, popular: true, tests: ['Complete Blood Count', 'Thyroid Profile', 'Lipid Profile', 'Liver & Kidney Function', 'Cardiac Risk Markers', 'Vitamin D & B12', 'Chest X-Ray', 'ECG'] },
  { id: 3, name: 'Diabetes Checkup', icon: '💉', price: 1499, original: 2199, popular: false, tests: ['HbA1c', 'Fasting Blood Sugar', 'Post-Prandial Sugar', 'Kidney Function', 'Lipid Profile', 'Urine Microalbumin'] },
  { id: 4, name: 'Heart Checkup', icon: '❤️', price: 3499, original: 5499, popular: true, tests: ['ECG', 'Echo Cardiography', 'TMT Stress Test', 'Lipid Profile', 'Cardiac Risk Markers', 'Chest X-Ray', 'Blood Pressure Monitoring'] },
  { id: 5, name: 'Women Health Checkup', icon: '🌸', price: 2999, original: 4499, popular: false, tests: ['Complete Blood Count', 'Thyroid Profile', 'Pap Smear', 'Mammography', 'Bone Density Scan', 'Iron Studies', 'Vitamin D & B12'] },
  { id: 6, name: 'Senior Citizen Checkup', icon: '👴', price: 3999, original: 5999, popular: false, tests: ['Complete Blood Count', 'Thyroid Profile', 'Cardiac Markers', 'Bone Density', 'Prostate/Mammography', 'Eye & Hearing Test', 'Full Abdomen USG', 'Chest X-Ray'] },
];

export const testimonials = [
  { id: 1, name: 'Rahul Khanna', initials: 'RK', review: 'The care I received at MedCare was exceptional. Dr. Sharma performed my bypass surgery flawlessly, and the nursing staff was incredibly supportive throughout my recovery.', rating: 5, treatment: 'Cardiac Surgery' },
  { id: 2, name: 'Anita Desai', initials: 'AD', review: 'My mother\'s knee replacement surgery was a huge success. The orthopedic team was highly professional, and the post-operative care was outstanding. She\'s walking pain-free now!', rating: 5, treatment: 'Knee Replacement' },
  { id: 3, name: 'Sanjay Gupta', initials: 'SG', review: 'MedCare\'s oncology department gave us hope when we needed it most. The treatment plan was comprehensive, and the doctors were transparent and compassionate at every step.', rating: 5, treatment: 'Cancer Treatment' },
  { id: 4, name: 'Priyanka Jain', initials: 'PJ', review: 'I had a wonderful experience with the gynecology department. Dr. Sneha Patel is incredibly kind and knowledgeable. My delivery was smooth and the NICU facilities are world-class.', rating: 4, treatment: 'Maternity Care' },
  { id: 5, name: 'Mohammed Ali', initials: 'MA', review: 'Came from Dubai for my father\'s treatment. The international patient services were seamless — from airport pickup to hotel arrangement. World-class treatment at affordable prices.', rating: 5, treatment: 'International Patient' },
  { id: 6, name: 'Lakshmi Rao', initials: 'LR', review: 'The health checkup package was very comprehensive and affordable. The reports were explained clearly, and the follow-up was prompt. Highly recommend MedCare for preventive health.', rating: 4, treatment: 'Health Checkup' },
];

export const blogs = [
  { id: 1, title: '10 Warning Signs of Heart Disease You Shouldn\'t Ignore', excerpt: 'Heart disease is the leading cause of death worldwide. Learn to recognize the early warning signs that could save your life.', category: 'Cardiology', date: 'March 18, 2026', icon: '❤️', image: '/images/blog_heart_1774214988481.png' },
  { id: 2, title: 'Understanding Diabetes: Prevention & Management Guide', excerpt: 'A comprehensive guide to understanding diabetes, its risk factors, prevention strategies, and modern management approaches.', category: 'Endocrinology', date: 'March 15, 2026', icon: '💉', image: '/images/blog_diabetes_1774215005130.png' },
  { id: 3, title: 'Benefits of Regular Health Checkups After 40', excerpt: 'Why preventive health screening becomes critical after 40 and which tests you should get done annually.', category: 'Preventive Care', date: 'March 12, 2026', icon: '🩺', image: '/images/blog_checkup_1774215024729.png' },
  { id: 4, title: 'Advancements in Robotic Surgery at MedCare', excerpt: 'How robotic-assisted surgery is revolutionizing precision, reducing recovery time, and improving patient outcomes.', category: 'Technology', date: 'March 10, 2026', icon: '🤖' },
  { id: 5, title: 'A Parent\'s Guide to Child Vaccination Schedule', excerpt: 'Complete vaccination schedule for children from birth to 18 years, including new recommendations and booster doses.', category: 'Pediatrics', date: 'March 8, 2026', icon: '👶' },
  { id: 6, title: 'Mental Health: Breaking the Stigma in India', excerpt: 'Why mental health awareness is crucial and how MedCare\'s psychiatry department is making comprehensive care accessible.', category: 'Mental Health', date: 'March 5, 2026', icon: '🧠' },
];

export const quickActions = [
  { title: 'Book Appointment', desc: 'Schedule with top doctors', icon: 'fa-calendar-check', link: '#/appointment' },
  { title: 'Find Doctor', desc: 'Search by speciality', icon: 'fa-user-doctor', link: '#/doctors' },
  { title: 'Health Checkup', desc: 'Preventive health packages', icon: 'fa-clipboard-list', link: '#/packages' },
  { title: 'Lab Tests', desc: 'Book diagnostic tests', icon: 'fa-flask', link: '#/packages' },
  { title: 'View Hospitals', desc: 'Find nearest branch', icon: 'fa-hospital', link: '#/hospitals' },
  { title: 'Emergency Care', desc: '24/7 immediate help', icon: 'fa-truck-medical', link: '#/contact' },
];

export const whyChooseUs = [
  { title: '500+', desc: 'Expert Doctors', icon: 'fa-user-doctor' },
  { title: '50+', desc: 'Hospital Branches', icon: 'fa-hospital' },
  { title: '1M+', desc: 'Happy Patients', icon: 'fa-heart' },
  { title: '24/7', desc: 'Emergency Care', icon: 'fa-clock' },
  { title: 'NABH', desc: 'Accredited', icon: 'fa-certificate' },
  { title: 'Latest', desc: 'Technology', icon: 'fa-microchip' },
];

export const internationalServices = [
  { title: 'Visa Assistance', desc: 'Fast-track medical visa processing', icon: 'fa-passport' },
  { title: 'Airport Pickup', desc: 'Complimentary pickup & drop service', icon: 'fa-plane-arrival' },
  { title: 'Accommodation', desc: 'Comfortable stay arrangements', icon: 'fa-hotel' },
  { title: 'Language Translator', desc: 'Multi-language support available', icon: 'fa-language' },
  { title: 'Dedicated Coordinator', desc: 'Personal care coordinator', icon: 'fa-headset' },
];
