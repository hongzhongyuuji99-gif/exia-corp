'use client'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 150)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050a14 0%, #0a1628 40%, #0d2a47 100%)' }}
    >
      {/* 背景の青いグロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(37,99,235,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center px-6 w-full">
        {/* タグライン */}
        <p
          className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em] mb-10"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          EXIA — CHANGE YOUR LIFE
        </p>

        {/* 副業で、 */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'scale(1)' : 'scale(2.2)',
            filter: phase >= 1 ? 'blur(0px)' : 'blur(8px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1), filter 1s ease',
          }}
        >
          <span className="block font-black text-white leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 9rem)' }}>
            副業で、
          </span>
        </div>

        {/* 人生を変える。 */}
        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'scale(1)' : 'scale(2.4)',
            filter: phase >= 2 ? 'blur(0px)' : 'blur(12px)',
            transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1), filter 1s ease',
          }}
        >
          <span className="block font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 9rem)', color: '#60a5fa' }}>
            人生を変える。
          </span>
        </div>

        {/* サブテキスト */}
        <p
          className="text-gray-400 text-lg mt-14 max-w-xl mx-auto leading-relaxed"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          海外輸出コンサルティングで、副業の可能性を最大化。<br />
          あなたの挑戦を、私たちが全力で支えます。
        </p>

        {/* スクロールインジケーター */}
        <div
          className="mt-20 flex flex-col items-center gap-2"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transition: 'opacity 1s ease 0.4s',
          }}
        >
          <span className="text-gray-500 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" style={{ animation: 'pulse 2s infinite' }} />
        </div>
      </div>
    </section>
  )
}
