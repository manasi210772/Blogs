import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="mt-10 w-full border-t border-border/50 pt-6 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: copyright + tagline */}
        <div className="text-center sm:text-left">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Manasi Patil.
          </p>
          <p className="text-primary/60 text-xs mt-0.5 italic">
            One bite at a time 🍴
          </p>
        </div>

        {/* Right: social links */}
        <div className="flex items-center gap-3">
          {/* Pinterest */}
          <a
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pinterest.com/manasi210772/"
            aria-label="Pinterest"
          >
            <svg viewBox="0 0 24 24" className="fill-current h-[18px] w-[18px] shrink-0">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.128 8.438 10.242-.117-.87-.223-2.204.047-3.154.243-.828 1.56-5.275 1.56-5.275s-.397-.794-.397-1.967c0-1.842 1.068-3.217 2.398-3.217 1.131 0 1.677.849 1.677 1.867 0 1.138-.725 2.838-1.099 4.414-.312 1.319.662 2.393 1.964 2.393 2.357 0 3.944-3.028 3.944-6.615 0-2.729-1.838-4.774-5.183-4.774-3.776 0-6.132 2.815-6.132 5.959 0 1.085.312 1.85.799 2.442.223.267.254.374.173.681-.056.224-.188.762-.243.976-.078.298-.317.405-.587.294-1.641-.669-2.406-2.465-2.406-4.483 0-3.335 2.817-7.33 8.382-7.33 4.471 0 7.412 3.234 7.412 6.705 0 4.59-2.553 8.018-6.316 8.018-1.263 0-2.45-.682-2.856-1.455l-.776 2.956c-.28 1.083-1.037 2.438-1.545 3.265A12.002 12.002 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/manasi210772"
            aria-label="GitHub"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>

          {/* Email */}
          <a
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            href="mailto:manasi210772@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>

          {/* LinkedIn */}
          <a
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/manasi-patil-596034326/"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>

          {/* Kaggle — custom SVG kept */}
          <a
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kaggle.com/manasi210772"
            aria-label="Kaggle"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current h-[18px] w-[18px]">
              <defs>
                <path id="B" d="M31.5 15.978h289v130.044h-289z" />
              </defs>
              <path
                transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)"
                d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
