/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_ENDPOINT: string
  readonly VITE_GEMINI_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.png' {
  const value: string;
  export default value;
}
