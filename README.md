# Bootstrap Tooltip Activator

Ember addon for Bootstrap tooltips.

## Installation

* `npm install bootstrap-tooltip-activator --save-dev`

## Dependencis
* Bootstrap CSS & JS (are not installed automatically)

## Usage
* Everything that is wrapped inside the `bootstrap-tooltip-activator` will apply the bootstrap tooltips
```handlebars
{{#bootstrap-tooltip-activator}}
	<button
		data-toggle="tooltip"
		data-original-title="Some tip">
	</button>
	<button
		data-toggle="tooltip"
		data-original-title="Another tip">
	</button>
{{/bootstrap-tooltip-activator}}
```
* Note: make sure to use the `data-original-title` attribute and not `title`  

## License
	MIT