import { ServiceOffering, ProblemSolution, ProcessStep, Testimonial, GalleryItem, FaqItem } from '../types';

// Images imported or CDN references
import heroImgPath from '../assets/images/benin_temple_hero_1785340209308.jpg';
import portraitImgPath from '../assets/images/medium_manu_portrait_1785340225300.jpg';
import artifactsImgPath from '../assets/images/benin_tradition_artifacts_1785340239400.jpg';

export const HERO_CONTENT = {
  badge: "Praticien Traditionnel Reconnu • Plus de 500 personnes accompagnées",
  h1Title: "Medium Manu — Guide Spirituel du Bénin",
  subtitle: "Retour affectif, déblocage spirituel, protection et voyance Fá. Une sagesse ancestrale millénaire au service de votre sérénité — où que vous soyez dans le monde.",
  trustArguments: [
    { title: "100% Confidentiel", desc: "Vos échanges restent privés. Aucune fuite, aucun jugement." },
    { title: "Authenticité Béninoise", desc: "Rituels pratiqués au sanctuaire ancestral de Ouidah." },
    { title: "Accompagnement International", desc: "France, Belgique, Suisse, Canada, USA, Afrique, Antilles." },
    { title: "Sans Fausses Promesses", desc: "Une démarche honnête, transparente et éthique." }
  ],
  ctaPrimary: "Écrire sur WhatsApp maintenant",
  ctaSecondary: "Réserver une consultation",
  heroImage: heroImgPath,
  imageAlt: "Autel ancestral traditionnel au Bénin illuminé par une lumière dorée"
};

export const WHY_CHOOSE_MANU = [
  {
    icon: "Crown",
    title: "Héritage Ancestral Authentique",
    description: "Issu d'une lignée de praticiens du Bénin, Medium Manu a reçu l'initiation sacrée et les secrets des plantes, prières et rituels transmis par les dignitaires du Vodun."
  },
  {
    icon: "ShieldCheck",
    title: "Confidentialité Absolue",
    description: "Vos données, photos et histoires de vie sont traités dans une discrétion totale. Rien n'est jamais divulgué ni partagé à un tiers."
  },
  {
    icon: "Sparkles",
    title: "Accompagnement Sur-Mesure",
    description: "Chaque personne est unique. Une consultation préalable identifie la nature exacte de votre situation avant toute action. Aucune solution générique."
  },
  {
    icon: "HeartHandshake",
    title: "Écoute Sans Jugement",
    description: "Vous trouverez ici une écoute attentive et bienveillante. Le travail est accompli avec sincérité, humilité et profond respect de votre dignité."
  },
  {
    icon: "Globe2",
    title: "Reconnu à l'International",
    description: "France, Belgique, Suisse, Canada, USA, Antilles, Afrique — plus de 500 personnes accompagnées à distance avec un suivi fluide et structuré."
  },
  {
    icon: "ScrollText",
    title: "Éthique & Transparence",
    description: "Pas de promesses irréalistes ni de sensationnalisme. Une démarche mesurée, guidée par la recherche d'un apaisement durable et d'une vraie harmonie."
  }
];

