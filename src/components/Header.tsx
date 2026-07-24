function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        
        <h1 className="text-xl font-bold">
          Lee Wonho
        </h1>

        <nav className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500">
            About
          </a>

          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;