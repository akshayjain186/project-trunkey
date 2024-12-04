// @flow
import { all, call, fork, takeEvery, put } from 'redux-saga/effects';

import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_THEME_IMAGE,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  CHANGE_LAYOUT_MODE,
  GET_USER_PROFILE,
} from './actionTypes';

import {
  changeSidebarType as changeSidebarTypeAction,
  getUserProfileFail,
  getUserProfileSuccess,
} from './actions';
import { getUserProfile } from '../../services/api_helper';
const $window = window;
// Assuming $document is available globally or imported
const $document =$window.document || document;
/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if ($document.body) $document.body.setAttribute(attribute, value);
  return true;
}

/**
 * Changes the HTML attribute on the document element.
 *
 * This function sets the specified attribute on the root HTML element (`<html>`).
 * It is typically used to modify global HTML attributes, such as the `data-bs-theme` for theme-related changes.
 *
 * @param {string} attribute - The name of the attribute to change (e.g., 'data-bs-theme').
 * @param {string} value - The value to set for the specified attribute.
 * @returns {boolean} - Returns `true` if the attribute was successfully changed.
 */
const changeHtmlAttribute = (attribute, value) => {
  if ($document.documentElement)
    $document.documentElement.setAttribute(attribute, value);
  return true;
};

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = 'toggle') {
  switch (action) {
    case 'add':
      if ($document.body) $document.body.classList.add(cssClass);
      break;
    case 'remove':
      if ($document.body) $document.body.classList.remove(cssClass);
      break;
    default:
      if ($document.body) $document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
  try {
    if (layout === 'horizontal') {
      $document.body.removeAttribute('data-sidebar');
      $document.body.removeAttribute('data-sidebar-image');
      $document.body.removeAttribute('data-sidebar-size');
    } else {
      console.error('F layout:', layout);
    }
    yield call(changeBodyAttribute, 'data-layout', layout);
  } catch (error) {
    console.error('Failed to change layout:', error);
  }
}

/**
 * Changes the layout mode
 * @param {*} param0
 */
function* changeLayoutMode({ payload: mode }) {
  try {
    // yield call(changeBodyAttribute, "data-layout-mode", mode);
    yield call(changeHtmlAttribute, 'data-bs-theme', mode);
  } catch (error) {
    console.error('Failed to change layout mode:', error);
  }
}

/**
 * Changes the layout width
 * @param {*} param0
 */
function* changeLayoutWidth({ payload: width }) {
  try {
    if (width === 'boxed') {
      yield put(changeSidebarTypeAction('icon'));
      yield call(changeBodyAttribute, 'data-layout-size', width);
      yield call(changeBodyAttribute, 'data-layout-scrollable', false);
    } else if (width === 'scrollable') {
      yield put(changeSidebarTypeAction('default'));
      yield call(changeBodyAttribute, 'data-layout-scrollable', true);
    } else {
      yield put(changeSidebarTypeAction('default'));
      yield call(changeBodyAttribute, 'data-layout-size', width);
      yield call(changeBodyAttribute, 'data-layout-scrollable', false);
    }
  } catch (error) {
    console.error('Failed to change layout width:', error);
  }
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, 'data-sidebar', theme);
  } catch (error) {
    console.error('Failed to Left Sidebar:', error);
  }
}

/**
 * Changes the left sidebar theme Image
 * @param {*} param0
 */
function* changeLeftSidebarThemeImage({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, 'data-sidebar-image', theme);
  } catch (error) {
    console.error('Failed to Body Attribute:', error);
  }
}

/**
 * Changes the topbar theme
 * @param {*} param0
 */
function* changeTopbarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, 'data-topbar', theme);
  } catch (error) {
    console.error('Failed tochange Topbar:', error);
  }
}

