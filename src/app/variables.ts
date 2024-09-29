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
  dateJa: '2025年09月26日-2025年09月27日',
  dateEn: 'September 26-27, 2025',
  locationJa: '広島国際会議場',
  locationEn: 'International Conference Center Hiroshima',
}

export const Buttons: Button[] = [
  {
    labelEn: 'Tickets',
    labelJa: '参加チケット',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'Won\'t you be a speaker?',
    labelJa: '登壇者募集',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集',
    status: 'comingSoon',
    links: null,
  },
  {
    labelEn: 'Please be our sponsor!',
    labelJa: 'スポンサー募集',
    status: 'comingSoon',
    links: null,
  },
]

export const MenuItems: MenuItem[] = [
  {
    name: 'NEWS',
    url: 'https://pyconjp.blogspot.com/search/label/pyconjp2025',
  },
  {
    name: 'VOLUNTEER',
    url: null,
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