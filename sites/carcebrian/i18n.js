/* =====================================================================
   i18n — ES / EN / IT
   Every visible string lives here. Structured blocks (services, phases,
   pricing, quiz, faq…) are rendered by app.js from these objects.
   ===================================================================== */
window.I18N = {
  /* -------------------------------------------------------------- ES */
  es: {
    meta: {
      title: "Carlota Cebrián · Método CAR | Dirección estética para tu hogar",
      description: "Dirección estética 1:1 con Carlota Cebrián. Método CAR: Estilizar, Reamueblar, Diseñar y proyectos integrales Renacer. Primera sesión gratis, proyectos desde 350 €."
    },
    a11y: { skip: "Saltar al contenido" },
    brand: { sub: "Dirección estética" },
    nav: { method: "Método", services: "Servicios", pricing: "Precios", about: "Carlota", faq: "FAQ", cta: "Primera sesión gratis" },
    hero: {
      eyebrow: "Dirección estética 1:1 · Método CAR",
      title: "Un hogar que se sienta <em>tuyo</em>.<br>Con criterio.",
      lead: "No sigo tendencias ni impongo un estilo. Te ayudo a descubrir el tuyo y a tomar cada decisión con claridad, desde el último detalle hasta la transformación integral de tu casa.",
      cta: "Reserva tu primera sesión gratis",
      cta2: "Descubre qué necesita tu casa",
      trust1: "Primera sesión gratuita, sin compromiso",
      trust2: "Proyectos desde 350 €",
      trust3: "Online, donde estés · ES · EN · IT",
      badge: "desde · 1ª sesión gratis"
    },
    services: {
      eyebrow: "Cada hogar parte de un punto diferente",
      title: "¿En qué momento está tu casa?",
      sub: "Adaptamos el alcance a lo que realmente necesita el hogar. Tú decides cómo quieres que te acompañe.",
      note: "El momento de tu hogar define lo que necesita. <strong>Tú decides cómo quieres que te acompañemos.</strong>",
      from: "desde", custom: "A medida", included: "Estilizar incluido",
      items: [
        { key: "estilizar", name: "Estilizar", tag: "Elevar un espacio y darle personalidad", desc: "Cuando la base está definida, pero a tu casa todavía le falta alma. Textiles, arte, iluminación, objetos: las capas que la hacen tuya." },
        { key: "reamueblar", name: "Reamueblar", tag: "Hacer que funcione mejor", desc: "Sientes que la casa aún no funciona y quieres cambiar parte del mobiliario. Decidimos qué conservar, qué sustituir y cómo." },
        { key: "disenar", name: "Diseñar", tag: "Crear el espacio desde cero", desc: "Partes de una vivienda o estancia sin amueblar y necesitas definir cómo debe funcionar y sentirse." },
        { key: "renacer", name: "Renacer", tag: "Transformar integralmente la vivienda", desc: "Quieres replantear la casa desde su base para adaptarla a una nueva forma de vivir, incluyendo cambios en distribución o espacios. Diseño y ejecución integral." }
      ]
    },
    method: {
      eyebrow: "El Método CAR",
      title: "Tres fases. Una sola dirección.",
      sub: "Una metodología personalizada de dirección estética 1:1 para construir tu hogar con criterio, sin perder el rumbo.",
      getTitle: "Lo que obtienes",
      next: "Siguiente fase",
      phases: [
        { num: "01", name: "Fase I · La Visión", title: "Define cómo quieres <span>vivir y sentir</span> tu hogar", lead: "Definimos la identidad del hogar.", desc: "Cómo quieres vivirlo y qué queremos que transmita, creando una visión estética clara que servirá de referencia para todo el proyecto." },
        { num: "02", name: "Fase II · El Plan", title: "Convierte esa visión en <span>decisiones concretas</span>", lead: "Espacio por espacio.", desc: "Definimos qué conservar, qué transformar, qué incorporar y cómo llevar la estética a la práctica: moodboards, paleta, plan decorativo y guía de compra." },
        { num: "03", name: "Fase III · La Dirección", title: "Lleva el proyecto a la realidad <span>sin perder el rumbo</span>", lead: "Te acompaño durante la ejecución.", desc: "Validamos decisiones, resolvemos dudas y mantenemos la coherencia estética del proyecto a medida que el hogar toma forma." }
      ],
      deliverables: ["Visión del hogar", "Moodboards", "Paleta & materiales", "Plan decorativo", "Guía de sourcing", "Acompañamiento 1:1"]
    },
    pricing: {
      eyebrow: "Método CAR · Inversión y plazos",
      title: "Precios claros desde el primer día",
      sub: "La primera sesión es gratuita. Si decides avanzar, la dirección estética parte de 350 € y el precio final se ajusta a las necesidades de tu casa. Si eliges Reamueblar o Diseñar, la fase de Estilizar va incluida.",
      fromLabel: "desde", subject: "Precio final según las necesidades de tu proyecto", popular: "El más elegido", custom: "Presupuesto a medida", customNote: "Según la necesidad específica del proyecto y tu lugar de residencia",
      inclFree: "Estilizar incluido sin coste",
      cta: "Empezar con una sesión gratis",
      ctaCustom: "Hablemos de tu proyecto",
      rule1: "La primera reunión es gratis: nos conocemos, vemos tu casa y te digo qué servicio encaja.",
      rule2: "Al contratar Reamueblar o Diseñar, Estilizar está incluido sin coste adicional.",
      rule3: "Coste mínimo si decides avanzar: 350 €. El precio final depende de las necesidades del proyecto; te lo confirmo tras la primera sesión.",
      features: {
        estilizar: ["Visión estética del hogar", "Recomendaciones por estancia", "Selección de textiles, arte y decoración"],
        reamueblar: ["Todo lo de Estilizar", "Qué conservar y qué sustituir", "Mobiliario e iluminación definidos", "Guía de compra con piezas concretas"],
        disenar: ["Todo lo de Estilizar", "Distribución y función del espacio", "Plan decorativo completo", "Acompañamiento en la ejecución"],
        renacer: ["Replanteo integral de la vivienda", "Cambios de distribución y espacios", "Diseño y coordinación de la ejecución", "De principio a fin"]
      }
    },
    quiz: {
      eyebrow: "2 minutos · Sin compromiso",
      title: "¿Qué necesita tu casa?",
      sub: "Responde a 5 preguntas y te digo qué servicio encaja. Al terminar, eliges día y hora para tu primera sesión gratis con Carlota.",
      back: "Atrás", next: "Siguiente", finish: "Ver mi recomendación", of: "de",
      error: "Elige al menos una opción para continuar.",
      steps: [
        { key: "estado", type: "radio", title: "¿En qué punto está tu vivienda?", help: "Elige la que más se parezca a tu caso.", options: [
          { v: "amueblada", l: "Amueblada, pero le falta alma", s: "La base está, quiero elevarla" },
          { v: "funciona-mal", l: "No termina de funcionar", s: "Quiero cambiar parte del mobiliario" },
          { v: "vacia", l: "Vacía o sin amueblar", s: "Necesito definir cómo debe funcionar" },
          { v: "obra", l: "Quiero replantearla desde la base", s: "Distribución, espacios, obra" }
        ]},
        { key: "estancias", type: "radio", title: "¿Cuántas estancias quieres trabajar?", help: "Cuenta salón, cocina, dormitorios, baños, entrada…", options: [
          { v: "0", l: "1–2 estancias" }, { v: "1", l: "3–5 estancias" }, { v: "2", l: "Más de 5 estancias" }
        ]},
        { key: "necesidad", type: "check", title: "¿Qué necesitas principalmente de Carlota?", help: "Puedes marcar varias.", options: [
          { v: "estilo", l: "Definir el estilo" }, { v: "identidad", l: "Identidad estética / plan por estancia" }, { v: "implementacion", l: "Ayuda durante la implementación" }
        ]},
        { key: "nivel", type: "check", title: "Dentro de las estancias, ¿qué nivel de ayuda necesitas?", help: "Puedes marcar varias.", options: [
          { v: "orientacion", l: "Orientación estética y recomendaciones generales" },
          { v: "definir", l: "Definir mobiliario, iluminación, textiles, arte y decoración" },
          { v: "distribucion", l: "Distribución" },
          { v: "piezas", l: "Selección de piezas concretas para comprar" }
        ]},
        { key: "inversion", type: "radio", title: "¿Qué inversión tienes contemplada para la redecoración?", help: "Incluye mobiliario y compras. La dirección estética de Carlota parte de 350 €.", options: [
          { v: "<1000", l: "Menos de 1.000 €" }, { v: "1000-2500", l: "1.000 – 2.500 €" }, { v: "2500-5000", l: "2.500 – 5.000 €" }, { v: ">5000", l: "Más de 5.000 €" }
        ]}
      ],
      resultEyebrow: "Tu recomendación",
      resultTitle: "Esto es lo que encaja con tu casa",
      estimate: "Inversión", fromLabel: "desde", subject: "Precio final según las necesidades de tu proyecto",
      customPrice: "A medida", customNote: "Según la necesidad específica y tu lugar de residencia",
      inclNote: "Al ser un proyecto de {service}, la fase de Estilizar va incluida sin coste.",
      budgetNote: "Ajustamos el alcance a tu presupuesto en la primera sesión, que es gratis.",
      renacerNote: "Renacer es un proyecto integral a medida: depende de la necesidad específica y de tu lugar de residencia. En la primera sesión definimos alcance y presupuesto.",
      bookCta: "Elegir día y hora con Carlota",
      restart: "Volver a empezar",
      prefillNote: "Tus respuestas se envían con la reserva para que Carlota llegue preparada.",
      nextStep: "Siguiente paso: agenda tu primera sesión gratis"
    },
    booking: {
      eyebrow: "Primera sesión gratuita",
      title: "Reserva tu primera sesión con Carlota",
      sub: "30 minutos para conocernos, entender tu casa y decidir juntas el camino. Sin coste ni compromiso. Si decides avanzar, el proyecto parte de 350 €.",
      placeholder: "Elige el día y la hora que mejor te venga.",
      open: "Ver disponibilidad",
      tiny: "Se abrirá el calendario de Calendly aquí mismo."
    },
    about: {
      eyebrow: "Quién está detrás",
      title: "Carlota Cebrián",
      quote: "“Creo en hogares que reflejen la <strong>personalidad</strong> de quienes los habitan, que envejezcan bien con el paso del <strong>tiempo</strong> y que hagan que quieras quedarte un rato más cada vez que entras por la puerta. Por eso no sigo tendencias ni busco imponer un estilo: el objetivo del método es ayudarte a descubrir el tuyo, aportarte <strong>claridad y criterio</strong> en cada decisión y acompañarte para construir un hogar <strong>coherente, atemporal y auténticamente tuyo</strong>.”",
      bio: "Diseñadora de interiores y creadora de contenido. Comparte a diario cómo construir casas con alma y acompaña 1:1 a quienes quieren hacerlo con criterio a través del Método CAR.",
      follow: "Sígueme en"
    },
    universe: {
      eyebrow: "El Universo CAR",
      title: "Tres formas de acompañarte",
      sub: "Un ecosistema de asesorías y comunidad para diseñar tu hogar con coherencia y criterio.",
      soon: "Próximamente", more: "Saber más", book: "Reservar sesión",
      items: [
        { name: "Mentoría CAR", sub: "Aprende en comunidad", desc: "Te acompaño en grupo para desarrollar criterio y aplicar lo aprendido a tu propio hogar." },
        { name: "Método CAR", sub: "Dirección estética 1:1", desc: "Te asesoro de forma personalizada para definir la visión de tu hogar y tomar las decisiones adecuadas durante el camino." },
        { name: "Proyectos integrales", sub: "Renacer · Diseño y ejecución", desc: "Diseñamos y coordinamos el proyecto completo para hacer realidad tu hogar de principio a fin." }
      ]
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suelen preguntarme",
      items: [
        { q: "¿La primera sesión es realmente gratis?", a: "Sí. Son 30 minutos para conocernos, ver tu casa y decidir qué servicio encaja. Sin coste ni compromiso. Solo pagas si decides avanzar con un proyecto, que parte de 350 €." },
        { q: "¿Qué diferencia hay entre Estilizar, Reamueblar y Diseñar?", a: "Estilizar trabaja sobre una base ya amueblada (textiles, arte, iluminación, decoración). Reamueblar redefine parte del mobiliario para que la casa funcione mejor. Diseñar parte de un espacio vacío y define distribución, función y estética. Renacer es la transformación integral, incluida la ejecución." },
        { q: "Si contrato Reamueblar o Diseñar, ¿pago Estilizar aparte?", a: "No. La fase de Estilizar está incluida sin coste adicional en Reamueblar y en Diseñar." },
        { q: "¿Trabajas online o en persona?", a: "El Método CAR se desarrolla online, con sesiones 1:1 por videollamada, y funciona igual estés en Madrid, Milán o Londres. Para proyectos integrales (Renacer) lo valoramos caso por caso." },
        { q: "¿Los precios incluyen el mobiliario?", a: "No. Los precios corresponden a la dirección estética (visión, plan, guía de compra y acompañamiento). El mobiliario y las compras son aparte y los adaptamos a tu presupuesto." }
      ]
    },
    final: { title: "Nos encantaría ayudarte a crear tu hogar", sub: "Empieza con una sesión gratuita. Sin compromiso, con criterio.", cta: "Reservar mi primera sesión" },
    footer: { tag: "Dirección estética · Método CAR", rights: "Todos los derechos reservados.", privacy: "Privacidad", legal: "Aviso legal" }
  },

  /* -------------------------------------------------------------- EN */
  en: {
    meta: {
      title: "Carlota Cebrián · CAR Method | Aesthetic direction for your home",
      description: "1:1 aesthetic direction with Carlota Cebrián. The CAR Method: Style, Refurnish, Design, and Renacer full-scope projects. First session free, projects from €350."
    },
    a11y: { skip: "Skip to content" },
    brand: { sub: "Aesthetic direction" },
    nav: { method: "Method", services: "Services", pricing: "Pricing", about: "Carlota", faq: "FAQ", cta: "Free first session" },
    hero: {
      eyebrow: "1:1 aesthetic direction · The CAR Method",
      title: "A home that feels <em>yours</em>.<br>With intention.",
      lead: "I don't follow trends or impose a style. I help you discover your own and make every decision with clarity, from the final detail to a full transformation of your home.",
      cta: "Book your free first session",
      cta2: "Find out what your home needs",
      trust1: "Free first session, no commitment",
      trust2: "Projects from €350",
      trust3: "Online, wherever you are · ES · EN · IT",
      badge: "from · 1st session free"
    },
    services: {
      eyebrow: "Every home starts from a different place",
      title: "Where is your home right now?",
      sub: "We adapt the scope to what your home really needs. You decide how you want me to accompany you.",
      note: "Your home's moment defines what it needs. <strong>You decide how we walk it together.</strong>",
      from: "from", custom: "Bespoke", included: "Style included",
      items: [
        { key: "estilizar", name: "Style", tag: "Elevate a space and give it personality", desc: "When the foundation is set but your home still lacks soul. Textiles, art, lighting, objects: the layers that make it yours." },
        { key: "reamueblar", name: "Refurnish", tag: "Make it work better", desc: "Your home doesn't quite work yet and you want to replace part of the furniture. We decide what to keep, what to change, and how." },
        { key: "disenar", name: "Design", tag: "Create the space from scratch", desc: "You start from an unfurnished home or room and need to define how it should function and feel." },
        { key: "renacer", name: "Renacer", tag: "Transform the whole home", desc: "You want to rethink the house from its foundation to fit a new way of living, including layout or structural changes. Full design and execution." }
      ]
    },
    method: {
      eyebrow: "The CAR Method",
      title: "Three phases. One direction.",
      sub: "A personalised 1:1 aesthetic-direction methodology to build your home with intention, without losing your way.",
      getTitle: "What you get",
      next: "Next phase",
      phases: [
        { num: "01", name: "Phase I · The Vision", title: "Define how you want to <span>live and feel</span> your home", lead: "We define the identity of the home.", desc: "How you want to live in it and what it should convey, creating a clear aesthetic vision that guides the whole project." },
        { num: "02", name: "Phase II · The Plan", title: "Turn that vision into <span>concrete decisions</span>", lead: "Room by room.", desc: "We define what to keep, what to transform, what to add and how to bring the aesthetic to life: moodboards, palette, decorative plan and shopping guide." },
        { num: "03", name: "Phase III · The Direction", title: "Bring the project to life <span>without losing course</span>", lead: "I accompany you during execution.", desc: "We validate decisions, solve doubts and keep the project aesthetically coherent as your home takes shape." }
      ],
      deliverables: ["Home vision", "Moodboards", "Palette & materials", "Decorative plan", "Sourcing guide", "1:1 support"]
    },
    pricing: {
      eyebrow: "CAR Method · Investment & timelines",
      title: "Clear pricing from day one",
      sub: "The first session is free. If you decide to go ahead, aesthetic direction starts at €350 and the final price is tailored to what your home needs. Choose Refurnish or Design and the Style phase is included.",
      fromLabel: "from", subject: "Final price based on your project's needs", popular: "Most chosen", custom: "Bespoke quote", customNote: "Depends on the specific needs of the project and where you live",
      inclFree: "Style included at no cost",
      cta: "Start with a free session",
      ctaCustom: "Let's talk about your project",
      rule1: "The first meeting is free: we meet, look at your home and I tell you which service fits.",
      rule2: "When you book Refurnish or Design, Style is included at no extra cost.",
      rule3: "Minimum cost if you go ahead: €350. The final price depends on the project's needs; I confirm it after the first session.",
      features: {
        estilizar: ["Aesthetic vision of the home", "Recommendations per room", "Textiles, art and décor selection"],
        reamueblar: ["Everything in Style", "What to keep and what to replace", "Furniture and lighting defined", "Shopping guide with specific pieces"],
        disenar: ["Everything in Style", "Layout and function of the space", "Complete decorative plan", "Support during execution"],
        renacer: ["Full rethink of the home", "Layout and spatial changes", "Design and coordination of works", "From start to finish"]
      }
    },
    quiz: {
      eyebrow: "2 minutes · No commitment",
      title: "What does your home need?",
      sub: "Answer 5 questions and I'll tell you which service fits. When you finish, pick a day and time for your free first session with Carlota.",
      back: "Back", next: "Next", finish: "See my recommendation", of: "of",
      error: "Choose at least one option to continue.",
      steps: [
        { key: "estado", type: "radio", title: "Where is your home right now?", help: "Pick the one closest to your case.", options: [
          { v: "amueblada", l: "Furnished, but lacking soul", s: "The base is there, I want to elevate it" },
          { v: "funciona-mal", l: "It doesn't quite work", s: "I want to replace part of the furniture" },
          { v: "vacia", l: "Empty or unfurnished", s: "I need to define how it should work" },
          { v: "obra", l: "I want to rethink it from scratch", s: "Layout, spaces, building works" }
        ]},
        { key: "estancias", type: "radio", title: "How many rooms do you want to work on?", help: "Count living room, kitchen, bedrooms, bathrooms, entrance…", options: [
          { v: "0", l: "1–2 rooms" }, { v: "1", l: "3–5 rooms" }, { v: "2", l: "More than 5 rooms" }
        ]},
        { key: "necesidad", type: "check", title: "What do you mainly need from Carlota?", help: "You can tick several.", options: [
          { v: "estilo", l: "Define the style" }, { v: "identidad", l: "Aesthetic identity / plan per room" }, { v: "implementacion", l: "Help during implementation" }
        ]},
        { key: "nivel", type: "check", title: "Within each room, what level of help do you need?", help: "You can tick several.", options: [
          { v: "orientacion", l: "Aesthetic guidance and general recommendations" },
          { v: "definir", l: "Define furniture, lighting, textiles, art and décor" },
          { v: "distribucion", l: "Layout" },
          { v: "piezas", l: "Selection of specific pieces to buy" }
        ]},
        { key: "inversion", type: "radio", title: "What budget do you have in mind for the redecoration?", help: "Including furniture and purchases. Carlota's aesthetic direction starts at €350.", options: [
          { v: "<1000", l: "Under €1,000" }, { v: "1000-2500", l: "€1,000 – 2,500" }, { v: "2500-5000", l: "€2,500 – 5,000" }, { v: ">5000", l: "Over €5,000" }
        ]}
      ],
      resultEyebrow: "Your recommendation",
      resultTitle: "This is what fits your home",
      estimate: "Investment", fromLabel: "from", subject: "Final price based on your project's needs",
      customPrice: "Bespoke", customNote: "Depends on the specific needs and where you live",
      inclNote: "As a {service} project, the Style phase is included at no cost.",
      budgetNote: "We adjust the scope to your budget in the first session, which is free.",
      renacerNote: "Renacer is a bespoke full-scope project: it depends on the specific needs and on where you live. We define scope and budget in the first session.",
      bookCta: "Pick a day and time with Carlota",
      restart: "Start over",
      prefillNote: "Your answers are sent with the booking so Carlota arrives prepared.",
      nextStep: "Next step: book your free first session"
    },
    booking: {
      eyebrow: "Free first session",
      title: "Book your first session with Carlota",
      sub: "30 minutes to meet, understand your home and decide the path together. No cost, no commitment. If you go ahead, projects start at €350.",
      placeholder: "Pick the day and time that suits you best.",
      open: "See availability",
      tiny: "The Calendly calendar opens right here."
    },
    about: {
      eyebrow: "Who's behind it",
      title: "Carlota Cebrián",
      quote: "“I believe in homes that reflect the <strong>personality</strong> of the people who live in them, that age well over <strong>time</strong>, and that make you want to stay a little longer every time you walk through the door. That's why I don't follow trends or impose a style: the goal of the method is to help you discover yours, give you <strong>clarity and criteria</strong> in every decision, and accompany you in building a home that is <strong>coherent, timeless and authentically yours</strong>.”",
      bio: "Interior designer and content creator. She shares daily how to build homes with soul and works 1:1 with those who want to do it with intention through the CAR Method.",
      follow: "Follow me on"
    },
    universe: {
      eyebrow: "The CAR Universe",
      title: "Three ways to accompany you",
      sub: "An ecosystem of advisory and community to design your home with coherence and intention.",
      soon: "Coming soon", more: "Learn more", book: "Book a session",
      items: [
        { name: "CAR Mentoring", sub: "Learn in community", desc: "Group guidance to develop your eye and apply what you learn to your own home." },
        { name: "CAR Method", sub: "1:1 aesthetic direction", desc: "Personalised advice to define your home's vision and make the right decisions along the way." },
        { name: "Full-scope projects", sub: "Renacer · Design & execution", desc: "We design and coordinate the complete project to make your home a reality from start to finish." }
      ]
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What people usually ask me",
      items: [
        { q: "Is the first session really free?", a: "Yes. It's 30 minutes to meet, see your home and decide which service fits. No cost, no commitment. You only pay if you decide to go ahead with a project, starting at €350." },
        { q: "What's the difference between Style, Refurnish and Design?", a: "Style works on an already furnished base (textiles, art, lighting, décor). Refurnish redefines part of the furniture so the home works better. Design starts from an empty space and defines layout, function and aesthetics. Renacer is the full transformation, execution included." },
        { q: "If I book Refurnish or Design, do I pay for Style separately?", a: "No. The Style phase is included at no extra cost in Refurnish and Design." },
        { q: "Do you work online or in person?", a: "The CAR Method runs online, with 1:1 video sessions, and works the same whether you're in Madrid, Milan or London. For full-scope projects (Renacer) we assess case by case." },
        { q: "Do prices include furniture?", a: "No. Prices cover the aesthetic direction (vision, plan, shopping guide and support). Furniture and purchases are separate and we adapt them to your budget." }
      ]
    },
    final: { title: "We'd love to help you create your home", sub: "Start with a free session. No commitment, with intention.", cta: "Book my first session" },
    footer: { tag: "Aesthetic direction · CAR Method", rights: "All rights reserved.", privacy: "Privacy", legal: "Legal notice" }
  },

  /* -------------------------------------------------------------- IT */
  it: {
    meta: {
      title: "Carlota Cebrián · Metodo CAR | Direzione estetica per la tua casa",
      description: "Direzione estetica 1:1 con Carlota Cebrián. Metodo CAR: Stilizzare, Riarredare, Progettare e progetti integrali Renacer. Prima sessione gratuita, progetti da 350 €."
    },
    a11y: { skip: "Vai al contenuto" },
    brand: { sub: "Direzione estetica" },
    nav: { method: "Metodo", services: "Servizi", pricing: "Prezzi", about: "Carlota", faq: "FAQ", cta: "Prima sessione gratis" },
    hero: {
      eyebrow: "Direzione estetica 1:1 · Metodo CAR",
      title: "Una casa che senti <em>tua</em>.<br>Con criterio.",
      lead: "Non seguo le tendenze né impongo uno stile. Ti aiuto a scoprire il tuo e a prendere ogni decisione con chiarezza, dall'ultimo dettaglio alla trasformazione integrale della tua casa.",
      cta: "Prenota la tua prima sessione gratuita",
      cta2: "Scopri di cosa ha bisogno la tua casa",
      trust1: "Prima sessione gratuita, senza impegno",
      trust2: "Progetti da 350 €",
      trust3: "Online, ovunque tu sia · ES · EN · IT",
      badge: "da · 1ª sessione gratis"
    },
    services: {
      eyebrow: "Ogni casa parte da un punto diverso",
      title: "A che punto è la tua casa?",
      sub: "Adattiamo l'ambito a ciò di cui la casa ha davvero bisogno. Decidi tu come vuoi che ti accompagni.",
      note: "Il momento della tua casa definisce ciò di cui ha bisogno. <strong>Tu decidi come vuoi che ti accompagniamo.</strong>",
      from: "da", custom: "Su misura", included: "Stilizzare incluso",
      items: [
        { key: "estilizar", name: "Stilizzare", tag: "Elevare uno spazio e dargli personalità", desc: "Quando la base è definita ma alla tua casa manca ancora l'anima. Tessili, arte, illuminazione, oggetti: gli strati che la rendono tua." },
        { key: "reamueblar", name: "Riarredare", tag: "Farla funzionare meglio", desc: "Senti che la casa non funziona ancora e vuoi cambiare parte dell'arredo. Decidiamo cosa conservare, cosa sostituire e come." },
        { key: "disenar", name: "Progettare", tag: "Creare lo spazio da zero", desc: "Parti da una casa o una stanza non arredata e devi definire come deve funzionare e cosa deve trasmettere." },
        { key: "renacer", name: "Renacer", tag: "Trasformare integralmente la casa", desc: "Vuoi ripensare la casa dalle fondamenta per adattarla a un nuovo modo di vivere, inclusi cambi di distribuzione o spazi. Progettazione ed esecuzione integrale." }
      ]
    },
    method: {
      eyebrow: "Il Metodo CAR",
      title: "Tre fasi. Una sola direzione.",
      sub: "Una metodologia personalizzata di direzione estetica 1:1 per costruire la tua casa con criterio, senza perdere la rotta.",
      getTitle: "Cosa ottieni",
      next: "Fase successiva",
      phases: [
        { num: "01", name: "Fase I · La Visione", title: "Definisci come vuoi <span>vivere e sentire</span> la tua casa", lead: "Definiamo l'identità della casa.", desc: "Come vuoi viverla e cosa vogliamo che trasmetta, creando una visione estetica chiara che guiderà tutto il progetto." },
        { num: "02", name: "Fase II · Il Piano", title: "Trasforma quella visione in <span>decisioni concrete</span>", lead: "Stanza per stanza.", desc: "Definiamo cosa conservare, cosa trasformare, cosa aggiungere e come portare l'estetica nella pratica: moodboard, palette, piano decorativo e guida agli acquisti." },
        { num: "03", name: "Fase III · La Direzione", title: "Porta il progetto alla realtà <span>senza perdere la rotta</span>", lead: "Ti accompagno durante l'esecuzione.", desc: "Validiamo le decisioni, risolviamo i dubbi e manteniamo la coerenza estetica del progetto mentre la casa prende forma." }
      ],
      deliverables: ["Visione della casa", "Moodboard", "Palette & materiali", "Piano decorativo", "Guida al sourcing", "Accompagnamento 1:1"]
    },
    pricing: {
      eyebrow: "Metodo CAR · Investimento e tempi",
      title: "Prezzi chiari dal primo giorno",
      sub: "La prima sessione è gratuita. Se decidi di procedere, la direzione estetica parte da 350 € e il prezzo finale si adatta alle esigenze della tua casa. Se scegli Riarredare o Progettare, la fase Stilizzare è inclusa.",
      fromLabel: "da", subject: "Prezzo finale in base alle esigenze del tuo progetto", popular: "Il più scelto", custom: "Preventivo su misura", customNote: "Dipende dalle esigenze specifiche del progetto e dal tuo luogo di residenza",
      inclFree: "Stilizzare incluso senza costi",
      cta: "Inizia con una sessione gratuita",
      ctaCustom: "Parliamo del tuo progetto",
      rule1: "Il primo incontro è gratuito: ci conosciamo, guardiamo la tua casa e ti dico quale servizio è adatto.",
      rule2: "Scegliendo Riarredare o Progettare, Stilizzare è incluso senza costi aggiuntivi.",
      rule3: "Costo minimo se decidi di procedere: 350 €. Il prezzo finale dipende dalle esigenze del progetto; te lo confermo dopo la prima sessione.",
      features: {
        estilizar: ["Visione estetica della casa", "Raccomandazioni per stanza", "Selezione di tessili, arte e decorazione"],
        reamueblar: ["Tutto ciò che include Stilizzare", "Cosa conservare e cosa sostituire", "Arredo e illuminazione definiti", "Guida agli acquisti con pezzi concreti"],
        disenar: ["Tutto ciò che include Stilizzare", "Distribuzione e funzione dello spazio", "Piano decorativo completo", "Accompagnamento nell'esecuzione"],
        renacer: ["Ripensamento integrale della casa", "Cambi di distribuzione e spazi", "Progettazione e coordinamento dei lavori", "Dall'inizio alla fine"]
      }
    },
    quiz: {
      eyebrow: "2 minuti · Senza impegno",
      title: "Di cosa ha bisogno la tua casa?",
      sub: "Rispondi a 5 domande e ti dico quale servizio è adatto. Alla fine scegli giorno e ora per la tua prima sessione gratuita con Carlota.",
      back: "Indietro", next: "Avanti", finish: "Vedi la mia raccomandazione", of: "di",
      error: "Scegli almeno un'opzione per continuare.",
      steps: [
        { key: "estado", type: "radio", title: "A che punto è la tua casa?", help: "Scegli quella più vicina al tuo caso.", options: [
          { v: "amueblada", l: "Arredata, ma le manca l'anima", s: "La base c'è, voglio elevarla" },
          { v: "funciona-mal", l: "Non funziona del tutto", s: "Voglio cambiare parte dell'arredo" },
          { v: "vacia", l: "Vuota o non arredata", s: "Devo definire come deve funzionare" },
          { v: "obra", l: "Voglio ripensarla dalle fondamenta", s: "Distribuzione, spazi, lavori" }
        ]},
        { key: "estancias", type: "radio", title: "Su quante stanze vuoi lavorare?", help: "Conta soggiorno, cucina, camere, bagni, ingresso…", options: [
          { v: "0", l: "1–2 stanze" }, { v: "1", l: "3–5 stanze" }, { v: "2", l: "Più di 5 stanze" }
        ]},
        { key: "necesidad", type: "check", title: "Di cosa hai principalmente bisogno da Carlota?", help: "Puoi selezionarne più di una.", options: [
          { v: "estilo", l: "Definire lo stile" }, { v: "identidad", l: "Identità estetica / piano per stanza" }, { v: "implementacion", l: "Aiuto durante l'implementazione" }
        ]},
        { key: "nivel", type: "check", title: "Nelle stanze, che livello di aiuto ti serve?", help: "Puoi selezionarne più di una.", options: [
          { v: "orientacion", l: "Orientamento estetico e raccomandazioni generali" },
          { v: "definir", l: "Definire arredo, illuminazione, tessili, arte e decorazione" },
          { v: "distribucion", l: "Distribuzione" },
          { v: "piezas", l: "Selezione di pezzi concreti da acquistare" }
        ]},
        { key: "inversion", type: "radio", title: "Che investimento hai previsto per la ridecorazione?", help: "Inclusi arredo e acquisti. La direzione estetica di Carlota parte da 350 €.", options: [
          { v: "<1000", l: "Meno di 1.000 €" }, { v: "1000-2500", l: "1.000 – 2.500 €" }, { v: "2500-5000", l: "2.500 – 5.000 €" }, { v: ">5000", l: "Più di 5.000 €" }
        ]}
      ],
      resultEyebrow: "La tua raccomandazione",
      resultTitle: "Ecco cosa si adatta alla tua casa",
      estimate: "Investimento", fromLabel: "da", subject: "Prezzo finale in base alle esigenze del tuo progetto",
      customPrice: "Su misura", customNote: "Dipende dalle esigenze specifiche e dal tuo luogo di residenza",
      inclNote: "Trattandosi di un progetto {service}, la fase Stilizzare è inclusa senza costi.",
      budgetNote: "Adattiamo l'ambito al tuo budget nella prima sessione, che è gratuita.",
      renacerNote: "Renacer è un progetto integrale su misura: dipende dalle esigenze specifiche e dal tuo luogo di residenza. Nella prima sessione definiamo ambito e budget.",
      bookCta: "Scegli giorno e ora con Carlota",
      restart: "Ricomincia",
      prefillNote: "Le tue risposte vengono inviate con la prenotazione così Carlota arriva preparata.",
      nextStep: "Prossimo passo: prenota la tua prima sessione gratuita"
    },
    booking: {
      eyebrow: "Prima sessione gratuita",
      title: "Prenota la tua prima sessione con Carlota",
      sub: "30 minuti per conoscerci, capire la tua casa e decidere insieme il percorso. Senza costi né impegno. Se decidi di procedere, il progetto parte da 350 €.",
      placeholder: "Scegli il giorno e l'ora che preferisci.",
      open: "Vedi disponibilità",
      tiny: "Il calendario Calendly si aprirà proprio qui."
    },
    about: {
      eyebrow: "Chi c'è dietro",
      title: "Carlota Cebrián",
      quote: "“Credo in case che riflettano la <strong>personalità</strong> di chi le abita, che invecchino bene con il passare del <strong>tempo</strong> e che ti facciano venire voglia di restare un po' di più ogni volta che varchi la porta. Per questo non seguo le tendenze né cerco di imporre uno stile: l'obiettivo del metodo è aiutarti a scoprire il tuo, darti <strong>chiarezza e criterio</strong> in ogni decisione e accompagnarti nel costruire una casa <strong>coerente, senza tempo e autenticamente tua</strong>.”",
      bio: "Interior designer e content creator. Condivide ogni giorno come costruire case con anima e accompagna 1:1 chi vuole farlo con criterio attraverso il Metodo CAR.",
      follow: "Seguimi su"
    },
    universe: {
      eyebrow: "L'Universo CAR",
      title: "Tre modi per accompagnarti",
      sub: "Un ecosistema di consulenze e community per progettare la tua casa con coerenza e criterio.",
      soon: "Prossimamente", more: "Scopri di più", book: "Prenota una sessione",
      items: [
        { name: "Mentoring CAR", sub: "Impara in community", desc: "Ti accompagno in gruppo per sviluppare criterio e applicare ciò che impari alla tua casa." },
        { name: "Metodo CAR", sub: "Direzione estetica 1:1", desc: "Ti consiglio in modo personalizzato per definire la visione della tua casa e prendere le decisioni giuste lungo il percorso." },
        { name: "Progetti integrali", sub: "Renacer · Progettazione ed esecuzione", desc: "Progettiamo e coordiniamo il progetto completo per realizzare la tua casa dall'inizio alla fine." }
      ]
    },
    faq: {
      eyebrow: "Domande frequenti",
      title: "Quello che mi chiedono di solito",
      items: [
        { q: "La prima sessione è davvero gratuita?", a: "Sì. Sono 30 minuti per conoscerci, vedere la tua casa e decidere quale servizio è adatto. Senza costi né impegno. Paghi solo se decidi di procedere con un progetto, a partire da 350 €." },
        { q: "Che differenza c'è tra Stilizzare, Riarredare e Progettare?", a: "Stilizzare lavora su una base già arredata (tessili, arte, illuminazione, decorazione). Riarredare ridefinisce parte dell'arredo perché la casa funzioni meglio. Progettare parte da uno spazio vuoto e definisce distribuzione, funzione ed estetica. Renacer è la trasformazione integrale, esecuzione inclusa." },
        { q: "Se scelgo Riarredare o Progettare, pago Stilizzare a parte?", a: "No. La fase Stilizzare è inclusa senza costi aggiuntivi in Riarredare e Progettare." },
        { q: "Lavori online o di persona?", a: "Il Metodo CAR si svolge online, con sessioni 1:1 in videochiamata, e funziona allo stesso modo che tu sia a Madrid, Milano o Londra. Per i progetti integrali (Renacer) valutiamo caso per caso." },
        { q: "I prezzi includono l'arredo?", a: "No. I prezzi si riferiscono alla direzione estetica (visione, piano, guida agli acquisti e accompagnamento). Arredo e acquisti sono a parte e li adattiamo al tuo budget." }
      ]
    },
    final: { title: "Ci piacerebbe aiutarti a creare la tua casa", sub: "Inizia con una sessione gratuita. Senza impegno, con criterio.", cta: "Prenota la mia prima sessione" },
    footer: { tag: "Direzione estetica · Metodo CAR", rights: "Tutti i diritti riservati.", privacy: "Privacy", legal: "Note legali" }
  }
};
