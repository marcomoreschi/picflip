describe('difficulty button functions', function() {
    
    beforeEach(() => {
        setFixtures(`
            <div class="my-card-column-easy visible"></div>
            <div class="my-card-column-medium visible"></div>
            <div class="my-card-column-medium invisible"></div>
            <div class="my-card-column-hard visible"></div>
            <div class="my-card-column-hard invisible"></div>
            <div></div>
            <h6 id="dashboard-high-score-text">Hard mode high score</h6>
            <h6></h6>
        `)
    });
    
    describe('easyButton function', function() {
        it('should remove class "visible" from html elements with class my-card-column-medium', function() {
            easyButton();
            expect($('.my-card-column-medium')).not.toHaveClass('visible');
        });
        it('should remove class "visible" from html elements with class my-card-column-hard', function() {
            easyButton();
            expect($('.my-card-column-hard')).not.toHaveClass('visible');
        });
        it('should add class "invisible" from html elements with class my-card-column-medium', function() {
            easyButton();
            expect($('.my-card-column-medium')).toHaveClass('invisible');
        });
        it('should add class "invisible" from html elements with class my-card-column-hard', function() {
            easyButton();
            expect($('.my-card-column-hard')).toHaveClass('invisible');
        });
        it('should add text "Easy mode high score" to element with id #dashboard-high-score-text', function() {
            easyButton();
            expect($('#dashboard-high-score-text').text()).toEqual('Easy mode high score');
        });
    });

    describe('mediumButton function', function() {
        it('all html elements with class my-card-column-medium should have the class of "visible"', function() {
            mediumButton();
            expect($('.my-card-column-medium')).toHaveClass('visible');
        });
        it('all html elements with class my-card-column-medium should not have the class of "invisible"', function() {
            mediumButton();
            expect($('.my-card-column-medium')).not.toHaveClass('invisible');
        });
        it('all html elements with class my-card-column-hard should have the class of "invisible"', function() {
            mediumButton();
            expect($('.my-card-column-hard')).toHaveClass('invisible');
        });
        it('all html elements with class my-card-column-hard should not have the class of "visible"', function() {
            mediumButton();
            expect($('.my-card-column-hard')).not.toHaveClass('visible');
        });
        it('should add text "Medium mode high score" to element with id #dashboard-high-score-text', function() {
            mediumButton();
            expect($('#dashboard-high-score-text').text()).toEqual('Medium mode high score');
        });
    });
    
    describe('hardButton function', function() {
        it('all html elements with class my-card-column-medium should have the class of "visible"', function() {
            hardButton();
            expect($('.my-card-column-medium')).toHaveClass('visible');
        });
        it('all html elements with class my-card-column-medium should not have the class of "invisible"', function() {
            hardButton();
            expect($('.my-card-column-medium')).not.toHaveClass('invisible');
        });
        it('all html elements with class my-card-column-hard should have the class of "visible"', function() {
            hardButton();
            expect($('.my-card-column-hard')).toHaveClass('visible');
        });
        it('all html elements with class my-card-column-hard should not have the class of "invisible"', function() {
            hardButton();
            expect($('.my-card-column-hard')).not.toHaveClass('invisible');
        });
        it('should add text "Hard mode high score" to element with id #dashboard-high-score-text', function() {
            hardButton();
            expect($('#dashboard-high-score-text').text()).toEqual('Hard mode high score');
        });
    });

});

describe('muteAudio function', function() {
    
    beforeEach(() => {
        silence = true; 
    });
    
    it('should return silence = false', function(){
        let result = muteAudio();
        expect(silence).toBe(false);
        
    });
    
        it('should return silence = true', function(){
        silence = false;
        let result = muteAudio();
        expect(silence).toBe(true);
        
    });
});

