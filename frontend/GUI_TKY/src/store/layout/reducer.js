// @flow
import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  CHANGE_SIDEBAR_THEME_IMAGE,
  CHANGE_PRELOADER,
  TOGGLE_LEFTMENU,
  SHOW_SIDEBAR,
  CHANGE_LAYOUT_MODE,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from './actionTypes';

//constants
import {
  layoutTypes,
  layoutModeTypes,
  layoutWidthTypes,
  topBarThemeTypes,
  leftBarThemeImageTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
} from '../../constants/layout';

const INIT_STATE = {
  layoutType: layoutTypes.HORIZONTAL,
  layoutModeType: layoutModeTypes.LIGHT,
  layoutWidth: layoutWidthTypes.FLUID,
  leftSideBarTheme: leftSideBarThemeTypes.DARK,
  leftSideBarThemeImage: leftBarThemeImageTypes.NONE,
  leftSideBarType: leftSidebarTypes.DEFAULT,
  topbarTheme: topBarThemeTypes.LIGHT,
  isPreloader: false,
  showRightSidebar: false,
  isMobile: false,
  showSidebar: true,
  leftMenu: false,
};

/**
 * Reducer function to manage the layout state of the application.
 *
 * This function handles various actions related to the layout, sidebar, topbar, and user profile. It updates
 * the state based on the type of action and the payload associated with the action.
 *
 * @param {Object} action - The action dispatched, containing the `type` and `payload`.
 * @param {string} action.type - The type of action (e.g., CHANGE_LAYOUT, CHANGE_LAYOUT_MODE).
 * @param {any} action.payload - The data associated with the action (e.g., layout type, theme, etc.).
 * @param {Object} [state=INIT_STATE] - The current state of the layout. Defaults to `INIT_STATE` if not provided.
 *
 * @returns {Object} The new state after applying the action, including updates to layout type, sidebar, topbar, and user profile.
 */
const Layout = (state = INIT_STATE,action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };
    case CHANGE_PRELOADER:
      return {
        ...state,
        isPreloader: action.payload,
      };
    case CHANGE_LAYOUT_MODE:
      return {
        ...state,
        layoutModeType: action.payload,
      };
    case CHANGE_LAYOUT_WIDTH:
      return {
        ...state,
        layoutWidth: action.payload,
      };
    case CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSideBarTheme: action.payload,
      };
    case CHANGE_SIDEBAR_THEME_IMAGE:
      return {
        ...state,
        leftSideBarThemeImage: action.payload,
      };
    case CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      };
    case CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topbarTheme: action.payload,
      };
    case SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: action.payload,
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case TOGGLE_LEFTMENU:
      return {
        ...state,
        leftMenu: action.payload,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };

    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Layout;
