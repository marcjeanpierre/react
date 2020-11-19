import * as React from 'react';
import { Grid, Container, Card, CardContent, Typography, CardActions, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import { Recipes } from '../../interfaces/recipes';
// import { errorRequest } from '../../interfaces/error';



interface P { }
// interface S { recipes:Array<Recipes>|errorRequest }
interface S { recipes:Array<Recipes> }

export class ListeRecipes extends React.PureComponent<P & WithStyles<Styles>, S >{

    public state: Readonly<S> = { recipes: [] }

    public static Display = withStyles(styles as any)(ListeRecipes) as React.ComponentType<P>

    render(){
        this.getRecipes()
        const { classes } = this.props;
        const { recipes } = this.state;
        return(
            <Grid container={true} className={classes.root} direction="column">
                <Grid item={true}>
                    <Container className={classes.pageContainer}>
                        <Container className='RecipeContainer'> 
                            <Grid item justify="center" xs={12} className='title'>
                                <Typography variant="h4" align="center" gutterBottom>
                                    Nos recettes
                                </Typography>
                            </Grid>
                            <Grid item container direction="row" alignItems="center" justify="center" xl={12} className='elemRecipe'>
                                {recipes.map(theRecipe => {
                                    return (
                                        <Grid sm={12} md={6} container spacing={1} className='recipe' justify="center">
                                            <Card className='itemRecipe'>
                                                <CardContent>
                                                    <Typography variant="h3" className='titleAndSubTitle' align="center" gutterBottom>
                                                        <p>{ theRecipe.title }</p>
                                                    </Typography>
                                                    <img src={ theRecipe.image } alt='avatar' />
                                                    <Typography variant="h4" className='titleAndSubTitle' align="center" gutterBottom>
                                                        <p>{ theRecipe.numberPeople } pers. | { theRecipe.preparationTime } min.</p>
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className='elementButton'>
                                                    <a href="#end" onClick={ ()=>{this.choixRecipe(theRecipe)} }>Voir la recette</a>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Container>
                    </Container>
                </Grid>
            </Grid>
        )
    }

    /**
     * Methode choixRecipe
     * @param elem :Recipes
     */
    choixRecipe = (elem: Recipes) => () => {
        window.localStorage.setItem('choiceRecipe', JSON.stringify({choice: elem}));
    }

    getRecipes = () => {
        fetch('http://localhost:8020/recipes/all')
        .then( res => res.json())
        .then((resp:Array<Recipes>) =>{
            console.log(resp);
            this.setState({recipes: resp})
        })
    }

}