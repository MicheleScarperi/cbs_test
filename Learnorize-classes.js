 // The constructor for our class, which will allow us to create new objects of our class
player(user, duration,steps,accuracy,points);{
    this.user = userName;
    this.duration = durationPerTurn;
    this.steps = numberOfSteps;
    this.accuracy = playerAccuracy;
    this.points = playerPoints;
    }

//Constructor class for the game library.
gameLibrary(title, game, difficulty, numPlayers, subject);{
    this.title = title;
    this.game = gameID;
    this.difficulty = difficulty;
    this.numPlayers = numberOfPlayers;
    this.subject = subject;
}

/**  Class for the game board. - what do we need in here? Do we need a class
 * for the game board or is it all functionality and CSS? 
class gameBoard{
numberOfSquares
}*/

class results{
    points = " ";
    stats = " ";
    difficulty = " ";
    subject = " ";
    
}