describe('howManyCards function', function() {

    it('should return 4', function() {
        setFixtures(`
			<div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
			`)
        let result = howManyCards();
        expect(result).toEqual(4);

    });
    
    it('should return 6', function() {
        setFixtures(`
			<div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
			`)
        let result = howManyCards();
        expect(result).toEqual(6);

    });
    
    it('should return 8', function() {
        setFixtures(`
			<div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
            <div class="visible"></div><div class="visible"></div><div class="visible"></div><div class="visible"></div>
		`)
        let result = howManyCards();
        expect(result).toEqual(8);
    });
});

describe('checkCounter function', function() {
    
    beforeEach(() => {
        countSelected = 0; 
    });
    
    it('should return true when countSelected = 0', function() {
        let result = checkCounter(); 
        expect(result).toBe(true);
    
    });
    
    it('should return true when countSelected = 1', function() {
        countSelected = 1; 
        let result = checkCounter(); 
        expect(result).toBe(true);
    
    });
    
        it('should return false when countSelected = 2', function() {
        countSelected = 2; 
        let result = checkCounter(); 
        expect(result).toBe(false);
    
    });
});

// dummy functions
function countTurns() {
    console.log('turns counted');
};
function delayedCorrectSound() {
    console.log('correct sound played');
};
function checkForWin() {
    console.log('checked for win');
};

describe('checkMatch function', function() {
        beforeEach(function(){
		    jasmine.clock().install();
        });
        afterEach(function(){
		    jasmine.clock().uninstall();
        });
    
    describe('when cards do not match', function() {
        
        beforeEach(function(){
            setFixtures(`
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                    </div>
                </div>
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card mater" title="mater"></figure>
                    </div>
                </div>
            `)
        });
        it('should remove classes "face-up disabled selected" ', function() {
            checkMatch();
            jasmine.clock().tick(1000);
            expect($('.flip-card')).not.toHaveClass('face-up');
            expect($('.flip-card')).not.toHaveClass('disabled');
            expect($('.flip-card')).not.toHaveClass('selected');
        });
        it('should add class "face-down"', function() {
            checkMatch();
            jasmine.clock().tick(1000);
            expect($('.flip-card')).toHaveClass('face-down');
        });
        it('countTurns function should be called', function() {
           spyOn(window, 'countTurns');
           checkMatch();
           jasmine.clock().tick(1000);
           expect(window.countTurns).toHaveBeenCalled();
        });
    });
    
    describe('when cards do match', function() {
        beforeEach(function(){
            setFixtures(`
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                    </div>
                </div>
                <div class="flip-card card-container mx-auto face-up disabled selected">
                    <div class="flip-card-inner">
                        <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                        <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                    </div>
                </div>
            `)
        });
         
        it('should remove class "selected"',function() {
             checkMatch();
             expect($('.flip-card')).not.toHaveClass('selected');
        });
        it('should add classes "matched disabled"',function() {
             checkMatch();
             expect($('.flip-card')).toHaveClass('matched');
             expect($('.flip-card')).toHaveClass('disabled');
        });
        it('countSelected should = 0', function() {
            countSelected = 2;
            checkMatch();
            expect(countSelected).toEqual(0);
        });
        it('should call countTurns function', function() {
           spyOn(window, 'countTurns');
           checkMatch();
           expect(window.countTurns).toHaveBeenCalled();
        });
        it('should call delayedCorrectSound function', function() {
           spyOn(window, 'delayedCorrectSound');
           checkMatch();
           expect(window.delayedCorrectSound).toHaveBeenCalled();
        });
        it('should call checkForWin function', function() {
           spyOn(window, 'checkForWin');
           checkMatch();
           expect(window.checkForWin).toHaveBeenCalled();
        });
    });
});

describe('styleButton function', function() {
    
    beforeEach(function(){
        const frozenCardsArray = ["elsa", "anna", "olaf", "kristoff", "hans", "sven", "elsa-anna", "olaf-sven"];
        let activeCardsArray = [];
    });
        
    it('should make activeCardsArray equal to the array styleButton function is passed', function() {
        styleButton(frozenCardsArray);
        expect(activeCardsArray).toEqual(frozenCardsArray);
    });
});

