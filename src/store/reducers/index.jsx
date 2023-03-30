import { combineReducers } from "redux";

import apiPortfolio from "./apiPortfolios";
import languageReducer from './language';

export default combineReducers({ apiPortfolio, languageReducer });
