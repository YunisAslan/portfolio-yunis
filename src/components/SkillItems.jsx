import React from "react";

import { ReactComponent as HtmlSvg } from "../assets/images/skills/html.svg";
import { ReactComponent as CssSvg } from "../assets/images/skills/css.svg";
import { ReactComponent as TailwindSvg } from "../assets/images/skills/tailwind.svg";
import { ReactComponent as JsSvg } from "../assets/images/skills/javascript.svg";
import { ReactComponent as ReactSvg } from "../assets/images/skills/react.svg";
import { ReactComponent as ReduxSvg } from "../assets/images/skills/redux.svg";
import { ReactComponent as GitSvg } from "../assets/images/skills/git.svg";

export const skillItems = [
  {
    icon: <HtmlSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
  {
    icon: <CssSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
  {
    icon: <TailwindSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
  {
    icon: <JsSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
  {
    icon: <ReactSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
  {
    icon: <ReduxSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
  {
    icon: <GitSvg className="fill-taxonomyBlack dark:fill-white" />,
  },
];