// Dummy functions for spies

let starClass = 'dashboard-score-star';
let score = 3;
function difficultyButtonMock(score) {
	activeHighScore = score;
	displayScoreMock(activeHighScore, starClass);
	resetGame();
}

function resetGameMock() {
	console.log('game reset');
}

function displayScoreMock(act, dash) {
	console.log(activeHighScore);
	console.log(starClass)
}

describe('difficultyButton function', function() {
    
    describe('it should should create a new instance of difficultyButton', function() {
        it('difficultyButton should exist', function () {
           expect(difficultyButton).toBeDefined(); 
        });
    });
    
    beforeEach(function(){
        let activeHighScore = 3;
    });
    
    it('should make activeHighScore equal to the score it is passed', function() {
        let score = 4;
        difficultyButton(score);
        expect(activeHighScore).toEqual(4);
    });
    
    it('difficultyButton should be called with score', function() {
        let score = 2;
        spyOn(window, 'difficultyButton');
        difficultyButton(score);
        expect(window.difficultyButton).toHaveBeenCalledWith(score);
    });
    
    it('should call displayScore function with activeHighScore and StarClass', function(){
        let score = 1;
        spyOn(window, 'displayScore');
        difficultyButton(score);
        expect(window.displayScore).toHaveBeenCalledWith(activeHighScore, starClass);
    });
    
    it('resetGame function should be called', function() {
       let score = 5;
       spyOn(window, 'resetGame');
       difficultyButton(score);
       expect(window.resetGame).toHaveBeenCalled();
    });
});

xdescribe('checkForUserData function', function() {
    // come back to this when worked out how to spy on modal
    beforeEach(function(){
	    jasmine.clock().install();
    });
    afterEach(function(){
	    jasmine.clock().uninstall();
    });
    
    it('should launch #userInfoModal if userAvatar is equal to "default-avatar"', function() {
        let userAvatar = "default-avatar"; 
        checkForUserData();
        jasmine.clock().tick(1000);
        expect()
    }); 
});

describe('resetGame function', function() {
   
    beforeEach(function(){
        setFixtures(`
            <div class="flip-card card-container mx-auto face-up disabled selected">
                <div class="flip-card-inner">
                    <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                    <figure class="flip-card-back game-card lightning" title="lightning"></figure>
                </div>
            </div>
            <div class="flip-card card-container mx-auto face-up disabled selected">
                <div class="flip-card-inner">
                    <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                    <figure class="flip-card-back game-card mater" title="mater"></figure>
                </div>
            </div>
            <div class="flip-card card-container mx-auto face-down">
                <div class="flip-card-inner">
                    <figure class="flip-card-front game-card game-card-back" title="Flip card face down"></figure>
                    <figure class="flip-card-back game-card mater" title="mater"></figure>
                </div>
            </div>
        `)
        jasmine.clock().install();
        flipCounter = 15;
        turnsCounter = 7;
        countSelected = 2;
    });
    afterEach(function(){
	    jasmine.clock().uninstall();
    });
    it('should add class "face-down" to all face-up card elements', function() {
        resetGame();
        jasmine.clock().tick(1000);
        expect($('.flip-card')).toHaveClass('face-down');
    }); 
    it('should remove classes "face-up disabled matched selected" to all card elements', function() {
        resetGame();
        jasmine.clock().tick(1000);
        expect($('.flip-card')).not.toHaveClass('face-up');
        expect($('.flip-card')).not.toHaveClass('disabled');
        expect($('.flip-card')).not.toHaveClass('matched');
        expect($('.flip-card')).not.toHaveClass('selected');
    }); 
    it('should call howManyCards function', function() {
        spyOn(window, "howManyCards").and.callFake(function() {
            return 16;
        });
        resetGame();
        expect(window.howManyCards).toHaveBeenCalled(); 
    });
    it('should call makeCardPack function', function() {
        spyOn(window, "makeCardPack").and.callFake(function() {
        });
        resetGame();
        expect(window.makeCardPack).toHaveBeenCalled();
    });
    it('should call displayCards function', function() {
        spyOn(window, "displayCards").and.callFake(function() {
        });
        resetGame();
        jasmine.clock().tick(1000);
        expect(window.displayCards).toHaveBeenCalled();
    });
    it('should call countTurns function', function() {
        spyOn(window, "countTurns").and.callFake(function() {
        });
        resetGame();
        jasmine.clock().tick(1000);
        expect(window.countTurns).toHaveBeenCalled();
    });
    it('should reset flipCounter, turnsCounter and countSelected to 0', function() {
        resetGame();
        jasmine.clock().tick(1000);
        expect(flipCounter).toEqual(0);
        expect(turnsCounter).toEqual(0);
        expect(countSelected).toEqual(0);
    });
});

