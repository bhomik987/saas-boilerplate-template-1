const links = [
  { name: 'Dashboard', href: '#' },
  { name: 'Settings', href: '#' },
];

export default function Sidebar() {
  return (
    <aside style={{ background: '#fff', color: '#000', padding: '2rem 1rem', borderRight: '1px solid #eee', minHeight: '100vh', minWidth: '180px' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {links.map((link, i) => (
            <li key={i} style={{ marginBottom: '1rem' }}>
              <a href={link.href} style={{ color: '#000', textDecoration: 'none', fontWeight: 500 }}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
