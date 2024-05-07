// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 829HK5jNiwv3ZTz1XRkY4w
// Component: iaQjg7bA9bcb

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

import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";

import { useScreenVariants as useScreenVariants_4NoDNoybHD } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 4noD-Noyb-hD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 829HK5jNiwv3ZTz1XRkY4w/projectcss
import sty from "./PlasmicClubs.module.css"; // plasmic-import: iaQjg7bA9bcb/css

createPlasmicElementProxy;

export type PlasmicClubs__VariantMembers = {};
export type PlasmicClubs__VariantsArgs = {};
type VariantPropType = keyof PlasmicClubs__VariantsArgs;
export const PlasmicClubs__VariantProps = new Array<VariantPropType>();

export type PlasmicClubs__ArgsType = {};
type ArgPropType = keyof PlasmicClubs__ArgsType;
export const PlasmicClubs__ArgProps = new Array<ArgPropType>();

export type PlasmicClubs__OverridesType = {
  clubLogo?: Flex__<"div">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  cmsEntryField?: Flex__<typeof CmsRowField>;
};

export interface DefaultClubsProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicClubs__RenderFunc(props: {
  variants: PlasmicClubs__VariantsArgs;
  args: PlasmicClubs__ArgsType;
  overrides: PlasmicClubs__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4NoDNoybHD()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"clubLogo"}
      data-plasmic-override={overrides.clubLogo}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.clubLogo
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__yzhQ)}
      >
        <CmsQueryRepeater
          data-plasmic-name={"cmsDataFetcher"}
          data-plasmic-override={overrides.cmsDataFetcher}
          className={classNames("__wab_instance", sty.cmsDataFetcher)}
          desc={false}
          emptyMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uiHxD
                  )}
                >
                  {"No matching published entries found."}
                </div>
              )}
            </DataCtxReader__>
          }
          fields={["clubsLogo", "clubName"]}
          forceEmptyState={false}
          forceLoadingState={false}
          limit={0}
          loadingMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hgI3
                  )}
                >
                  {"Loading..."}
                </div>
              )}
            </DataCtxReader__>
          }
          noAutoRepeat={false}
          noLayout={false}
          table={"clubs"}
          useDraft={false}
        >
          <DataCtxReader__>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__uoZn2)}>
                <PlasmicLink__
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(projectcss.all, projectcss.a, sty.link)}
                  component={Link}
                  href={(() => {
                    try {
                      return $ctx.plasmicCmsClubsItem.data.clubName;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return `/`;
                      }
                      throw e;
                    }
                  })()}
                  platform={"nextjs"}
                >
                  <CmsRowField
                    data-plasmic-name={"cmsEntryField"}
                    data-plasmic-override={overrides.cmsEntryField}
                    className={classNames("__wab_instance", sty.cmsEntryField)}
                    field={"clubsLogo"}
                    themeResetClassName={classNames(
                      projectcss.root_reset,
                      projectcss.root_reset_tags,
                      projectcss.plasmic_default_styles,
                      projectcss.plasmic_mixins,
                      projectcss.plasmic_tokens,
                      plasmic_antd_5_hostless_css.plasmic_tokens,
                      plasmic_plasmic_rich_components_css.plasmic_tokens
                    )}
                  />
                </PlasmicLink__>
              </div>
            )}
          </DataCtxReader__>
        </CmsQueryRepeater>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  clubLogo: ["clubLogo", "cmsDataFetcher", "link", "cmsEntryField"],
  cmsDataFetcher: ["cmsDataFetcher", "link", "cmsEntryField"],
  link: ["link", "cmsEntryField"],
  cmsEntryField: ["cmsEntryField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  clubLogo: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
  link: "a";
  cmsEntryField: typeof CmsRowField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicClubs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicClubs__VariantsArgs;
    args?: PlasmicClubs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicClubs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicClubs__ArgsType,
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
          internalArgPropNames: PlasmicClubs__ArgProps,
          internalVariantPropNames: PlasmicClubs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicClubs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "clubLogo") {
    func.displayName = "PlasmicClubs";
  } else {
    func.displayName = `PlasmicClubs.${nodeName}`;
  }
  return func;
}

export const PlasmicClubs = Object.assign(
  // Top-level PlasmicClubs renders the root element
  makeNodeComponent("clubLogo"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    link: makeNodeComponent("link"),
    cmsEntryField: makeNodeComponent("cmsEntryField"),

    // Metadata about props expected for PlasmicClubs
    internalVariantProps: PlasmicClubs__VariantProps,
    internalArgProps: PlasmicClubs__ArgProps
  }
);

export default PlasmicClubs;
/* prettier-ignore-end */
