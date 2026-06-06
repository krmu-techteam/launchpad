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
    if (!formId) return;

    const url = new URL(window.location.href);
    let changed = false;

    if (!url.searchParams.has("utm_source")) {
      url.searchParams.set("utm_source", "Launchpad");
      changed = true;
    }
    if (!url.searchParams.has("utm_medium")) {
      url.searchParams.set("utm_medium", "Website");
      changed = true;
    }
    // if (!url.searchParams.has("utm_campaign")) {
    //   url.searchParams.set("utm_campaign", "launchpad_2026");
    //   changed = true;
    // }

    if (changed) {
      window.history.replaceState({}, "", url.toString());
    }

    const utmSource = url.searchParams.get("utm_source");
    const utmMedium = url.searchParams.get("utm_medium");
    // const utmCampaign = url.searchParams.get("utm_campaign");

    loadNpfScript()
      .then(() => {
        const config = {
          widgetId: formId,
          baseurl: "widgets.nopaperforms.com",
          formTitle: "Apply Now",
          titleColor: "#FF0033",
          backgroundColor: "#fff",
          iframeHeight: "420px",
          buttonTextColor: "#FFF",
          target: "npf-popup-btn-" + formId,

          m_source: utmSource,
          m_medium: utmMedium,
          // m_campaign: utmCampaign,
          extraparams: `utm_source=${utmSource}&utm_medium=${utmMedium}`,
          // extraparams: `utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`,
        };

        // @ts-ignore
        new NpfWidgetsInit(config);
      })
      .catch((err) => {
        console.error("NPF init failed:", err);
      });
  }, [formId]);

  return (
    <button
      id={`npf-popup-btn-${formId}`}
      ref={btnRef}
      className={`${btnClass} cursor-pointer transition-all  relative overflow-hidden group`}
    >
      <span>{btnText}</span>

      {showIcon && (
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
        />
      )}

      <div className="absolute  inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
    </button>
  );
};

export default NpfPopup;
