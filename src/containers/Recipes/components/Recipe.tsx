import { List } from 'components';
import { Actions, ActionsExtra } from 'containers/Actions';
import { Recipe } from 'models/interfaces/Recipe';
import React from 'react';

const RecipeDetails: React.SFC<Recipe> = ({ id, name, description }) => {
	return (
		<List.TableRow columnsLength={4}>
			<List.TableBodyCol>{id}</List.TableBodyCol>
			<List.TableBodyCol>{name}</List.TableBodyCol>
			<List.TableBodyCol>{description}</List.TableBodyCol>
			<List.TableBodyCol>
				<Actions itemId={id} />
				<ActionsExtra itemId={id} type='recipe' />
			</List.TableBodyCol>
		</List.TableRow>
	);
};

export default RecipeDetails;
