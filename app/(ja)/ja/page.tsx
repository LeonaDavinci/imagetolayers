import type { Metadata } from "next";
import Link from "next/link";
import LayerWorkbench from "@/components/layer-workbench";
import JsonLd from "@/components/json-ld";
import { CtaBand, DemoStrip, SectionHeading, TrustRow } from "@/components/ui";
import { demoAssets } from "@/lib/content/layers";
import { layerText } from "@/lib/content/layers-ja";
import { buildMetadata, faqSchema, softwareSchema } from "@/lib/seo";
import { uiCopy } from "@/lib/ui-copy";
import { localeHref } from "@/lib/i18n";

export const metadata: Metadata = buildMetadata({
  title: "Image to Layers — 画像をレイヤーに分解するAIツール",
  description:
    "画像をレイヤーに分解するAIツール。商品画像・表紙・Live2Dキャラ・YouTubeサムネイルに対応し、透過PNG・ZIP・レイヤー付きPSDで書き出せます。無料枠20クレジット付き。",
  locale: "ja",
  available: ["en", "ja"],
});

const homeFaq = [
  {
    q: "Image to Layers は何をするツールですか？",
    a: "1枚の画像を、被写体・小物・文字・図形・背景といった編集できるレイヤーに分解し、透過PNG・ZIP・レイヤー付きPSDで書き出すツールです。背景は削除ではなく、レイヤーとして再構成されます。",
  },
  {
    q: "レイヤーレベルとは何ですか？",
    a: "スライダーではなく、分け方の目標値です。L1は2〜4枚、L2は4〜6枚、L3は6〜9枚、L4はキャラクターのリグ用に9枚以上。それぞれ違う編集判断のために作られています。",
  },
  {
    q: "背景除去とは何が違いますか？",
    a: "背景除去は背景を捨てて1枚の切り抜きを返します。レイヤー分解は背景を独立したレイヤーとして作り直すので、被写体を動かしても後ろに穴が空きません。",
  },
  {
    q: "隠れていた部分は復元されますか？",
    a: "周囲の質感や光から推定して繋ぎます。撮影されなかった画素なので、復元ではなく再構成です。自然に見えることは多いですが、完全に同じにはなりません。",
  },
  {
    q: "画像内の文字は編集できますか？",
    a: "テキストとしては扱えません。L3以上で文字領域が1つのレイヤーとして分離されるので、削除・移動・差し替えができます。",
  },
  {
    q: "書き出せる形式は？",
    a: "透過PNG（1レイヤー1ファイル）、奥行き順を含むZIP、そしてPhotoshop・Affinity・Photopea・GIMPで開けるレイヤー付きPSDです。",
  },
  {
    q: "無料で試せますか？",
    a: "登録時に20クレジットが付きます。L2の分解なら2回ぶん。クレジットカードは不要です。",
  },
];

const pillars = [
  {
    slug: "product-image-to-layers",
    demo: "ecommerce" as const,
    level: "L2",
    title: "商品画像",
    body: "商品・小物・背景を分けて、1回の撮影を各モールの規格へ。",
    pos: "50% 50%",
    alt: "スキンケア商品の写真を、商品・小物・背景のレイヤーに分解（Image to Layers）",
  },
  {
    slug: "cover-to-layers",
    demo: "cover" as const,
    level: "L3",
    title: "表紙・ポスター",
    body: "図版はそのまま、文字だけを外して、判型を変えて組み直す。",
    pos: "50% 40%",
    alt: "雑誌風カバーを、図版・文字・背景のレイヤーに分解（Image to Layers）",
  },
  {
    slug: "character-to-layers",
    demo: "live2d" as const,
    level: "L4",
    title: "キャラクター・Live2D",
    body: "髪・顔・目・服・しっぽを、奥行き順を保った透過PNGで。",
    pos: "50% 0%",
    alt: "キャラクターを髪・顔・目・服のレイヤーに分解（Image to Layers）",
  },
  {
    slug: "youtube-thumbnail-to-layers",
    demo: "youtube" as const,
    level: "L3",
    title: "YouTube サムネイル",
    body: "映える顔は残したまま、見出しだけを差し替えて検証する。",
    pos: "55% 45%",
    alt: "YouTube サムネイルを、見出し・人物・背景のレイヤーに分解（Image to Layers）",
  },
];