/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeLeftSidebarType({ payload: { sidebarType, isMobile } }) {
  try {
    switch (sidebarType) {
      case 'compact':
        yield call(changeBodyAttribute, 'data-sidebar-size', 'small');
        yield call(manageBodyClass, 'sidebar-enable', 'remove');
        yield call(manageBodyClass, 'vertical-collpsed', 'remove');
        break;
      case 'icon':
        yield call(changeBodyAttribute, 'data-sidebar-size', '');
        yield call(changeBodyAttribute, 'data-keep-enlarged', 'true');
        yield call(manageBodyClass, 'vertical-collpsed', 'add');
        break;
      case 'condensed':
        yield call(manageBodyClass, 'sidebar-enable', 'add');
        if ($document.body.clientWidth >= 992) {
          yield call(manageBodyClass, 'vertical-collpsed', 'remove');
          yield call(manageBodyClass, 'sidebar-enable', 'remove');
          yield call(manageBodyClass, 'vertical-collpsed', 'add');
          yield call(manageBodyClass, 'sidebar-enable', 'add');
        } else {
          yield call(manageBodyClass, 'sidebar-enable', 'add');
          yield call(manageBodyClass, 'vertical-collpsed', 'add');
        }
        break;
      default:
        yield call(changeBodyAttribute, 'data-sidebar-size', '');
        yield call(manageBodyClass, 'sidebar-enable', 'remove');
        if (!isMobile)
          yield call(manageBodyClass, 'vertical-collpsed', 'remove');
        break;
    }
  } catch (error) {
    console.error('Failed changeLeft Sidebar:', error);
  }
}

/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
  try {
    yield call(manageBodyClass, 'right-bar-enabled', 'add');
  } catch (error) {
    console.error('Failed show Right Sidebar:', error);
  }
}

/**
 * Fetches the user profile from the API.
 *
 * This generator function is responsible for dispatching actions to fetch the user profile.
 * It makes an API call using the `getUserProfile` function and handles success and failure responses.
 * On success, it dispatches `getUserProfileSuccess` with the user profile data.
 * On failure, it dispatches `getUserProfileFail` with the error details.
 *
 * @generator
 * @yields {void} Dispatches `getUserProfileSuccess` or `getUserProfileFail` actions based on the API response.
 */
function* fetchUserProfile() {
  console.log('fetchUserProfile ');
  try {
    const response = yield call(getUserProfile);
    console.log('hhhhhhhhhhhhhhh ssssssssssssssssssssss', response);
    try {
      yield put(getUserProfileSuccess(response));
    } catch (error) {
      yield put(getUserProfileFail(error));
    }
    // return response
    // localStorage.setItem("detailsUser", JSON.stringify(response));
    //  yield put(getUserProfileSuccess(response))
  } catch (error) {
    // yield put(getUserProfileFail(error))
    console.error('Failed fetc hUser Profile:', error);
  }
}

/**
 * Watches for the CHANGE_LAYOUT action and triggers the changeLayout saga.
 *
 * This saga listens for the CHANGE_LAYOUT action dispatched from the Redux store.
 * When the action is triggered, it invokes the changeLayout generator function
 * to handle the logic for changing the layout type (e.g., horizontal or vertical).
 *
 * @generator
 * @yields {void} Calls changeLayout saga on CHANGE_LAYOUT action.
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

/**
 * Watches for the CHANGE_LAYOUT_WIDTH action and triggers the changeLayoutWidth saga.
 *
 * This saga listens for the CHANGE_LAYOUT_WIDTH action dispatched from the Redux store.
 * When triggered, it invokes the changeLayoutWidth generator function to handle the
 * logic of changing the layout width, including adjusting the sidebar type and layout size.
 *
 * @generator
 * @yields {void} Calls changeLayoutWidth saga on CHANGE_LAYOUT_WIDTH action.
 */
export function* watchChangeLayoutWidth() {
  yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth);
}

/**
 * Watches for the CHANGE_SIDEBAR_THEME action and triggers the changeLeftSidebarTheme saga.
 *
 * This saga listens for the CHANGE_SIDEBAR_THEME action dispatched from the Redux store.
 * When triggered, it invokes the changeLeftSidebarTheme generator function to update
 * the theme of the left sidebar.
 *
 * @generator
 * @yields {void} Calls changeLeftSidebarTheme saga on CHANGE_SIDEBAR_THEME action.
 */
export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

/**
 * Watches for the CHANGE_SIDEBAR_THEME_IMAGE action and triggers the changeLeftSidebarThemeImage saga.
 *
 * This saga listens for the CHANGE_SIDEBAR_THEME_IMAGE action dispatched from the Redux store.
 * When triggered, it invokes the changeLeftSidebarThemeImage generator function to update
 * the theme image of the left sidebar.
 *
 * @generator
 * @yields {void} Calls changeLeftSidebarThemeImage saga on CHANGE_SIDEBAR_THEME_IMAGE action.
 */

