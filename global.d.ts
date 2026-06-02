export {};

declare global {
  interface Window {
    NpfWidgetsInit?: new (config: {
      widgetId: string;
      baseurl: string;
      formTitle?: string;
      titleColor?: string;
      backgroundColor?: string;
      iframeHeight?: string;
      buttonTextColor?: string;
      target?: HTMLElement;

      // UTM Fields
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
      utm_term?: string;
      utm_content?: string;

      // Prefill Fields
      prefill?: {
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        utm_term?: string;
        utm_content?: string;
        [key: string]: string | undefined;
      };
    }) => void;
  }
}