const facts = [
  { label: "書き出し", value: "PSD・ZIP・PNG" },
  { label: "入力", value: "JPG・PNG・WebP／10MB" },
  { label: "奥行き順", value: "レイヤーごとに保持" },
  { label: "保存期間", value: "7日後に自動削除" },
];

const plans = [
  {
    name: "スターター",
    price: "$0",
    note: "20クレジット（初回のみ）",
    features: ["7日間のファイル保存", "L1・L2レベル", "PNG・ZIP書き出し"],
    cta: "無料で始める",
  },
  {
    name: "クリエイター",
    price: "$10",
    note: "月額・年払い $120",
    features: ["年12,000クレジット", "全4レベル", "PSD書き出し", "30日間の保存", "商用利用可"],
    cta: "クリエイターを選ぶ",
    featured: true,
  },
  {
    name: "スタジオ",
    price: "$30",
    note: "月額・年払い $360",
    features: ["年36,000クレジット", "優先処理", "チームシート", "1年間の保存", "API アクセス"],
    cta: "スタジオを選ぶ",
  },
];

export default function JaHomePage() {
  const t = uiCopy("ja");

  return (
    <>
      <JsonLd
        data={[
          softwareSchema({
            name: "Image to Layers",
            description: "商品画像・表紙・Live2Dキャラクター・YouTubeサムネイルのためのAIレイヤー分解。",
            slug: "",
            credits: 45,
            locale: "ja",
          }),
          faqSchema(homeFaq),
        ]}
      />

      <section className="pt-12 pb-10 sm:pt-16">
        <div className="container-wide">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="chip">
              <span className="chip-dot" />
              プレビュー版 · 分解はシミュレーション
            </span>
            <h1 className="mt-5 tracking-[-0.032em]">
              <span className="block text-[29px] font-semibold leading-[1.14] text-[#101828] sm:text-[42px]">
                画像をレイヤーに分解する
              </span>
              <span className="mt-2 block text-[17px] font-normal leading-[1.35] text-[#46536a] sm:text-[24px]">
                1枚の画像を、編集できる透明レイヤーへ
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.8] text-[#46536a] sm:text-[16px]">
              被写体・小物・文字・背景を分け、隠れていた背景まで作り直します。下から用途を選ぶと、その作業に合ったレイヤーレベルが決まります。
            </p>
            <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row sm:items-center">
              <Link href={localeHref("ja", "app")} className="btn btn-primary">
                画像を分解してみる
              </Link>
              <Link href={localeHref("ja", "image-to-layers")} className="btn btn-ghost">
                仕組みと料金
              </Link>
            </div>
            <div className="mt-5 flex justify-center">
              <TrustRow
                items={["クレジットカード不要", "20クレジット付き", "7日後に自動削除", "学習に使われません"]}
              />
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-[14.5px] font-semibold text-[#101828]">用途から始める</h2>
              <Link href={localeHref("ja", "image-to-layers")} className="text-[12px] text-[#1d4ed8] hover:underline">
                用途ごとにレイヤーレベルが変わります →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={localeHref("ja", pillar.slug)}
                  className="card-link group flex overflow-hidden rounded-[12px] border bg-white sm:flex-col"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div
                    className="relative aspect-[4/3] w-[132px] shrink-0 overflow-hidden border-r sm:w-full sm:border-b sm:border-r-0"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={demoAssets[pillar.demo].src}
                      alt={pillar.alt}
                      width={demoAssets[pillar.demo].width}
                      height={demoAssets[pillar.demo].height}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      style={{ objectPosition: pillar.pos }}
                    />
                    <span
                      className="absolute left-2 top-2 rounded-[5px] border bg-white/95 px-1.5 py-0.5 text-[10px] font-medium text-[#344054]"
                      style={{ borderColor: "var(--line)" }}
                    >
                      {pillar.level}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-3.5">
                    <h3 className="text-[13.5px] font-medium leading-snug text-[#101828]">{pillar.title}</h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-[#5b6879]">{pillar.body}</p>
                    <span className="mt-auto pt-2.5 text-[11px] text-[#1d4ed8]">開く →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-11 border-t pt-8" style={{ borderColor: "var(--line)" }}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-[14.5px] font-semibold text-[#101828]">この場で試せます</h2>
              <span className="text-[11.5px] text-[#6b7280]">
                サンプルは即座に読み込まれます · ファイルはブラウザ内に留まります
              </span>
            </div>
            <LayerWorkbench demo="ecommerce" locale="ja" />
          </div>

          <dl
            className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border bg-[#e5e8ec] lg:grid-cols-4"
            style={{ borderColor: "var(--line)" }}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white px-4 py-3">
                <dt className="text-[10.5px] font-medium uppercase tracking-[0.11em] text-[#6b7280]">
                  {fact.label}
                </dt>
                <dd className="mt-0.5 text-[12.5px] text-[#344054]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-soft py-14" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="違い"
              title="切り抜きは背景を捨てる。レイヤーは残す。"
              lead="背景除去は、被写体を透過画像にして背景を消します。被写体を動かすと、元いた場所に影の形をした穴が空きます。背景がもう存在しないからです。"
            />
            <ul className="space-y-4">
              {[
                {
                  t: "復元ではなく、再構成",
                  d: "背景レイヤーが被写体の下に続くので、商品をずらしても部屋は部屋のまま残ります。",
                },
                {
                  t: "すべての要素が独立",
                  d: "小物・面・文字・図形が、奥行き順を持つ別レイヤーとして出てきます。",
                },
                {
                  t: "外に持ち出せる",
                  d: "PNG・ZIP・レイヤー付きPSD。Photoshop、Affinity、Photopea、Cubism、Spine で開けます。",
                },
              ].map((item, i) => (
                <li key={item.t} className="flex gap-3">
                  <span className="step-num mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[14.5px] font-medium text-[#101828]">{item.t}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-[#5b6879]">{item.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={localeHref("ja", "image-to-layers")} className="btn btn-ghost btn-sm">
                分解の仕組みを見る
              </Link>
            </div>
          </div>
          <div>
            <div
              className="overflow-hidden rounded-[12px] border bg-white"
              style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-sm)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={demoAssets.ecommerce.src}
                alt="商品写真を7つの編集可能なレイヤーに分解（Image to Layers）"
                className="w-full"
                width={demoAssets.ecommerce.width}
                height={demoAssets.ecommerce.height}
                loading="lazy"
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {demoAssets.ecommerce.layers.slice(0, 4).map((layer) => (
                <div
                  key={layer.n}
                  className="flex items-center gap-2 rounded-[8px] border bg-white px-2.5 py-2"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="text-[10px] tabular-nums text-[#6b7280]">
                    {String(layer.n).padStart(2, "0")}
                  </span>
                  <span className="truncate text-[11.5px] text-[#344054]">
                    {layerText("ecommerce", layer.n, "ja")?.name ?? layer.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="レイヤーレベル"
            title="細かさより先に、深さを選ぶ"
            lead="レイヤーは多ければ良いわけではありません。実際に判断する回数を超えると、余ったレイヤーは断片と重複で埋まります。"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(["L1", "L2", "L3", "L4"] as const).map((key) => {
              const meta = t.levels[key];
              const href =
                key === "L1" || key === "L2"
                  ? `${localeHref("ja", "image-to-layers")}#levels`
                  : key === "L3"
                    ? `${localeHref("ja", "cover-to-layers")}`
                    : localeHref("ja", "character-to-layers");
              return (
                <Link
                  key={key}
                  href={href}
                  className="card-link rounded-[12px] border bg-white p-4"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.11em] text-[#6b7280]">{key}</span>
                    <span className="text-[11px] tabular-nums text-[#6b7280]">{meta.credits} cr</span>
                  </div>
                  <h3 className="mt-1.5 text-[15.5px] font-medium text-[#101828]">{meta.short}</h3>
                  <p className="mt-0.5 text-[11.5px] text-[#1d4ed8]">{meta.range}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#5b6879]">{meta.blurb}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container-wide">
          <SectionHeading
            kicker="作例"
            title="4枚の画像、4つのつまずき"
            lead="どれも、自分の画像を入れる前に知っておきたい崩れ方を持っています。"
          />
          <DemoStrip locale="ja" />
        </div>
      </section>

      <section className="section-soft py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="手順"
            title="アップロードから書き出しまで4ステップ"
            lead="プロジェクト作成もテンプレートも不要。1枚入れて、レイヤー構成を受け取るだけ。"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "アップロード", d: "JPG・PNG・WebP、10MBまで。サンプルなら即座に試せます。" },
              { t: "レベルを選ぶ", d: "L1〜L4。迷ったら、その用途の推奨レベルから。" },
              { t: "レイヤーを確認", d: "表示を切り替えて、再構成された領域と境界をチェック。" },
              { t: "書き出す", d: "透過PNG、奥行き順付きZIP、レイヤー付きPSD。" },
            ].map((step, i) => (
              <div key={step.t} className="rounded-[12px] border bg-white p-4" style={{ borderColor: "var(--line)" }}>
                <span className="step-num">{i + 1}</span>
                <h3 className="mt-3 text-[14.5px] font-medium text-[#101828]">{step.t}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#5b6879]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="料金"
            title="席数ではなく、クレジット"
            lead="どの用途でも残高は1つ。失敗した実行は自動で戻り、完了した実行は戻りません。"
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-[14px] border bg-white p-5"
                style={{
                  borderColor: plan.featured ? "#2563EB" : "var(--line)",
                  boxShadow: plan.featured ? "0 0 0 1px #2563EB, var(--shadow-md)" : "var(--shadow-xs)",
                }}
              >
                {plan.featured ? (
                  <span className="absolute right-4 top-4 rounded-[5px] bg-[#EFF4FF] px-2 py-0.5 text-[10.5px] font-medium text-[#1d4ed8]">
                    いちばん人気
                  </span>
                ) : null}
                <p className="text-[12px] font-medium uppercase tracking-[0.11em] text-[#6b7280]">{plan.name}</p>
                <p className="mt-2 flex items-baseline gap-1 text-[30px] font-semibold tracking-[-0.03em] text-[#101828]">
                  {plan.price}
                  <span className="text-[12px] font-normal text-[#6b7280]">{plan.price === "$0" ? "" : "/月"}</span>
                </p>
                <p className="mt-0.5 text-[11.5px] text-[#6b7280]">{plan.note}</p>
                <ul className="mt-4 space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] text-[#3f4c60]">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="mt-[3px] shrink-0"
                      >
                        <path
                          d="M2.5 7.4L5.4 10.2L11.5 4"
                          stroke="#2563EB"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={localeHref("ja", "pricing")}
                  className={`btn mt-5 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11.5px] text-[#6b7280]">
            表示価格は米ドル。いつでも解約できます。失敗した分解は自動で返金されます。
          </p>
        </div>
      </section>

      <section className="py-14" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container-narrow">
          <SectionHeading kicker="よくある質問" title="アップロード前に知っておきたいこと" />
          <div className="space-y-2">
            {homeFaq.map((item) => (
              <details key={item.q} className="faq">
                <summary>{item.q}</summary>
                <div className="faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-2">
        <div className="container-wide">
          <CtaBand
            heading="2分で、最初の1枚を分解する"
            body="サンプルはアカウントなしで読み込まれます。準備ができたら自分のファイルを入れて、構成が変わっても使えるレイヤーを持ち帰ってください。"
            primary={{ label: "レイヤースタジオを開く", href: localeHref("ja", "app") }}
            secondary={{ label: "作例を見る", href: localeHref("ja", "image-to-layers") }}
            footnote="クレジットカード不要 · 登録で20クレジット · ファイルは7日後に自動削除"
          />
        </div>
      </section>
    </>
  );
}
