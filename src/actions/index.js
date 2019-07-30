import recipePuppy from '../apis/recipePuppy';

export const fetchRecipes = async () => {
    const response = await recipePuppy.get('/api')
    
    return {
        type: 'FETCH_RECIPES',
        payload: response,
    };
};