import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import PricingView, { type PricingCopy } from "@/components/pricing-view";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "料金とクレジット | Image to Layers",
  description:
    "20クレジットの無料枠から開始。クリエイターは月額10ドル（年12,000クレジット）、スタジオは月額30ドルでAPIとチームシート付き。",
  slug: "pricing",
  locale: "ja",
  available: ["en", "ja"],
});

const copy: PricingCopy = {
  chip: "クレジット制",
  h1: "Image to Layers の料金 — 席数ではなく、レイヤーの深さで支払う",
  lead: "残高は1つで、どの用途にも使えます。L2の商品写真もL4のキャラクターも同じ残高から引き、失敗した実行は自動で戻ります。",
  mostPopular: "いちばん人気",
  oneTime: "初回のみ",
  perMonth: "月額",
  noCard: "カード登録は不要です",
  tableKicker: "1回あたり",
  tableTitle: "分解1回にかかるクレジット",
  tableLead:
    "料金はレベルで決まります。レベルは実行前に選べるので、必要な編集に対して浅すぎない、いちばん浅いものを選んでください。",
  tableHead: ["レベル", "レイヤー数", "クレジット", "向いている作業"],
  tableNote: "年12,000クレジットのクリエイターなら、L2が約265回、L4のキャラクターが約133回ぶんです。",
  faqKicker: "よくある質問",
  faqTitle: "料金について",
  cta: {
    heading: "20クレジットから始める",
    body: "L2を2回試せば、自分の画像で出力を判断できます。カード登録も、営業の電話もありません。",
    primary: "レイヤースタジオを開く",
    secondary: { label: "レベルを比べる", href: "/ja/image-to-layers#levels" },
  },
  plans: [
    {
      name: "スターター",
      price: "$0",
      unit: "one-time",
      credits: "20クレジット",
      blurb: "L2の分解を2回、またはL3を1回。自分の画像で出力を確かめるのに十分な量です。",
      features: [
        "20クレジット（初回のみ）",
        "L1・L2レベル",
        "PNG・ZIP書き出し",
        "7日間のファイル保存",
        "カード登録不要",
      ],
      cta: "無料で始める",
      featured: false,
    },
    {
      name: "クリエイター",
      price: "$10",
      unit: "年払い $120",
      credits: "年12,000クレジット",
      blurb: "週に数枚を分解し、PSDで受け取りたいデザイナーやEC運営向け。",
      features: [
        "年12,000クレジット",
        "キャラクターのパーツ分解を含む全4レベル",
        "レイヤー付きPSDの書き出し",
        "30日間のファイル保存",
        "商用利用可",
        "優先メールサポート",
      ],
      cta: "クリエイターを選ぶ",
      featured: true,
    },
    {
      name: "スタジオ",
      price: "$30",
      unit: "年払い $360",
      credits: "年36,000クレジット",
      blurb: "カタログ、リグの制作ライン、クライアント案件。APIまで必要なチーム向け。",
      features: [
        "年36,000クレジット",
        "クリエイターのすべて",
        "チームシートと共有クレジット",
        "API アクセス",
        "1年間のファイル保存",
        "処理委託契約に対応",
      ],
      cta: "スタジオを選ぶ",
      featured: false,
    },
  ],
  faq: [
    {
      q: "1枚あたり何クレジットかかりますか？",
      a: "L1が30、L2が45、L3が60、L4のパーツ分解が90クレジットです。料金はレベルで決まり、レベルは実行前に確認できます。",
    },
    {
      q: "クレジットに有効期限はありますか？",
      a: "年額のクレジットは課金年度ぶんが割り当てられます。未使用分は翌年に繰り越されません。長期の案件には月額の追加購入をご利用ください。",
    },
    {
      q: "実行に失敗したらどうなりますか？",
      a: "出力が得られなかった失敗は、自動でクレジットが戻ります。レイヤー構成まで完了した実行は返金対象外ですが、個別に確認します。",
    },
    {
      q: "成果物は商用利用できますか？",
      a: "有料プランでは可能です。クライアントワークも含みます。ただし元画像の権利はご自身で確保してください。",
    },
    {
      q: "月払いはできますか？",
      a: "クリエイターとスタジオは表示価格の年払いです。短期の案件向けに月払いも用意していますので、お問い合わせください。",
    },
    {
      q: "チームで残高を共有できますか？",
      a: "スタジオにチームシートと共有クレジットが含まれます。カタログ作業を1人のアカウントに集約する必要はありません。",
    },
    {
      q: "返金の条件を教えてください。",
      a: "未使用の期間は購入から14日以内であれば返金します。消費済みのクレジットは返金対象外です。",
    },
  ],
};

export default function JaPricingPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Image to Layers",
            description: "AIによる画像のレイヤー分解と、レイヤー付きPSDの書き出し。",
            brand: { "@type": "Brand", name: site.name },
            offers: copy.plans.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.price.replace("$", ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${site.url}/ja/pricing`,
            })),
          },
          faqSchema(copy.faq),
          breadcrumbSchema([
            { name: "ホーム", path: "/ja" },
            { name: "料金", path: "/ja/pricing" },
          ]),
        ]}
      />
      <PricingView locale="ja" copy={copy} />
    </>
  );
}
