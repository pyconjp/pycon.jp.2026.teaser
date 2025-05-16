export type Button = ({
  labelEn: string,
  labelJa: string,
} & ({
  status: 'comingSoon',
  links: null,
} | {
  status: 'available' | 'closed',
  links: {
    url: string,
    label: string,
  }[],
}));

export type MenuItem = {
  name: string,
  url: string | null,
}

// ここから下を編集する

export const Conference = {
  name: 'PyCon JP 2025',
  conferenceDateJa: '2025年09月26日-2025年09月27日 (カンファレンス)',
  sprintDateJa: '2025年09月28日 (スプリント)',
  conferenceDateEn: 'September 26-27, 2025 (Conference Days)',
  sprintDateEn: 'September 28, 2025 (Sprint Day)',
  locationJa: '広島国際会議場',
  locationEn: 'International Conference Center Hiroshima',
}

export const Buttons: Button[] = [
  {
    labelEn: 'Tickets',
    labelJa: '参加チケット\n準備中です',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'Won\'t you be a speaker?',
    labelJa: '登壇者募集\n準備中です',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集\n詳しくは下のボタンから',
    status: 'available',
    links: [
      {label: 'See More', url: 'https://pyconjp.blogspot.com/2024/12/call-for-organizing-members-ja.html'}
    ],
  },
  {
    labelEn: 'Please be our sponsor!\n(Coming Soon)',
    labelJa: 'スポンサー募集を準備中です\nお問い合わせは下のボタンから',
    status: 'available',
    links: [
      {label: 'Contact Us', url: 'mailto:2025-sponsor@pyconjp.atlassian.net'}
    ],
  },
]

export const MenuItems: MenuItem[] = [
  {
    name: 'NEWS',
    url: 'https://pyconjp.blogspot.com/search/label/pyconjp2025',
  },
  {
    name: 'VOLUNTEER',
    url: 'https://pyconjp.blogspot.com/2024/12/call-for-organizing-members-ja.html',
  },
  {
    name: 'PROPOSAL',
    url: null,
  },
  {
    name: 'SPONSOR',
    url: null,
  },
  {
    name: 'TICKET',
    url: null,
  },
  {
    name: 'REVIEWER',
    url: null,
  },
  {
    name: 'CODE OF CONDUCT',
    url: 'https://www.pycon.jp/policies/code-of-conduct.html',
  },
]