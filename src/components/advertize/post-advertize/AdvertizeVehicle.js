import React from 'react';
import { Field } from 'formik';
import SelectInput from '../../elements/SelectInput';
import TextInput from '../../elements/TextInput';
import MenuItem from '@material-ui/core/MenuItem';
import {
	carMakeModel,
	carBodyType,
	condition,
	transmission,
	driveTrain,
	Colour,
	fuelType,
	noOfDoors,
	noOfSeats,
} from './CarsData';

const AdvertizeVehicle = ({ values }) => {
	let maxOffset = 30;
	let thisYear = new Date().getFullYear();
	let allYears = [];
	for (let x = 0; x <= maxOffset; x++) {
		allYears.push(thisYear - x);
	}
	// console.log(data);
	return (
		<>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.year"
				label="Year"
				name="vehicle.year"
				component={SelectInput}
			>
				{allYears.map((year) => (
					<MenuItem key={year} value={year}>
						{year}
					</MenuItem>
				))}
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.make"
				label="Make"
				name="vehicle.make"
				component={SelectInput}
			>
				{Object.keys(carMakeModel).map((make) => (
					<MenuItem key={make} value={make}>
						{make}
					</MenuItem>
				))}
				<MenuItem value="other">other</MenuItem>
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.model"
				label="Model"
				name="vehicle.model"
				component={SelectInput}
			>
				{values.vehicle.make != ''
					? carMakeModel[values.vehicle.make].map((model) => {
							return (
								<MenuItem key={model} value={model}>
									{model}
								</MenuItem>
							);
					  })
					: null}
				<MenuItem value="other">other</MenuItem>
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.bodyType"
				label="Body Type"
				name="vehicle.bodyType"
				component={SelectInput}
			>
				{carBodyType.map((bodyType) => (
					<MenuItem key={bodyType} value={bodyType}>
						{bodyType}
					</MenuItem>
				))}
				<MenuItem value="other">other</MenuItem>
			</Field>
			<Field
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="vehicle.miles"
				label="Miles"
				name="vehicle.miles"
				component={TextInput}
			/>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.condition"
				label="Condition"
				name="vehicle.condition"
				component={SelectInput}
			>
				{condition.map((cond) => (
					<MenuItem key={cond} value={cond}>
						{cond}
					</MenuItem>
				))}
				<MenuItem value="other">other</MenuItem>
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.transmission"
				label="Transmission"
				name="vehicle.transmission"
				component={SelectInput}
			>
				{transmission.map((trans) => (
					<MenuItem key={trans} value={trans}>
						{trans}
					</MenuItem>
				))}
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.driveTrain"
				label="Drivetrain"
				name="vehicle.driveTrain"
				component={SelectInput}
			>
				{driveTrain.map((drive) => (
					<MenuItem key={drive} value={drive}>
						{drive}
					</MenuItem>
				))}
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.color"
				label="Car Color"
				name="vehicle.color"
				component={SelectInput}
			>
				{Colour.map((color) => (
					<MenuItem key={color} value={color}>
						{color}
					</MenuItem>
				))}
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.fuelType"
				label="Fuel Type"
				name="vehicle.fuelType"
				component={SelectInput}
			>
				{fuelType.map((fType) => (
					<MenuItem key={fType} value={fType}>
						{fType}
					</MenuItem>
				))}
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.noOfDoors"
				label="No Of Doors"
				name="vehicle.noOfDoors"
				component={SelectInput}
			>
				{noOfDoors.map((door) => (
					<MenuItem key={door} value={door}>
						{door}
					</MenuItem>
				))}
			</Field>
			<Field
				select
				variant="outlined"
				margin="normal"
				fullWidth
				id="vehicle.noOfSeats"
				label="No Of Seats"
				name="vehicle.noOfSeats"
				component={SelectInput}
			>
				{noOfSeats.map((seat) => (
					<MenuItem key={seat} value={seat}>
						{seat}
					</MenuItem>
				))}
			</Field>
		</>
	);
};
export default AdvertizeVehicle;
