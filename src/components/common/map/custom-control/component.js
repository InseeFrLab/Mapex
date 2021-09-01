import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import L, { DomEvent } from 'leaflet';
import { useLeafletContext } from '@react-leaflet/core';

const CustomControl = ({ Component, position }) => {
	const context = useLeafletContext();

	L.Control = L.Control.extend({
		onAdd: function (map) {
			const div = L.DomUtil.create('div', '');
			ReactDOM.render(Component, div);
			return div;
		},

		onRemove: function (map) {
			// Nothing to do here
		},
	});

	L.control = function (opts) {
		return new L.Control(opts);
	};

	useEffect(() => {
		const container = context.layerContainer || context.map;

		const control = L.control({ position: position });
		container.addControl(control);

		return () => {
			container.removeControl(control);
		};
	});

	return null;
};

export default CustomControl;
