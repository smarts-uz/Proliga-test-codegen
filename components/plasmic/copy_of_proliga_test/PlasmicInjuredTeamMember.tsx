// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 829HK5jNiwv3ZTz1XRkY4w
// Component: DRwBc5Jor-HH

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 829HK5jNiwv3ZTz1XRkY4w/projectcss
import sty from "./PlasmicInjuredTeamMember.module.css"; // plasmic-import: DRwBc5Jor-HH/css

createPlasmicElementProxy;

export type PlasmicInjuredTeamMember__VariantMembers = {
  variant2: "variant2";
};
export type PlasmicInjuredTeamMember__VariantsArgs = {
  variant2?: SingleBooleanChoiceArg<"variant2">;
};
type VariantPropType = keyof PlasmicInjuredTeamMember__VariantsArgs;
export const PlasmicInjuredTeamMember__VariantProps =
  new Array<VariantPropType>("variant2");

export type PlasmicInjuredTeamMember__ArgsType = {};
type ArgPropType = keyof PlasmicInjuredTeamMember__ArgsType;
export const PlasmicInjuredTeamMember__ArgProps = new Array<ArgPropType>();

export type PlasmicInjuredTeamMember__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  text?: Flex__<"div">;
};

export interface DefaultInjuredTeamMemberProps {
  variant2?: SingleBooleanChoiceArg<"variant2">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInjuredTeamMember__RenderFunc(props: {
  variants: PlasmicInjuredTeamMember__VariantsArgs;
  args: PlasmicInjuredTeamMember__ArgsType;
  overrides: PlasmicInjuredTeamMember__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "variant2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.variant2
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
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
        sty.root,
        { [sty.rootvariant2]: hasVariant($state, "variant2", "variant2") }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__zb1L2)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"42px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/copy_of_proliga_test/images/willianJosepng.png",
            fullWidth: 256,
            fullHeight: 256,
            aspectRatio: undefined
          }}
        />

        <PlasmicLink__
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.link,
            { [sty.linkvariant2]: hasVariant($state, "variant2", "variant2") }
          )}
          component={Link}
          href={"https://www.plasmic.app/"}
          platform={"nextjs"}
        >
          {hasVariant($state, "variant2", "variant2") ? "STR" : "DEF"}
        </PlasmicLink__>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"SEdler"}
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__pCwHc)}
          displayHeight={"20px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"20px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/copy_of_proliga_test/images/crossMedicalCircle512Webp.webp",
            fullWidth: 512,
            fullHeight: 512,
            aspectRatio: undefined
          }}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "link", "text"],
  freeBox: ["freeBox", "link", "text"],
  link: ["link"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  link: "a";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInjuredTeamMember__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInjuredTeamMember__VariantsArgs;
    args?: PlasmicInjuredTeamMember__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInjuredTeamMember__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInjuredTeamMember__ArgsType,
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
          internalArgPropNames: PlasmicInjuredTeamMember__ArgProps,
          internalVariantPropNames: PlasmicInjuredTeamMember__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInjuredTeamMember__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInjuredTeamMember";
  } else {
    func.displayName = `PlasmicInjuredTeamMember.${nodeName}`;
  }
  return func;
}

export const PlasmicInjuredTeamMember = Object.assign(
  // Top-level PlasmicInjuredTeamMember renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    link: makeNodeComponent("link"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicInjuredTeamMember
    internalVariantProps: PlasmicInjuredTeamMember__VariantProps,
    internalArgProps: PlasmicInjuredTeamMember__ArgProps
  }
);

export default PlasmicInjuredTeamMember;
/* prettier-ignore-end */
