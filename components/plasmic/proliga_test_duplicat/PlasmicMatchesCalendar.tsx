// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dVdfcSWLRf5sMsFR6YdMSg
// Component: KhVEkzDkNP4i

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

import { useScreenVariants as useScreenVariantswC0HluJbkYz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -wC0hluJbkYZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dVdfcSWLRf5sMsFR6YdMSg/projectcss
import sty from "./PlasmicMatchesCalendar.module.css"; // plasmic-import: KhVEkzDkNP4i/css

createPlasmicElementProxy;

export type PlasmicMatchesCalendar__VariantMembers = {};
export type PlasmicMatchesCalendar__VariantsArgs = {};
type VariantPropType = keyof PlasmicMatchesCalendar__VariantsArgs;
export const PlasmicMatchesCalendar__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMatchesCalendar__ArgsType = {
  clubsLogo?: "Dynamic options";
};
type ArgPropType = keyof PlasmicMatchesCalendar__ArgsType;
export const PlasmicMatchesCalendar__ArgProps = new Array<ArgPropType>(
  "clubsLogo"
);

export type PlasmicMatchesCalendar__OverridesType = {
  root?: Flex__<"div">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
};

export interface DefaultMatchesCalendarProps {
  clubsLogo?: "Dynamic options";
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMatchesCalendar__RenderFunc(props: {
  variants: PlasmicMatchesCalendar__VariantsArgs;
  args: PlasmicMatchesCalendar__ArgsType;
  overrides: PlasmicMatchesCalendar__OverridesType;
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
    screen: useScreenVariantswC0HluJbkYz()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__orqsf)}>
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
                    sty.text__nhaoM
                  )}
                >
                  {"No matching published entries found."}
                </div>
              )}
            </DataCtxReader__>
          }
          fields={["clubsLogo", "clubName"]}
          filterField={"clubName"}
          filterValue={(() => {
            try {
              return undefined;
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
          forceEmptyState={false}
          forceLoadingState={false}
          limit={10}
          loadingMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cOzUs
                  )}
                >
                  {"Loading..."}
                </div>
              )}
            </DataCtxReader__>
          }
          mode={"rows"}
          noAutoRepeat={false}
          noLayout={false}
          offset={(() => {
            try {
              return undefined;
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
          table={"clubs"}
          useDraft={false}
        >
          <DataCtxReader__>
            {$ctx => (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__viZl0)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__ub1G0)}>
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField___4Mtz0
                    )}
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
                </div>
                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__kfBdv
                  )}
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

                <div className={classNames(projectcss.all, sty.freeBox__dzWou)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__saTow
                    )}
                  >
                    {"-"}
                  </div>
                </div>
                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__wyPe
                  )}
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
                  usePlasmicTheme={false}
                />

                <div className={classNames(projectcss.all, sty.freeBox___7WrF)}>
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField__kl84Q
                    )}
                    field={(() => {
                      try {
                        return undefined;
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
                </div>
              </Stack__>
            )}
          </DataCtxReader__>
        </CmsQueryRepeater>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsDataFetcher"],
  cmsDataFetcher: ["cmsDataFetcher"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMatchesCalendar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMatchesCalendar__VariantsArgs;
    args?: PlasmicMatchesCalendar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMatchesCalendar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMatchesCalendar__ArgsType,
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
          internalArgPropNames: PlasmicMatchesCalendar__ArgProps,
          internalVariantPropNames: PlasmicMatchesCalendar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMatchesCalendar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMatchesCalendar";
  } else {
    func.displayName = `PlasmicMatchesCalendar.${nodeName}`;
  }
  return func;
}

export const PlasmicMatchesCalendar = Object.assign(
  // Top-level PlasmicMatchesCalendar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),

    // Metadata about props expected for PlasmicMatchesCalendar
    internalVariantProps: PlasmicMatchesCalendar__VariantProps,
    internalArgProps: PlasmicMatchesCalendar__ArgProps
  }
);

export default PlasmicMatchesCalendar;
/* prettier-ignore-end */
