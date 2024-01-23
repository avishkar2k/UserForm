import { GET_PAGE_LIST } from '../constants/index';

export function setPageList(pageList) {
    return {
        type: GET_PAGE_LIST,
        payload: pageList,
    };
}
