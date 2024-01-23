import { GET_PAGE_LIST } from '../constants/index';

export function setPageList(pageList) {
  return {
    type: GET_PAGE_LIST,
    payload: pageList,
  };
}

export function getPageList() {
  return async (dispatch) => {
    try {
      const data = await require('../assets/stocks.json')
      console.log(data);
      await dispatch(setPageList(data));
      
      return data || [];
    } catch (error) {
      console.error(error);
    }
  };
}