"use client";

// theme設定
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { styles } from "./styles";
import { colors } from "./colors";
import { textStyles } from "./textStyles";

const overrides = {
  styles,
  colors,
  textStyles,
  components: {
    // themeでコンポーネントをカスタマイズしたい場合は以下を参考
    // https://chakra-ui.com/docs/styled-system/component-style
  },
};

export default extendTheme(overrides, withDefaultColorScheme({ colorScheme: "primary" }));
