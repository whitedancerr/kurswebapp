import { BookOpen, Menu, Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold">
              ВысшийБалл
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Курсы
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Программы
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Преподаватели
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              О нас
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block px-4 py-2 text-primary hover:bg-accent rounded-lg transition-colors">
              Войти
            </button>
            <button className="hidden md:block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              Начать
            </button>
            <button className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}