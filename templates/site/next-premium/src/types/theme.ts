export type DensityDial = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type VarianceDial = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface ThemeConfig {
  dials: {
    density: DensityDial;
    variance: VarianceDial;
  };
  spacing: {
    sectionPadding: string;
    macroWhitespace: string;
  };
  radius: {
    base: string;
    button: string;
    cardOuter: string;
    cardInner: string;
  };
  container: {
    maxWidth: string;
    padding: string;
  };
  layoutConstraints: {
    maxHeroPadding: string;
    maxContentWidth: string;
    navHeight: string;
  };
}
