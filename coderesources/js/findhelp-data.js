/* =====================================================================
   FIND HELP: RESOURCE DATA
   ---------------------------------------------------------------------
   This is the only file you need to edit to add, change, or remove a
   resource. Every resource here comes from a partner's own flyer.

   Each resource has:
     org      : key from FH_ORGS below
     cats     : one or more keys from FH_CATS below
     free     : true if the service is free
     spanish  : true if Spanish-speaking staff/materials are available
     noid     : true if no ID is needed
     phone / text / email / web / webText / addr : contact info (optional)
     flyer    : file name in coderesources/flyers/ (or { en: '...', es: '...' })
     en / es  : the words shown in English and Spanish
        title, short (one line), tags, when, who, bring, has (list), note
   Leave out any field you don't have.
   ===================================================================== */

const FH_UPDATED = { en: 'November 2026', es: 'noviembre de 2026' };

const FH_CATS = [
  { id: 'bills',    icon: 'bill',   en: ['Medical Bills', 'Hospital debt help'],        es: ['Facturas Médicas', 'Ayuda con deudas de hospital'] },
  { id: 'health',   icon: 'steth',  en: ['Doctors & Clinics', 'Free & low-cost care'],  es: ['Doctores y Clínicas', 'Atención gratis o de bajo costo'] },
  { id: 'food',     icon: 'food',   en: ['Food', 'Meals & pantries'],                   es: ['Comida', 'Comidas y despensas'] },
  { id: 'housing',  icon: 'home',   en: ['Housing', 'Shelter & move-in help'],          es: ['Vivienda', 'Refugio y ayuda para mudarse'] },
  { id: 'basics',   icon: 'shower', en: ['Showers, Mail & IDs', 'Daily needs'],         es: ['Duchas, Correo e IDs', 'Necesidades diarias'] },
  { id: 'money',    icon: 'coin',   en: ['Money & Benefits', 'Taxes, SNAP, Medicaid'],  es: ['Dinero y Beneficios', 'Impuestos, SNAP, Medicaid'] },
  { id: 'seniors',  icon: 'elder',  en: ['Older Adults', 'And caregivers'],             es: ['Adultos Mayores', 'Y cuidadores'] },
  { id: 'families', icon: 'family', en: ['Families & Kids', 'Pregnancy to age 5+'],     es: ['Familias y Niños', 'Embarazo hasta 5+ años'] },
  { id: 'jobs',     icon: 'laptop', en: ['Jobs & Computers', 'Classes & school'],       es: ['Empleo y Computación', 'Clases y estudios'] }
];

const FH_ORGS = {
  lcmd:    { name: 'Dollar For',            en: 'Medical bill help',          es: 'Ayuda con facturas médicas' },
  sunrise: { name: 'Sunrise Navigation Center',    en: 'Housing & daily services',   es: 'Vivienda y servicios diarios' },
  trinity: { name: 'Trinity Center',               en: 'Downtown day center',        es: 'Centro de día en el centro' },
  peoples: { name: 'People’s Community Clinic',    en: 'Health care & food pantry',  es: 'Salud y despensa de comida' },
  vhc:     { name: 'Volunteer Healthcare Clinic',  en: 'Care for the uninsured',     es: 'Atención para personas sin seguro' },
  cdd:     { name: 'C.D. Doyle Free Clinic',       en: 'Sunday free clinic',         es: 'Clínica gratis los domingos' },
  fc:      { name: 'Foundation Communities',       en: 'Prosper Centers',            es: 'Centros Prosper' },
  age:     { name: 'AGE of Central Texas',         en: 'Older adults & caregivers',  es: 'Adultos mayores y cuidadores' },
  abc:     { name: 'Any Baby Can',                 en: 'Families with children',     es: 'Familias con niños' }
};

const PROSPER_ADDR = ['Prosper Center North: 601 W Braker Ln, Austin, TX 78753', 'Prosper Center South: 2900 S IH-35 Frontage Rd, Austin, TX 78704'];
const SUNRISE_ADDR = ['Sunrise Hub: 4430 Menchaca Rd, Austin, TX 78745'];
const TRINITY_ADDR = ['304 E 7th St, Austin, TX 78701'];

