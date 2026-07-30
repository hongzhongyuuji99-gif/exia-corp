import { HeroSection } from './components/HeroSection'
import { ImageSlider } from './components/ImageSlider'
import { TopicsSection } from './components/TopicsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ナビゲーション */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="EXIA" className="h-10 w-10 object-contain" style={{mixBlendMode: "multiply"}} />
            <span className="text-2xl font-black tracking-tight text-gray-900">EXIA</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            <a href="#vision" className="hover:text-blue-700 transition">ビジョン</a>
            <a href="#service" className="hover:text-blue-700 transition">事業内容</a>
            <a href="#message" className="hover:text-blue-700 transition">代表メッセージ</a>
            <a href="#company" className="hover:text-blue-700 transition">会社概要</a>
            <a href="#contact" className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">お問い合わせ</a>
          </nav>
          {/* モバイル用CTAボタン */}
          <a href="#contact" className="md:hidden bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-full">
            お問い合わせ
          </a>
        </div>
      </header>

      {/* ヒーロー（フルスクリーンアニメーション） */}
      <HeroSection />

      {/* 社内風景スライダー */}
      <ImageSlider />

      {/* ビジョン */}
      <section id="vision" className="bg-gray-50 py-16 px-5 md:py-28 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">VISION</p>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            CHANGE YOUR LIFE
          </h2>
          <div className="w-16 h-1 bg-blue-700 mb-10" />
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
            副業で人生が変わる——そんな体験を、一人でも多くの人に届けたい。<br /><br />
            EXIAは「海外輸出」という可能性に満ちたフィールドで、
            リスクなく・手間なく・確実に稼げる仕組みを追求し続けています。
            あなたの「やってみたい」という気持ちに、私たちは全力で応えます。
          </p>
        </div>
      </section>

      {/* 事業内容 */}
      <section id="service" className="py-16 px-5 md:py-28 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">SERVICE</p>
          <h2 className="text-4xl font-black text-gray-900 mb-16">事業内容</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "eBay海外輸出コンサルティング", desc: "出品・在庫管理・発送まで一括でサポート。面倒な作業はすべてEXIAにお任せください。リスクなく、確実に利益が出る仕組みをご提供します。" },
              { num: "02", title: "セミナー・教育事業", desc: "eBay副業の始め方から商品リサーチ・輸出ノウハウまで学べるセミナーや教材を提供。知識ゼロからでも安心してスタートできます。" },
              { num: "03", title: "ビジネスコミュニティ運営", desc: "同じ目標を持つ副業仲間が集まるコミュニティを運営。情報共有・モチベーション維持・仲間との切磋琢磨をサポートします。" },
            ].map((item) => (
              <div key={item.num} className="border-t-2 border-blue-700 pt-8">
                <p className="text-6xl font-black text-blue-100 mb-4 leading-none" style={{WebkitTextStroke: "2px #2563eb"}}>{item.num}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* バリュー */}
      <section className="bg-gray-50 py-16 px-5 md:py-28 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">VALUES</p>
          <h2 className="text-4xl font-black text-gray-900 mb-16">私たちが大切にしていること</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "誠実であること",
                desc: "お客様との約束を守り、結果に対して正直に向き合います。都合の悪いことも包み隠さず伝える誠実さが、長期的な信頼につながると信じています。",
              },
              {
                title: "挑戦を恐れないこと",
                desc: "海外輸出という新しいフィールドへの挑戦を、私たちは常にお客様と共に続けます。変化を恐れず、前進し続けることがEXIAのDNAです。",
              },
              {
                title: "共に成長すること",
                desc: "お客様の成功が、私たちの成功です。一方的にサービスを提供するのではなく、同じ目線に立ち、共に考え、共に成長する関係を大切にしています。",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-gray-200 pt-8">
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* トピックス */}
      <TopicsSection />

      {/* 代表メッセージ */}
      <section id="message" className="py-28 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">MESSAGE</p>
          <h2 className="text-4xl font-black text-gray-900 mb-16">代表メッセージ</h2>
          <div className="grid md:grid-cols-1 gap-12 max-w-2xl">
            {[
              {
                name: "河田 勇人",
                role: "代表",
                message: "副業で人生を変えられる人を、一人でも多く増やしたい。その一心でEXIAを立ち上げました。海外輸出という武器を手に、日本中の人が自分の力で稼げる未来をつくる。誰かに依存しなくていい、自分の選択で生きていける社会へ。その夢に向かって、私たちは妥協しません。やるなら、本気で。それがEXIAのすべてです。",
              },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-3xl p-10 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-gray-100 mb-6 flex items-center justify-center text-4xl">
                  👤
                </div>
                <blockquote className="text-gray-600 leading-relaxed text-base mb-8">
                  「{person.message}」
                </blockquote>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-black text-gray-900 text-lg">{person.name}</p>
                  <p className="text-blue-700 text-sm font-medium mt-1">株式会社EXIA {person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-16 px-5 md:py-28 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-700 text-sm font-bold uppercase tracking-widest mb-4">COMPANY</p>
          <h2 className="text-4xl font-black text-gray-900 mb-16">会社概要</h2>
          <dl className="divide-y divide-gray-100">
            {[
              { label: "会社名", value: "株式会社EXIA（エクシア）" },
              { label: "事業内容", value: "海外輸出コンサルティング / eBay出品代行・在庫管理・発送代行" },
              { label: "代表者", value: "河田 勇人" },
              { label: "所在地", value: "神奈川県藤沢市湘南台3丁目4番地10" },
              { label: "電話番号", value: "（設定後に追記）" },
              { label: "メール", value: "（設定後に追記）" },
              { label: "ビジョン", value: "CHANGE YOUR LIFE" },
            ].map((row) => (
              <div key={row.label} className="flex flex-col md:flex-row py-7 gap-4">
                <dt className="w-48 text-gray-400 text-sm font-bold flex-shrink-0 pt-0.5">{row.label}</dt>
                <dd className="text-gray-900 font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-500 text-center py-8 text-sm">
        © 2026 EXIA. All rights reserved.
      </footer>

    </div>
  );
}
