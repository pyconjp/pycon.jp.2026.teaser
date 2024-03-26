export type Button = ({
  labelEn: string,
  labelJa: string,
} & ({
  status: 'comingSoon',
  url: null,
} | {
  status: 'available' | 'closed',
  url: string,
}));

export type MenuItem = {
  name: string,
  url: string | null,
}

// ここから下を編集する

export const Conference = {
  name: 'PyCon JP 2024',
  dateJa: '2024年09月27日-2024年09月29日',
  dateEn: 'September 27-29, 2024',
  locationJa: '',
  locationEn: '',
}

export const Buttons: Button[] = [
  {
    labelEn: 'Won\'t you be a speaker?',
    labelJa: '登壇者募集(準備中)',
    status: 'comingSoon',
    url: null,
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集中！',
    status: 'available',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScpeebt9ZleMYAr_cq68vOIpFEqUKs5l424mpUgJgqwacbw1g/viewform',
  },
  {
    labelEn: 'Please be our sponsor!',
    labelJa: 'スポンサー募集(準備中)',
    status: 'comingSoon',
    url: null,
  },
]

export const MenuItems: MenuItem[] = [
  {
    name: 'NEWS',
    url: 'https://pyconjp.blogspot.com/search/label/pyconjp2024',
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
    url: 'https://drive.google.com/file/d/1iNF7VvDCd_gWDsSn2i5U8FB1IQWkWOM9/view',
  },
]