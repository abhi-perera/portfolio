import { Dna } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted text-sm">
          <Dna className="h-4 w-4 text-primary" />
          <span>
            &copy; 2026 H.M.U. Abhimani Perera — Built with{" "}
            <span className="text-primary font-medium">Next.js</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abhi-perera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/uduli-abhimani-b31329355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.thecn.com/HP640"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary text-sm transition-colors"
          >
            CNE
          </a>
        </div>
      </div>
    </footer>
  );
}
