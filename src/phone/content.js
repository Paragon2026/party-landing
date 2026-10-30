// Labels and fictional data of the phone mockups, FR and EN. UI labels are the
// app's own (party-app/app/src/lib/locales); people, places and games are made up.

export const PHONE = {
  fr: {
    modes: ['Joueur', 'MJ'],
    aria: { mode: 'Mode', browse: 'Parcourir les parties ou les communautés', notifications: 'Notifications', friends: 'Amis', me: 'Moi', alerts: 'Alertes' },
    nav: {
      player: ['Explorer', 'Mes tables', 'Messages'],
      gm: ['Proposer', 'Mes campagnes', 'Messages'],
    },
    tabs: { games: 'Parties', communities: 'Communautés' },
    search: {
      games: 'Rechercher une partie ou un MJ…',
      communities: 'Rechercher une communauté, une ville ou un lieu…',
    },
    place: 'Brumeval · 50 km',
    lastMinute: 'Dernière minute',
    filters: 'Filtres',
    addCommunity: 'Ajouter une communauté',
    results: { games: '12 parties', communities: '24 communautés trouvées' },
    sort: { games: 'Pour vous', communities: 'Distance' },

    // Explorer ▸ Parties: one line per table, a rendez-vous groups its tables
    games: {
      open: {
        title: 'Les Cryptes de Vaudrac',
        sub: 'Pathfinder 2e · à 3 km',
        seats: '1 place libre',
        fit: 'Vous êtes libre',
        gm: 'Elena',
        rating: '4,8 · 12 avis',
        when: 'Ven. 20:00 · chaque semaine · 4 h',
        level: 'Débutants bienvenus',
        mayFeature: 'Peut aborder :',
        flags: ['Horreur', 'Violence', 'Deuil'],
        apply: 'Demander à rejoindre',
      },
      group: {
        dow: 'VEN',
        day: '6',
        title: 'Soirée JdR du vendredi',
        meta: 'Les Sept Chandelles · 20:00 · 2 tables',
        rows: [
          ['Le Bal des Masques de Suie', 'Vampire · à 3 km', '2 places libres'],
          ['La Mine perdue', 'D&D 5e · à 3 km', '3 places libres'],
        ],
        propose: 'Proposer une table à cette soirée',
      },
    },

    // Explorer ▸ Communautés: mine first, then around me
    communities: {
      mineTitle: 'Mes communautés',
      mine: [
        ['landmark', 'La Confrérie des Sept Chandelles', 'Club · Membre · ven. 6 nov.', '2 messages'],
        ['calendarDays', 'Les Rencontres de Brumeval', 'Événement · Membre · 14 – 15 nov.'],
      ],
      discoverTitle: 'Découvrir autour de Brumeval',
      discover: [
        ['store', 'Le Hibou Cartographe', 'Lieu · à 6 km', 'Vérifiée', 'Prochain rendez-vous : ven. 13 nov.'],
        ['globe', 'La Table des Brumes', 'En ligne · Discord', 'Vérifiée', 'Tous les mardis, 21:00'],
        ['landmark', 'Les Dés de Vaudrac', 'Club · à 11 km', null, 'Prochain rendez-vous : sam. 7 nov.'],
      ],
    },

    // MJ ▸ Proposer ▸ « Où jouerez-vous ? »
    where: {
      title: 'Où jouerez-vous ?',
      free: ['Table libre', 'Chez vous, en ligne ou dans le lieu de votre choix'],
      community: ['Chez une communauté', 'Un club, un lieu, un événement ou un serveur en ligne'],
      mineTitle: 'Mes communautés',
      mine: [
        ['La Confrérie des Sept Chandelles', 'Club · La Taverne du Griffon Borgne'],
        ['Les Rencontres de Brumeval', 'Événement · Halle aux Parchemins'],
      ],
      search: 'Une autre communauté…',
      gatheringsTitle: 'Rendez-vous (facultatif)',
      chips: ['ven. 6 nov. · Soirée JdR du vendredi', 'dim. 8 nov. · Initiation', 'Aucun'],
      info: 'Le lieu et l’horaire viennent du rendez-vous. La table est réservée aux membres de La Confrérie des Sept Chandelles.',
    },

    // A community's page, as its owner sees it (Gérer tab)
    page: {
      name: 'La Confrérie des Sept Chandelles',
      meta: 'Club · Brumeval · 42 membres',
      active: 'Active',
      verified: 'Club vérifié',
      owner: 'Vous êtes propriétaire',
      tabs: ['Accueil', 'Salon', 'Membres (42)', 'Gérer'],
      rows: [
        ['userCheck', 'Demandes', '3 personnes attendent une réponse'],
        ['doorOpen', 'Règle d’adhésion', 'Validation obligatoire'],
        ['idCard', 'Fiche', 'Nom, description, lieu, horaires, liens'],
        ['calendarDays', 'Rendez-vous', '2 à venir · créer, dupliquer, annuler'],
        ['dice', 'Tables', '5 tables rattachées'],
        ['users', 'Membres et rôles', '42 membres · équipe de 3'],
        ['handshake', 'Partenariats', '1 partenariat'],
        ['flag', 'Signalements', 'Aucun en cours'],
      ],
    },

    chat: {
      back: 'Retour',
      title: 'Les Cryptes de Vaudrac',
      gm: 'MJ : Elena',
      table: 'Table',
      map: 'Carte',
      info: 'Infos de la partie',
      date: 'ven. 6 nov., 20:00',
      tabs: ['Chat de groupe', 'Résumé', 'Planification'],
      session: 'Séance 4 · vendredi 30 oct.',
      messages: [
        ['Elena · MJ', '19:02', 'Bienvenue à la table ! Le vote du créneau est ouvert dans Planification.'],
        ['Lyra', '19:10', 'Vendredi 6 me va. J’apporte les dés et le gâteau.', true],
        ['Bram', '19:14', 'Pareil. J’ai ajouté au résumé la réplique du nain, elle mérite d’y être.'],
        ['Elena · MJ', '19:20', 'Parfait, résumé gravé. Relisez-le avant vendredi.'],
      ],
      compose: 'Message à la table…',
    },
    poll: {
      title: 'Prochaine séance',
      sort: 'Trier :',
      votes: 'Votes',
      chrono: 'Chronologique',
      question: 'Choisissez le créneau de la prochaine séance : · séance de 4 h',
      slots: [
        ['ven. 6 nov. (20:00 – 00:00)', '5/5 dispo', '4 votes', 'common', true],
        ['sam. 7 nov. (20:00 – 00:00)', '5/5 dispo', '1 vote', 'common'],
        ['mer. 4 nov. (19:00 – 23:00)', '3/5 dispo', '0 vote', 'manual'],
      ],
      common: 'Créneau commun',
      manual: 'Créneau manuel',
      vote: 'Voter',
      voted: 'Voté',
    },
    // Planification ▸ the next sessions, with each player's answer
    sessions: {
      label: 'Serez-vous là ?',
      yes: 'Je serai là',
      no: 'Je ne pourrai pas',
      dates: [
        { day: 'ven. 6 nov.', time: '20:00', mine: 'yes', summary: '4 présents · 1 absent · 0 sans réponse' },
        {
          day: 'ven. 13 nov.', time: '21:00', moved: 'Déplacée', was: 'Prévue initialement ven. 13 nov. à 20:00',
          note: '« La salle n’ouvre qu’à 21 h ce soir-là. »', summary: '2 présents · 0 absent · 3 sans réponse',
        },
      ],
      more: '3 dates de plus',
    },
    meeting: {
      head: 'Point de rendez-vous pour 5 lieux déclarés',
      midpoint: 'Point médian',
      vote: 'Vote du lieu (3)',
      venues: [
        ['store', 'Le Hibou Cartographe', 'Bar à jeux · 650 m du point médian', '3 votes', true],
        ['dice', 'La Confrérie des Sept Chandelles', 'Club · se réunit le vendredi', '2 votes'],
        ['users', 'Café des Trois Runes', 'Café · 1,1 km', '1 vote'],
      ],
      voteBtn: 'Voter',
      voted: 'Voté',
    },
  },

  en: {
    modes: ['Player', 'GM'],
    aria: { mode: 'Mode', browse: 'Browse games or communities', notifications: 'Notifications', friends: 'Friends', me: 'Me', alerts: 'Alerts' },
    nav: {
      player: ['Explore', 'My tables', 'Messages'],
      gm: ['Host', 'My campaigns', 'Messages'],
    },
    tabs: { games: 'Games', communities: 'Communities' },
    search: {
      games: 'Search games or GMs…',
      communities: 'Search communities, cities or venues…',
    },
    place: 'Brumeval · 50 km',
    lastMinute: 'Last minute',
    filters: 'Filters',
    addCommunity: 'Add a community',
    results: { games: '12 games', communities: '24 communities found' },
    sort: { games: 'For you', communities: 'Distance' },

    games: {
      open: {
        title: 'The Crypts of Vaudrac',
        sub: 'Pathfinder 2e · 3 km away',
        seats: '1 seat left',
        fit: 'You are free then',
        gm: 'Elena',
        rating: '4.8 · 12 reviews',
        when: 'Fri 8:00 PM · every week · 4 h',
        level: 'Beginners welcome',
        mayFeature: 'May feature:',
        flags: ['Horror', 'Violence', 'Grief'],
        apply: 'Ask to join',
      },
      group: {
        dow: 'FRI',
        day: '6',
        title: 'Friday RPG night',
        meta: 'Sept Chandelles · 8:00 PM · 2 tables',
        rows: [
          ['The Ball of Sooty Masks', 'Vampire · 3 km away', '2 seats left'],
          ['The Lost Mine', 'D&D 5e · 3 km away', '3 seats left'],
        ],
        propose: 'Propose a table for this night',
      },
    },

    communities: {
      mineTitle: 'My communities',
      mine: [
        ['landmark', 'La Confrérie des Sept Chandelles', 'Club · Member · Fri 6 Nov', '2 messages'],
        ['calendarDays', 'Les Rencontres de Brumeval', 'Event · Member · 14 – 15 Nov'],
      ],
      discoverTitle: 'Discover around Brumeval',
      discover: [
        ['store', 'Le Hibou Cartographe', 'Venue · 6 km away', 'Verified', 'Next rendez-vous: Fri 13 Nov'],
        ['globe', 'The Misty Table', 'Online · Discord', 'Verified', 'Every Tuesday, 9:00 PM'],
        ['landmark', 'Les Dés de Vaudrac', 'Club · 11 km away', null, 'Next rendez-vous: Sat 7 Nov'],
      ],
    },

    where: {
      title: 'Where will you play?',
      free: ['Free table', 'At home, online or in a place of your choice'],
      community: ['At a community', 'A club, a venue, an event or an online server'],
      mineTitle: 'My communities',
      mine: [
        ['La Confrérie des Sept Chandelles', 'Club · La Taverne du Griffon Borgne'],
        ['Les Rencontres de Brumeval', 'Event · Halle aux Parchemins'],
      ],
      search: 'Another community…',
      gatheringsTitle: 'Rendez-vous (optional)',
      chips: ['Fri 6 Nov · Friday RPG night', 'Sun 8 Nov · First-timers', 'None'],
      info: 'The place and time come from the rendez-vous. The table is for members of La Confrérie des Sept Chandelles.',
    },

    page: {
      name: 'La Confrérie des Sept Chandelles',
      meta: 'Club · Brumeval · 42 members',
      active: 'Active',
      verified: 'Verified club',
      owner: 'You are the owner',
      tabs: ['Home', 'Room', 'Members (42)', 'Manage'],
      rows: [
        ['userCheck', 'Requests', '3 people are waiting for an answer'],
        ['doorOpen', 'Join rule', 'Approval required'],
        ['idCard', 'Listing', 'Name, description, place, hours, links'],
        ['calendarDays', 'Rendez-vous', '2 coming up · create, duplicate, cancel'],
        ['dice', 'Tables', '5 tables attached'],
        ['users', 'Members and roles', '42 members · team of 3'],
        ['handshake', 'Partnerships', '1 partnership'],
        ['flag', 'Reports', 'None open'],
      ],
    },

    chat: {
      back: 'Back',
      title: 'The Crypts of Vaudrac',
      gm: 'GM: Elena',
      table: 'Table',
      map: 'Map',
      info: 'Campaign info',
      date: 'Fri 6 Nov, 8:00 PM',
      tabs: ['Group chat', 'Recap', 'Scheduling'],
      session: 'Session 4 · Friday 30 Oct',
      messages: [
        ['Elena · GM', '7:02 PM', 'Welcome to the table! The time-slot vote is open in Scheduling.'],
        ['Lyra', '7:10 PM', 'Friday the 6th works for me. I’ll bring the dice and the cake.', true],
        ['Bram', '7:14 PM', 'Same. I added the dwarf’s line to the recap, it deserves to be there.'],
        ['Elena · GM', '7:20 PM', 'Perfect, recap carved. Read it before Friday.'],
      ],
      compose: 'Message the table…',
    },
    poll: {
      title: 'Next session',
      sort: 'Sort:',
      votes: 'Votes',
      chrono: 'Chronological',
      question: 'Pick the slot for the next session: · 4 h session',
      slots: [
        ['Fri 6 Nov (8:00 PM – 12:00 AM)', '5/5 free', '4 votes', 'common', true],
        ['Sat 7 Nov (8:00 PM – 12:00 AM)', '5/5 free', '1 vote', 'common'],
        ['Wed 4 Nov (7:00 – 11:00 PM)', '3/5 free', '0 votes', 'manual'],
      ],
      common: 'Shared slot',
      manual: 'Manual slot',
      vote: 'Vote',
      voted: 'Voted',
    },
    sessions: {
      label: 'Will you be there?',
      yes: 'I’ll be there',
      no: 'I can’t make it',
      dates: [
        { day: 'Fri 6 Nov', time: '8:00 PM', mine: 'yes', summary: '4 coming · 1 absent · 0 no answer' },
        {
          day: 'Fri 13 Nov', time: '9:00 PM', moved: 'Moved', was: 'Was Fri 13 Nov at 8:00 PM',
          note: '“The room only opens at 9 that night.”', summary: '2 coming · 0 absent · 3 no answer',
        },
      ],
      more: '3 more dates',
    },
    meeting: {
      head: 'Meeting point for 5 declared places',
      midpoint: 'Midpoint',
      vote: 'Venue vote (3)',
      venues: [
        ['store', 'Le Hibou Cartographe', 'Game bar · 650 m from the midpoint', '3 votes', true],
        ['dice', 'La Confrérie des Sept Chandelles', 'Club · meets on Fridays', '2 votes'],
        ['users', 'Café des Trois Runes', 'Café · 1.1 km', '1 vote'],
      ],
      voteBtn: 'Vote',
      voted: 'Voted',
    },
  },
};
