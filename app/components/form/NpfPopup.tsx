"use client";

import { loadNpfScript } from "@/app/lib/constants/loadNpfScript";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  formId?: string;
  btnClass?: string;
  btnText?: string;
  showIcon?: boolean;
};

const NpfPopup = ({
  formId,
  btnClass = "",
  btnText = "Apply Now",
  showIcon = false,
}: Props) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!formId || !btnRef.current) return;

    loadNpfScript()
      .then(() => {
        // @ts-expect-error - test
        new NpfWidgetsInit({
          widgetId: formId,
          baseurl: "widgets.nopaperforms.com",
          formTitle:  "Apply Now",
          titleColor: "#FF0033",
          backgroundColor: "#ddd",
          iframeHeight: "500px",
          buttonTextColor: "#FFF",
          target: btnRef.current,
        });
      })
      .catch((err) => {
        console.error("NPF init failed:", err);
      });
  }, [formId, btnText]);

  return (
    <button ref={btnRef} className={`${btnClass} cursor-pointer group flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden`}>
      <span>{btnText}</span> 
      {showIcon && <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" />}
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
    </button>
  );
};

export default NpfPopup;
