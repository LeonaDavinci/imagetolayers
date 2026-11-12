import type { DemoKey } from "./types";

/**
 * Japanese labels for the sample stacks. Kept beside the English data rather
 * than inline in layers.ts so the English copy stays the single source of the
 * layer order, bbox and z-index — only the words differ per locale.
 */
export const jaDemoLabels: Record<DemoKey, string> = {
  ecommerce: "スキンケア商品",
  cover: "雑誌風カバー",
  live2d: "リグ用キャラクター",
  youtube: "サムネイル",
};

export const jaKind: Record<string, string> = {
  Product: "商品",
  Prop: "小物",
  Foliage: "植物",
  Light: "光",
  Background: "背景",
  Subject: "被写体",
  Graphic: "図形",
  Texture: "質感",
  Parts: "パーツ",
  Text: "文字",
};

type LayerText = { name: string; note: string };

export const jaLayerText: Record<DemoKey, Record<number, LayerText>> = {
  ecommerce: {
    8: { name: "美容液ボトル", note: "すりガラスと黒いスポイトキャップ" },
    7: { name: "石材の台座", note: "トラバーチンの質感" },
    6: { name: "陶器のボウル", note: "マットな白釉" },
    5: { name: "ワッフルタオル", note: "折りたたんだ綿生地" },
    4: { name: "モンステラの葉", note: "逆光でも輪郭が明瞭" },
    3: { name: "落ち影", note: "分離できる柔らかい影" },
    2: { name: "漆喰の背景", note: "ボトルの背後を再構成" },
  },
  cover: {
    6: { name: "人物シルエット", note: "腕を上げたフラットな人物" },
    5: { name: "円形の図形", note: "粒子感のある黄土色の円" },
    4: { name: "破いた紙", note: "ちぎり跡が円に重なる" },
    3: { name: "グリッド線", note: "等間隔の細い罫線" },
    2: { name: "下部のカラーブロック", note: "ティール色の帯" },
    1: { name: "紙の背景", note: "紙の質感を再構成" },
  },
  live2d: {
    9: { name: "前髪", note: "前髪・サイド・長い銀髪" },
    8: { name: "角と星のクリップ", note: "2本の角と星の飾り" },
    7: { name: "顔", note: "頭部のベースと肌" },
    6: { name: "目", note: "虹彩・ハイライト・まつげ" },
    5: { name: "羽織", note: "白とティールの羽織、黒い袖" },
    4: { name: "トップスとリボンベルト", note: "黒のトップスに黄色のリボン" },
    3: { name: "脚とストッキング", note: "片脚は素足、片脚はニーハイ" },
    2: { name: "ブーツ", note: "左右で色違いのハイカット" },
    1: { name: "しっぽ", note: "リボンで結んだ細いしっぽ" },
    0: { name: "白背景", note: "リグ前に削除する背景" },
  },
  youtube: {
    6: { name: "見出し文字", note: "画像化された文字でテキストではない" },
    5: { name: "出演者", note: "手振り付きで切り抜き" },
    4: { name: "赤い矢印", note: "視線を導く矢印" },
    3: { name: "黄色い図形", note: "枠のアクセント" },
    2: { name: "グローとビネット", note: "雰囲気を作る光" },
    1: { name: "グラデーション背景", note: "人物の背後を再構成" },
  },
};

export const jaLevelMeta = {
  L1: { label: "コア", range: "2〜4レイヤー", blurb: "被写体と背景、そして実際に動かしたい1枚だけ。" },
  L2: { label: "スタンダード", range: "4〜6レイヤー", blurb: "商品と小物、再構成した背景。EC の標準設定。" },
  L3: { label: "ディテール", range: "6〜9レイヤー", blurb: "文字・図形・奥行きグループまで。表紙とサムネイル向け。" },
  L4: { label: "キャラクター", range: "9レイヤー以上", blurb: "髪・顔・目・服・手足。Live2D と Spine のリグ用パーツ。" },
} as const;

export function layerText(demo: DemoKey, n: number, locale: "en" | "ja") {
  return locale === "ja" ? jaLayerText[demo]?.[n] : undefined;
}

export function kindLabel(kind: string, locale: "en" | "ja") {
  return locale === "ja" ? (jaKind[kind] ?? kind) : kind;
}

export function demoLabel(demo: DemoKey, fallback: string, locale: "en" | "ja") {
  return locale === "ja" ? jaDemoLabels[demo] : fallback;
}
