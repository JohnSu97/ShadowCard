/// <reference types="react" />
export interface IShadowCardParams {
    title: string;
    subTitle: string;
    btnTxt: string;
    girdle: string | JSX.Element;
    data: IShadowCardData;
    onBtnClick: (data: IShadowCardData) => {};
    bodyUpperInfo: string;
    bodyInfos: string[];
}
interface IShadowCardData {
    [key: string]: any;
}
export {};