export const PROBLEMS_SOLUTIONS: ProblemSolution[] = [
  {
    id: "prob-1",
    category: "Vie Affective & Relations",
    problemTitle: "Rupture dououreuse, séparation ou froid inexplicable dans votre couple ?",
    problemDescription: "Vous ressentez un éloignement soudain, une perte d'harmonie ou une interférence extérieure qui brise l'entente de votre foyer.",
    solutionTitle: "Rituel de Réconciliation & Harmonisation Sentimentale",
    solutionDescription: "Analyse des énergies du couple, purification des blocages émotionnels et ravivement des liens d'affection sincère par les plantes et prières traditionnelles.",
    iconName: "Heart"
  },
  {
    id: "prob-2",
    category: "Blocages Spirituels & Lourdeurs",
    problemTitle: "Sensation d'échec répété, poisse constante ou fatigue inexpliquée ?",
    problemDescription: "Malgré vos efforts acharnés, vos projets tombent à l'eau systématiquement, comme si une main invisible fermait toutes les portes.",
    solutionTitle: "Déblocage Majeur & Dégagement des Onde Négatives",
    solutionDescription: "Purger les énergies stagnantes, rompre les nœuds karmiques ou malveillances, et restaurer la fluidité naturelle dans tous vos projets de vie.",
    iconName: "Zap"
  },
  {
    id: "prob-3",
    category: "Finances & Activité Professionnelle",
    problemTitle: "Affaires au ralenti, dettes oppressantes ou carrière bloquée ?",
    problemDescription: "Votre commerce stagne, vos opportunités d'avancement professionnel sont freinées et vos finances s'évaporent sans explication.",
    solutionTitle: "Ouverture des Chemins de Prospérité & Attirance",
    solutionDescription: "Bains de purification d'affaires, harmonisation des vibrations financières et rituels d'attraction d'opportunités et de clients pour votre entreprise.",
    iconName: "TrendingUp"
  },
  {
    id: "prob-4",
    category: "Protection & Sécurité Spirituelle",
    problemTitle: "Crainte de jalousies, mauvais œil ou attaques énergétiques ?",
    problemDescription: "Vous vous sentez vulnérable, épié(e) ou exposé(e) à des personnes toxiques ou des influences environnementales pesantes.",
    solutionTitle: "Bouclier de Protection Traditionnel & Consecration",
    solutionDescription: "Erection d'une protection spirituelle solide autour de votre personne, de vos enfants et de votre domicile grâce aux talismans et bénédictions béninoises.",
    iconName: "Shield"
  },
  {
    id: "prob-5",
    category: "Doutes & Quête d'Orientation",
    problemTitle: "Incertitude face à une décision majeure de votre existence ?",
    problemDescription: "Vous hésitez entre plusieurs chemins (professionnel, déménagement, mariage) et avez besoin de clarté spirituelle authentique.",
    solutionTitle: "Consultation Privée de Voyance Traditionnelle (Fa / Fá)",
    solutionDescription: "Analyse divinatoire profonde pour révéler la racine cachée de vos difficultés et connaître la trajectoire la plus favorable pour votre avenir.",
    iconName: "Eye"
  }
];

