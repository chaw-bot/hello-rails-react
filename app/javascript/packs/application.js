// Support component names relative to this directory:
import 'semantic-ui-css/semantic.min.css';
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