const FH_RESOURCES = [

/* ---------------- MEDICAL BILLS ---------------- */
{ org: 'lcmd', cats: ['bills'], free: true, featured: true,
  web: 'https://dollarfor.org', webText: 'dollarfor.org',
  en: { title: 'Hospital bill assistance', short: 'Dollar For checks if you qualify for charity care and applies for you.',
        tags: ['Online'], who: 'Anyone with a bill from a nonprofit hospital. Citizenship is not asked.',
        bring: 'Hospital bill, tax return or non-filing letter, 3 pay stubs, 3 months of bank statements.',
        has: ['Eligibility check in minutes', 'They fill out and send the application', 'Weekly follow-up until the hospital decides'] },
  es: { title: 'Ayuda con facturas del hospital', short: 'Dollar For revisa si califica para atención caritativa y presenta la solicitud por usted.',
        tags: ['En línea'], who: 'Cualquier persona con una factura de un hospital sin fines de lucro. No se pregunta por la ciudadanía.',
        bring: 'Factura del hospital, declaración de impuestos o carta de no declaración, 3 talones de pago, 3 meses de estados de cuenta.',
        has: ['Revisión de elegibilidad en minutos', 'Ellos llenan y envían la solicitud', 'Seguimiento semanal hasta que el hospital decida'] } },

/* ---------------- DOCTORS & CLINICS ---------------- */
{ org: 'peoples', cats: ['health'], flyer: { en: 'peoples-clinic-en.pdf', es: 'peoples-clinic-es.pdf' }, spanish: true,
  phone: '512-478-4939', web: 'https://www.austinpcc.org', webText: 'austinpcc.org',
  addr: ['1101 Camino La Costa, Austin, TX 78752'],
  en: { title: 'Primary care', short: 'Checkups and doctor visits for all ages. Fees based on income if uninsured.',
        tags: ['Sliding scale', 'All insurance'], who: 'Everyone, regardless of ability to pay. Accepts Medicaid, Medicare, CHIP and ACA plans.',
        has: ['Adult, child & teen medicine', 'Dental care', 'Mental health & social work', 'Pharmacy & lab on site', 'Chronic disease care, nutrition, vaccines', 'Medical-legal help'],
        note: 'Serves patients in many languages.' },
  es: { title: 'Atención primaria', short: 'Chequeos y consultas para todas las edades. Tarifas según ingresos si no tiene seguro.',
        tags: ['Escala móvil', 'Todo seguro'], who: 'Todos, sin importar su capacidad de pago. Acepta Medicaid, Medicare, CHIP y planes de ACA.',
        has: ['Medicina para adultos, niños y adolescentes', 'Atención dental', 'Salud mental y trabajo social', 'Farmacia y laboratorio en el lugar', 'Enfermedades crónicas, nutrición, vacunas', 'Ayuda médico-legal'],
        note: 'Atiende a pacientes en muchos idiomas.' } },

{ org: 'peoples', cats: ['health', 'families'], flyer: { en: 'peoples-clinic-en.pdf', es: 'peoples-clinic-es.pdf' }, spanish: true,
  phone: '512-478-4939', web: 'https://www.austinpcc.org', webText: 'austinpcc.org',
  addr: ['1101 Camino La Costa, Austin, TX 78752', 'St. David’s Medical Center Pavilion, 1025 E 32nd St, Suite 200, Austin, TX 78705'],
  en: { title: 'Women’s health', short: 'Exams, cancer screenings, birth control and prenatal care.',
        tags: ['Sliding scale'], has: ['Gynecological exams', 'Cancer screenings', 'Family planning', 'Prenatal care', 'Breastfeeding support'] },
  es: { title: 'Salud de la mujer', short: 'Exámenes, detección de cáncer, anticonceptivos y cuidado prenatal.',
        tags: ['Escala móvil'], has: ['Exámenes ginecológicos', 'Detección de cáncer', 'Planificación familiar', 'Cuidado prenatal', 'Apoyo para la lactancia'] } },

{ org: 'vhc', cats: ['health'], flyer: 'volunteer-healthcare-clinic.pdf',
  phone: '512-459-6002', phoneNote: { en: 'press 0', es: 'marque 0' }, web: 'https://www.volclinic.org', webText: 'volclinic.org',
  addr: ['4215 Medical Pkwy, Austin, TX 78756'],
  en: { title: 'Basic care', short: 'Sick visits for uninsured Travis County adults and kids. $10 donation requested.',
        tags: ['Uninsured', 'Travis County'],
        when: 'Sign up: Mon–Fri 10 AM – 4 PM. Visits: Mon–Thu 10 AM – 2 PM; Tue & Thu evenings by appointment.',
        who: 'Lives in Travis County, has no insurance (including MAP, Medicaid/CHIP, Medicare), and meets income limits.',
        bring: 'Photo ID and proof of address.',
        has: ['Sick visits for adults & children', 'Diabetes care', 'Medication help', 'Labs, imaging & specialist referrals'] },
  es: { title: 'Atención básica', short: 'Consultas por enfermedad para adultos y niños sin seguro en el condado de Travis. Se pide una donación de $10.',
        tags: ['Sin seguro', 'Condado de Travis'],
        when: 'Inscripción: lun–vie 10 AM – 4 PM. Consultas: lun–jue 10 AM – 2 PM; mar y jue por la noche con cita.',
        who: 'Vive en el condado de Travis, no tiene seguro (incluye MAP, Medicaid/CHIP, Medicare) y cumple los límites de ingresos.',
        bring: 'Identificación con foto y comprobante de domicilio.',
        has: ['Consultas por enfermedad para adultos y niños', 'Cuidado de la diabetes', 'Ayuda con medicamentos', 'Laboratorio, imágenes y referidos a especialistas'] } },

{ org: 'cdd', cats: ['health'], flyer: 'cd-doyle-clinic.pdf', free: true, spanish: true, noid: true,
  phone: '409-571-9362', email: 'austinstudentclinic@gmail.com', web: 'http://www.cddoyleclinic.com/', webText: 'cddoyleclinic.com',
  addr: ['Esperanza Community, 780 Bastrop Hwy, Austin, TX 78741'],
  en: { title: 'Free walk-in clinic', short: 'Free walk-in clinic on Sundays. No ID, insurance or paperwork needed.',
        tags: ['Walk-in', 'Sundays'], when: 'Sundays 2 – 5 PM',
        has: ['Sick & injury care, prescriptions, wound care', 'Blood pressure checks', 'Mental health services', 'Help applying for MAP & getting prescriptions', 'Free kits (wound, heat, cold) and some clothing'],
        note: 'Not an Esperanza resident? Check in at the security kiosk at the entrance.' },
  es: { title: 'Clínica gratis sin cita', short: 'Clínica gratis sin cita los domingos. No necesita ID, seguro ni papeles.',
        tags: ['Sin cita', 'Domingos'], when: 'Domingos 2 – 5 PM',
        has: ['Atención por enfermedad o lesión, recetas, curación de heridas', 'Revisión de presión arterial', 'Servicios de salud mental', 'Ayuda para solicitar MAP y obtener recetas', 'Kits gratis (heridas, calor, frío) y algo de ropa'],
        note: '¿No vive en Esperanza? Regístrese en el quiosco de seguridad en la entrada.' } },

{ org: 'fc', cats: ['health', 'money'], flyer: 'prosper-health-coverage.pdf', free: true, spanish: true,
  phone: '512-381-4520', text: '737-209-6861', email: 'Enroll@foundcom.org', web: 'https://prosperhealthcoverage.org', webText: 'ProsperHealthCoverage.org',
  addr: PROSPER_ADDR,
  en: { title: 'Health insurance assistance', short: 'A counselor helps you find and sign up for a plan. Walk-ins welcome.',
        tags: ['Any income', 'Walk-in'], when: 'Mon–Thu 9 AM – 5 PM · Fri by phone 9 AM – 4 PM',
        who: 'Anyone. No income or county limit for this service.',
        has: ['Marketplace (healthcare.gov) plans', 'Medicaid & CHIP', 'Special enrollment after moving, a new baby, marriage, or losing coverage'] },
  es: { title: 'Ayuda con seguro médico', short: 'Un consejero le ayuda a encontrar un plan e inscribirse. Puede llegar sin cita.',
        tags: ['Cualquier ingreso', 'Sin cita'], when: 'Lun–jue 9 AM – 5 PM · Vie por teléfono 9 AM – 4 PM',
        who: 'Cualquier persona. Este servicio no tiene límite de ingresos ni de condado.',
        has: ['Planes del Mercado (healthcare.gov)', 'Medicaid y CHIP', 'Inscripción especial después de mudarse, tener un bebé, casarse o perder su seguro'] } },

{ org: 'sunrise', cats: ['health'], flyer: 'sunrise-services.pdf', free: true, noid: true,
  phone: '512-522-1097', web: 'https://sunrisenavigationcenter.org', webText: 'sunrisenavigationcenter.org',
  addr: SUNRISE_ADDR,
  en: { title: 'Health services on-site', short: 'Clinics visit the Sunrise Hub on set days.',
        tags: ['Walk-in'], when: 'Mon–Fri 9 AM – 1 PM',
        has: ['Central Health MAP sign-up (Tue & Thu)', 'Integral Care mental health (most days)', 'Black Men’s Health Clinic (Mon & Thu)', 'CommUnityCare (every other Mon)', 'Narcan vending machine, medication storage'] },
  es: { title: 'Servicios de salud en el lugar', short: 'Clínicas visitan Sunrise en días fijos.',
        tags: ['Sin cita'], when: 'Lun–vie 9 AM – 1 PM',
        has: ['Inscripción a MAP de Central Health (mar y jue)', 'Salud mental de Integral Care (casi todos los días)', 'Black Men’s Health Clinic (lun y jue)', 'CommUnityCare (cada dos lunes)', 'Máquina de Narcan, almacenamiento de medicamentos'] } },

/* ---------------- FOOD ---------------- */
{ org: 'peoples', cats: ['food'], flyer: 'peoples-food-pantry.pdf', free: true,
  addr: ['1101 Camino La Costa, Austin, TX 78752'],
  en: { title: 'Food pantry', short: 'Free groceries once a month.', tags: ['Monthly'], when: 'First Wednesday of each month, 5 – 7 PM' },
  es: { title: 'Despensa de comida', short: 'Comida gratis una vez al mes.', tags: ['Mensual'], when: 'Primer miércoles de cada mes, 5 – 7 PM' } },

{ org: 'trinity', cats: ['food'], flyer: { en: 'trinity-daily-services-en.jpg', es: 'trinity-daily-services-es.jpg' }, free: true, noid: true,
  phone: '512-610-3566', web: 'https://trinitycenteraustin.org', webText: 'trinitycenteraustin.org',
  addr: TRINITY_ADDR,
  en: { title: 'Free breakfast', short: 'Breakfast every weekday morning, downtown.',
        tags: ['Walk-in', 'Downtown'], when: 'Mon–Fri 9 – 10 AM',
        has: ['Fridays: Central Texas Food Bank SNAP sign-up', 'Sundays: worship service and a meal, 3 – 4:30 PM'] },
  es: { title: 'Desayuno gratis', short: 'Desayuno cada mañana entre semana, en el centro.',
        tags: ['Sin cita', 'Centro'], when: 'Lun–vie 9 – 10 AM',
        has: ['Viernes: inscripción a SNAP con Central Texas Food Bank', 'Domingos: servicio religioso y comida, 3 – 4:30 PM'] } },

{ org: 'sunrise', cats: ['food'], flyer: 'sunrise-services.pdf', free: true, noid: true,
  phone: '512-522-1097', addr: SUNRISE_ADDR,
  en: { title: 'Meals & pet food', short: 'Food, meals and pet food, Monday to Friday.',
        tags: ['Walk-in'], when: 'Mon–Fri 9 AM – 1 PM', has: ['Food & meals', 'Pet food', 'Food stamp (SNAP) applications'] },
  es: { title: 'Comidas y comida para mascotas', short: 'Comida y alimentos para mascotas, de lunes a viernes.',
        tags: ['Sin cita'], when: 'Lun–vie 9 AM – 1 PM', has: ['Comida', 'Comida para mascotas', 'Solicitudes de cupones de alimentos (SNAP)'] } },

{ org: 'fc', cats: ['food', 'money', 'health'], flyer: 'fc-benefits-assistance.pdf', free: true, spanish: true,
  phone: '737-249-6394', email: 'BenefitsAssistance@foundcom.org', web: 'https://prospercenters.org', webText: 'ProsperCenters.org',
  en: { title: 'Food stamps (SNAP) & benefits sign-up', short: 'Bilingual staff help you apply for or renew state benefits.',
        tags: ['Bilingual'], has: ['SNAP (food stamps)', 'TANF (cash help)', 'Medicaid', 'CHIP (insurance for kids)'] },
  es: { title: 'Inscripción a SNAP y otros beneficios', short: 'Personal bilingüe le ayuda a solicitar o renovar beneficios del estado.',
        tags: ['Bilingüe'], has: ['SNAP (cupones de alimentos)', 'TANF (ayuda en efectivo)', 'Medicaid', 'CHIP (seguro para niños)'] } },

/* ---------------- HOUSING ---------------- */
{ org: 'sunrise', cats: ['housing'], flyer: 'sunrise-hotline.pdf', free: true, noid: true,
  phone: '512-522-1097', email: 'hotline@sunriseaustin.org', web: 'https://sunrisenavigationcenter.org', webText: 'sunrisenavigationcenter.org',
  en: { title: 'Housing & shelter hotline', short: 'Call or text for shelter, housing and services.',
        tags: ['Call or text'], when: 'Mon–Fri 8 AM – 8 PM', who: 'People experiencing homelessness in the Austin area.',
        has: ['Housing application (Coordinated Assessment)', 'Shelter waitlist & information', 'Help finding showers, food, jobs and health care', 'Ask for a visit to your camp at sendsunrise.org'] },
  es: { title: 'Línea de vivienda y refugio', short: 'Llame o mande texto para refugio, vivienda y servicios.',
        tags: ['Llamada o texto'], when: 'Lun–vie 8 AM – 8 PM', who: 'Personas sin hogar en el área de Austin.',
        has: ['Solicitud de vivienda (Coordinated Assessment)', 'Lista de espera e información de refugios', 'Ayuda para encontrar duchas, comida, empleo y salud', 'Pida una visita a su campamento en sendsunrise.org'] } },

{ org: 'sunrise', cats: ['housing', 'money'], flyer: 'sunrise-wayfinder.pdf', free: true,
  phone: '512-522-1097', email: 'wayfinder@sunriseaustin.org',
  en: { title: 'Help paying move-in costs', short: 'One-time help paying a security deposit and move-in fees.',
        tags: ['Once a year'],
        who: 'Experiencing homelessness, fleeing domestic violence, or facing eviction. Income must be at least 2× the rent. Home must be in Travis, Hays, Bastrop or Williamson County.',
        bring: 'Application (from the hotline or in person), state ID or driver’s license, proof of income. Sunrise gives you the landlord form, W-9 and deposit form.',
        has: ['Decision within 5 business days', 'You find the home; Sunrise helps pay to move in', 'Not for deposits you already paid'],
        note: 'Funds are limited. Apply early.' },
  es: { title: 'Ayuda para pagar la mudanza', short: 'Ayuda de una sola vez para pagar el depósito y los gastos de mudanza.',
        tags: ['Una vez al año'],
        who: 'Personas sin hogar, que huyen de violencia doméstica o que enfrentan un desalojo. El ingreso debe ser al menos 2 veces la renta. La vivienda debe estar en el condado de Travis, Hays, Bastrop o Williamson.',
        bring: 'Solicitud (por la línea o en persona), ID del estado o licencia de manejo, comprobante de ingresos. Sunrise le da el formulario del arrendador, el W-9 y el formulario de depósito.',
        has: ['Decisión en 5 días hábiles', 'Usted encuentra la vivienda; Sunrise ayuda a pagar la mudanza', 'No cubre depósitos que ya pagó'],
        note: 'Los fondos son limitados. Solicite pronto.' } },

{ org: 'sunrise', cats: ['housing', 'basics'], flyer: 'sunrise-services.pdf', free: true, noid: true,
  phone: '512-522-1097', web: 'https://sunrisenavigationcenter.org', webText: 'sunrisenavigationcenter.org',
  addr: SUNRISE_ADDR,
  en: { title: 'Day center: showers, laundry & more', short: 'Day center with showers, laundry, mail, clothes and case help.',
        tags: ['Walk-in'], when: 'Mon–Fri 9 AM – 1 PM (showers 8:30 AM – 12 PM)',
        has: ['Showers, mobile laundry, hygiene items', 'Clothing closet', 'Mail, phone, WiFi & charging', 'Bus passes', 'ID printing & Social Security card help', 'Benefits specialist, housing check-ins'] },
  es: { title: 'Centro de día: duchas, lavandería y más', short: 'Centro de día con duchas, lavandería, correo, ropa y apoyo.',
        tags: ['Sin cita'], when: 'Lun–vie 9 AM – 1 PM (duchas 8:30 AM – 12 PM)',
        has: ['Duchas, lavandería móvil, artículos de higiene', 'Ropero', 'Correo, teléfono, WiFi y carga de celular', 'Pases de autobús', 'Impresión de ID y ayuda con tarjeta de Seguro Social', 'Especialista en beneficios, seguimiento de vivienda'] } },

{ org: 'trinity', cats: ['housing', 'basics'], flyer: { en: 'trinity-daily-services-en.jpg', es: 'trinity-daily-services-es.jpg' }, free: true, noid: true,
  phone: '512-610-3566', web: 'https://trinitycenteraustin.org', webText: 'trinitycenteraustin.org',
  addr: TRINITY_ADDR,
  en: { title: 'Day center: breakfast, showers & more', short: 'Downtown day center for people who are unhoused or low-income.',
        tags: ['Walk-in', 'Downtown'], when: 'Mon–Fri 9 AM – 1 PM',
        has: ['Breakfast, computers, prescription help', 'Local bus cards, laundry vouchers', 'Showers: women Mon, men Thu', 'Clothing closet: women Mon, men Fri', 'Laundry: 2nd & 4th Thu', 'MAP sign-up (Tue), mental health intakes (Thu)'] },
  es: { title: 'Centro de día: desayuno, duchas y más', short: 'Centro de día en el centro para personas sin hogar o de bajos ingresos.',
        tags: ['Sin cita', 'Centro'], when: 'Lun–vie 9 AM – 1 PM',
        has: ['Desayuno, computadoras, ayuda con recetas', 'Tarjetas de autobús local, vales de lavandería', 'Duchas: mujeres lun, hombres jue', 'Ropero: mujeres lun, hombres vie', 'Lavandería: 2.º y 4.º jueves', 'Inscripción a MAP (mar), evaluaciones de salud mental (jue)'] } },

{ org: 'fc', cats: ['housing', 'money'], flyer: 'fc-community-health-workers.pdf', free: true, spanish: true,
  phone: '512-537-2692', email: 'fc.chw@foundcom.org',
  en: { title: 'Help with rent & utilities', short: 'Community health workers connect you to rent, utility and other help.',
        tags: ['Bilingual'], when: 'Mon–Fri 9 AM – 4 PM',
        has: ['Rent & utility assistance', 'Food pantry', 'Health insurance & benefits', 'Jobs, GED, English & computer classes', 'Transportation'] },
  es: { title: 'Ayuda con renta y servicios', short: 'Promotores de salud le conectan con ayuda para renta, luz, agua y más.',
        tags: ['Bilingüe'], when: 'Lun–vie 9 AM – 4 PM',
        has: ['Ayuda con renta y servicios públicos', 'Despensa de comida', 'Seguro médico y beneficios', 'Empleo, GED, clases de inglés y computación', 'Transporte'] } },

/* ---------------- SHOWERS, MAIL & IDs ---------------- */
{ org: 'trinity', cats: ['basics'], flyer: 'trinity-center-services.pdf#page=4', free: true, noid: true,
  phone: '512-610-3520', email: 'trinitycenteridassistance@gmail.com', addr: TRINITY_ADDR,
  en: { title: 'Get an ID or birth certificate', short: 'They help you get IDs and pay the fees.',
        tags: ['Arrive early'], when: 'Mon (women only) – Thu. Line starts at 7 AM; list taken at 8:30 AM. Limited spots each day.',
        bring: 'Anything with your name: old ID, mail, insurance card, military or prison ID. Have nothing? They can still help.',
        has: ['Texas ID & driver’s license', 'Birth certificates', 'Social Security cards', 'Food handler & TABC permits'] },
  es: { title: 'Obtenga una ID o acta de nacimiento', short: 'Le ayudan a sacar sus documentos y pagan las tarifas.',
        tags: ['Llegue temprano'], when: 'Lun (solo mujeres) – jue. La fila empieza a las 7 AM; la lista se toma a las 8:30 AM. Cupos limitados cada día.',
        bring: 'Cualquier cosa con su nombre: ID vieja, correo, tarjeta de seguro, ID militar o de prisión. ¿No tiene nada? Igual le pueden ayudar.',
        has: ['ID de Texas y licencia de manejo', 'Actas de nacimiento', 'Tarjetas de Seguro Social', 'Permisos de manejo de alimentos y TABC'] } },

{ org: 'trinity', cats: ['basics'], flyer: 'trinity-center-services.pdf#page=5', free: true,
  phone: '512-610-3566', addr: TRINITY_ADDR,
  en: { title: 'Mail & document storage', short: 'Get your mail here and keep important papers safe.',
        tags: ['Downtown'], when: 'Check mail Mon–Fri 9:30 AM – 1 PM', bring: 'Some form of ID to pick up mail.',
        has: ['Mailing address: Your Name, c/o Trinity Center, 304 East 7th Street, Austin, TX 78701', 'Packages accepted (no cash-on-delivery)', 'Safe storage for IDs, birth certificates and Social Security cards'],
        note: 'Trinity can’t forward mail. Update your address with each sender.' },
  es: { title: 'Correo y guarda de documentos', short: 'Reciba su correo aquí y guarde sus documentos importantes.',
        tags: ['Centro'], when: 'Revisar correo lun–vie 9:30 AM – 1 PM', bring: 'Algún tipo de ID para recoger su correo.',
        has: ['Dirección: Su Nombre, c/o Trinity Center, 304 East 7th Street, Austin, TX 78701', 'Se aceptan paquetes (no contra reembolso)', 'Guarda segura de IDs, actas de nacimiento y tarjetas de Seguro Social'],
        note: 'Trinity no puede reenviar correo. Actualice su dirección con cada remitente.' } },

{ org: 'trinity', cats: ['basics', 'housing'], flyer: 'trinity-center-services.pdf#page=7', free: true,
  phone: '512-610-3566', addr: TRINITY_ADDR,
  en: { title: 'Bus ticket home', short: 'A Greyhound ticket to reunite with family or friends outside Austin.',
        tags: ['1 per year'], when: 'Apply Mon–Fri 9 AM – 1 PM',
        who: 'Someone outside Austin you can stay with. Staff will call them to confirm.',
        bring: 'Your destination and your friend or family member’s name and working phone number.' },
  es: { title: 'Boleto de autobús a casa', short: 'Un boleto de Greyhound para reunirse con familia o amigos fuera de Austin.',
        tags: ['1 por año'], when: 'Solicite lun–vie 9 AM – 1 PM',
        who: 'Alguien fuera de Austin con quien se pueda quedar. El personal le llamará para confirmar.',
        bring: 'Su destino y el nombre y número de teléfono de su familiar o amigo.' } },

/* ---------------- MONEY & BENEFITS ---------------- */
{ org: 'fc', cats: ['money', 'bills'], flyer: 'prosper-centers.pdf', free: true, spanish: true,
  phone: '737-717-4000', web: 'https://prospertaxhelp.org', webText: 'ProsperTaxHelp.org', addr: PROSPER_ADDR,
  en: { title: 'Free tax help', short: 'IRS-certified preparers file your taxes for free, including past years.',
        tags: ['Income limits'], who: 'Individuals under $60,000/yr; households of 2–4 under $85,000 (+$5,000 per extra person).',
        has: ['Current and past-year returns', 'IRS letters', 'ITIN applications'],
        note: 'Most charity care applications ask for a tax return.' },
  es: { title: 'Ayuda gratis con impuestos', short: 'Preparadores certificados por el IRS hacen sus impuestos gratis, incluso de años pasados.',
        tags: ['Límites de ingresos'], who: 'Personas con menos de $60,000 al año; hogares de 2–4 con menos de $85,000 (+$5,000 por persona adicional).',
        has: ['Declaraciones actuales y de años pasados', 'Cartas del IRS', 'Solicitudes de ITIN'],
        note: 'La mayoría de las solicitudes de atención caritativa piden una declaración de impuestos.' } },

{ org: 'fc', cats: ['money'], flyer: 'prosper-centers.pdf', free: true,
  phone: '737-717-4000', web: 'https://prosperfinancialwellness.org', webText: 'ProsperFinancialWellness.org',
  en: { title: 'Free financial coaching', short: 'One-on-one help with credit, debt, budgeting and savings.',
        tags: ['Income limits'], who: 'Individuals under $60,000/yr; households of 2–4 under $85,000.',
        has: ['Improve your credit', 'Pay off debt', 'Build a budget & savings'] },
  es: { title: 'Asesoría financiera gratis', short: 'Ayuda personal con crédito, deudas, presupuesto y ahorros.',
        tags: ['Límites de ingresos'], who: 'Personas con menos de $60,000 al año; hogares de 2–4 con menos de $85,000.',
        has: ['Mejorar su crédito', 'Pagar deudas', 'Hacer un presupuesto y ahorrar'] } },

/* ---------------- OLDER ADULTS ---------------- */
{ org: 'age', cats: ['seniors'], flyer: 'age-pathways.pdf', free: true, spanish: true,
  phone: '512-600-9275', email: 'ResourceCenter@AGEofCentralTX.org', web: 'https://www.ageofcentraltx.org', webText: 'ageofcentraltx.org',
  en: { title: 'Help finding senior services', short: 'One-on-one help for older adults and family caregivers.',
        tags: ['Bilingual'], has: ['Resource navigation (free)', 'Caregiver support groups (free)', 'Monthly classes on dementia, fall prevention and more: 512-253-1675', 'Care planning (flat fee): 512-600-9279'] },
  es: { title: 'Ayuda para encontrar servicios para mayores', short: 'Ayuda personal para adultos mayores y sus cuidadores.',
        tags: ['Bilingüe'], has: ['Orientación sobre recursos (gratis)', 'Grupos de apoyo para cuidadores (gratis)', 'Clases mensuales sobre demencia, prevención de caídas y más: 512-253-1675', 'Planificación de cuidado (tarifa fija): 512-600-9279'] } },

{ org: 'age', cats: ['seniors', 'health'], flyer: 'age-equipment-lending.pdf', free: true, spanish: true,
  phone: '512-614-6079', email: 'Help.South@AGEofCentralTX.org', web: 'https://www.ageofcentraltx.org', webText: 'ageofcentraltx.org',
  addr: ['South: 9400 Alice Mae Ln, Austin, TX 78748 · 512-614-6079', 'Central: 3710 Cedar St, Austin, TX 78705 · 512-600-9288'],
  en: { title: 'Free medical equipment', short: 'Free walkers, wheelchairs, shower chairs and incontinence supplies.',
        tags: ['While supplies last'],
        has: ['Wheelchairs, rollators, walkers, canes, crutches', 'Shower chairs, commodes, raised toilet seats, grab bars', 'Adult incontinence products', 'Also at closets in Lockhart, Leander and RBJ Senior Housing (Austin)'] },
  es: { title: 'Equipo médico gratis', short: 'Andaderas, sillas de ruedas, sillas de baño y productos para incontinencia gratis.',
        tags: ['Hasta agotar existencias'],
        has: ['Sillas de ruedas, andaderas, bastones, muletas', 'Sillas de baño, inodoros portátiles, asientos elevados, barras de apoyo', 'Productos para incontinencia de adultos', 'También en Lockhart, Leander y RBJ Senior Housing (Austin)'] } },

{ org: 'age', cats: ['seniors'], flyer: 'age-thrive-center.pdf', spanish: true,
  phone: '512-614-6081', web: 'https://www.ageofcentraltx.org', webText: 'ageofcentraltx.org',
  addr: ['South Austin: 9400 Alice Mae Ln, Austin, TX 78748', 'Round Rock: 475 Round Rock West Dr, Suite 120 · 512-255-4865'],
  en: { title: 'Adult day care', short: 'Licensed daytime care with nurses, meals and activities.',
        tags: ['Sliding scale', 'Medicaid & VA'], when: 'Mon–Fri 7 AM – 5:30 PM',
        has: ['Nurses & medication management', 'Breakfast, lunch & snack', 'Transportation', 'Dementia care'],
        note: 'Accepts Medicaid, VA and long-term care insurance; a sliding scale may apply.' },
  es: { title: 'Cuidado de día para adultos', short: 'Cuidado de día con licencia, con enfermeras, comidas y actividades.',
        tags: ['Escala móvil', 'Medicaid y VA'], when: 'Lun–vie 7 AM – 5:30 PM',
        has: ['Enfermeras y manejo de medicamentos', 'Desayuno, almuerzo y merienda', 'Transporte', 'Cuidado para demencia'],
        note: 'Acepta Medicaid, VA y seguro de cuidado a largo plazo; puede aplicar una escala móvil.' } },

{ org: 'age', cats: ['seniors'], flyer: 'age-memory-connections.pdf', free: true,
  phone: '512-763-2148', email: 'MemoryInfo@AGEofCentralTX.org',
  en: { title: 'Memory loss support', short: 'Free program for people with early memory loss.',
        tags: ['Groups'], who: 'People with mild cognitive impairment (MCI) or early memory loss.',
        has: ['Brain health classes', 'Support groups', 'Group activities & meetups'] },
  es: { title: 'Apoyo para pérdida de memoria', short: 'Programa gratis para personas con pérdida de memoria temprana.',
        tags: ['Grupos'], who: 'Personas con deterioro cognitivo leve (MCI) o pérdida de memoria temprana.',
        has: ['Clases de salud cerebral', 'Grupos de apoyo', 'Actividades y reuniones en grupo'] } },

/* ---------------- FAMILIES & KIDS ---------------- */
{ org: 'abc', cats: ['families'], flyer: 'any-baby-can-hopes.pdf', free: true, spanish: true,
  phone: '512-200-1738', web: 'https://anybabycan.org/hopes', webText: 'anybabycan.org/hopes',
  en: { title: 'Help for kids under 5', short: 'Diapers, basic needs and a case manager for your family.',
        tags: ['Any income', 'Bilingual'], who: 'Child age 0–5 living in Travis or Williamson County. Free at any income.',
        has: ['Diapers & baby supplies', 'Connection to home visits & resources', 'English & Spanish case managers'] },
  es: { title: 'Ayuda para niños menores de 5', short: 'Pañales, necesidades básicas y un administrador de casos para su familia.',
        tags: ['Cualquier ingreso', 'Bilingüe'], who: 'Niño de 0–5 años que vive en el condado de Travis o Williamson. Gratis sin importar el ingreso.',
        has: ['Pañales y artículos para bebé', 'Conexión con visitas a domicilio y recursos', 'Administradores de casos en inglés y español'] } },

{ org: 'abc', cats: ['families', 'health'], flyer: 'any-baby-can-programs.pdf', free: true,
  phone: '512-454-3743', email: 'info@anybabycan.org', web: 'https://anybabycan.org', webText: 'anybabycan.org',
  en: { title: 'Free nurse for first-time moms', short: 'A personal nurse guides you through pregnancy and early parenting.',
        tags: ['Pregnancy'], who: 'First pregnancy, under 28 weeks, living in Travis or Williamson County.' },
  es: { title: 'Enfermera gratis para mamás primerizas', short: 'Una enfermera le acompaña durante el embarazo y los primeros años.',
        tags: ['Embarazo'], who: 'Primer embarazo, menos de 28 semanas, vive en el condado de Travis o Williamson.' } },

{ org: 'abc', cats: ['families'], flyer: 'any-baby-can-free-services.pdf', free: true, spanish: true,
  phone: '512-454-3743', email: 'info@anybabycan.org', web: 'https://anybabycan.org', webText: 'anybabycan.org',
  en: { title: 'Parenting & childbirth classes', short: 'Free classes, Parent Cafés and family events.',
        tags: ['Bilingual'], has: ['Childbirth classes (virtual)', 'Parenting & discipline classes', 'Parent Cafés with free childcare & breakfast', 'Family events'] },
  es: { title: 'Clases de crianza y de parto', short: 'Clases gratis, Cafés para Padres y eventos familiares.',
        tags: ['Bilingüe'], has: ['Clases de parto (virtuales)', 'Clases de crianza y disciplina', 'Cafés para Padres con cuidado de niños y desayuno gratis', 'Eventos familiares'] } },

{ org: 'abc', cats: ['families', 'health'], flyer: 'any-baby-can-programs.pdf', spanish: true,
  phone: '512-454-3743', email: 'info@anybabycan.org', web: 'https://anybabycan.org', webText: 'anybabycan.org',
  addr: ['6207 Sheridan Ave, Austin, TX 78723'],
  en: { title: 'Child therapy & special needs support', short: 'In-home therapy and help for kids with delays or health conditions.',
        tags: ['In-home'], has: ['Under 3 with a delay: in-home speech, physical & occupational therapy', 'Ages 0–20 with a medical or mental health condition: help with insurance, school and respite', 'Parents of kids under 5: a parent educator'] },
  es: { title: 'Terapia infantil y necesidades especiales', short: 'Terapia en casa y apoyo para niños con retrasos o condiciones de salud.',
        tags: ['En casa'], has: ['Menores de 3 con retraso: terapia de habla, física y ocupacional en casa', 'De 0–20 años con condición médica o de salud mental: ayuda con seguro, escuela y descanso para cuidadores', 'Padres de niños menores de 5: un educador para padres'] } },

/* ---------------- JOBS & COMPUTERS ---------------- */
{ org: 'sunrise', cats: ['jobs'], flyer: 'sunrise-lab-classes.png', free: true, noid: true,
  phone: '512-522-1097', addr: SUNRISE_ADDR,
  en: { title: 'Computer & job classes', short: 'Free classes. Finish 4 to qualify for a free laptop.',
        tags: ['10 spots', 'Free laptop'], when: 'Mon & Wed 1:30 PM. Sign up with staff at 9 AM the same day.',
        has: ['Mondays: computer, internet & email basics, online safety', 'Wednesdays: resumes, job search, interview skills, money basics'] },
  es: { title: 'Clases de computación y empleo', short: 'Clases gratis. Complete 4 y califique para una laptop gratis.',
        tags: ['10 cupos', 'Laptop gratis'], when: 'Lun y mié 1:30 PM. Inscríbase con el personal a las 9 AM el mismo día.',
        has: ['Lunes: computadora, internet y correo básico, seguridad en línea', 'Miércoles: currículum, búsqueda de empleo, entrevistas, finanzas básicas'] } },

{ org: 'fc', cats: ['jobs'], flyer: 'prosper-centers.pdf', free: true,
  phone: '737-717-4000', web: 'https://collegehubatx.com', webText: 'CollegeHubATX.com',
  en: { title: 'College & career help', short: 'Coaches help with financial aid, applications and careers.',
        tags: ['Income limits'], has: ['FAFSA & financial aid', 'College applications', 'Career options'] },
  es: { title: 'Ayuda para la universidad y carreras', short: 'Asesores ayudan con ayuda financiera, solicitudes y carreras.',
        tags: ['Límites de ingresos'], has: ['FAFSA y ayuda financiera', 'Solicitudes universitarias', 'Opciones de carrera'] } },

{ org: 'age', cats: ['jobs', 'seniors'], flyer: 'age-programs.pdf',
  email: 'LearningLab@AGEofCentralTX.org', web: 'https://www.ageofcentraltx.org', webText: 'ageofcentraltx.org',
  en: { title: 'Tech classes for older adults', short: 'Learn to use phones and computers to stay connected.', tags: ['Older adults'] },
  es: { title: 'Clases de tecnología para mayores', short: 'Aprenda a usar teléfonos y computadoras para mantenerse conectado.', tags: ['Adultos mayores'] } }
];