export const OFFERINGS: ServiceOffering[] = [
  {
    id: "retour-affectif",
    title: "Retour Affectif & Harmonisation du Couple",
    iconName: "HeartHandshake",
    badge: "Accompagnement Phare",
    shortDescription: "Consolidation des liens sentimentaux, apaisement des tensions maritales et rapprochement sincère des âmes mâtiné de respect.",
    fullDescription: "Cet accompagnement vise à assainir l'atmosphère relationnelle, dissiper les malentendus toxiques et réveiller l'attachement affectif légitime. Il s'appuie sur des rituels traditionnels d'union d'énergies, pratiqués dans le strict respect du libre arbitre et de l'harmonie familiale.",
    benefits: [
      "Apaisement immédiat des conflits et colères réciproques",
      "Purification des interférences négatives ou extérieures",
      "Restauration de la communication amoureuse et de la complicité"
    ],
    recommendedFor: "Personnes souffrant de rupture injuste, d'éloignement soudain ou de tensions conjugales sévères.",
    presetMessage: "Bonjour Medium Manu, je souhaite échanger en toute confidentialité concernant un accompagnement pour le Retour Affectif / Harmonisation de couple."
  },
  {
    id: "deblocage-spirituel",
    title: "Déblocage Spirituel & Ouverture des Voies",
    iconName: "KeyRound",
    badge: "Fortement Demandé",
    shortDescription: "Libération des chaînes invisibles, dissolution de la poisse et réouverture fluide de toutes vos opportunités de vie.",
    fullDescription: "Un nettoyage énergétique en profondeur conçu pour enlever les blocages accumulés, les nœuds générationnels et les lourdeurs karmiques. Il redonne de l'élan, de la clarté d'esprit et réouvre les voies du succès.",
    benefits: [
      "Dissolution des blocages persistants dans vos démarches",
      "Retour de la chance, de la clarté et de l'énergie vitale",
      "Sensation de légèreté retrouvée dès les premiers jours"
    ],
    recommendedFor: "Si vous sentez que tout bloque dans votre vie malgré tous vos efforts et votre bonne volonté.",
    presetMessage: "Bonjour Medium Manu, j'aimerais solliciter un déblocage spirituel pour libérer ma situation personnelle/professionnelle."
  },
  {
    id: "protection-purification",
    title: "Protection Spirituelle & Purification Complète",
    iconName: "ShieldAlert",
    badge: "Essentiel",
    shortDescription: "Bains de plantes sacrées, dégagement d'énergies négatives et érection d'un bouclier impénétrable autour de vous et vos proches.",
    fullDescription: "Une purification intégrale du corps et de l'aura par les plantes médicinales et sacrées de la tradition béninoise, suivie d'une consécration protectrice contre le mauvais œil, les jalousies et les mauvais esprits.",
    benefits: [
      "Nettoyage aural et énergétique des charges toxiques",
      "Protection puissante et durable pour vous, votre foyer et véhicule",
      "Neutralisation des énergies néfastes d'autrui"
    ],
    recommendedFor: "Personnes se sentant attaquées, fatiguées sans raison médicale ou vivant dans un environnement lourd.",
    presetMessage: "Bonjour Medium Manu, je souhaite effectuer un rituel de purification et mettre en place une protection spirituelle efficace."
  },
  {
    id: "attirance-argent",
    title: "Attirance d'Argent & Stabilité Financière",
    iconName: "Coins",
    badge: "Prospérité",
    shortDescription: "Favoriser la prospérité des affaires, attirer la clientèle, sécuriser le patrimoine et créer un flux financier harmonieux.",
    fullDescription: "Rituels traditionnels de bénédiction financière visant à attirer la réussite matérielle, favoriser le déblocage des créances, stimuler les ventes d'une entreprise et pérenniser la stabilité financière.",
    benefits: [
      "Dynamisation du flux de trésorerie et rentrées d'argent",
      "Attraction de nouveaux clients ou partenaires d'affaires",
      "Stabilité financière et élimination du gaspillage énergétique"
    ],
    recommendedFor: "Entrepreneurs, commerçants, indépendants ou salariés cherchant une percée financière honorable.",
    presetMessage: "Bonjour Medium Manu, je sollicite votre guidance pour un travail sur l'attirance d'argent et la prospérité financière."
  },
  {
    id: "voyance-spirituelle",
    title: "Voyance Spirituelle & Consultation Privée (Fá)",
    iconName: "Compass",
    badge: "Éclairage Préalable",
    shortDescription: "Analyse divinatoire profonde par l'oracle sacré pour révéler les causes cachées de vos problèmes et vous donner la trajectoire exacte.",
    fullDescription: "La consultation par le Fá (système divinatoire traditionnel reconnu par l'UNESCO) permet de lire les vibrations qui vous entourent. Elle révèle la source véritable de vos blocages et prescrit les remèdes exacts nécessaires.",
    benefits: [
      "Révélation claire des causes invisibles de vos blocages",
      "Réponses précises à vos questions sur le futur",
      "Conseils pratiques et remèdes spirituels adaptés"
    ],
    recommendedFor: "Indispensable avant toute prise de décision cruciale ou avant tout rituel spécifique.",
    presetMessage: "Bonjour Medium Manu, je souhaite réserver une consultation de voyance spirituelle privée via WhatsApp."
  },
  {
    id: "promotion-professionnelle",
    title: "Promotion Professionnelle & Succès d'Affaires",
    iconName: "Briefcase",
    badge: "Carrière",
    shortDescription: "Faciliter l'obtention de promotions, réussir des examens/concours, signer des contrats importants et obtenir la reconnaissance.",
    fullDescription: "Accompagnement ciblé pour les professionnels ambitieux : harmonisation charismatique, élévation de l'estime de vos supérieurs, protection contre la concurrence déloyale et déblocage de concours.",
    benefits: [
      "Augmentation de votre charisme et de votre considération",
      "Facilitation de la signature de contrats et projets retenus",
      "Neutralisation des rivalités toxiques au travail"
    ],
    recommendedFor: "Cadres, fonctionnaires, étudiants en concours ou candidats à des postes à hautes responsabilités.",
    presetMessage: "Bonjour Medium Manu, je vous contacte pour un accompagnement concernant ma carrière et une promotion professionnelle."
  },
  {
    id: "initiations-vodun",
    title: "Initiations Vodun & Accompagnement Sur-Mesure",
    iconName: "Flame",
    badge: "Haute Tradition",
    shortDescription: "Initiations traditionnelles au temple du Bénin, reconnexion avec les divinités tutélaires et accompagnement spirituel avancé.",
    fullDescription: "Pour les personnes appelées par la tradition ou recherchant une reconnexion spirituelle profonde. Organisation de séjours spirituels au Bénin, rituels de naissance ou cérémonies de consécration selon les règles ancestrales.",
    benefits: [
      "Reconnexion authentique avec vos racines spirituelles",
      "Accès aux connaissances secrètes de protection et de soin",
      "Accompagnement direct au temple au Bénin sous haute guidante"
    ],
    recommendedFor: "Chercheurs spirituels, initiés ou personnes souhaitant se rendre en pèlerinage au Bénin.",
    presetMessage: "Bonjour Medium Manu, je souhaite m'informer sur les initiations traditionnelles et l'accompagnement sur-mesure au Bénin."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Premier Échange WhatsApp",
    subtitle: "Prise de contact simple, discrète et gratuite",
    description: "Vous m'expliquez votre situation en toute liberté via message écrit ou vocal sur WhatsApp. Je vous réponds personnellement avec empathie pour comprendre votre besoin immédiat.",
    duration: "Immédiat (sous 24h max)",
    keyActions: ["Présentation de votre problème", "Écoute sans aucun jugement", "Conseil initial d'orientation"],
    iconName: "MessageSquare"
  },
  {
    number: "02",
    title: "Consultation Divinatoire (Voyance Fá)",
    subtitle: "L'état des lieux spirituel précis",
    description: "Nous procédons à une consultation divinatoire approfondie pour interroger l'oracle Fá. Elle permet d'identifier l'origine exacte des blocages (naturels, karmiques, mauvais œil ou environnementaux).",
    duration: "45 à 60 minutes",
    keyActions: ["Lecture des énergies", "Identification des blocages", "Établissement du diagnostic spirituel"],
    iconName: "Search"
  },
  {
    number: "03",
    title: "Proposition de l'Accompagnement",
    subtitle: "Un plan de travail transparent et chiffré",
    description: "Si un travail spirituel est nécessaire, je vous présente clairement les rituels préconisés, les éléments traditionnels indispensables (plantes, bougies, cérémonies) et la durée estimée.",
    duration: "Sur-mesure",
    keyActions: ["Explication pédagogique des rituels", "Transparence totale des conditions", "Libre décision du client"],
    iconName: "FileCheck"
  },
  {
    number: "04",
    title: "Réalisation des Rituels & Bains",
    subtitle: "Le travail traditionnel au sanctuaire au Bénin",
    description: "Je réalise les cérémonies traditionnelles dans mon sanctuaire au Bénin avec les prières et offrandes adéquates. Selon le cas, vous recevez également des instructions précises à réaliser chez vous (bains de purification, prières spécifiques).",
    duration: "Variables selon le cas (3 à 21 jours)",
    keyActions: ["Exécution rigoureuse au temple", "Envoi d'images/preuves sur demande", "Consécration des objets de protection"],
    iconName: "Flame"
  },
  {
    number: "05",
    title: "Suivi & Harmonisation Continue",
    subtitle: "Nous restons en contact jusqu'à la stabilisation",
    description: "Mon rôle ne s'arrête pas à la fin du rituel. Je reste disponible sur WhatsApp pour suivre l'évolution de votre situation, observer les résultats et vous guider au quotidien.",
    duration: "Suivi continu",
    keyActions: ["Évaluation régulières des progrès", "Conseils d'entretien spirituel", "Disponibilité WhatsApp permanente"],
    iconName: "CheckCircle2"
  }
];

