// Header — sticky top nav with wordmark + section links + auth
const Header = ({ current, onNav, mutuals = 0 }) => {
  const link = (key, label) => (
    <button onClick={() => onNav(key)} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      fontFamily: 'var(--tc-font-sans)', fontSize: 14,
      fontWeight: current === key ? 600 : 500,
      color: current === key ? 'var(--tc-ink-900)' : 'var(--tc-ink-500)',
      padding: '8px 4px', borderBottom: '2px solid ' + (current === key ? 'var(--tc-peach-500)' : 'transparent'),
      transition: 'all 180ms',
    }}>{label}</button>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(253,250,246,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--tc-border-1)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <button onClick={() => onNav('marketing')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--tc-font-serif)', fontSize: 24, fontWeight: 500, color: 'var(--tc-ink-900)', letterSpacing: '0.04em' }}>同窗</span>
          <span style={{ fontFamily: 'var(--tc-font-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--tc-peach-600)' }}>Tóngchuāng</span>
        </button>
        <nav style={{ display: 'flex', gap: 24, marginLeft: 16 }}>
          {link('browse', '今日推荐')}
          {link('profile', '资料')}
          {link('chat', '消息')}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--tc-ink-700)' }}><SearchIcon size={18} /></button>
          <Button variant="ghost" size="sm">登出</Button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--tc-border-1)', marginTop: 96, padding: '48px 32px 64px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--tc-font-serif)', fontSize: 28, fontWeight: 500, color: 'var(--tc-ink-900)' }}>同窗</span>
          <span style={{ fontFamily: 'var(--tc-font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--tc-peach-600)' }}>Tóngchuāng</span>
        </div>
        <p style={{ fontFamily: 'var(--tc-font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--tc-ink-500)', marginTop: 8 }}>
          Slowly, sincerely. — 慢一点，认真一点.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--tc-font-sans)', fontSize: 13, color: 'var(--tc-ink-500)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><strong style={{ color: 'var(--tc-ink-900)', fontWeight: 600 }}>关于</strong><span>团队</span><span>故事</span><span>媒体报道</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><strong style={{ color: 'var(--tc-ink-900)', fontWeight: 600 }}>支持</strong><span>常见问题</span><span>安全准则</span><span>联系我们</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><strong style={{ color: 'var(--tc-ink-900)', fontWeight: 600 }}>条款</strong><span>用户协议</span><span>隐私政策</span></div>
      </div>
    </div>
    <div style={{ maxWidth: 1200, margin: '48px auto 0', fontFamily: 'var(--tc-font-mono)', fontSize: 11, color: 'var(--tc-ink-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      © 2026 同窗 Tóngchuāng · 京ICP备 0000000 号
    </div>
  </footer>
);

Object.assign(window, { Header, Footer });
