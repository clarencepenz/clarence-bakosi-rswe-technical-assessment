export type SVGProps = React.SVGProps<SVGSVGElement>;

export type StyleProp = {
  cardW: string;
  cardH: string;
  width: number;
  height: number;
  text_transform: string;
  space?: string;
};

export type CardProp = {
  id: number;
  coverImage?: string;
  title: string;
  description: string;
};
