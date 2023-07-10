import * as React from 'react';
import { SafeAreaView,StyleSheet, View, Text } from 'react-native';
import { Colors } from '../styles/colors';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { GestureEventType,Direction,Coordinate } from '../types/types';
import Snake from './Snake';
import { checkGameOver } from '../utils/checkGameOver';
import Food from './Food';
import { checkEatsFood } from '../utils/checkEatsFood';
import { randomFoodPosition } from '../utils/randomFoodPosition';
import Header from './Header';


const SNAKE_INTIAL_POSITION = [{x: 5, y: 5}];
const FOOD_INITIAL_POSITION = {x: 5, y: 20 };
const GAME_BOUNDS = {xMin: 0, xMax:35, yMin: 0, yMax:55 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

//Building a Snake Game with React Native and TypeScript | Tutorial for beginners 26:42 | 40:38 deu um bug q não consegui resolver talvez esse erro  causa problemas futuros
export default function Game(): JSX.Element {
    const [direction,setDirection] = React.useState<Direction>(Direction.Right);
    const [snake,setSnake] = React.useState<Coordinate[]>(
        SNAKE_INTIAL_POSITION
    );
    const [food,setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver,setIsGameOver] = React.useState<boolean>(false);
    const [isPaused,setIsPaused] = React.useState<boolean>(false);
    const [score,setScore] = React.useState<number>(0);

    React.useEffect(() =>{
        if(!isGameOver){
            const intervalId = setInterval(()=>{
                !isPaused && moveSnake();
                },MOVE_INTERVAL);
                return() => clearInterval(intervalId);
        }
    },[snake,isGameOver,isPaused] ); 

    const moveSnake = () => {
        const snakeHead = snake[0];
        const newHead = {...snakeHead }; //criando copia

        //game over
        if(checkGameOver(snakeHead,GAME_BOUNDS)){
            setIsGameOver((prev) => !prev);
            return;
        }

        //movimento
        switch (direction){
            case Direction.Up:
                newHead.y -=1;
                break;
            case Direction.Down:
                newHead.y +=1;
                break;
            case Direction.Left:
                newHead.x -=1;
                break;
            case Direction.Right:
                newHead.x +=1;
                break;
            default:
                break;
        }
        
        
        //Se comer cresce
        if (checkEatsFood(newHead,food,2)){
            setFood(randomFoodPosition(GAME_BOUNDS.xMax,GAME_BOUNDS.yMax,));
            setSnake([newHead, ...snake]);
            setScore(score + SCORE_INCREMENT);
        }else{
            setSnake([newHead, ...snake.slice(0, -1)]);
        }

    };

    
    const handleGesture = (event:GestureEventType) => {
        const { translationX, translationY } = event.nativeEvent;
        //console.log(translationX, translationY); pegar o toque na tela x e y
       //console.log(event.nativeEvent); pegar o toque na tela
       if (Math.abs(translationX) > Math.abs(translationY)){
        if (translationX > 0 ){
            // moving right
            setDirection(Direction.Right);
        }else{
            // moving left
            setDirection(Direction.Left);
        }
       } else{
        if( translationY > 0 ){
            //down
            setDirection(Direction.Down);
        }else{
            //up
            setDirection(Direction.Up);
        }
       }
    };

    const pauseGame = () => {
        setIsPaused(!isPaused);
    }
    const reloadGame = () => {
        setSnake(SNAKE_INTIAL_POSITION);
        setFood(FOOD_INITIAL_POSITION);
        setIsGameOver(false);
        setScore(0);
        setDirection(Direction.Right);
        setIsPaused(false);
    }


    return (
        <PanGestureHandler onGestureEvent={handleGesture}>
            <SafeAreaView style={styles.container}>
            <Header isPaused={isPaused} pauseGame={pauseGame} reloadGame={reloadGame}>
                        <Text style={{
                            fontSize:22,
                            fontWeight:"bold",
                            color: Colors.primary,
                        }} >{score}</Text> 
                    </Header>
                <View style={styles.boundaries}>
                    
                    <Snake snake={snake}/>
                    <Food x={food.x} y={food.y} />
                </View>
            </SafeAreaView>
        </PanGestureHandler>
    );
    
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
         // Adicione este estilo para adicionar um espaçamento vertical
        
    },
    boundaries:{
        flex: 1,
        boderColor: Colors.primary,
        borderWidth:11,
        
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        backgroundColor: Colors.background,
        margin: 10,

    }

});


