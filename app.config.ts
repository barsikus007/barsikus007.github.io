import { defineConfig } from "@solidjs/start/config";
import type { PluginOption } from "vite";
import solidStyled from "vite-plugin-solid-styled";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      solidStyled({
        filter: {
          include: "src/**/*.tsx",
          exclude: "node_modules/**/*.{ts,js}",
        },
      }) as PluginOption,
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
  },
});