describe('displayUserData function', function() {
    beforeEach(function() {
        setFixtures(`
            <h4 class="username">Name</h4>
            <figure id="avatar" class="avatar-default" title="Avatar"></figure>
        `)
        userName = "Arthur";
        userAvatar = "Towel";
    });
    it('should display username input on the html element with class "username"', function() {
        displayUserData();
        expect($('.username').text()).toEqual('Arthur');
    });
    it('should replace old avatar title with userAvatar value', function() {
        displayUserData();
        expect($('#avatar').attr('title')).toEqual('Towel');
    });
    it('should change #avatar elements classes to match corresponding class', function() {
        userAvatar = "plant";
        displayUserData();
        expect($('#avatar')).toHaveClass('plant-cover');
    });
});

describe('displayCards function', function() {
    beforeEach(function() {
        setFixtures(`
            <figure class="flip-card-back game-card dummyclass" title="blank flip card face up"></figure>
            <figure class="flip-card-back game-card dummyclass" title="blank flip card face up"></figure>
            <figure class="flip-card-back dummyclass-card game-card" title="blank flip card face up"></figure>
        `)
        cards = ["arthur", "ford", "trillion"];
    });
   it('should add array of cards to all elements with "flip-card-back" class', function() {
       displayCards(cards);
       expect($('.flip-card-back')).toHaveClass('arthur');
       expect($('.flip-card-back')).toHaveClass('ford');
       expect($('.flip-card-back')).toHaveClass('trillion');
   }); 
   it('card elements should keep class name "game-card"', function() {
       displayCards(cards);
       expect($('.flip-card-back')).toHaveClass('game-card');
   });
   it('should apply array of cards to html element titles as well as to class names', function() {
       displayCards(cards);
       let classes = ($('.flip-card-back').attr("class"));
       let titles = ($('.flip-card-back').attr("title"));
       expect(classes).toContain(titles);
   });
});

describe('displayScore function', function() {
    beforeEach(function() {
        setFixtures(`
            <i class="score-star star fas fa-star empty-star" title="no star"></i>
            <i class="score-star star fas fa-star empty-star" title="no star"></i>
            <i class="score-star star fas fa-star empty-star" title="no star"></i>
            <i class="score-star star fas fa-star empty-star" title="no star"></i>
            <i class="score-star star fas fa-star empty-star" title="no star"></i>
        `)
        numOfStars = 3;
        className = 'score-star';
    });
    it('should apply 3 win stars and leave 2 empty stars', function(){
        displayScore(numOfStars, className);
        expect($('.win-star').length).toBe(3);
        expect($('.empty-star').length).toBe(2);
    });
    it('should apply the corresponding titles to the html elements as well', function() {
        displayScore(numOfStars, className);
        expect($('.win-star').attr('title')).toEqual('star');
        expect($('.empty-star').attr('title')).toEqual('no star');
    });
});

//arrange, act, assert
