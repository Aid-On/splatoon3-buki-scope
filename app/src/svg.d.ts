declare module "*.svg" {
  import * as React from "react";
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "*.gif" {
  const value: any;
  export = value;
}
