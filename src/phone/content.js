// Labels and fictional data of the phone mockups, FR and EN. UI labels are the
// app's own (party-app/app/src/lib/locales); people, places and games are made up.

export const PHONE = {
  fr: {
    modes: ['Joueur', 'MJ', 'Commu'],
    aria: { mode: 'Mode', browse: 'Parcourir', notifications: 'Notifications', friends: 'Amis', me: 'Moi' },
    nav: {
      player: ['Explorer', 'Mes tables', 'Messages'],
      gm: ['Proposer', 'Mes campagnes', 'Messages'],
      community: ['Fiche', 'Événements', 'Membres'],
    },
    tabs: { games: 'Parties', agenda: 'Rendez-vous', communities: 'Communautés' },
    search: {
      games: 'Rechercher une partie ou un MJ…',
      agenda: 'Rechercher un rendez-vous, une communauté ou une ville…',
      communities: 'Rechercher une communauté, une ville ou un lieu…',
    },
    filters: 'Filtres',
    mine: 'Les miennes',
    results: { games: '12 parties', agenda: '9 rendez-vous', communities: '24 communautés' },

    game: {
      system: 'Pathfinder 2e',
      title: 'Les Cryptes de Vaudrac',
      gm: 'Elena',
      rating: '4,8',
      reviews: '(12)',
      when: 'Ven. 20:00 · chaque semaine · 4 h',
      where: 'à 3 km · La Taverne du Griffon Borgne',
      seats: '4/5 joueurs',
      seatsLeft: '· 1 place libre',
      level: 'Intermédiaire',
      about: 'À propos de la partie :',
      summary: '« Une campagne d’exploration sous la vieille ville, et un donjon qui n’aime pas les visiteurs. Débutants bienvenus. »',
      mayFeature: 'Cette partie peut aborder :',
      flags: ['Horreur', 'Violence', 'Deuil'],
      offTable: 'Garanti hors de la table :',
      lines: ['Violence sexuelle', 'Violence envers les enfants'],
    },

    agenda: [
      {
        day: 'Vendredi 16 octobre',
        items: [
          {
            when: '20:00 – 00:00', repeat: 'Chaque semaine', far: '3 km', title: 'Soirée JdR du vendredi',
            community: 'La Confrérie des Sept Chandelles', kind: 'landmark', place: 'La Taverne du Griffon Borgne · Brumeval',
            tables: '3 tables', people: '14 participants',
            text: 'Tables ouvertes aux membres, initiations dès 20 h. Venez avec vos dés.',
            action: 'gold',
          },
          {
            when: '20:30 – 23:30', repeat: 'Toutes les deux semaines', far: '6 km', title: 'Soirée découverte du jeu de rôle',
            community: 'Le Hibou Cartographe', kind: 'store', place: 'Le Hibou Cartographe · Brumeval',
            tables: '2 tables', people: '9 participants', action: 'attending',
          },
        ],
      },
      {
        day: 'Samedi 17 octobre',
        items: [
          {
            when: '10:00 → 18 oct. 19:00', far: '14 km', title: 'Les Rencontres de Brumeval',
            community: 'Les Rencontres de Brumeval', kind: 'calendarDays', place: 'Halle aux Parchemins · Brumeval',
            tables: '12 tables', people: '86 participants',
          },
        ],
      },
    ],
    attend: 'J’y serai',

    communities: [
      {
        verified: 'Association vérifiée', kind: 'Association', icon: 'landmark', far: 'à 3 km',
        name: 'La Confrérie des Sept Chandelles', place: 'La Taverne du Griffon Borgne · Brumeval',
        hours: 'Tous les vendredis, 20:00–00:00', mode: 'En présentiel', join: 'Sur acceptation', members: '42 membres',
        text: 'Le club de jeu de rôle de Brumeval : campagnes au long cours et initiations chaque vendredi.',
        systems: ['L’Appel de Cthulhu', 'Pathfinder 2e'],
      },
      {
        verified: 'Événement vérifié', kind: 'Événement', icon: 'calendarDays', far: 'à 14 km',
        name: 'Les Rencontres de Brumeval', place: 'Halle aux Parchemins · Brumeval',
        hours: 'Du 17 au 18 octobre', mode: 'En présentiel', join: 'Ouverte', members: '86 participants',
        text: 'Deux jours de tables, proposées par les MJ de la convention et de ses associations partenaires.',
        systems: ['D&D 5e', 'Vampire', 'Créations maison'],
      },
    ],

    propose: {
      title: 'Proposer une table',
      free: ['Une table libre', 'En ligne, chez vous ou dans un lieu public'],
      community: ['Dans une communauté ou un lieu', 'Club, boutique ou convention près de vous'],
      upcoming: 'Vos prochains rendez-vous',
      rows: [
        ['Soirée JdR du vendredi', 'ven. 16 oct., 20:00 · Sept Chandelles'],
        ['Les Rencontres de Brumeval', 'sam. 17 oct., 10:00 · partenaire'],
      ],
      presence: 'Qui est là, et quand',
      presenceSub: 'Soirée JdR du vendredi · ven. 16 oct. · jusqu’à 14 en même temps',
    },
    hours: ['18 h', '19 h', '20 h', '21 h', '22 h', '23 h'],

    steward: {
      title: 'Ma communauté',
      pick: 'La Confrérie des Sept Chandelles',
      sheet: 'La fiche',
      verified: 'Association vérifiée',
      fields: [
        ['Nom', 'La Confrérie des Sept Chandelles'],
        ['En une ligne', 'Le club de jeu de rôle de Brumeval'],
        ['Quand', 'Tous les vendredis, 20:00 – 00:00'],
      ],
      join: 'Adhésion',
      howLabel: 'Comment on rejoint',
      policies: [
        ['Sur acceptation', 'Chacun demande, un officier accepte ou refuse.'],
        ['Ouverte', 'Un appui suffit. Pour les lieux et tables ouvertes.'],
      ],
    },

    chat: {
      back: 'Retour',
      title: 'Les Cryptes de Vaudrac',
      gm: 'MJ : Elena',
      table: 'Table',
      map: 'Carte',
      info: 'Infos de la partie',
      date: 'date à fixer',
      tabs: ['Chat de groupe', 'Résumé', 'Planification'],
      session: 'Séance 4 · vendredi 9 oct.',
      messages: [
        ['Elena · MJ', '19:02', 'Bienvenue à la table ! Le vote du créneau est ouvert dans Planification.'],
        ['Lyra', '19:10', 'Vendredi 23 me va. J’apporte les dés et le gâteau.', true],
        ['Bram', '19:14', 'Pareil. Je peux aussi amener une deuxième lampe pour la carte.'],
        ['Elena · MJ', '19:20', 'Parfait. Le résumé de la séance 3 est gravé, relisez-le avant vendredi.'],
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
        ['ven. 23 oct. (20:00 – 00:00)', '5/5 dispo', '4 votes', 'common', true],
        ['sam. 24 oct. (20:00 – 00:00)', '4/5 dispo', '1 vote', 'common'],
        ['mer. 21 oct. (19:00 – 23:00)', '3/5 dispo', '0 vote', 'manual'],
      ],
      common: 'Créneau commun',
      manual: 'Créneau manuel',
      vote: 'Voter',
      voted: 'Voté',
    },
    meeting: {
      head: 'Point de rendez-vous pour 5 lieux déclarés',
      midpoint: 'Point médian',
      vote: 'Vote du lieu (3)',
      venues: [
        ['store', 'Le Hibou Cartographe', 'Bar à jeux · 650 m du point médian', '3 votes', true],
        ['dice', 'La Confrérie des Sept Chandelles', 'Association · ouverte mer. et ven.', '2 votes'],
        ['users', 'Café des Trois Runes', 'Café · 1,1 km', '1 vote'],
      ],
      voteBtn: 'Voter',
      voted: 'Voté',
    },
  },

  en: {
    modes: ['Player', 'GM', 'Club'],
    aria: { mode: 'Mode', browse: 'Browse', notifications: 'Notifications', friends: 'Friends', me: 'Me' },
    nav: {
      player: ['Explore', 'My tables', 'Messages'],
      gm: ['Host', 'My campaigns', 'Messages'],
      community: ['Sheet', 'Events', 'Members'],
    },
    tabs: { games: 'Games', agenda: 'Rendez-vous', communities: 'Communities' },
    search: {
      games: 'Search games or GMs…',
      agenda: 'Search rendez-vous, communities or cities…',
      communities: 'Search communities, cities or venues…',
    },
    filters: 'Filters',
    mine: 'Mine',
    results: { games: '12 games', agenda: '9 rendez-vous', communities: '24 communities' },

    game: {
      system: 'Pathfinder 2e',
      title: 'The Crypts of Vaudrac',
      gm: 'Elena',
      rating: '4.8',
      reviews: '(12)',
      when: 'Fri 8:00 PM · every week · 4 h',
      where: '3 km away · La Taverne du Griffon Borgne',
      seats: '4/5 players',
      seatsLeft: '· 1 seat left',
      level: 'Intermediate',
      about: 'About the Game:',
      summary: '“An exploration campaign beneath the old town, and a dungeon that does not like visitors. Beginners welcome.”',
      mayFeature: 'This game may feature:',
      flags: ['Horror', 'Violence', 'Grief'],
      offTable: 'Guaranteed off the table:',
      lines: ['Sexual violence', 'Violence against children'],
    },

    agenda: [
      {
        day: 'Friday 16 October',
        items: [
          {
            when: '8:00 PM – 12:00 AM', repeat: 'Every week', far: '3 km', title: 'Friday RPG night',
            community: 'La Confrérie des Sept Chandelles', kind: 'landmark', place: 'La Taverne du Griffon Borgne · Brumeval',
            tables: '3 tables', people: '14 attendees',
            text: 'Tables open to members, first-timer games from 8 PM. Bring your dice.',
            action: 'gold',
          },
          {
            when: '8:30 – 11:30 PM', repeat: 'Every two weeks', far: '6 km', title: 'Roleplaying discovery night',
            community: 'Le Hibou Cartographe', kind: 'store', place: 'Le Hibou Cartographe · Brumeval',
            tables: '2 tables', people: '9 attendees', action: 'attending',
          },
        ],
      },
      {
        day: 'Saturday 17 October',
        items: [
          {
            when: '10:00 AM → 18 Oct 7:00 PM', far: '14 km', title: 'Les Rencontres de Brumeval',
            community: 'Les Rencontres de Brumeval', kind: 'calendarDays', place: 'Halle aux Parchemins · Brumeval',
            tables: '12 tables', people: '86 attendees',
          },
        ],
      },
    ],
    attend: 'I’ll be there',

    communities: [
      {
        verified: 'Verified association', kind: 'Association', icon: 'landmark', far: '3 km away',
        name: 'La Confrérie des Sept Chandelles', place: 'La Taverne du Griffon Borgne · Brumeval',
        hours: 'Every Friday, 8:00 PM–12:00 AM', mode: 'In person', join: 'On approval', members: '42 members',
        text: 'Brumeval’s roleplaying club: long campaigns and first-timer games every Friday.',
        systems: ['Call of Cthulhu', 'Pathfinder 2e'],
      },
      {
        verified: 'Verified event', kind: 'Event', icon: 'calendarDays', far: '14 km away',
        name: 'Les Rencontres de Brumeval', place: 'Halle aux Parchemins · Brumeval',
        hours: '17 to 18 October', mode: 'In person', join: 'Open', members: '86 attendees',
        text: 'Two days of tables, run by the convention’s GMs and its partner associations.',
        systems: ['D&D 5e', 'Vampire', 'Homebrew'],
      },
    ],

    propose: {
      title: 'Host a table',
      free: ['A free table', 'Online, at home or in a public place'],
      community: ['In a community or a venue', 'A club, a shop or a convention near you'],
      upcoming: 'Your next rendez-vous',
      rows: [
        ['Friday RPG night', 'Fri 16 Oct, 8:00 PM · Sept Chandelles'],
        ['Les Rencontres de Brumeval', 'Sat 17 Oct, 10:00 AM · partner'],
      ],
      presence: 'Who is there, when',
      presenceSub: 'Friday RPG night · Fri 16 Oct · up to 14 at once',
    },
    hours: ['6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'],

    steward: {
      title: 'My community',
      pick: 'La Confrérie des Sept Chandelles',
      sheet: 'The sheet',
      verified: 'Verified association',
      fields: [
        ['Name', 'La Confrérie des Sept Chandelles'],
        ['In one line', 'Brumeval’s roleplaying club'],
        ['When', 'Every Friday, 8:00 PM – 12:00 AM'],
      ],
      join: 'Join policy',
      howLabel: 'How people join',
      policies: [
        ['On approval', 'Everyone asks; an officer accepts or declines.'],
        ['Open', 'One tap is enough. For venues and open tables.'],
      ],
    },

    chat: {
      back: 'Back',
      title: 'The Crypts of Vaudrac',
      gm: 'GM: Elena',
      table: 'Table',
      map: 'Map',
      info: 'Campaign info',
      date: 'date to be set',
      tabs: ['Group chat', 'Recap', 'Scheduling'],
      session: 'Session 4 · Friday 9 Oct',
      messages: [
        ['Elena · GM', '7:02 PM', 'Welcome to the table! The time-slot vote is open in Scheduling.'],
        ['Lyra', '7:10 PM', 'Friday the 23rd works for me. I’ll bring the dice and the cake.', true],
        ['Bram', '7:14 PM', 'Same. I can also bring a second lamp for the map.'],
        ['Elena · GM', '7:20 PM', 'Perfect. The recap of session 3 is carved: read it before Friday.'],
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
        ['Fri 23 Oct (8:00 PM – 12:00 AM)', '5/5 free', '4 votes', 'common', true],
        ['Sat 24 Oct (8:00 PM – 12:00 AM)', '4/5 free', '1 vote', 'common'],
        ['Wed 21 Oct (7:00 – 11:00 PM)', '3/5 free', '0 votes', 'manual'],
      ],
      common: 'Shared slot',
      manual: 'Manual slot',
      vote: 'Vote',
      voted: 'Voted',
    },
    meeting: {
      head: 'Meeting point for 5 declared places',
      midpoint: 'Midpoint',
      vote: 'Venue vote (3)',
      venues: [
        ['store', 'Le Hibou Cartographe', 'Game bar · 650 m from the midpoint', '3 votes', true],
        ['dice', 'La Confrérie des Sept Chandelles', 'Association · open Wed and Fri', '2 votes'],
        ['users', 'Café des Trois Runes', 'Café · 1.1 km', '1 vote'],
      ],
      voteBtn: 'Vote',
      voted: 'Voted',
    },
  },
};
