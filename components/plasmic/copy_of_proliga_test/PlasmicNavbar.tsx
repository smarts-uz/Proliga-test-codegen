// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 829HK5jNiwv3ZTz1XRkY4w
// Component: v6dPoFYnJWjC

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

import Button from "../../Button"; // plasmic-import: tMD_InG6VdHt/component
import LoginButton2 from "../../LoginButton2"; // plasmic-import: cvluFsYctH8y/component

import { useScreenVariants as useScreenVariants_4NoDNoybHD } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 4noD-Noyb-hD/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 829HK5jNiwv3ZTz1XRkY4w/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: v6dPoFYnJWjC/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: fiqJ1XPme8qu/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: mKOeAkkn8Ur-/icon

createPlasmicElementProxy;

export type PlasmicNavbar__VariantMembers = {};
export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: Flex__<"div">;
  loginButton2?: Flex__<typeof LoginButton2>;
};

export interface DefaultNavbarProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;
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
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4NoDNoybHD()
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
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__znAg6)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___3Sxr)}
        >
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__fydqW
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__kk1Cw)}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "80px"
                  : "120px"
              }
              src={{
                src: "/plasmic/copy_of_proliga_test/images/logoFantasyDarkBgpng.png",
                fullWidth: 143,
                fullHeight: 18,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__plrv)}
          >
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__xFvL
              )}
              component={Link}
              href={`/rankings`}
              platform={"nextjs"}
            >
              {(
                hasVariant(globalVariants, "screen", "portrait")
                  ? true
                  : (() => {
                      try {
                        return true;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return true;
                        }
                        throw e;
                      }
                    })()
              ) ? (
                <Button
                  className={classNames("__wab_instance", sty.button__e1Z9)}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__iQls)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__t2Yn5)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2BQbL
                    )}
                  >
                    {"Rankings"}
                  </div>
                </Button>
              ) : null}
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__ob3X
              )}
              component={Link}
              href={`/matches`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button___5KqEm)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__oveR0)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__us5Au)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__seq1R
                  )}
                >
                  {"Matches"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___5UdDg
              )}
              component={Link}
              href={`/breaking-news`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__nzHfO)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__ih2Td)}
                    role={"img"}
                  />
                }
                link={`/breaking-news`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToBreakinNews"] = true
                    ? (() => {
                        const actionArgs = { destination: `/breaking-news` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToBreakinNews"] != null &&
                    typeof $steps["goToBreakinNews"] === "object" &&
                    typeof $steps["goToBreakinNews"].then === "function"
                  ) {
                    $steps["goToBreakinNews"] = await $steps["goToBreakinNews"];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__wFh7Q)}
                    role={"img"}
                  />
                }
                submitsForm={true}
                target={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rCtt5
                  )}
                >
                  {"Breaking News"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__c6JOn
              )}
              component={Link}
              href={`/market`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__dboV)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__iWtht)}
                    role={"img"}
                  />
                }
                link={`/market`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToMarket"] = true
                    ? (() => {
                        const actionArgs = { destination: `/market` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToMarket"] != null &&
                    typeof $steps["goToMarket"] === "object" &&
                    typeof $steps["goToMarket"].then === "function"
                  ) {
                    $steps["goToMarket"] = await $steps["goToMarket"];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__yeYPs)}
                    role={"img"}
                  />
                }
                submitsForm={true}
                target={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___37R15
                  )}
                >
                  {"Market"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__gadI
              )}
              component={Link}
              href={`/ideal-xl`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button___26Hxl)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg___0Ie0B)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg___9FlL4)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xMxHd
                  )}
                >
                  {"Ideal XI"}
                </div>
              </Button>
            </PlasmicLink__>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__rtRus
              )}
              component={Link}
              href={`/absences`}
              platform={"nextjs"}
            >
              <Button
                className={classNames("__wab_instance", sty.button__krr8C)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__vHszj)}
                    role={"img"}
                  />
                }
                link={`/absences`}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToAbsences"] = true
                    ? (() => {
                        const actionArgs = { destination: `/absences` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToAbsences"] != null &&
                    typeof $steps["goToAbsences"] === "object" &&
                    typeof $steps["goToAbsences"].then === "function"
                  ) {
                    $steps["goToAbsences"] = await $steps["goToAbsences"];
                  }
                }}
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__fX1By)}
                    role={"img"}
                  />
                }
                submitsForm={true}
                target={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1Udsq
                  )}
                >
                  {"Absences"}
                </div>
              </Button>
            </PlasmicLink__>
          </Stack__>
          {false ? (
            <div className={classNames(projectcss.all, sty.freeBox__isMr)}>
              <button
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__k7Ek
                )}
              >
                {"Sign up"}
              </button>
              <Button
                className={classNames("__wab_instance", sty.button__afvNl)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__bnWe2)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__dU76)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uGrNe
                  )}
                >
                  {"Log in"}
                </div>
              </Button>
            </div>
          ) : null}
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__mxcQd)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__tz8Dc)}
            displayHeight={"40px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "80px"
                : "120px"
            }
            src={{
              src: "/plasmic/copy_of_proliga_test/images/logoSponsorMainWhitepng.png",
              fullWidth: 140,
              fullHeight: 56,
              aspectRatio: undefined
            }}
          />

          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___4NPPf
            )}
            component={Link}
            platform={"nextjs"}
          >
            {(() => {
              try {
                return true;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <Button
                className={classNames("__wab_instance", sty.button__maQqd)}
                endIcon={
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__oevYy)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ChecksvgIcon
                    className={classNames(projectcss.all, sty.svg__l9Ps)}
                    role={"img"}
                  />
                }
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ybnE7
                  )}
                >
                  {"Us"}
                </div>
              </Button>
            ) : null}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__awruY
            )}
            component={Link}
            href={`/login`}
            platform={"nextjs"}
          >
            <LoginButton2
              data-plasmic-name={"loginButton2"}
              data-plasmic-override={overrides.loginButton2}
              className={classNames("__wab_instance", sty.loginButton2)}
            />
          </PlasmicLink__>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginButton2"],
  loginButton2: ["loginButton2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginButton2: typeof LoginButton2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavbar__ArgsType,
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
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginButton2: makeNodeComponent("loginButton2"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
