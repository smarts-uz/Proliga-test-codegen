// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 829HK5jNiwv3ZTz1XRkY4w

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider";
import { GraphCMSCredentialsProvider } from "@plasmicpkgs/plasmic-graphcms";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  graphCMSCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof GraphCMSCredentialsProvider>, "children">
  >;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    antdConfigProviderProps,
    graphCMSCredentialsProviderProps,
    cmsCredentialsProviderProps
  } = props;

  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius!
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase!
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError!
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo!
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary!
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess!
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning!
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight!
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark!
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth!
          : 1
      }
      loadingText={
        antdConfigProviderProps && "loadingText" in antdConfigProviderProps
          ? antdConfigProviderProps.loadingText!
          : undefined
      }
      removeLoading={
        antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
          ? antdConfigProviderProps.removeLoading!
          : undefined
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep!
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit!
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles!
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe!
          : false
      }
    >
      <GraphCMSCredentialsProvider
        {...graphCMSCredentialsProviderProps}
        apiUrl={
          graphCMSCredentialsProviderProps &&
          "apiUrl" in graphCMSCredentialsProviderProps
            ? graphCMSCredentialsProviderProps.apiUrl!
            : "https://api-us-west-2.graphcms.com/v2/cl3ua8gpwdni001z10ucc482i/master"
        }
        authToken={
          graphCMSCredentialsProviderProps &&
          "authToken" in graphCMSCredentialsProviderProps
            ? graphCMSCredentialsProviderProps.authToken!
            : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTQwMDg5NzUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsM3VhOGdwd2RuaTAwMXoxMHVjYzQ4MmkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMWU2NGY0ZDMtODE3Yy00OTdkLWE4YTQtNzA4OTY4Zjg3OTc3IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.bWr3rpqT7UmJ5NwoEVatkW_QsqxC8tB-zxdcTecIVR19oS5tcoxbbmwe946B-57Zmqrnc5rNntj9UjN065RqEDFM0iPhy4BCgDHCFfNUuHg5Mmq1qu8-j_ZSN90aJfwVmMNYH9GuOYFiOCd6uytLe8fPcQRWOKpXEcO8q4BusrreCvwkwXIaZV2dq-FOJ4LdBdKcRWwfQWeMdthVzBxrlrxogP_xEYQuMNdfbe5tGWgVsRVDN7eQjB1w9Srqc9T_NgY6x-aL8rPmobcZ1IMdUj9klPPm_dINMzrhZS4OR-HXHPwdnSFObgPeJDPI6YEo2SFAg78PMCNZNRT2DtfDVC4F7cLboxaNUNY4r6Z2d9uBu2N1o05zIXra6Q4JIA--0xBfELTUcmU06Ococioyui8PCI5r_QlRSSlnxrdb85Ht00yMDBRGHPtySGUNiEy9Lq5RcoW1a41bJRmZ-z1Q8zluOUHrgwcIb2DN8xKB9YThPce7ytnFcVajH0K3Hnd57m7SukCgZACmULt_EK0NYTUe1BBmTC8eg9ZBM3lplPWSUzBKWgajGTUNK50KRWokAke_UCEf0gssR3MYLIo5PVN131-bD57nccEPBkegYmmZUACRoYHyI_gQYC-0---MXCS6BV7cK1D-_yDbiBrCCixyKNBYCmhxuZOxVcWu4dk"
        }
      >
        <CmsCredentialsProvider
          {...cmsCredentialsProviderProps}
          databaseId={
            cmsCredentialsProviderProps &&
            "databaseId" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.databaseId!
              : "34Gh1r4KaRCWh6Rvtn5nuA"
          }
          databaseToken={
            cmsCredentialsProviderProps &&
            "databaseToken" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.databaseToken!
              : "Xy8ajHmpD7gPPrHy38LsYWnUDt9PB5hBglUtXC80eAPwioDseZZS6guQ3K619Y2TEL5Ad6jZVqG6kapgg"
          }
          host={
            cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.host!
              : "https://data.plasmic.app"
          }
          locale={
            cmsCredentialsProviderProps &&
            "locale" in cmsCredentialsProviderProps
              ? cmsCredentialsProviderProps.locale!
              : "default"
          }
        >
          {children}
        </CmsCredentialsProvider>
      </GraphCMSCredentialsProvider>
    </AntdConfigProvider>
  );
}
