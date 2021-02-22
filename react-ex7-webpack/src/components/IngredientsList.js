import Ingredient from './Ingredient';

const IngredientsList = ({list}) =>
<ul className="ingredients">
    {list.map((ingredients, i) =>
        <Ingredient key={i} {...ingredients} />
    )}
</ul>

export default IngredientsList;