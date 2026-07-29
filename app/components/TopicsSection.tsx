'use client'
import { useState } from 'react'

// 月次売上データ（2アカウント合算・概算）
const MONTHLY = [
  { m: 'Jan', v: 500 },
  { m: 'Feb', v: 1000 },
  { m: 'Mar', v: 1500 },
  { m: 'Apr', v: 1000 },
  { m: 'May', v: 1500 },
  { m: 'Jun', v: 5500 },
  { m: 'Jul', v: 4500 },
  { m: 'Aug', v: 5000 },
  { m: 'Sep', v: 13000 },
  { m: 'Oct', v: 18500 },
  { m: 'Nov', v: 14000 },
  { m: 'Dec', v: 11000 },
]
const MAX_V = 18500

function SalesChart() {
  return (
    <div className="mt-2">
      <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Monthly Sales (USD) — 2 Accounts Combined</p>
      <div className="flex items-end gap-1" style={{ height: '160px' }}>
        {MONTHLY.map((d) => (
          <div key={d.m} className="flex flex-col items-center flex-1 gap-1">
            <div
              className="w-full rounded-t-sm transition-all"
              style={{
                height: `${(d.v / MAX_V) * 140}px`,
                background: d.v >= 10000 ? '#2563eb' : '#bfdbfe',
              }}
            />
            <span className="text-[9px] text-gray-400">{d.m}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-3 border-t border-gray-100 pt-3">
        <span>累計合計 $85,977</span>
        <span>月間ピーク $18,500</span>
      </div>
    </div>
  )
}

type Card = {
  date: string
  tag: string
  tagBg: string
  title: string
  image: string
  modal: {
    heading: string
    body: string
    chart: boolean
    link: string | null
    linkLabel?: string
  }
}

const CARDS: Card[] = [
  {
    date: '2026.07',
    tag: '実績',
    tagBg: 'bg-yellow-500',
    title: '顧客累計売上が $85,000 を突破しました',
    image: '/2026-06-28_013615.png',
    modal: {
      heading: '顧客累計売上 $85,000突破',
      body: '代行サービス開始から顧客の合計売上が $85,977（約¥1,330万）を達成。2アカウントの月間最高売上は $18,500 を記録しており、現在11名の顧客を代行サポート中です。',
      chart: true,
      link: null,
    },
  },
  {
    date: '2026.07',
    tag: 'サービス',
    tagBg: 'bg-blue-700',
    title: 'eBay副業支援サービスサイトを公開しました',
    image: '/offsu.jpg.png',
    modal: {
      heading: '副業支援サービスサイト公開',
      body: '出品代行・在庫管理・発送代行をワンストップで提供するEXIAのサービスサイトを公開しました。成果報酬型で固定費0円、副業初心者の方でも安心してスタートいただけます。',
      chart: false,
      link: 'https://my-company-hp.vercel.app',
      linkLabel: 'サービスサイトを見る',
    },
  },
  {
    date: '2026.04',
    tag: 'お知らせ',
    tagBg: 'bg-gray-600',
    title: '株式会社EXIAを設立しました',
    image: '/syanai.jpg.png',
    modal: {
      heading: '株式会社EXIA 設立',
      body: '2026年4月、「副業で人生を変える」というビジョンのもと、株式会社EXIAを設立しました。海外輸出コンサルティングを軸に、一人でも多くの方が安心して副業を始められる環境づくりに取り組んでいきます。',
      chart: false,
      link: null,
    },
  },
]

export function TopicsSection() {
  const [active, setActive] = useState<number | null>(null)
  const activeCard = active !== null ? CARDS[active] : null

  return (
    <section className="py-28 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">TOPICS</p>
        <h2 className="text-4xl font-black text-gray-900 mb-16">実績・お知らせ</h2>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-left group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-gray-400 text-sm">{card.date}</span>
                  <span className={`text-white text-xs font-bold px-2 py-0.5 rounded ${card.tagBg}`}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-gray-900 font-bold leading-snug group-hover:text-blue-700 transition-colors">
                  {card.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* モーダル */}
      {activeCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(0,0,0,0.55)' }}
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-10 shadow-2xl max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ヘッダー */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <span className={`text-white text-xs font-bold px-2 py-0.5 rounded ${activeCard.tagBg}`}>
                  {activeCard.tag}
                </span>
                <span className="text-gray-400 text-sm">{activeCard.date}</span>
              </div>
              <button
                onClick={() => setActive(null)}
                className="text-gray-300 hover:text-gray-700 text-3xl leading-none transition-colors"
              >
                ×
              </button>
            </div>

            <h2 className="text-2xl font-black text-gray-900 mb-5 leading-snug">
              {activeCard.modal.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{activeCard.modal.body}</p>

            {activeCard.modal.chart && <SalesChart />}

            {activeCard.modal.link && (
              <a
                href={activeCard.modal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-800 transition mt-6"
              >
                {activeCard.modal.linkLabel ?? 'くわしく見る'} →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
