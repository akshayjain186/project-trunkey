import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_THEME_IMAGE,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  SHOW_SIDEBAR,
  CHANGE_PRELOADER,
  TOGGLE_LEFTMENU,
  CHANGE_LAYOUT_MODE,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from "./actionTypes"

/**
 * Action creator for changing the layout type.
 *
 * This function creates an action to update the layout type in the application.
 * It returns an action object with the type `CHANGE_LAYOUT` and the provided layout type as the payload.
 *
 * @param {string} layout - The new layout type to apply (e.g., 'HORIZONTAL' or 'VERTICAL').
 *
 * @returns {Object} The action object with type `CHANGE_LAYOUT` and the layout type as the payload.
 */
export const changeLayout = layout => ({
  type: CHANGE_LAYOUT,
  payload: layout,
})

/**
 * Action creator for changing the preloader state.
 *
 * This function creates an action to toggle the visibility of the preloader.
 * It returns an action object with the type `CHANGE_PRELOADER` and the provided preloader state as the payload.
 *
 * @param {boolean} layout - The new state of the preloader (true to show, false to hide).
 *
 * @returns {Object} The action object with type `CHANGE_PRELOADER` and the preloader state as the payload.
 */
export const changePreloader = layout => ({
  type: CHANGE_PRELOADER,
  payload: layout,
})

/**
 * Action creator for changing the layout mode.
 *
 * This function creates an action to update the layout mode in the application.
 * It returns an action object with the type `CHANGE_LAYOUT_MODE` and the provided layout mode as the payload.
 *
 * @param {string} layoutMode - The new layout mode to apply (e.g., 'LIGHT' or 'DARK').
 *
 * @returns {Object} The action object with type `CHANGE_LAYOUT_MODE` and the layout mode as the payload.
 */
export const changeLayoutMode = layoutMode => ({
  type: CHANGE_LAYOUT_MODE,
  payload: layoutMode,
})

/**
 * Action creator for changing the layout width.
 *
 * This function creates an action to update the layout width (e.g., fluid or fixed width).
 * It returns an action object with the type `CHANGE_LAYOUT_WIDTH` and the provided width as the payload.
 *
 * @param {string} width - The new layout width (e.g., "fluid", "fixed").
 *
 * @returns {Object} The action object with type `CHANGE_LAYOUT_WIDTH` and the width as the payload.
 */
export const changeLayoutWidth = width => ({
  type: CHANGE_LAYOUT_WIDTH,
  payload: width,
})

/**
 * Action creator for changing the sidebar theme.
 *
 * This function creates an action to update the theme of the sidebar (e.g., light or dark theme).
 * It returns an action object with the type `CHANGE_SIDEBAR_THEME` and the provided theme as the payload.
 *
 * @param {string} theme - The new sidebar theme (e.g., "light", "dark").
 *
 * @returns {Object} The action object with type `CHANGE_SIDEBAR_THEME` and the theme as the payload.
 */
export const changeSidebarTheme = theme => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: theme,
})

/**
 * Action creator for changing the sidebar theme image.
 *
 * This function creates an action to update the image used in the sidebar theme.
 * It returns an action object with the type `CHANGE_SIDEBAR_THEME_IMAGE` and the provided theme image as the payload.
 *
 * @param {string} themeImage - The new sidebar theme image (e.g., URL or image identifier).
 *
 * @returns {Object} The action object with type `CHANGE_SIDEBAR_THEME_IMAGE` and the theme image as the payload.
 */
export const changeSidebarThemeImage = themeimage => ({
  type: CHANGE_SIDEBAR_THEME_IMAGE,
  payload: themeimage,
})

/**
 * Action creator for changing the sidebar type.
 *
 * This function creates an action to update the sidebar type and whether it's on mobile or not.
 * It returns an action object with the type `CHANGE_SIDEBAR_TYPE` and an object containing the sidebar type and mobile state as the payload.
 *
 * @param {string} sidebarType - The new type of the sidebar (e.g., 'default', 'compact').
 * @param {boolean} isMobile - A flag indicating whether the sidebar is being displayed on a mobile device.
 *
 * @returns {Object} The action object with type `CHANGE_SIDEBAR_TYPE` and the sidebar type and mobile state as the payload.
 */