export const VODUN_HERITAGE = {
  title: "Le Vodun du Bénin : Sagesse Ancestrale & Philosophie du Vivant",
  subtitle: "Comprendre la noblesse d'une tradition plurimillénaire inscrite au patrimoine culturel mondial.",
  introParagraph: "Trop souvent déformé par les clichés cinématographiques ou le folklore sensationnaliste, le Vodun authentique du Bénin est en réalité une philosophie de vie noble, pacifiste et profondément connectée aux forces de la Nature (l'Eau, la Terre, le Feu, la Forêt).",
  pillars: [
    {
      title: "Origine & Berceau Mondial",
      text: "Le Bénin est reconnu à travers le monde comme la terre mère du Vodun. C'est ici que sont nés les savoirs sacrés sur les plantes médicinales, la géomancie du Fá et la vénération des ancêtres."
    },
    {
      title: "Science Botanique & Énergie des Plantes",
      text: "Dans la tradition béninoise, chaque plante possède une vibration et une vertu curative spécifique. Les bains de purification utilisent les feuilles sacrées pour purifier le corps et libérer l'esprit."
    },
    {
      title: "Géomancie du Fá (UNESCO)",
      text: "Inscrit au patrimoine culturel immatériel de l'Humanité, le Fá n'est pas de la magie obscure, mais un système mathématique et philosophique complexe révélant les lois de l'univers."
    },
    {
      title: "Respect de la Vie & Harmonie",
      text: "Le Vodun prône le respect du vivant, la justice, la solidarité et la protection des faibles. Tout travail réalisé par Medium Manu s'inscrit dans cette ligne d'équilibre parfait."
    }
  ],
  quote: "« Le Vodun n'est pas la destruction, il est la reconnexion de l'être humain avec la Terre, avec ses Ancêtres et avec l'Énergie Créatrice de l'Univers. »",
  quoteAuthor: "Dignitaire de la Tradition Béninoise"
};

