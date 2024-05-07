// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 829HK5jNiwv3ZTz1XRkY4w
// Component: 3Kg9vAlAxAKZ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Navbar from "../../Navbar"; // plasmic-import: v6dPoFYnJWjC/component
import Clubs from "../../Clubs"; // plasmic-import: iaQjg7bA9bcb/component
import InjuredClub from "../../InjuredClub"; // plasmic-import: yNK2GOFSwGJf/component
import InjuredTeamMember from "../../InjuredTeamMember"; // plasmic-import: DRwBc5Jor-HH/component
import Footer from "../../Footer"; // plasmic-import: n-xKHXNhOEaC/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 829HK5jNiwv3ZTz1XRkY4w/projectcss
import sty from "./PlasmicAbsences.module.css"; // plasmic-import: 3Kg9vAlAxAKZ/css

createPlasmicElementProxy;

export type PlasmicAbsences__VariantMembers = {};
export type PlasmicAbsences__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbsences__VariantsArgs;
export const PlasmicAbsences__VariantProps = new Array<VariantPropType>();

export type PlasmicAbsences__ArgsType = {};
type ArgPropType = keyof PlasmicAbsences__ArgsType;
export const PlasmicAbsences__ArgProps = new Array<ArgPropType>();

export type PlasmicAbsences__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  freeBox?: Flex__<"div">;
  clubs?: Flex__<typeof Clubs>;
  text?: Flex__<"div">;
  columns?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultAbsencesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAbsences__RenderFunc(props: {
  variants: PlasmicAbsences__VariantsArgs;
  args: PlasmicAbsences__ArgsType;
  overrides: PlasmicAbsences__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Clubs
              data-plasmic-name={"clubs"}
              data-plasmic-override={overrides.clubs}
              className={classNames("__wab_instance", sty.clubs)}
            />
          </div>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Injuries"}
          </div>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__zD7Cb)}>
              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__wTlXb)}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__xGeM2
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__tlV8
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__nFwbh
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__moN8B
                )}
                variant2={true}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__xpGpz)}
                variant2={true}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__miJiA)}>
              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub___5CzB)}
                variant3={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__bv2Wl
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___5Sfg0
                )}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__yWy2)}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__yejkj
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__ss5Ja
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___1Xkm8
                )}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember___7A6V1
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__cXav2
                )}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__m3PJ)}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__oNaXn)}>
              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__kAX)}
                variant3={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__qBF6
                )}
                variant2={true}
              />

              <InjuredClub
                className={classNames("__wab_instance", sty.injuredClub__n4AEi)}
                variant1={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__a6GbF
                )}
                variant2={true}
              />

              <InjuredTeamMember
                className={classNames(
                  "__wab_instance",
                  sty.injuredTeamMember__xb9Nw
                )}
                variant2={true}
              />
            </div>
          </div>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "freeBox", "clubs", "text", "columns", "footer"],
  navbar: ["navbar"],
  freeBox: ["freeBox", "clubs"],
  clubs: ["clubs"],
  text: ["text"],
  columns: ["columns"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  freeBox: "div";
  clubs: typeof Clubs;
  text: "div";
  columns: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbsences__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbsences__VariantsArgs;
    args?: PlasmicAbsences__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbsences__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAbsences__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAbsences__ArgProps,
          internalVariantPropNames: PlasmicAbsences__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAbsences__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbsences";
  } else {
    func.displayName = `PlasmicAbsences.${nodeName}`;
  }
  return func;
}

export const PlasmicAbsences = Object.assign(
  // Top-level PlasmicAbsences renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    freeBox: makeNodeComponent("freeBox"),
    clubs: makeNodeComponent("clubs"),
    text: makeNodeComponent("text"),
    columns: makeNodeComponent("columns"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAbsences
    internalVariantProps: PlasmicAbsences__VariantProps,
    internalArgProps: PlasmicAbsences__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbsences;
/* prettier-ignore-end */
