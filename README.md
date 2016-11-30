# Bootstrap Tooltip Activator
[![npm version](https://badge.fury.io/js/bootstrap-tooltip-activator.svg)](http://badge.fury.io/js/bootstrap-tooltip-activator)
[![Build Status](https://travis-ci.org/DudaDev/bootstrap-tooltip-activator.svg)](https://travis-ci.org/DudaDev/bootstrap-tooltip-activator) 
[![Ember Observer Score](http://emberobserver.com/badges/bootstrap-tooltip-activator.svg)](http://emberobserver.com/addons/bootstrap-tooltip-activator) 

Ember addon for Bootstrap tooltips.

## Installation

* `npm install bootstrap-tooltip-activator --save-dev`

## Dependencies
* Bootstrap CSS & JS  
**Note: This addon does not install it automatically**

## Ember Compatibility Table

| Ember Version       	| Bootstrap Tooltip Activator Version 	|
| ----------------------| --------------------------------------|
| 1.8 through 2.6.1    	| 0.0.1 =< x < 0.1.1         			|
| 2.6.2 and beyond	   	| >=1.0.0                    			|

## [Demo App](http://DudaDev.github.io/bootstrap-tooltip-activator/)

## Usage
* Everything that is wrapped inside the `bootstrap-tooltip-activator` will apply the bootstrap tooltips
```handlebars
{{#bootstrap-tooltip-activator}}
	<button
		data-toggle="First tip"
		data-placement="top"
		data-container="body"
		data-original-title="Some tip">
		First button
	</button>
	<button
		data-toggle="Second tip"
		data-placement="bottom"
		data-container=".some-selector"
		data-original-title="Another tip">
		Second button
	</button>
{{/bootstrap-tooltip-activator}}
```
**Note**: make sure to use the `data-original-title` attribute and not `title`  

## License
MIT 
