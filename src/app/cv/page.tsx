"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage, useTranslation } from "@/lib/i18n";

const CV_PAGES: string[] = [];
var CV_PDF_PATH = "/cv/abdul-malik-nasir-musa-cv.pdf";
const CV_FILENAME = "Abdul_Malik_Nasir_Musa_CV.pdf";

export default function CVPage() {
  const { t } = useLanguage();
  const { locale } = useTranslation();

    // Images générées à partir du CV — à placer dans public/cv/pages/
    if (locale === "fr") {
      CV_PAGES.push ( 
        "/cv/pages/page-1.png",
        "/cv/pages/page-2.png",
        "/cv/pages/page-3.png",
      );
      // Le vrai fichier PDF — pour le téléchargement et le lien "nouvel onglet"
      CV_PDF_PATH = "/cv/abdul-malik-nasir-musa-cv.pdf";
    } else if (locale === "en") {
      CV_PAGES.push ( 
        "/cv/pages/page-1-en.png",
        "/cv/pages/page-2-en.png",
        "/cv/pages/page-3-en.png",
      );
      // Le vrai fichier PDF — pour le téléchargement et le lien "nouvel onglet"
      CV_PDF_PATH = "/cv/abdul-malik-nasir-musa-cv-en.pdf";
    }



  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* Top bar with actions */}
      <div className="max-w-[900px] mx-auto px-6 mb-8 flex items-center justify-between">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#6B635A] text-sm hover:text-[var(--primary)] transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          <span>{t("cv.back")}</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={CV_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-[#6B635A] text-xs hover:text-[var(--primary)] transition-colors duration-300"
          >
            <ExternalLink size={14} />
            <span>{t("cv.newTab")}</span>
          </a>
          <a
            href={CV_PDF_PATH}
            download={CV_FILENAME}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[var(--primary)] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#068a09] transition-colors duration-300"
          >
            <Download size={14} />
            {t("cv.download")}
          </a>
        </div>
      </div>

      {/* Pages du CV — images statiques, aucune dépendance ni souci de rendu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[900px] mx-auto flex flex-col items-center gap-6 px-6"
      >
        {CV_PAGES.map((src, i) => (
          <div
            key={src}
            className="relative w-full bg-white border border-[var(--primary)]/10 shadow-sm overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`CV — page ${i + 1}`}
              className="w-full h-auto block"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}