export const changeSidebarType = (sidebarType, isMobile) => {
  return {
    type: CHANGE_SIDEBAR_TYPE,
    payload: { sidebarType, isMobile },
  }
}

/**
 * Action creator for changing the topbar theme.
 *
 * This function creates an action to update the topbar theme. It returns an action object with 
 * the type `CHANGE_TOPBAR_THEME` and the new theme as the payload.
 *
 * @param {string} topbarTheme - The new theme for the topbar (e.g., 'light', 'dark').
 *
 * @returns {Object} The action object with type `CHANGE_TOPBAR_THEME` and the new topbar theme as the payload.
 */
export const changeTopbarTheme = topbarTheme => ({
  type: CHANGE_TOPBAR_THEME,
  payload: topbarTheme,
})

/**
 * Action creator for showing or hiding the right sidebar.
 *
 * This function creates an action to control the visibility of the right sidebar. 
 * It returns an action object with the type `SHOW_RIGHT_SIDEBAR` and a boolean 
 * value indicating whether the right sidebar should be visible (`true`) or hidden (`false`).
 *
 * @param {boolean} isopen - A boolean value representing the visibility of the right sidebar. 
 *                            `true` to show, `false` to hide.
 *
 * @returns {Object} The action object with type `SHOW_RIGHT_SIDEBAR` and the visibility status as the payload.
 */
export const showRightSidebarAction = isopen => ({
  type: SHOW_RIGHT_SIDEBAR,
  payload: isopen,
})

/**
 * Action creator for showing or hiding the sidebar.
 *
 * This function creates an action to control the visibility of the sidebar.
 * It returns an action object with the type `SHOW_SIDEBAR` and a boolean value
 * indicating whether the sidebar should be visible (`true`) or hidden (`false`).
 *
 * @param {boolean} isopen - A boolean value representing the visibility of the sidebar. 
 *                            `true` to show, `false` to hide.
 *
 * @returns {Object} The action object with type `SHOW_SIDEBAR` and the visibility status as the payload.
 */
export const showSidebar = isopen => ({
  type: SHOW_SIDEBAR,
  payload: isopen,
})

/**
 * Action creator for toggling the visibility of the left menu.
 *
 * This function creates an action to control whether the left menu is open or closed.
 * It returns an action object with the type `TOGGLE_LEFTMENU` and a boolean value
 * indicating the state of the left menu (`true` for open, `false` for closed).
 *
 * @param {boolean} isopen - A boolean value representing the visibility of the left menu.
 *                            `true` to open, `false` to close.
 *
 * @returns {Object} The action object with type `TOGGLE_LEFTMENU` and the visibility status as the payload.
 */
export const toggleLeftmenu = isopen => ({
  type: TOGGLE_LEFTMENU,
  payload: isopen,
})

/**
 * Action creator for fetching the user profile.
 *
 * This function creates an action to request the user's profile data. It returns an action object
 * with the type `GET_USER_PROFILE`, which is typically used to trigger a request in a Redux-Saga or Redux-Thunk.
 *
 * @returns {Object} The action object with type `GET_USER_PROFILE`.
 */
export const getUserProfile = () => ({
  type: GET_USER_PROFILE

})

/**
 * Action creator for handling the success response of fetching the user profile.
 *
 * This function creates an action to store the user profile data once it is successfully fetched.
 * It returns an action object with the type `GET_USER_PROFILE_SUCCESS` and the profile data as the payload.
 *
 * @param {Object} userProfile - The user profile data that was successfully retrieved.
 *
 * @returns {Object} The action object with type `GET_USER_PROFILE_SUCCESS` and the user profile as the payload.
 */
export const getUserProfileSuccess = userProfile => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: userProfile,
})

/**
 * Action creator for handling the failure response of fetching the user profile.
 *
 * This function creates an action to handle errors that occur during the user profile fetch operation.
 * It returns an action object with the type `GET_USER_PROFILE_FAIL` and the error information as the payload.
 *
 * @param {Object} error - The error object containing details of the failure.
 *
 * @returns {Object} The action object with type `GET_USER_PROFILE_FAIL` and the error details as the payload.
 */
export const getUserProfileFail = error => ({
  type: GET_USER_PROFILE_FAIL,
  payload: error,
})