export const ABOUT_MANU = {
  title: "À Propos de Medium Manu",
  subtitle: "Un héritier de tradition, un guide bienveillant au service de l'Humain.",
  storyTitle: "Mon Histoire & Mon Engagements",
  paragraphs: [
    "Né au Bénin au sein d'une famille profondément ancrée dans les traditions spirituelles ancestrales, j'ai grandi au rythme des prières sacrés, des chants du sanctuaire et de l'enseignement des anciens.",
    "Dès mon plus jeune âge, sous la tutelle de prêtres et dignitaires vénérés de la terre béninoise, j'ai été formé à l'art divinatoire du Fá, à la connaissance secrète des plantes médicinales et aux rituels de libération énergétique.",
    "Aujourd'hui, mon sanctuaire accueille aussi bien les habitants locaux que les membres de la diaspora et des consultants internationaux venant de France, de Belgique, de Suisse, du Canada, des États-Unis et d'Afrique.",
    "Mon engagement est simple : mettre ce savoir séculaire à votre service pour vous apporter de la lumière là où régnaient l'incertitude et la souffrance, toujours dans la plus stricte confidentialité et avec une honnêteté sans faille."
  ],
  values: [
    { title: "Authenticité", desc: "Pratique réelle et conforme aux rites ancestraux du Bénin." },
    { title: "Écoute Humaine", desc: "Un accompagnement chaleureux, compréhensif et sans jugement." },
    { title: "Confidentialité", desc: "Protection totale de votre identité et de vos secrets de vie." },
    { title: "Proximité", desc: "Disponibilité quotidienne via WhatsApp pour répondre à vos doutes." }
  ],
  portraitImage: portraitImgPath,
  artifactsImage: artifactsImgPath
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Nathalie M.",
    location: "Paris, France",
    flag: "🇫🇷",
    domain: "Retour Affectif",
    date: "Il y a 2 semaines",
    rating: 5,
    story: "Après une séparation brutale de 6 mois avec mon fiancé, j'étais désespérée et j'avais consulté beaucoup d'imposteurs en ligne. Medium Manu a d'abord fait une voyance Fá très précise qui a révélé des jalouses familiales. Il a été honnête et m'a expliqué ce qu'il pouvait faire.",
    outcome: "Au bout de 12 jours de rituels et de prières à distance, mon fiancé m'a rappelée en pleurs pour me demander pardon. Nous sommes de nouveau ensemble aujourd'hui et plus unis que jamais.",
    verified: true
  },
  {
    id: "test-2",
    clientName: "Marc-Antoine D.",
    location: "Bruxelles, Belgique",
    flag: "🇧🇪",
    domain: "Déblocage Spirituel",
    date: "Il y a 1 mois",
    rating: 5,
    story: "Pendant 3 ans, toutes mes entreprises faisaient faillite juste au moment de concrétiser les ventes. J'avais une lourdeur constante aux épaules et des insomnies récurrentes.",
    outcome: "Après le grand déblocage et les bains de purification recommandés par Medium Manu, la lourdeur a disparu en quelques jours. J'ai décroché mon premier gros contrat belge le mois suivant !",
    verified: true
  },
  {
    id: "test-3",
    clientName: "Sophie K.",
    location: "Genève, Suisse",
    flag: "🇨🇭",
    domain: "Protection Spirituelle",
    date: "Il y a 3 semaines",
    rating: 5,
    story: "Je me sentais constamment observée et fatiguée dans ma nouvelle maison. Mes enfants pleuraient la nuit sans explication médicale. Une amie m'a conseillé de contacter Medium Manu.",
    outcome: "Manu a réalisé une purification de mon domicile à distance et m'a envoyé des protections bénies. Depuis, une sérénité absolue règne dans notre foyer.",
    verified: true
  },
  {
    id: "test-4",
    clientName: "Jean-Philippe T.",
    location: "Montréal, Canada",
    flag: "🇨🇦",
    domain: "Attirance d'Argent",
    date: "Il y a 1 mois",
    rating: 5,
    story: "Mon restaurant au Québec accumulait les dettes et les clients se faisaient rares. J'étais au bord du dépôt de bilan. J'ai tenté l'accompagnement par recommandation.",
    outcome: "Le rituel d'attirance de clientèle et de déblocage financier a apporté des résultats impressionnants en 3 semaines. Le restaurant est complet presque tous les soirs désormais.",
    verified: true
  },
  {
    id: "test-5",
    clientName: "Élodie P.",
    location: "Sainte-Luce, Martinique",
    flag: "🇲🇶",
    domain: "Harmonie Familiale",
    date: "Il y a 2 mois",
    rating: 5,
    story: "Des querelles d'héritage déchiraient notre famille depuis le décès de mon père. Personne ne se parlait plus et la colère empoisonnait nos vies.",
    outcome: "Medium Manu a fait un travail d'apaisement des esprits ancêtres. Trois semaines plus tard, mon frère qui ne me parlait plus m'a appelée pour sceller la paix.",
    verified: true
  },
  {
    id: "test-6",
    clientName: "David S.",
    location: "Atlanta, États-Unis",
    flag: "🇺🇸",
    domain: "Promotion Professionnelle",
    date: "Il y a 3 mois",
    rating: 5,
    story: "Je vis aux USA et je postulais pour un poste de vice-président dans ma firme depuis 2 ans, mais les promotions me passaient toujours sous le nez.",
    outcome: "Grâce à la voyance Fá et à la préparation spirituelle de Medium Manu, mon entretien de nomination s'est déroulé de manière exceptionnelle. J'ai obtenu le poste !",
    verified: true
  },
  {
    id: "test-7",
    clientName: "Awa C.",
    location: "Abidjan, Côte d'Ivoire",
    flag: "🇨🇮",
    domain: "Purification & Santé Énergétique",
    date: "Il y a 2 semaines",
    rating: 5,
    story: "J'avais des maux de tête chroniques et des cauchemars incessants chaque nuit. La médecine moderne ne trouvait rien d'anormal.",
    outcome: "Medium Manu a identifié un blocage mauvais œil lié à de la jalousie dans mon entourage. Après le bain traditionnel, les cauchemars ont cessé immédiatement.",
    verified: true
  },
  {
    id: "test-8",
    clientName: "Laurent B.",
    location: "Bordeaux, France",
    flag: "🇫🇷",
    domain: "Voyance & Guidance",
    date: "Il y a 1 semaine",
    rating: 5,
    story: "J'hésitais à investir toutes mes économies dans un projet immobilier douteux. La consultation divinatoire Fá de Manu a été d'une précision déconcertante.",
    outcome: "Il m'a averti d'une escroquerie cachée qui a effectivement été révélée 10 jours plus tard dans la presse ! Manu m'a évité la ruine financière.",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Le Sanctuaire Ancestral au Bénin",
    category: "Sanctuaire",
    imageUrl: heroImgPath,
    description: "Lieu sacré de prières, d'offrandes et de rituels situé au cœur de la terre béninoise.",
    culturalContext: "Espace purifié quotidiennement où sont invoquées les énergies bienveillantes des ancêtres."
  },
  {
    id: "gal-2",
    title: "Plantes Sacrées & Pharmacopée Traditionnelle",
    category: "Purification",
    imageUrl: artifactsImgPath,
    description: "Feuilles, écorces et racines rares récoltées au lever du jour selon les rites secrets.",
    culturalContext: "Utilisées dans les bains de purification pour chasser la poisse et renouveler l'aura."
  },
  {
    id: "gal-3",
    title: "L'Oracle Sacré du Fá (Géomancie)",
    category: "Consultation",
    imageUrl: portraitImgPath,
    description: "Chapelet divinatoire (Agumaga) et noix de palme sacrées servant à la voyance traditionnelle.",
    culturalContext: "Outil d'analyse spirituelle reconnu par l'UNESCO pour lire le destin et prescrir les remèdes."
  },
  {
    id: "gal-4",
    title: "Consécration des Talismans de Protection",
    category: "Protection",
    imageUrl: artifactsImgPath,
    description: "Objets sacrés et amulettes bénies pour la protection contre le mauvais œil.",
    culturalContext: "Chaque protection est confectionnée personnellement selon le nom et la date de naissance du consultant."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Confidentialité & Ethique",
    question: "Mes échanges avec Medium Manu sont-ils vraiment confidentiels ?",
    answer: "Absolument. La confidentialité est la règle d'or de mon sanctuaire. Vos messages, photos, noms et détails personnels ne sont jamais conservés inutilement ni partagés à qui que ce soit. Nos discussions WhatsApp se déroulent dans une discrétion totale."
  },
  {
    id: "faq-2",
    category: "Deroulement & Consultation",
    question: "Comment se passe le premier contact sur WhatsApp ?",
    answer: "Vous cliquez simplement sur le bouton WhatsApp du site pour m'envoyer un message. Vous m'expliquez brièvement votre nom, votre pays et le problème qui vous préoccupe. Je vous réponds personnellement sous quelques heures pour convenir d'une consultation ou vous orienter."
  },
  {
    id: "faq-3",
    category: "Deroulement & Consultation",
    question: "Le travail à distance est-il aussi efficace qu'en présence physique ?",
    answer: "Oui, à 100%. En spiritualité traditionnelle et particulièrement dans le Vodun du Bénin, la distance géographique n'a aucune emprise sur les vibrations et les prières. Votre nom, votre date de naissance et votre photo permettent d'établir la connexion exacte lors des cérémonies au temple."
  },
  {
    id: "faq-4",
    category: "Vodun & Tradition",
    question: "Garantissez-vous des résultats miraculeux à 100% ?",
    answer: "Un vrai praticien traditionnel honnête ne promet jamais de 'miracles instantanés en 24h'. La spiritualité est une science sacrée et vivante, pas de la magie de spectacle. Je vous garantis un travail rigoureux, sincère et conforme aux rites ancestraux qui apporte des améliorations majeures et durables dans la grande majorité des cas."
  },
  {
    id: "faq-5",
    category: "Deroulement & Consultation",
    question: "Combien de temps faut-il pour ressentir les premiers effets d'un accompagnement ?",
    answer: "Selon la nature du travail (retour affectif, déblocage ou protection), les premiers signes d'apaisement et de dénouement apparaissent généralement entre 3 jours et 21 jours après le début des rituels. Un suivi régulier est assuré sur WhatsApp."
  },
  {
    id: "faq-6",
    category: "Paiement & Tarifs",
    question: "Quels sont les moyens de paiement acceptés pour les consultations ?",
    answer: "Afin de faciliter les transactions internationales en toute sécurité, j'accepte les règlements via Ria, Western Union, MoneyGram, Wave, MTN Mobile Money, Orange Money, ou virement bancaire selon votre pays de résidence (France, Belgique, Canada, Afrique, etc.)."
  },
  {
    id: "faq-7",
    category: "Deroulement & Consultation",
    question: "Puis-je venir directement au Bénin pour me faire consulter au sanctuaire ?",
    answer: "Oui, c'est tout à fait possible et très apprécié ! Si vous souhaitez effectuer le voyage au Bénin, nous organisons votre accueil, votre hébergement discret et vos séances rituelles directement au temple."
  },
  {
    id: "faq-8",
    category: "Confidentialité & Ethique",
    question: "Les rituels de Medium Manu présentent-ils un choc en retour ou un danger ?",
    answer: "Aucun danger. Tout le travail accompli au sanctuaire utilise des énergies bienveillantes, des prières de lumière, des offrandes de paix et la pharmacopée des plantes. Je ne pratique aucun rituel destructeur ou malveillant. Il n'y a donc aucun risque ni retour négatif pour vous ou vos enfants."
  },
  {
    id: "faq-9",
    category: "Vodun & Tradition",
    question: "Est-ce compatible avec ma religion (Chrétienne, Musulmane, etc.) ?",
    answer: "Oui. Le travail traditionnel agit sur la purification énergétique, le respect de la nature et le déblocage des obstacles de vie. Il ne vous demande jamais de renier votre foi ou votre religion personnelle."
  },
  {
    id: "faq-10",
    category: "Deroulement & Consultation",
    question: "Pourquoi est-il nécessaire de faire une voyance Fá avant tout rituel ?",
    answer: "La consultation Fá est le scanner spirituel. Faire un rituel sans voyance préalable équivaut à prendre un médicament sans diagnostic médical. Le Fá nous indique la cause exacte du problème et garantit qu'on applique le bon remède."
  },
  {
    id: "faq-11",
    category: "Paiement & Tarifs",
    question: "Combien coûte une consultation avec Medium Manu ?",
    answer: "Le tarif de la consultation initiale est très accessible et fixé à l'avance pour permettre à chacun de bénéficier d'un éclairage lucide. Pour les rituels complets, le coût dépend uniquement des ingrédients traditionnels nécessaires (plantes sacrées, bougies, cérémonies au temple)."
  },
  {
    id: "faq-12",
    category: "Deroulement & Consultation",
    question: "Que se passe-t-il si mon cas est trop complexe ou sans solution spirituelle ?",
    answer: "Si lors de la voyance initiale le Fá indique que la voie est fermée ou que le problème requiert une démarche exclusivement médicale ou juridique, je vous le dis en toute franchise. Je ne fais engager aucun frais inutile à mes consultants."
  },
  {
    id: "faq-13",
    category: "Confidentialité & Ethique",
    question: "Comment puis-je être sûr(e) que je discute bien avec le vrai Medium Manu ?",
    answer: "Sur WhatsApp, vous communiquez directement avec mon numéro officiel unique. Sur demande, nous pouvons réaliser un court appel vidéo pour valider mon identité et vous montrer le sanctuaire."
  },
  {
    id: "faq-14",
    category: "Vodun & Tradition",
    question: "Qu'est-ce que le retour affectif et dans quelles conditions fonctionne-t-il ?",
    answer: "Le retour affectif traditionnel dissipe les haines artificielles, purifie les blocages jaloux et réveille les sentiments sincères enfouis. Il fonctionne de manière optimale lorsque deux personnes ont partagé un amour véritable altéré par des malentendus ou des interférences."
  },
  {
    id: "faq-15",
    category: "Deroulement & Consultation",
    question: "Puis-je commander une protection pour un membre de ma famille à son insu ?",
    answer: "Oui, les rituels de protection et de bénédiction pour les enfants, conjoints ou parents peuvent être accomplis avec leur nom et photo afin de veiller sur eux à distance."
  },
  {
    id: "faq-16",
    category: "Deroulement & Consultation",
    question: "Comment commencer dès aujourd'hui ?",
    answer: "Il vous suffit de cliquer sur le bouton 'Discuter sur WhatsApp' ci-dessous. Écrivez votre message et je vous prendrai en charge dans les plus brefs délais."
  }
];

