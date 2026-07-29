'use client'
import { useEffect, useState } from 'react'

const SLIDES = [
  {
    label: 'チーム / 社内風景',
    src: null as string | null,
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
  },
  {
    label: 'ミーティングの様子',
    src: null as string | null,
    gradient: 'linear-gradient(135deg, #0d2a47 0%, #1e3a5f 100%)',
  },
  {
    label: 'オフィス環境',
    src: null as string | null,
    gradient: 'linear-gradient(135deg, #111827 0%, #1e3a5f 100%)',
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
    <section className="relative overflow-hidden" style={{ height: '65vh', minHeight: '400px' }}>
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: slide.src ? undefined : slide.gradient,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        >
          {slide.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={slide.src} alt={slide.label} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center select-none">
              <p className="text-white/20 text-2xl font-bold">{slide.label}</p>
              <p className="text-white/15 text-sm mt-2 tracking-widest uppercase">Coming Soon</p>
            </div>
          )}
        </div>
      ))}

      {/* スライド番号 */}
      <div className="absolute bottom-8 right-8 text-white/50 text-sm font-bold tracking-widest pointer-events-none">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>

      {/* プログレスバー型インジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === current ? '36px' : '8px',
              height: '8px',
              background: i === current ? 'white' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
