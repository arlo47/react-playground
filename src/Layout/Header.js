import NavItem from '../Components/NavItem'

function Header() {
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Users', link: '/users' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' }
  ]
  return (
    <header className="App-header">
      <nav id="Main-navigation">
          <ul>
          {links.map((link, i) => (
            <NavItem 
              key={i}
              label={link.label} 
              link={link.link}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;