export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
          <span>@Ayush Barnwal</span>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>
    );
}