// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dVdfcSWLRf5sMsFR6YdMSg
// Component: PM9g2L7V91mE

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
import projectcss from "./plasmic.module.css"; // plasmic-import: dVdfcSWLRf5sMsFR6YdMSg/projectcss
import sty from "./PlasmicBreakinNewsCards.module.css"; // plasmic-import: PM9g2L7V91mE/css

createPlasmicElementProxy;

export type PlasmicBreakinNewsCards__VariantMembers = {
  variant2: "variant2";
  variant3: "variant3";
  rmTeam: "rmTeam";
};
export type PlasmicBreakinNewsCards__VariantsArgs = {
  variant2?: SingleBooleanChoiceArg<"variant2">;
  variant3?: SingleBooleanChoiceArg<"variant3">;
  rmTeam?: SingleBooleanChoiceArg<"rmTeam">;
};
type VariantPropType = keyof PlasmicBreakinNewsCards__VariantsArgs;
export const PlasmicBreakinNewsCards__VariantProps = new Array<VariantPropType>(
  "variant2",
  "variant3",
  "rmTeam"
);

export type PlasmicBreakinNewsCards__ArgsType = {};
type ArgPropType = keyof PlasmicBreakinNewsCards__ArgsType;
export const PlasmicBreakinNewsCards__ArgProps = new Array<ArgPropType>();

export type PlasmicBreakinNewsCards__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultBreakinNewsCardsProps {
  variant2?: SingleBooleanChoiceArg<"variant2">;
  variant3?: SingleBooleanChoiceArg<"variant3">;
  rmTeam?: SingleBooleanChoiceArg<"rmTeam">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBreakinNewsCards__RenderFunc(props: {
  variants: PlasmicBreakinNewsCards__VariantsArgs;
  args: PlasmicBreakinNewsCards__ArgsType;
  overrides: PlasmicBreakinNewsCards__OverridesType;
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
      },
      {
        path: "variant3",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.variant3
      },
      {
        path: "rmTeam",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rmTeam
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
      <div className={classNames(projectcss.all, sty.freeBox__xMcHw)}>
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img, {
            [sty.imgrmTeam]: hasVariant($state, "rmTeam", "rmTeam"),
            [sty.imgvariant2]: hasVariant($state, "variant2", "variant2"),
            [sty.imgvariant3]: hasVariant($state, "variant3", "variant3")
          })}
          displayHeight={"215px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant($state, "variant3", "variant3") ? "auto" : "100%"
          }
          loading={"lazy"}
          src={
            hasVariant($state, "rmTeam", "rmTeam")
              ? {
                  src: "/plasmic/proliga_test_duplicat/images/rmTeamwebp.webp",
                  fullWidth: 569,
                  fullHeight: 320,
                  aspectRatio: undefined
                }
              : hasVariant($state, "variant3", "variant3")
              ? {
                  src: "/plasmic/proliga_test_duplicat/images/cimyAmelawebp.webp",
                  fullWidth: 569,
                  fullHeight: 320,
                  aspectRatio: undefined
                }
              : hasVariant($state, "variant2", "variant2")
              ? {
                  src: "/plasmic/proliga_test_duplicat/images/athleticoMadridwebp.webp",
                  fullWidth: 569,
                  fullHeight: 320,
                  aspectRatio: undefined
                }
              : {
                  src: "/plasmic/proliga_test_duplicat/images/croswebp.webp",
                  fullWidth: 569,
                  fullHeight: 320,
                  aspectRatio: undefined
                }
          }
        />

        <div className={classNames(projectcss.all, sty.freeBox__dnzhb)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tVjac
            )}
          >
            {"NOTICIAS"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fVzE4
            )}
          >
            {"2 DAYS AGO"}
          </div>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__owmcW,
            {
              [sty.textrmTeam__owmcWvlJe]: hasVariant(
                $state,
                "rmTeam",
                "rmTeam"
              ),
              [sty.textvariant2__owmcWvwe1X]: hasVariant(
                $state,
                "variant2",
                "variant2"
              ),
              [sty.textvariant3__owmcWkcYk]: hasVariant(
                $state,
                "variant3",
                "variant3"
              )
            }
          )}
        >
          {hasVariant($state, "rmTeam", "rmTeam")
            ? "Militao podr\u00eda sumar minutos ante el Mallorca: cu\u00e1nto pujar por \u00e9l y hasta qu\u00e9 precio puede subir en LALIGA FANTASY"
            : hasVariant($state, "variant3", "variant3")
            ? "Lesi\u00f3n de Chimy \u00c1vila: qu\u00e9 tiene y cu\u00e1ndo vuelve a jugar con el Betis"
            : hasVariant($state, "variant2", "variant2")
            ? "Por qu\u00e9 el consejo para la jornada 31 es no alinear a jugadores de Bar\u00e7a, Madrid o Atl\u00e9tico en LALIGA FANTASY"
            : "Clasificaci\u00f3n general de los puntos Relevo: as\u00ed queda el ranking tras la \u00faltima jornada"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___9HCJy,
            {
              [sty.textrmTeam___9HCJyvlJe]: hasVariant(
                $state,
                "rmTeam",
                "rmTeam"
              ),
              [sty.textvariant2___9HCJyVwe1X]: hasVariant(
                $state,
                "variant2",
                "variant2"
              ),
              [sty.textvariant3___9HCJyKcYk]: hasVariant(
                $state,
                "variant3",
                "variant3"
              )
            }
          )}
        >
          {hasVariant($state, "rmTeam", "rmTeam")
            ? "El central brasile\u00f1o ya jug\u00f3 los compases finales del duelo frente al Athletic Club. .."
            : hasVariant($state, "variant3", "variant3")
            ? "El futbolista argentino, que se retir\u00f3 lesionado del Girona-Betis, sufre una lesi\u00f3n miotendinosa proximal del isquiotibial izquierdo...."
            : hasVariant($state, "variant2", "variant2")
            ? "Los equipos que disputaron competici\u00f3n europea podr\u00edan rotar en la nueva fecha de la competici\u00f3n, ya pensando en el partido de vuelta...."
            : "La lista se actualizar\u00e1 cada semana y mostrar\u00e1 la clasificaci\u00f3n general de los puntos Relevo...."}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBreakinNewsCards__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBreakinNewsCards__VariantsArgs;
    args?: PlasmicBreakinNewsCards__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBreakinNewsCards__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBreakinNewsCards__ArgsType,
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
          internalArgPropNames: PlasmicBreakinNewsCards__ArgProps,
          internalVariantPropNames: PlasmicBreakinNewsCards__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBreakinNewsCards__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBreakinNewsCards";
  } else {
    func.displayName = `PlasmicBreakinNewsCards.${nodeName}`;
  }
  return func;
}

export const PlasmicBreakinNewsCards = Object.assign(
  // Top-level PlasmicBreakinNewsCards renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicBreakinNewsCards
    internalVariantProps: PlasmicBreakinNewsCards__VariantProps,
    internalArgProps: PlasmicBreakinNewsCards__ArgProps
  }
);

export default PlasmicBreakinNewsCards;
/* prettier-ignore-end */
