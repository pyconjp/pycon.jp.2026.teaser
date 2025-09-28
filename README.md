# PyCon JP 2026ティザーサイト

PyCon JPのティザーサイトです。Next.jsで構築されています。

## 開発環境のセットアップ

### 必要な環境

- Node.js 18.x以上
- npm

### インストール

```bash
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

[http://localhost:3000](http://localhost:3000) でアクセスできます。

## ビルド

```bash
npm run build
# または
yarn build
```

## プロダクション環境での起動

```bash
npm start
# または
yarn start
```

## ディレクトリ構成

```
src/
├── app/
│   ├── _components/     # コンポーネント
│   │   ├── organisms/    # Header、Footer等
│   │   └── sections/     # 各セクション
│   ├── context/         # Reactコンテキスト
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # レイアウト
│   ├── page.tsx         # トップページ
│   └── variables.ts     # サイト設定（カンファレンス情報、メニュー等）
└── styles/              # スタイルファイル
```

## サイト情報の更新

カンファレンス情報やメニュー項目の更新は `src/app/variables.ts` を編集してください。

## 技術スタック

- [Next.js](https://nextjs.org/) 14.0.0
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## リンク

- [PyCon JP Blog](https://pyconjp.blogspot.com/)
- [行動規範](https://www.pycon.jp/policies/code-of-conduct.html)
