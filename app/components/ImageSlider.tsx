'use client'
import { useEffect, useState } from 'react'

const SLIDES = [
  {
    label: 'MEETING',
    heading: '一人一人に、\n真剣に向き合う。',
    body: 'お客様の状況・目標・不安を丁寧にヒアリングし、その人だけの最適なサポートをご提案します。',
    src: '/meeting.jpg.png',
  },
  {
    label: 'OFFICE',
    heading: '整った環境で、\n最高の仕事を。',
    body: '快適なオフィス環境のもと、お客様へのサービス品質を日々追求し続けています。',
    src: '/offsu.jpg.png',
  },
  {
    label: 'TEAM',
    heading: 'チームで、\n結果を出す。',
    body: '一人ひとりの力を合わせ、お客様の副業成功に向けてチーム一丸で取り組みます。',
    src: '/syanai.jpg.png',
  },
]

export function ImageSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ height: '60vh', minHeight: '420px' }}>
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ opacity: i === current ? 1 : 0, transition: 'opacity 1.2s ease' }}
        >
          {/* ── スマホ: 画像 + グラデーションオーバーレイ + 下部テキスト ── */}
          <div className="md:hidden h-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.label} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.93) 45%, rgba(10,22,40,0.2) 100%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 text-white">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{slide.label}</p>
              <h2 className="text-xl font-black leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>
                {slide.heading}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{slide.body}</p>
            </div>
          </div>

          {/* ── デスクトップ: テキスト左 + 画像右 ── */}
          <div className="hidden md:flex h-full">
            <div
              className="flex flex-col justify-center px-16 py-12 flex-shrink-0"
              style={{ width: '42%', background: '#0a1628' }}
            >
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">{slide.label}</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-white leading-tight mb-6"
                style={{ whiteSpace: 'pre-line' }}
              >
                {slide.heading}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">{slide.body}</p>
            </div>
            <div className="flex-1 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.label} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ))}

      {/* インジケーター */}
      <div className="absolute bottom-6 left-6 md:left-16 flex gap-3 items-center z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === current ? '36px' : '8px',
              height: '8px',
              background: i === current ? 'white' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-6 right-6 text-white/40 text-sm font-bold tracking-widest z-10">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </section>
  )
}
