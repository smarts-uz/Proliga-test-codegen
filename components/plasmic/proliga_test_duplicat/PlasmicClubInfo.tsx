// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dVdfcSWLRf5sMsFR6YdMSg
// Component: WoSodI9urpXU

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: fNjibg8zGGOe/component
import Clubs2 from "../../Clubs2"; // plasmic-import: xNGGElyo6apZ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dVdfcSWLRf5sMsFR6YdMSg/projectcss
import sty from "./PlasmicClubInfo.module.css"; // plasmic-import: WoSodI9urpXU/css

createPlasmicElementProxy;

export type PlasmicClubInfo__VariantMembers = {};
export type PlasmicClubInfo__VariantsArgs = {};
type VariantPropType = keyof PlasmicClubInfo__VariantsArgs;
export const PlasmicClubInfo__VariantProps = new Array<VariantPropType>();

export type PlasmicClubInfo__ArgsType = {};
type ArgPropType = keyof PlasmicClubInfo__ArgsType;
export const PlasmicClubInfo__ArgProps = new Array<ArgPropType>();

export type PlasmicClubInfo__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  clubs2?: Flex__<typeof Clubs2>;
  h1?: Flex__<"h1">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultClubInfoProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicClubInfo__RenderFunc(props: {
  variants: PlasmicClubInfo__VariantsArgs;
  args: PlasmicClubInfo__ArgsType;
  overrides: PlasmicClubInfo__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "bCyY9Km8wqcJwdgC8XtpDZ",
        opId: "ee7f8f55-0b84-4f5e-be9a-4eda0b1c7c64",
        userArgs: {},
        cacheKey: `plasmic.$.${(() => {
          try {
            return "getOne";
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.ee7f8f55-0b84-4f5e-be9a-4eda0b1c7c64.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    clubPlayers: usePlasmicDataOp(() => {
      return {
        sourceId: "bCyY9Km8wqcJwdgC8XtpDZ",
        opId: "20fe9b65-8b03-47de-aae0-d2943a85332c",
        userArgs: {},
        cacheKey: `plasmic.$.20fe9b65-8b03-47de-aae0-d2943a85332c.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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

        <Clubs2
          data-plasmic-name={"clubs2"}
          data-plasmic-override={overrides.clubs2}
          className={classNames("__wab_instance", sty.clubs2)}
        />

        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          <div
            className={projectcss.__wab_expr_html_text}
            dangerouslySetInnerHTML={{
              __html: (() => {
                try {
                  return $ctx.params.name;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "$queries.query.data[0].name";
                  }
                  throw e;
                }
              })()
            }}
          />
        </h1>
        <div className={classNames(projectcss.all, sty.freeBox__lkab4)}>
          <div className={classNames(projectcss.all, sty.freeBox___3Njkc)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              height={"90"}
              loading={"lazy"}
              src={(() => {
                try {
                  return $ctx.query.player_img;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              width={"60"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "clubs2", "h1", "img"],
  navbar: ["navbar"],
  clubs2: ["clubs2"],
  h1: ["h1"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  clubs2: typeof Clubs2;
  h1: "h1";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicClubInfo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicClubInfo__VariantsArgs;
    args?: PlasmicClubInfo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicClubInfo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicClubInfo__ArgsType,
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
          internalArgPropNames: PlasmicClubInfo__ArgProps,
          internalVariantPropNames: PlasmicClubInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicClubInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicClubInfo";
  } else {
    func.displayName = `PlasmicClubInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicClubInfo = Object.assign(
  // Top-level PlasmicClubInfo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    clubs2: makeNodeComponent("clubs2"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicClubInfo
    internalVariantProps: PlasmicClubInfo__VariantProps,
    internalArgProps: PlasmicClubInfo__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicClubInfo;
/* prettier-ignore-end */
