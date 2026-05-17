// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// fleur LP データファイル
// このファイルを編集するだけでLP上のパン情報が更新できます
//
// badge の値:
//   null       → バッジなし
//   "おすすめ"  → 金色バッジ
//   "新商品"    → 緑色バッジ
//
// ※ 先頭の商品が大きく表示されます（看板商品を先頭にしてください）
// ※ 画像は images/ フォルダに入れてから、ファイル名を指定してください
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const FLEUR_BREADS = [
  {
    name: "自家製カレーパン",
    desc: "タマネギ・パプリカたっぷりのキーマカレーを高温でからりと揚げた看板商品。サクッと歯切れよく、後引くおいしさ。",
    price: "¥ 280",
    image: "images/youtube_thumb.jpg",
    badge: null
  },
  {
    name: "タルティーヌ",
    desc: "フランスパンに手作りの具材をたっぷり。なすミートソース・きのこベーコン・トマトクリームチキン・ほうれん草ベーコンの4種展開。",
    price: null,
    image: "images/showcase-wide.jpg",
    badge: "おすすめ"
  },
  {
    name: "ベーコンエピ",
    desc: "麦の穂をかたどったクラシックなフランスパン。ベーコンの塩気と生地の香ばしさが絶妙。",
    price: null,
    image: "images/blog6.jpg",
    badge: null
  },
  {
    name: "パン屋のチーズケーキ",
    desc: "食パンにクリームをたっぷりのせた看板スイーツ系。パン屋ならではの食感が話題。",
    price: null,
    image: "images/news3.jpg",
    badge: null
  },
  {
    name: "サルシッチャ\nトマトソース",
    desc: "イタリアンソーセージとトマトソースの組み合わせ。季節の新商品として登場した人気メニュー。",
    price: null,
    image: "images/pan-almond.jpg",
    badge: "新商品"
  }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SNS アカウント情報
// url を実際のアカウントURLに変更してください
// active: false にすると非表示になります
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const FLEUR_SNS = [
  {
    name: "Instagram",
    handle: "@fleur_mito",
    url: "https://www.instagram.com/fleur_mito",
    icon: "instagram",
    active: true
  },
  {
    name: "X",
    handle: "@fleur_mito",
    url: "https://x.com/fleur_mito",
    icon: "x",
    active: true
  },
  {
    name: "Threads",
    handle: "@fleur_mito",
    url: "https://www.threads.net/@fleur_mito",
    icon: "threads",
    active: true
  },
  {
    name: "Facebook",
    handle: "fleur.boulangerie",
    url: "https://www.facebook.com/fleur.boulangerie",
    icon: "facebook",
    active: true
  }
];
