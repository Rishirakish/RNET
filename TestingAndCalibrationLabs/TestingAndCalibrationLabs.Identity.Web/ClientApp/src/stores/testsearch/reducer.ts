import {
  TestCategoryActionResultType,
  ITestCategoryState,
  APP_ADD_TEST_CATEGORY_SUCCESS,
} from "./type";

const initialState: ITestCategoryState = {
  code: "",
  success: false,
  category:""
};

export function testCategoryReducer(
  state = initialState,
  action: TestCategoryActionResultType
): ITestCategoryState {
  switch (action.type) {
    case APP_ADD_TEST_CATEGORY_SUCCESS:

      console.log("Test search reducer = "+JSON.stringify(action));


      return {
        ...state,
        category :action.payload.category,
      };

    default:
      return { ...state, errorMessage: "" };
  }
}
