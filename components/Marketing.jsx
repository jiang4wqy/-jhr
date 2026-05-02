// Marketing landing screen
const Marketing = ({ onNav }) => {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 32px 80px' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(255,211,188,0.7) 0%, rgba(253,250,246,0) 60%), radial-gradient(ellipse at 80% 60%, rgba(255,220,226,0.6) 0%, rgba(253,250,246,0) 50%)',
        }} />
        <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--tc-font-mono)', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tc-peach-700)',
            padding: '6px 14px', borderRadius: 999, background: 'var(--tc-peach-100)',
          }}>
            FOR UNIVERSITY STUDENTS · 大学生专属
          </div>
          <h1 style={{
            fontFamily: 'var(--tc-font-display)', fontWeight: 500,
            fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1.05, letterSpacing: '-0.02em',
            margin: '32px 0 24px', color: 'var(--tc-ink-900)',
          }}>
            慢一点，<em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--tc-peach-600)' }}>sincerely.</em>
          </h1>
          <p style={{
            fontFamily: 'var(--tc-font-sans)', fontSize: 18, lineHeight: 1.7,
            color: 'var(--tc-ink-700)', maxWidth: 560, margin: '0 auto 40px',
          }}>
            同窗是为大学生准备的婚介平台。我们每天为你介绍三位经过认证的同学 —
            不是无尽地刷，而是认真地认识。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNav('browse')}>加入同窗</Button>
            <Button variant="ghost" size="lg">看看是谁在用</Button>
          </div>
          <div style={{
            marginTop: 64, display: 'flex', justifyContent: 'center', gap: 32,
            fontFamily: 'var(--tc-font-sans)', fontSize: 13, color: 'var(--tc-ink-500)',
            flexWrap: 'wrap',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckIcon size={14} /> 学籍认证</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckIcon size={14} /> 真人审核</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><CheckIcon size={14} /> 不向第三方泄露资料</span>
          </div>
        </div>
      </section>

      {/* Ornament */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
        <img src="../../assets/ornament-blossom.svg" style={{ width: 200 }} />
      </div>

      {/* Three steps */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow" style={{ fontFamily: 'var(--tc-font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tc-fg-3)' }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 36, fontWeight: 700, color: 'var(--tc-ink-900)', marginTop: 12, letterSpacing: '-0.02em' }}>三件事 — 然后我们来安排.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { n: '01', t: '认证你的学籍', d: '上传学生证或邮箱验证。我们只服务在校大学生和近期毕业的校友。' },
            { n: '02', t: '讲讲你自己', d: '不是简历。写你最近在读的书、周末怎么过、希望遇到什么样的人。' },
            { n: '03', t: '每天三位同学', d: '我们用心挑选，不让你刷到天亮。看到喜欢的，说一句"想认识"。' },
          ].map(s => (
            <div key={s.n} style={{
              background: '#fff', border: '1px solid var(--tc-border-1)', borderRadius: 24, padding: 32,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <span style={{ fontFamily: 'var(--tc-font-display)', fontStyle: 'italic', fontSize: 36, color: 'var(--tc-peach-500)' }}>{s.n}</span>
              <h3 style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 20, fontWeight: 600, color: 'var(--tc-ink-900)' }}>{s.t}</h3>
              <p style={{ fontFamily: 'var(--tc-font-sans)', fontSize: 15, lineHeight: 1.65, color: 'var(--tc-ink-700)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ maxWidth: 720, margin: '64px auto', padding: '0 32px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--tc-font-serif)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 28, lineHeight: 1.5, color: 'var(--tc-ink-700)',
        }}>
          "在同窗，我没有遇到完美的人 — 但我遇到了一个愿意每周陪我去图书馆的人。三个月后，我们一起准备研究生考试。"
        </p>
        <div style={{ marginTop: 24, fontFamily: 'var(--tc-font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tc-ink-500)' }}>
          — 安安 · 北京大学 · 2025届
        </div>
      </section>
    </main>
  );
};

Object.assign(window, { Marketing });
