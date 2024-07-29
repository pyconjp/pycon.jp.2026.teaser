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
  name: 'PyCon JP 2024',
  dateJa: '2024年09月27日-2024年09月29日',
  dateEn: 'September 27-29, 2024',
  locationJa: 'TOC有明コンベンションホール',
  locationEn: 'TOC Ariake Convention Hall',
}

export const Buttons: Button[] = [
  {
    labelEn: 'Tickets now on sale',
    labelJa: 'チケット販売中！',
    status: 'available',
    links: [
      {
        url: 'https://pyconjp.connpass.com/event/324211',
        label: 'See More',
      }
    ],
  },
  {
    labelEn: 'Won\'t you be a speaker?',
    labelJa: '登壇者募集',
    status: 'closed',
    links: [
      {
        url: 'https://pretalx.com/pyconjp2024/cfp',
        label: 'Closed',
      }
    ],
  },
  {
    labelEn: 'We need volunteers',
    labelJa: '主催メンバー(スタッフ)募集中！',
    status: 'available',
    links: [
      {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScpeebt9ZleMYAr_cq68vOIpFEqUKs5l424mpUgJgqwacbw1g/viewform',
        label: 'See More',
      }
    ],
  },
  {
    labelEn: 'Please be our sponsor!',
    labelJa: 'スポンサー募集中',
    status: 'available',
    links: [
      {
        url: 'https://pyconjp.blogspot.com/2024/04/call-for-sponsorsip-ja.html',
        label: 'See More (日本語)',
      },
      {
        url: 'https://pyconjp.blogspot.com/2024/04/call-for-sponsorship-en.html',
        label: 'See More (English)',
      }
    ],
  },
]

export const MenuItems: MenuItem[] = [
  {
    name: 'NEWS',
    url: 'https://pyconjp.blogspot.com/search/label/pyconjp2024',
  },
  {
    name: 'VOLUNTEER',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScpeebt9ZleMYAr_cq68vOIpFEqUKs5l424mpUgJgqwacbw1g/viewform',
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
    url: 'https://pyconjp.connpass.com/event/324211/',
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