export const FINAL_CTA = {
  h2Title: "Vous N'êtes Plus Seul(e) Face à Vos Épreuves",
  paragraph: "Chaque problème porte en lui sa solution. Tempête amoureuse, blocage financier, doutes profonds — un simple message peut tout changer. Medium Manu vous répond personnellement, avec bienveillance et sans jugement.",
  primaryButton: "Écrire à Medium Manu sur WhatsApp",
  secondaryButton: "Réserver ma consultation",
  guarantees: ["Réponse en quelques heures", "Échange privé & sans engagement", "Écoute humaine et bienveillante"]
};

export const FOOTER_CONTENT = {
  brandName: "Medium Manu",
  tagline: "Guide Spirituel & Praticien Traditionnel du Bénin",
  address: "Sanctuaire Ancestral, Cotonou - Ouidah, République du Bénin",
  email: "contact@medium-manu.com",
  phoneDisplay: "+229 01 62 68 24 03",
  callNumber: "+229 01 42 48 42 67",
  whatsappQrUrl: "https://wa.me/qr/S5Z7LXVIBQPSC1",
  facebookUrl: "https://www.facebook.com/profile.php?id=61592303896034",
  copyright: `© ${new Date().getFullYear()} Medium Manu. Tous droits réservés. Guidance & Traditions du Bénin.`,
  disclaimer: "L'accompagnement spirituel traditionnel proposé sur ce site vient en complément de votre épanouissement personnel et ne remplace en aucun cas un avis médical, psychologique ou juridique professionnel.",
  quickLinks: [
    { label: "Accueil", href: "#hero" },
    { label: "Pourquoi Medium Manu", href: "#pourquoi" },
    { label: "Accompagnements", href: "#accompagnements" },
    { label: "Processus & Étapes", href: "#processus" },
    { label: "Le Vodun du Bénin", href: "#heritage" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" }
  ]
};