export function* watchChangeLeftSidebarThemeImage() {
  yield takeEvery(CHANGE_SIDEBAR_THEME_IMAGE, changeLeftSidebarThemeImage);
}

/**
 * Watches for the CHANGE_SIDEBAR_TYPE action and triggers the changeLeftSidebarType saga.
 *
 * This saga listens for the CHANGE_SIDEBAR_TYPE action dispatched from the Redux store.
 * When triggered, it invokes the changeLeftSidebarType generator function to manage
 * the layout and behavior of the left sidebar based on the sidebar type and device type.
 *
 * @generator
 * @yields {void} Calls changeLeftSidebarType saga on CHANGE_SIDEBAR_TYPE action.
 */
export function* watchChangeLeftSidebarType() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType);
}
/**
 * Watches for the CHANGE_TOPBAR_THEME action and triggers the changeTopbarTheme saga.
 *
 * This saga listens for the CHANGE_TOPBAR_THEME action dispatched from the Redux store.
 * When triggered, it invokes the changeTopbarTheme generator function to handle the
 * logic for updating the topbar theme by changing the related body attribute.
 *
 * @generator
 * @yields {void} Calls changeTopbarTheme saga on CHANGE_TOPBAR_THEME action.
 */
export function* watchChangeTopbarTheme() {
  yield takeEvery(CHANGE_TOPBAR_THEME, changeTopbarTheme);
}
/**
 * Watches for the SHOW_RIGHT_SIDEBAR action and triggers the showRightSidebar saga.
 *
 * This saga listens for the SHOW_RIGHT_SIDEBAR action dispatched from the Redux store.
 * When triggered, it invokes the showRightSidebar generator function to handle the
 * logic for showing the right sidebar by adding the required CSS class to the body.
 *
 * @generator
 * @yields {void} Calls showRightSidebar saga on SHOW_RIGHT_SIDEBAR action.
 */
export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar);
}
/**
 * Watches for the CHANGE_LAYOUT_MODE action and triggers the changeLayoutMode saga.
 *
 * This saga listens for the CHANGE_LAYOUT_MODE action dispatched from the Redux store.
 * When triggered, it invokes the changeLayoutMode generator function to handle the
 * layout mode change logic.
 *
 * @generator
 * @yields {void} Calls changeLayoutMode saga on CHANGE_LAYOUT_MODE action.
 */
export function* watchSChangeLayoutMode() {
  yield takeEvery(CHANGE_LAYOUT_MODE, changeLayoutMode);
}
/**
 * Watches for the GET_USER_PROFILE action and triggers the fetchUserProfile saga.
 *
 * This saga listens for the GET_USER_PROFILE action dispatched from the Redux store.
 * When triggered, it invokes the fetchUserProfile generator function to handle the
 * user profile fetching logic.
 *
 * @generator
 * @yields {void} Calls fetchUserProfile saga on GET_USER_PROFILE action.
 */
export function* watchChangeUserProfileTheme() {
  yield takeEvery(GET_USER_PROFILE, fetchUserProfile);
}

/**
 * The root saga for managing layout-related side effects in the application.
 *
 * This saga initializes all layout-related watchers to handle various Redux actions,
 * such as changing the layout mode, sidebar type, layout width, and more.
 * It uses `redux-saga` effects like `all` and `fork` to run these watchers concurrently.
 *
 * @generator
 * @yields {void} Initializes the layout watchers to listen for and handle dispatched actions.
 */

function* LayoutSaga() {
  yield all([
    fork(watchSChangeLayoutMode),
    fork(watchChangeLayoutType),
    fork(watchChangeLayoutWidth),
    fork(watchChangeLeftSidebarTheme),
    fork(watchChangeLeftSidebarThemeImage),
    fork(watchChangeLeftSidebarType),
    fork(watchShowRightSidebar),
    fork(watchChangeTopbarTheme),
    fork(watchChangeUserProfileTheme),
  ]);
}

export default LayoutSaga;
